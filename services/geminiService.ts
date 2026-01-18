import { GoogleGenAI, Type } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateLuckyNumbers = async (): Promise<any> => {
  try {
    const ai = getClient();
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Generate a set of lucky lottery numbers for today based on Thai astrology principles. Be creative.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            mainNumber: { type: Type.STRING, description: "A 2 or 3 digit number" },
            secondaryNumbers: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "A list of 3 other lucky numbers" 
            },
            reasoning: { type: Type.STRING, description: "A short Thai phrase explaining why these are lucky (e.g. falling star, dream)" }
          },
          required: ["mainNumber", "secondaryNumbers", "reasoning"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text);
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback if API fails or no key
    return {
      mainNumber: "88",
      secondaryNumbers: ["12", "45", "99"],
      reasoning: "ระบบกำลังคำนวณจากดวงดาว (Demo Mode)"
    };
  }
};