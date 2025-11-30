
import { ThemeConfig } from '../types';

export const themes: Record<string, ThemeConfig> = {
  pink: {
    id: 'pink',
    name: 'Macaron Pink',
    appBg: 'bg-rose-50',
    gridColor: '#fda4af', // rose-300
    textColor: 'text-rose-500',
    accentColor: 'text-rose-600',
    machine: {
      body: 'bg-rose-100',
      border: 'border-rose-200',
      screen: 'bg-white border-rose-200',
      screenText: 'text-rose-600',
      placeholder: 'placeholder-rose-300',
      label: 'text-rose-400',
      controlsBg: 'bg-rose-50 border-rose-200',
      button: 'bg-white text-rose-400 hover:bg-rose-200 hover:text-rose-600 border-rose-200',
      buttonPrimary: 'bg-rose-400 text-white hover:bg-rose-500 border-rose-500',
      decorationBar: 'bg-rose-200'
    }
  },
  matcha: {
    id: 'matcha',
    name: 'Matcha Green',
    appBg: 'bg-[#f1f8e9]', // Light grayish green
    gridColor: '#dcedc8',
    textColor: 'text-[#558b2f]', // Darker olive green
    accentColor: 'text-[#33691e]',
    machine: {
      body: 'bg-[#dcedc8]',
      border: 'border-[#c5e1a5]',
      screen: 'bg-[#f9fbe7] border-[#c5e1a5]',
      screenText: 'text-[#558b2f]',
      placeholder: 'placeholder-[#9ccc65]',
      label: 'text-[#7cb342]',
      controlsBg: 'bg-[#f1f8e9] border-[#c5e1a5]',
      button: 'bg-[#f9fbe7] text-[#558b2f] hover:bg-[#dcedc8] hover:text-[#33691e] border-[#c5e1a5]',
      buttonPrimary: 'bg-[#8bc34a] text-white hover:bg-[#7cb342] border-[#689f38]',
      decorationBar: 'bg-[#c5e1a5]'
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
      screen: 'bg-white border-sky-200',
      screenText: 'text-sky-700',
      placeholder: 'placeholder-sky-300',
      label: 'text-sky-500',
      controlsBg: 'bg-sky-50 border-sky-200',
      button: 'bg-white text-sky-500 hover:bg-sky-200 hover:text-sky-700 border-sky-200',
      buttonPrimary: 'bg-sky-400 text-white hover:bg-sky-500 border-sky-500',
      decorationBar: 'bg-sky-200'
    }
  },
  yellow: {
    id: 'yellow',
    name: 'Cream Yellow',
    appBg: 'bg-amber-50',
    gridColor: '#fde68a', // amber-200
    textColor: 'text-amber-600',
    accentColor: 'text-amber-700',
    machine: {
      body: 'bg-amber-100',
      border: 'border-amber-200',
      screen: 'bg-white border-amber-200',
      screenText: 'text-amber-700',
      placeholder: 'placeholder-amber-300',
      label: 'text-amber-500',
      controlsBg: 'bg-amber-50 border-amber-200',
      button: 'bg-white text-amber-600 hover:bg-amber-200 hover:text-amber-800 border-amber-200',
      buttonPrimary: 'bg-amber-400 text-white hover:bg-amber-500 border-amber-500',
      decorationBar: 'bg-amber-200'
    }
  },
  purple: {
    id: 'purple',
    name: 'Lavender Purple',
    appBg: 'bg-purple-50',
    gridColor: '#e9d5ff', // purple-200
    textColor: 'text-purple-600',
    accentColor: 'text-purple-700',
    machine: {
      body: 'bg-purple-100',
      border: 'border-purple-200',
      screen: 'bg-white border-purple-200',
      screenText: 'text-purple-700',
      placeholder: 'placeholder-purple-300',
      label: 'text-purple-500',
      controlsBg: 'bg-purple-50 border-purple-200',
      button: 'bg-white text-purple-500 hover:bg-purple-200 hover:text-purple-700 border-purple-200',
      buttonPrimary: 'bg-purple-400 text-white hover:bg-purple-500 border-purple-500',
      decorationBar: 'bg-purple-200'
    }
  },
  mint: {
    id: 'mint',
    name: 'Mint Green',
    appBg: 'bg-teal-50',
    gridColor: '#99f6e4', // teal-200
    textColor: 'text-teal-600',
    accentColor: 'text-teal-700',
    machine: {
      body: 'bg-teal-100',
      border: 'border-teal-200',
      screen: 'bg-white border-teal-200',
      screenText: 'text-teal-700',
      placeholder: 'placeholder-teal-300',
      label: 'text-teal-500',
      controlsBg: 'bg-teal-50 border-teal-200',
      button: 'bg-white text-teal-500 hover:bg-teal-200 hover:text-teal-700 border-teal-200',
      buttonPrimary: 'bg-teal-400 text-white hover:bg-teal-500 border-teal-500',
      decorationBar: 'bg-teal-200'
    }
  }
};
