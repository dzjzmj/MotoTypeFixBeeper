
import React, { useState } from 'react';
import { Send, RotateCcw } from 'lucide-react';
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
    <div className="relative w-full max-w-2xl mx-auto z-50 pointer-events-auto">
      {/* Machine Body */}
      <div className={`${theme.machine.body} rounded-t-xl p-2 md:p-6 shadow-2xl border-b-8 ${theme.machine.border} relative overflow-hidden transition-colors duration-500`}>
        
        {/* Decorative Top Bar */}
        <div className={`h-4 ${theme.machine.decorationBar} mb-4 rounded-full flex items-center px-4 gap-2 opacity-50 transition-colors duration-500`}>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-full h-0.5 bg-black/10"></div>
        </div>

        {/* Paper Feed / Screen Area */}
        <div className={`${theme.machine.screen} p-4 rounded-lg border-2 shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)] relative transition-colors duration-500`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-black/20 to-transparent"></div>
            
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="TYPE MESSAGE HERE..."
                className={`w-full h-32 bg-transparent ${theme.machine.screenText} ${theme.machine.placeholder} font-digital text-xl md:text-2xl outline-none resize-none retro-scrollbar tracking-wider transition-colors duration-500`}
                spellCheck={false}
            />
            
            {/* Blinking Cursor Indicator if empty */}
            {text.length === 0 && (
                <div className={`absolute top-5 left-4 w-3 h-6 ${theme.machine.screenText} opacity-30 animate-pulse pointer-events-none bg-current`}></div>
            )}
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Color Selectors (Paper Color) */}
            <div className={`flex gap-3 ${theme.machine.controlsBg} p-2 rounded-lg border transition-colors duration-500`}>
                {(['white', 'yellow', 'green', 'pink'] as const).map((c) => (
                    <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`w-8 h-8 rounded border-2 transition-transform hover:scale-110 active:scale-95 ${
                            selectedColor === c ? 'border-current scale-110 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                        } ${theme.machine.screenText}`}
                        style={{ backgroundColor: c === 'white' ? '#f5f5f5' : c === 'yellow' ? '#fef3c7' : c === 'green' ? '#dcfce7' : '#ffe4e6' }}
                        title={`Paper Color: ${c}`}
                    />
                ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
                <button 
                    onClick={() => setText('')}
                    className={`flex items-center gap-2 px-4 py-2 rounded transition-colors border-b-4 active:border-b-0 active:translate-y-1 font-digital uppercase tracking-widest text-sm ${theme.machine.button}`}
                >
                    <RotateCcw size={16} />
                    Clear
                </button>
                <button 
                    onClick={handlePrint}
                    disabled={!text.trim()}
                    className={`flex items-center gap-2 px-6 py-2 rounded transition-colors border-b-4 active:border-b-0 active:translate-y-1 disabled:opacity-50 disabled:active:border-b-4 disabled:active:translate-y-0 font-digital uppercase tracking-widest font-bold ${theme.machine.buttonPrimary}`}
                >
                    <Send size={16} />
                    Print
                </button>
            </div>
        </div>

        {/* Brand Label */}
        <div className={`absolute bottom-2 right-4 ${theme.machine.label} font-special-elite text-xs opacity-60 select-none transition-colors duration-500`}>
            MOTOROLA FIX BEEPER // MODEL 800
        </div>
      </div>
      
      {/* Keyboard Base Simulation */}
      <div className={`h-8 mx-4 rounded-b-lg shadow-xl border-t opacity-80 ${theme.machine.body} ${theme.machine.border}`}></div>
    </div>
  );
};

export default Machine;
