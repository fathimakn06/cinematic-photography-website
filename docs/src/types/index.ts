export interface Phone {
  id: string;
  brand: string;
  model: string;
  cameraSpecs: {
    megapixels: number;
    hasPortraitMode: boolean;
    hasNightMode: boolean;
    hasUltrawide: boolean;
    maxZoom: number;
    hasProMode: boolean;
  };
}

export interface Tutorial {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'expert';
  description: string;
  funnyNote: string;
  steps: TutorialStep[];
  requiredFeatures?: string[];
}

export interface TutorialStep {
  id: string;
  title: string;
  description: string;
  funnyNote: string;
  emoji: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  message: string;
  timestamp: Date;
}

export interface MemePost {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tip: string;
  funnyCaption: string;
}