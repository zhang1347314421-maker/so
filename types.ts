export interface Shot {
  id: string;
  visual: string;
  audio: string;
  duration: string;
  cameraAngle: string;
}

export interface StoryboardResponse {
  title: string;
  summary: string;
  shots: Shot[];
}

export interface ContextSettings {
  genre: string;
  tone: string;
  style: string;
}
