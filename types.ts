
export interface Position {
  x: number;
  y: number;
}

export interface CardData {
  id: string;
  text: string;
  timestamp: string;
  position: Position;
  zIndex: number;
  rotation: number;
  color: 'white' | 'yellow' | 'green' | 'pink';
}

export interface TypewriterState {
  text: string;
  isTyping: boolean;
}

export interface ThemeConfig {
  id: string;
  name: string;
  appBg: string; // Tailwind class for background
  gridColor: string; // CSS color for the grid lines
  textColor: string; // Tailwind class for general UI text
  accentColor: string; // Tailwind class for primary accents (e.g. title)
  machine: {
    body: string;
    border: string;
    screen: string;
    screenText: string;
    placeholder: string;
    label: string;
    controlsBg: string;
    button: string; // Default button style
    buttonPrimary: string; // Print button style
    decorationBar: string; // The top bar with colored dots
  };
}
