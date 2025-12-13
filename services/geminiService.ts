import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an expert Education Counselor for "UniTor", a consultancy firm helping students study in Germany. 
Your tone is professional, encouraging, and knowledgeable.
You have deep knowledge of:
1. German University application processes (APS certificate, Uni-Assist).
2. Visa requirements (Blocked account/Sperrkonto, Health insurance).
3. Public vs Private universities in Germany (Tuition free education concept).
4. Living costs in cities like Munich, Berlin, Hamburg.
5. Language requirements (TestDaF, Goethe, IELTS).

Keep answers concise (under 150 words) unless asked for details.
If asked about specific pricing for UniTor services, ask them to contact the support team via the form.
`;

let chatSession: Chat | null = null;

export const resetChatSession = () => {
  chatSession = null;
};

const getApiKey = (): string | undefined => {
    // Robustly retrieve API key from various environment variable standards
    // Priority: VITE_API_KEY (Vite) > REACT_APP_API_KEY (CRA) > API_KEY (Node/Standard)
    let apiKey: string | undefined;

    try {
      // @ts-ignore
      apiKey = import.meta.env?.VITE_API_KEY;
    } catch (e) {}

    if (!apiKey) {
      try {
        apiKey = process.env.REACT_APP_API_KEY;
      } catch (e) {}
    }

    if (!apiKey) {
      try {
        apiKey = process.env.API_KEY;
      } catch (e) {}
    }
    return apiKey;
};

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = getApiKey();
    
    // Check for API key and return a specific technical error if missing
    if (!apiKey) {
      console.error("Gemini API Key is missing. Please check Netlify Environment Variables.");
      return "CONFIGURATION ERROR: API Key is missing. \n\nTo fix this in Netlify:\n1. Go to Site Configuration > Environment Variables.\n2. Rename your key to 'VITE_API_KEY' (or 'REACT_APP_API_KEY').\n3. Trigger a new deploy.";
    }

    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const response = await chatSession.sendMessage({ message: userMessage });
    return response.text || "I apologize, I couldn't generate a response. Please try asking differently.";

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error.message && error.message.includes("API key not valid")) {
       return "CONFIGURATION ERROR: The API Key provided is invalid. Please check the key in Netlify settings.";
    }

    return "I am currently having trouble connecting to the AI service. Please reach out to us via WhatsApp for immediate help!";
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    const apiKey = getApiKey();
    if (!apiKey) return null;

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: { parts: [{ text: prompt }] },
    });

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};