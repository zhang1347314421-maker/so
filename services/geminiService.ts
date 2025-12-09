import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { StoryboardResponse, ContextSettings } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateStoryboard(script: string, context: ContextSettings): Promise<StoryboardResponse> {
  const response: GenerateContentResponse = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `Generate a detailed storyboard based on the following script.
    
    Context:
    Genre: ${context.genre || 'General'}
    Tone: ${context.tone || 'Neutral'}
    Style: ${context.style || 'Standard'}
    
    Script:
    ${script}`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          summary: { type: Type.STRING },
          shots: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                visual: { type: Type.STRING, description: "Visual description of the scene" },
                audio: { type: Type.STRING, description: "Audio, dialogue, or sound effects" },
                duration: { type: Type.STRING, description: "Estimated duration" },
                cameraAngle: { type: Type.STRING, description: "Camera angle or movement" },
              },
              required: ['id', 'visual', 'audio', 'duration', 'cameraAngle']
            }
          }
        },
        required: ['title', 'summary', 'shots']
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("No response generated from Gemini");
  }

  return JSON.parse(text) as StoryboardResponse;
}
