
import React, { useState } from 'react';
import { Send, RotateCcw, GripHorizontal } from 'lucide-react';
import { playKeySound } from '../utils/sound';
import { ThemeConfig } from '../types';

interface MachineProps {
  onPrint: (text: string, color: 'white' | 'yellow' | 'green' | 'pink') => void;
  theme: ThemeConfig;
}

const Machine: React.FC<MachineProps> = ({ onPrint, theme }) => {
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState<'white' | 'yellow' | 'green' | 'pink'>('white');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Only play sound on printing characters, not control keys
    if (e.key.length === 1) {
        playKeySound();
    }
    
    // Ctrl+Enter to print
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        handlePrint();
    }
  };

  const handlePrint = () => {
    if (!text.trim()) return;
    onPrint(text, selectedColor);
    setText('');
  };

  return (
    <div className="relative w-full max-w-lg mx-auto z-50 pointer-events-auto transform transition-transform duration-300">
      
      {/* Platen (The Roller) - Behind the paper */}
      <div className="absolute top-2 left-4 right-4 h-12 bg-neutral-900 rounded-lg shadow-inner z-0 flex items-center justify-center overflow-hidden">
        {/* Roller texture */}
        <div className="w-full h-full opacity-30" style={{ 
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, #000 2px, #000 4px)' 
        }}></div>
      </div>

      {/* Roller Knobs (Left & Right) */}
      <div className="absolute top-4 -left-6 w-8 h-8 rounded-full bg-neutral-800 border-r-4 border-neutral-900 shadow-lg z-10 flex items-center justify-center">
        <div className="w-full h-1 bg-neutral-600"></div>
      </div>
      <div className="absolute top-4 -right-6 w-8 h-8 rounded-full bg-neutral-800 border-l-4 border-neutral-900 shadow-lg z-10 flex items-center justify-center">
        <div className="w-full h-1 bg-neutral-600"></div>
      </div>

      {/* Machine Body Container */}
      <div className={`${theme.machine.body} mt-6 rounded-t-2xl rounded-b-lg p-1 shadow-[0_10px_20px_rgba(0,0,0,0.5)] border-b-[6px] ${theme.machine.border} relative transition-colors duration-500`}>
        
        {/* Top Deck (Sloped) */}
        <div className="bg-black/10 rounded-t-xl pb-2 pt-4 px-3 md:px-5 relative overflow-hidden">
            {/* Glossy Reflection Overlay */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

            {/* Paper Guide / Screen Area */}
            <div className="relative mx-auto max-w-[95%]">
                {/* Paper Shadow at entry point */}
                <div className="absolute -top-3 left-1 right-1 h-4 bg-black/40 blur-sm z-10 rounded-full"></div>
                
                <div className={`${theme.machine.screen} p-3 pt-6 rounded-sm shadow-md relative transition-colors duration-500 transform origin-bottom hover:-translate-y-1 transition-transform ease-out`}>
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="TYPE MESSAGE..."
                        className={`w-full h-24 bg-transparent ${theme.machine.screenText} ${theme.machine.placeholder} font-digital text-xl outline-none resize-none retro-scrollbar tracking-wider transition-colors duration-500 leading-tight`}
                        spellCheck={false}
                    />
                     {/* Blinking Cursor Indicator if empty */}
                    {text.length === 0 && (
                        <div className={`absolute top-7 left-3 w-2 h-5 ${theme.machine.screenText} opacity-30 animate-pulse pointer-events-none bg-current`}></div>
                    )}
                </div>
            </div>
        </div>

        {/* Keyboard Deck (Step Down) */}
        <div className="bg-black/20 p-3 md:p-4 rounded-b-lg relative">
            
            {/* Metallic Brand Badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-neutral-200 to-neutral-400 text-neutral-800 px-3 py-0.5 text-[0.6rem] font-bold tracking-widest border border-neutral-500 shadow-sm rounded-sm z-20 font-sans">
                MOTO-FIX
            </div>

            {/* Controls Row */}
            <div className="mt-2 flex flex-col sm:flex-row justify-between items-end gap-3">
                
                {/* Paper Color Selector (Round Buttons) */}
                <div className="flex gap-2 items-center bg-black/10 p-1.5 rounded-full border border-white/5 shadow-inner">
                    {(['white', 'yellow', 'green', 'pink'] as const).map((c) => (
                        <button
                            key={c}
                            onClick={() => setSelectedColor(c)}
                            className={`w-5 h-5 rounded-full border shadow-sm transition-transform active:scale-90 ${
                                selectedColor === c ? 'scale-110 border-white/50 ring-1 ring-white/20' : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
                            }`}
                            style={{ backgroundColor: c === 'white' ? '#f5f5f5' : c === 'yellow' ? '#fcd34d' : c === 'green' ? '#86efac' : '#fda4af' }}
                            title={`Paper Color: ${c}`}
                        />
                    ))}
                </div>

                {/* Main Action Buttons (Chunky Keys) */}
                <div className="flex gap-2 w-full sm:w-auto">
                    <button 
                        onClick={() => setText('')}
                        className={`flex-1 sm:flex-none flex justify-center items-center gap-1.5 px-3 py-2 rounded shadow-[0_3px_0_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-[3px] transition-all font-digital uppercase tracking-widest text-xs font-bold border-t border-white/10 ${theme.machine.button}`}
                    >
                        <RotateCcw size={14} />
                        Clear
                    </button>
                    <button 
                        onClick={handlePrint}
                        disabled={!text.trim()}
                        className={`flex-1 sm:flex-none flex justify-center items-center gap-1.5 px-5 py-2 rounded shadow-[0_3px_0_rgba(0,0,0,0.3)] active:shadow-none active:translate-y-[3px] transition-all font-digital uppercase tracking-widest text-sm font-bold border-t border-white/10 disabled:opacity-50 disabled:active:translate-y-0 disabled:shadow-none ${theme.machine.buttonPrimary}`}
                    >
                        <Send size={14} />
                        Print
                    </button>
                </div>
            </div>

            {/* Decoration Lines */}
            <div className="mt-3 flex gap-1 justify-center opacity-20">
                 <div className="w-12 h-1 bg-current rounded-full"></div>
                 <div className="w-12 h-1 bg-current rounded-full"></div>
                 <div className="w-12 h-1 bg-current rounded-full"></div>
            </div>
        </div>
      </div>
      
      {/* Table Shadow */}
      <div className="absolute -bottom-2 left-4 right-4 h-4 bg-black/40 blur-md rounded-[50%] z-[-1]"></div>
    </div>
  );
};

export default Machine;
