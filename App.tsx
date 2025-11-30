
import React, { useState, useEffect } from 'react';
import Machine from './components/Machine';
import DraggableCard from './components/DraggableCard';
import { CardData, Position } from './types';
import { RotateCcw, Palette } from 'lucide-react';
import { themes } from './utils/themes';

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [maxZIndex, setMaxZIndex] = useState(100);
  // Default to the new Macaron Pink theme
  const [currentThemeId, setCurrentThemeId] = useState<string>('pink');
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  // Fallback to first theme if currentThemeId is invalid (e.g. after hot reload)
  const currentTheme = themes[currentThemeId] || themes['pink'];

  // Initialize with a welcome card
  useEffect(() => {
    const welcomeCard: CardData = {
      id: 'welcome-1',
      text: "Welcome to MotoType Fix.\n\nType in the console below and hit PRINT to generate a message.\n\nDrag this card to clear your workspace.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      position: { x: Math.max(20, window.innerWidth / 2 - 160), y: Math.max(80, window.innerHeight / 3 - 50) },
      zIndex: 100,
      rotation: -2,
      color: 'yellow'
    };
    setCards([welcomeCard]);
  }, []);

  const handlePrint = (text: string, color: 'white' | 'yellow' | 'green' | 'pink') => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);

    const randomRotation = (Math.random() * 6) - 3; 
    
    // Spawn card logic - adjust for smaller machine centering
    const startX = window.innerWidth / 2 - 140 + (Math.random() * 40 - 20);
    const startY = (window.innerHeight / 2) - 200 + (Math.random() * 40 - 20);
    const safeY = Math.max(50, startY);

    const newCard: CardData = {
      id: Date.now().toString(),
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      position: { x: startX, y: safeY },
      zIndex: newZIndex,
      rotation: randomRotation,
      color
    };

    setCards((prev) => [...prev, newCard]);
  };

  const updateCardPosition = (id: string, newPos: Position) => {
    setCards((prev) => prev.map(c => 
      c.id === id ? { ...c, position: newPos } : c
    ));
  };

  const bringToFront = (id: string) => {
    const newZIndex = maxZIndex + 1;
    setMaxZIndex(newZIndex);
    setCards((prev) => prev.map(c => 
      c.id === id ? { ...c, zIndex: newZIndex } : c
    ));
  };

  const deleteCard = (id: string) => {
    setCards((prev) => prev.filter(c => c.id !== id));
  };

  const clearAll = () => {
    if(confirm('Clear all cards?')) {
        setCards([]);
    }
  };

  return (
    <div className={`relative w-screen h-screen overflow-hidden flex flex-col transition-colors duration-700 ${currentTheme.appBg}`}>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-700" 
           style={{ 
             backgroundImage: `linear-gradient(${currentTheme.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${currentTheme.gridColor} 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Branding Header */}
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center pointer-events-none z-10">
         <div className="flex flex-col">
            <h1 className={`text-3xl font-special-elite tracking-tighter transition-colors duration-500 ${currentTheme.textColor}`}>
                MOTO<span className={currentTheme.accentColor}>TYPE</span>
            </h1>
            <span className={`text-xs font-digital tracking-[0.2em] opacity-70 transition-colors duration-500 ${currentTheme.textColor}`}>FIX BEEPER SYSTEM v1.0</span>
         </div>
         
         <div className="flex gap-2 pointer-events-auto">
            {/* Theme Toggle */}
            <div className="relative">
                <button 
                    onClick={() => setShowThemeMenu(!showThemeMenu)}
                    className={`p-2 rounded-full transition-colors ${currentTheme.textColor} hover:${currentTheme.accentColor} hover:bg-black/10`}
                    title="Change Theme"
                >
                    <Palette size={20} />
                </button>
                
                {showThemeMenu && (
                    <div className="absolute right-0 top-12 bg-white text-black p-2 rounded shadow-xl border border-gray-200 w-40 flex flex-col gap-1 z-50">
                        {Object.values(themes).map(t => (
                            <button
                                key={t.id}
                                onClick={() => { setCurrentThemeId(t.id); setShowThemeMenu(false); }}
                                className={`text-left px-3 py-2 text-sm rounded hover:bg-gray-100 font-digital uppercase ${currentThemeId === t.id ? 'bg-gray-100 font-bold' : ''}`}
                            >
                                {t.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button 
                onClick={clearAll} 
                className={`p-2 rounded-full transition-colors ${currentTheme.textColor} hover:text-red-500 hover:bg-black/10`}
                title="Clear Workspace"
            >
                <RotateCcw size={20} />
            </button>
         </div>
      </header>

      {/* Cards Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {cards.map((card) => (
          <div key={card.id} className="pointer-events-auto">
            <DraggableCard
                data={card}
                onUpdatePosition={updateCardPosition}
                onBringToFront={bringToFront}
                onDelete={deleteCard}
            />
          </div>
        ))}
      </div>

      {/* Machine Layer */}
      <div className="absolute bottom-4 md:bottom-12 w-full flex justify-center z-50 pointer-events-none px-4">
         <Machine onPrint={handlePrint} theme={currentTheme} />
      </div>

    </div>
  );
};

export default App;
