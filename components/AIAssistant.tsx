import React, { useState } from 'react';
import { Sparkles, MessageSquare, X, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { getProductAnalysis, getSupportChatResponse } from '../services/geminiService';

interface AIAssistantProps {
  product?: Product;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatResponse, setChatResponse] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!product) return;
    setLoading(true);
    const result = await getProductAnalysis(product);
    setAnalysis(result);
    setLoading(false);
  };

  const handleChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    setLoading(true);
    const response = await getSupportChatResponse(chatMessage, product);
    setChatResponse(response);
    setLoading(false);
    setChatMessage('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all z-40 flex items-center gap-2 group"
      >
        <Sparkles size={20} className="animate-pulse" />
        <span className="font-medium pr-1 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          AI Assistant
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <Sparkles size={18} />
          <h3 className="font-semibold">Shopping Mart AI</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
          <X size={18} />
        </button>
      </div>

      <div className="p-4 max-h-[60vh] overflow-y-auto">
        {product && !analysis && !chatResponse && (
          <div className="space-y-4">
            <p className="text-gray-600 text-sm">Hi! I can help you with this product.</p>
            <button 
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full py-2.5 px-4 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-medium hover:bg-indigo-100 transition-colors flex items-center justify-between"
            >
              {loading ? "Thinking..." : "Why should I buy this?"}
              {!loading && <ChevronRight size={16} />}
            </button>
          </div>
        )}

        {analysis && (
          <div className="bg-indigo-50 p-3 rounded-xl mb-4">
            <p className="text-sm text-indigo-900 leading-relaxed">{analysis}</p>
          </div>
        )}

        {chatResponse && (
           <div className="bg-purple-50 p-3 rounded-xl mb-4">
             <p className="text-xs font-semibold text-purple-700 mb-1">AI Agent</p>
             <p className="text-sm text-purple-900">{chatResponse}</p>
           </div>
        )}

        <form onSubmit={handleChat} className="mt-4 pt-4 border-t border-gray-100">
          <div className="relative">
            <input 
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Ask a question..."
              className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button 
              type="submit" 
              disabled={!chatMessage.trim() || loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-indigo-600 hover:bg-indigo-100 rounded-lg disabled:opacity-50 transition-colors"
            >
              <MessageSquare size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};