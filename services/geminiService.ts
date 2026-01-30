import { GoogleGenAI } from "@google/genai";
import { Product } from '../types';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    // Intentionally using the process.env.API_KEY as per instructions
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const getProductAnalysis = async (product: Product): Promise<string> => {
  try {
    const ai = getAiClient();
    const prompt = `
      Act as a helpful shopping assistant. Analyze the following product:
      Name: ${product.name}
      Price: $${product.price}
      Description: ${product.description}
      Category: ${product.category}

      Provide a concise (max 3 sentences) helpful summary of why a user might want to buy this. 
      Focus on benefits. Do not mention the prompt itself.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "I couldn't generate an analysis at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI assistant is currently taking a nap. Please try again later.";
  }
};

export const getSupportChatResponse = async (message: string, productContext?: Product): Promise<string> => {
  try {
    const ai = getAiClient();
    const context = productContext 
      ? `The user is asking about the product: ${productContext.name} ($${productContext.price}).` 
      : 'The user is browsing the store.';
      
    const prompt = `
      You are a friendly customer support agent for Product Shopping Mart.
      ${context}
      User Question: "${message}"
      
      Answer politely and briefly (under 50 words). If you don't know, suggest they contact human support.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    
    return response.text || "I didn't quite catch that.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I'm having trouble connecting to the server.";
  }
};