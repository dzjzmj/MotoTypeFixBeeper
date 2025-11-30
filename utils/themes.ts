
import { ThemeConfig } from '../types';

export const themes: Record<string, ThemeConfig> = {
  pink: {
    id: 'pink',
    name: 'Macaron Pink',
    appBg: 'bg-rose-50',
    gridColor: '#fecdd3', // rose-200
    textColor: 'text-rose-500',
    accentColor: 'text-rose-600',
    machine: {
      body: 'bg-rose-100',
      border: 'border-rose-200',
      screen: 'bg-white/80 border-rose-200',
      screenText: 'text-rose-600',
      placeholder: 'placeholder-rose-300',
      label: 'text-rose-400',
      controlsBg: 'bg-rose-50/50 border-rose-200',
      button: 'bg-white text-rose-400 hover:bg-rose-100 hover:text-rose-600 border-rose-200',
      buttonPrimary: 'bg-rose-400 text-white hover:bg-rose-500 border-rose-400',
      decorationBar: 'bg-rose-200'
    }
  },
  matcha: {
    id: 'matcha',
    name: 'Matcha Green',
    // Custom hex values for that specific "grayish green" look
    appBg: 'bg-[#EFF2F0]', 
    gridColor: '#D3DBD5',
    textColor: 'text-[#5C6B5E]', 
    accentColor: 'text-[#4A5D4D]',
    machine: {
      body: 'bg-[#DDE4E0]',
      border: 'border-[#BBC7BE]',
      screen: 'bg-[#F5F7F6] border-[#BBC7BE]',
      screenText: 'text-[#5C6B5E]',
      placeholder: 'placeholder-[#9CA89E]',
      label: 'text-[#7B8C7E]',
      controlsBg: 'bg-[#EFF2F0]/50 border-[#BBC7BE]',
      button: 'bg-[#F5F7F6] text-[#5C6B5E] hover:bg-[#DDE4E0] hover:text-[#4A5D4D] border-[#BBC7BE]',
      buttonPrimary: 'bg-[#8CA390] text-white hover:bg-[#7A917E] border-[#6E8572]',
      decorationBar: 'bg-[#BBC7BE]'
    }
  },
  blue: {
    id: 'blue',
    name: 'Sky Blue',
    appBg: 'bg-sky-50',
    gridColor: '#bae6fd', // sky-200
    textColor: 'text-sky-600',
    accentColor: 'text-sky-700',
    machine: {
      body: 'bg-sky-100',
      border: 'border-sky-200',
      screen: 'bg-white/80 border-sky-200',
      screenText: 'text-sky-700',
      placeholder: 'placeholder-sky-300',
      label: 'text-sky-500',
      controlsBg: 'bg-sky-50/50 border-sky-200',
      button: 'bg-white text-sky-500 hover:bg-sky-100 hover:text-sky-700 border-sky-200',
      buttonPrimary: 'bg-sky-400 text-white hover:bg-sky-500 border-sky-400',
      decorationBar: 'bg-sky-200'
    }
  },
  yellow: {
    id: 'yellow',
    name: 'Cream Yellow',
    appBg: 'bg-amber-50',
    gridColor: '#fde68a', // amber-200
    textColor: 'text-amber-700', 
    accentColor: 'text-amber-800',
    machine: {
      body: 'bg-amber-100',
      border: 'border-amber-200',
      screen: 'bg-white/90 border-amber-200',
      screenText: 'text-amber-800',
      placeholder: 'placeholder-amber-400',
      label: 'text-amber-600',
      controlsBg: 'bg-amber-50/50 border-amber-200',
      button: 'bg-white text-amber-600 hover:bg-amber-100 hover:text-amber-800 border-amber-200',
      buttonPrimary: 'bg-amber-400 text-white hover:bg-amber-500 border-amber-400',
      decorationBar: 'bg-amber-200'
    }
  },
  purple: {
    id: 'purple',
    name: 'Lavender Purple',
    appBg: 'bg-violet-50',
    gridColor: '#ddd6fe', // violet-200
    textColor: 'text-violet-600',
    accentColor: 'text-violet-700',
    machine: {
      body: 'bg-violet-100',
      border: 'border-violet-200',
      screen: 'bg-white/80 border-violet-200',
      screenText: 'text-violet-700',
      placeholder: 'placeholder-violet-300',
      label: 'text-violet-500',
      controlsBg: 'bg-violet-50/50 border-violet-200',
      button: 'bg-white text-violet-500 hover:bg-violet-100 hover:text-violet-700 border-violet-200',
      buttonPrimary: 'bg-violet-400 text-white hover:bg-violet-500 border-violet-400',
      decorationBar: 'bg-violet-200'
    }
  },
  mint: {
    id: 'mint',
    name: 'Mint Green',
    appBg: 'bg-emerald-50',
    gridColor: '#a7f3d0', // emerald-200
    textColor: 'text-emerald-600',
    accentColor: 'text-emerald-700',
    machine: {
      body: 'bg-emerald-100',
      border: 'border-emerald-200',
      screen: 'bg-white/80 border-emerald-200',
      screenText: 'text-emerald-700',
      placeholder: 'placeholder-emerald-300',
      label: 'text-emerald-500',
      controlsBg: 'bg-emerald-50/50 border-emerald-200',
      button: 'bg-white text-emerald-500 hover:bg-emerald-100 hover:text-emerald-700 border-emerald-200',
      buttonPrimary: 'bg-emerald-400 text-white hover:bg-emerald-500 border-emerald-400',
      decorationBar: 'bg-emerald-200'
    }
  }
};
