
import { ThemeConfig } from '../types';

export const themes: Record<string, ThemeConfig> = {
  retro: {
    id: 'retro',
    name: 'Retro Dark',
    appBg: 'bg-zinc-900',
    gridColor: '#444',
    textColor: 'text-zinc-500',
    accentColor: 'text-amber-600',
    machine: {
      body: 'bg-[#2a2a2a]',
      border: 'border-[#1a1a1a]',
      screen: 'bg-[#151515] border-[#333]',
      screenText: 'text-amber-500',
      placeholder: 'placeholder-amber-900/50',
      label: 'text-[#444]',
      controlsBg: 'bg-[#111] border-[#333]',
      button: 'bg-[#333] text-gray-400 hover:bg-[#444] hover:text-white border-[#222]',
      buttonPrimary: 'bg-amber-700 text-amber-100 hover:bg-amber-600 hover:text-white border-amber-900',
      decorationBar: 'bg-[#111]'
    }
  },
  light: {
    id: 'light',
    name: 'Office Light',
    appBg: 'bg-stone-100',
    gridColor: '#d6d3d1',
    textColor: 'text-stone-500',
    accentColor: 'text-stone-700',
    machine: {
      body: 'bg-stone-200',
      border: 'border-stone-300',
      screen: 'bg-white border-stone-300',
      screenText: 'text-stone-800',
      placeholder: 'placeholder-stone-300',
      label: 'text-stone-400',
      controlsBg: 'bg-stone-100 border-stone-300',
      button: 'bg-stone-100 text-stone-500 hover:bg-white hover:text-stone-700 border-stone-300',
      buttonPrimary: 'bg-stone-600 text-stone-100 hover:bg-stone-700 hover:text-white border-stone-800',
      decorationBar: 'bg-stone-300'
    }
  },
  cyber: {
    id: 'cyber',
    name: 'Cyberpunk',
    appBg: 'bg-slate-900',
    gridColor: '#0ea5e9',
    textColor: 'text-cyan-600',
    accentColor: 'text-pink-500',
    machine: {
      body: 'bg-slate-800',
      border: 'border-cyan-900',
      screen: 'bg-slate-950 border-cyan-800',
      screenText: 'text-cyan-400',
      placeholder: 'placeholder-cyan-900/50',
      label: 'text-cyan-900',
      controlsBg: 'bg-slate-900 border-cyan-900',
      button: 'bg-slate-900 text-cyan-600 hover:bg-cyan-900/30 hover:text-cyan-300 border-cyan-900',
      buttonPrimary: 'bg-pink-700 text-pink-100 hover:bg-pink-600 hover:text-white border-pink-900',
      decorationBar: 'bg-slate-950'
    }
  },
  blueprint: {
    id: 'blueprint',
    name: 'Blueprint',
    appBg: 'bg-[#004a7c]',
    gridColor: 'rgba(255,255,255,0.15)',
    textColor: 'text-blue-200',
    accentColor: 'text-white',
    machine: {
      body: 'bg-[#005b96]',
      border: 'border-[#003355]',
      screen: 'bg-[#003355] border-[#004a7c]',
      screenText: 'text-white',
      placeholder: 'placeholder-blue-300/30',
      label: 'text-blue-300/40',
      controlsBg: 'bg-[#004a7c] border-[#003355]',
      button: 'bg-[#003355] text-blue-200 hover:bg-[#004a7c] hover:text-white border-[#002244]',
      buttonPrimary: 'bg-blue-100 text-[#003355] hover:bg-white hover:text-[#004a7c] border-blue-200',
      decorationBar: 'bg-[#003355]'
    }
  },
  coffee: {
    id: 'coffee',
    name: 'Coffee Shop',
    appBg: 'bg-[#3e2723]',
    gridColor: '#5d4037',
    textColor: 'text-[#d7ccc8]',
    accentColor: 'text-orange-300',
    machine: {
      body: 'bg-[#5d4037]',
      border: 'border-[#3e2723]',
      screen: 'bg-[#3e2723] border-[#795548]',
      screenText: 'text-[#ffe0b2]',
      placeholder: 'placeholder-[#8d6e63]',
      label: 'text-[#8d6e63]',
      controlsBg: 'bg-[#4e342e] border-[#3e2723]',
      button: 'bg-[#4e342e] text-[#bcaaa4] hover:bg-[#5d4037] hover:text-[#efebe9] border-[#3e2723]',
      buttonPrimary: 'bg-[#d84315] text-orange-50 hover:bg-[#bf360c] border-[#bf360c]',
      decorationBar: 'bg-[#3e2723]'
    }
  }
};
