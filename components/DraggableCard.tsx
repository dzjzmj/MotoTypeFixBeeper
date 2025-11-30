import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CardData, Position } from '../types';
import { playKeySound, playDingSound } from '../utils/sound';
import { X, GripHorizontal } from 'lucide-react';

interface DraggableCardProps {
  data: CardData;
  onUpdatePosition: (id: string, newPos: Position) => void;
  onBringToFront: (id: string) => void;
  onDelete: (id: string) => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ 
  data, 
  onUpdatePosition, 
  onBringToFront,
  onDelete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [animationState, setAnimationState] = useState<'entering' | 'idle' | 'exiting'>('entering');
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Animation state management for Entrance
  useEffect(() => {
    // Trigger entrance animation shortly after mount
    const timer = setTimeout(() => setAnimationState('idle'), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle Exit Animation before deletion
  const handleClose = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setAnimationState('exiting');
    // Wait for animation to finish before actual deletion from parent state
    setTimeout(() => {
      onDelete(data.id);
    }, 300);
  };

  // Typewriter effect logic
  useEffect(() => {
    const fullText = data.text;
    const speed = 50; // ms per char

    // Handle empty text case
    if (!fullText) {
        setDisplayedText('');
        setIsTypingComplete(true);
        return;
    }

    // Reset state
    setDisplayedText('');
    setIsTypingComplete(false);
    
    let charIndex = 0;
    let intervalId: ReturnType<typeof setInterval>;

    // Delay start slightly to allow entrance animation to settle
    const startDelay = setTimeout(() => {
        
        // Render first character immediately to avoid "missing first char" perception
        // and jumpstart the typing visual
        if (fullText.length > 0) {
            charIndex = 1;
            setDisplayedText(fullText.slice(0, charIndex));
            playKeySound();
        }

        // Continue with the rest
        intervalId = setInterval(() => {
          if (charIndex < fullText.length) {
            charIndex++;
            // Using slice ensures we always render exactly what we expect based on index
            setDisplayedText(fullText.slice(0, charIndex));
            playKeySound();
          } else {
            clearInterval(intervalId);
            setIsTypingComplete(true);
            playDingSound();
          }
        }, speed);
    }, 400);

    return () => {
        clearTimeout(startDelay);
        if (intervalId) clearInterval(intervalId);
    };
  }, [data.text]);

  // Dragging Logic
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!cardRef.current) return;
    
    // Prevent dragging if clicking the close button
    if ((e.target as HTMLElement).closest('.close-btn')) return;

    onBringToFront(data.id);
    setIsDragging(true);
    
    // Calculate offset from the top-left of the card
    const rect = cardRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    onUpdatePosition(data.id, { x: newX, y: newY });
  }, [isDragging, dragOffset, data.id, onUpdatePosition]);

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  const getBgColor = () => {
    switch (data.color) {
      case 'yellow': return 'bg-amber-100';
      case 'green': return 'bg-green-100';
      case 'pink': return 'bg-rose-100';
      default: return 'bg-neutral-100';
    }
  };

  // Dynamic Styles Calculation
  const getTransform = () => {
    const baseRotation = data.rotation;
    
    if (animationState === 'entering') {
        // Start slightly lower and scaled down
        return `translateY(40px) rotate(${baseRotation}deg) scale(0.9)`;
    }
    if (animationState === 'exiting') {
        // Scale down and drop slightly on exit
        return `translateY(20px) rotate(${baseRotation}deg) scale(0.8)`;
    }
    
    // Idle / Dragging state
    // When dragging/active, scale up slightly more for tactile feedback ("pop" effect)
    const scale = isDragging ? 1.05 : 1;
    return `rotate(${baseRotation}deg) scale(${scale})`;
  };

  const getOpacity = () => {
    if (animationState === 'entering' || animationState === 'exiting') return 0;
    return 1;
  };
  
  const getTransition = () => {
    if (isDragging) return 'none'; // Instant response when dragging
    // Use a bouncy bezier curve for the "pop" effect
    return 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease-out';
  };
  
  // Use drop-shadow instead of box-shadow to respect the mask shape
  const shadowClass = isDragging ? 'drop-shadow-2xl' : 'drop-shadow-lg';

  // CSS Mask for jagged edges (sawtooth/torn paper effect)
  // Teeth size: 14px wide, 8px high.
  // The center linear-gradient fills the body, leaving 8px at top and bottom for the teeth.
  const jaggedMask = {
    WebkitMask: `
      conic-gradient(from -45deg at bottom, #0000, #000 1deg 90deg, #0000 91deg) 50% 100%/14px 8px repeat-x,
      conic-gradient(from 135deg at top, #0000, #000 1deg 90deg, #0000 91deg) 50% 0%/14px 8px repeat-x,
      linear-gradient(#000 0 0) 50% 50%/100% calc(100% - 16px) no-repeat
    `,
    mask: `
      conic-gradient(from -45deg at bottom, #0000, #000 1deg 90deg, #0000 91deg) 50% 100%/14px 8px repeat-x,
      conic-gradient(from 135deg at top, #0000, #000 1deg 90deg, #0000 91deg) 50% 0%/14px 8px repeat-x,
      linear-gradient(#000 0 0) 50% 50%/100% calc(100% - 16px) no-repeat
    `
  };

  return (
    <div
      ref={cardRef}
      className={`absolute w-64 md:w-80 min-h-[12rem] flex flex-col p-6 cursor-grab active:cursor-grabbing select-none ${getBgColor()} ${shadowClass}`}
      style={{
        left: data.position.x,
        top: data.position.y,
        zIndex: data.zIndex,
        transform: getTransform(),
        opacity: getOpacity(),
        transition: getTransition(),
        ...jaggedMask
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* Tape/Header */}
      <div className="flex justify-between items-center mb-4 opacity-50 border-b border-black/10 pb-2">
        <div className="flex items-center gap-1">
            <GripHorizontal size={16} />
            <span className="font-digital text-xs tracking-widest text-black/60 uppercase">MOTO-FIX-{data.timestamp.split(':')[0]}</span>
        </div>
        <button 
            className="close-btn p-1 -mr-2 -mt-2 hover:bg-black/10 rounded-full hover:text-red-600 transition-colors"
            onClick={handleClose}
            onPointerDown={(e) => e.stopPropagation()} 
        >
            <X size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow font-special-elite text-gray-900 leading-relaxed text-lg break-words whitespace-pre-wrap">
        {displayedText}
        {!isTypingComplete && <span className="inline-block w-2 h-5 bg-black ml-1 animate-pulse align-middle"></span>}
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-end">
        <span className="font-digital text-xs text-black/40">{data.timestamp}</span>
      </div>
    </div>
  );
};

export default DraggableCard;