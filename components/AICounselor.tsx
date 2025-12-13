import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, RefreshCcw, AlertCircle, Wrench, Calendar, X, GraduationCap, Clock, BookOpen } from 'lucide-react';
import { getGeminiResponse, resetChatSession } from '../services/geminiService';
import { ChatMessage } from '../types';

// Helper function to parse bold text
const parseBold = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// Helper function to process text into paragraphs and lists
const processText = (text: string) => {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let listType: 'ul' | 'ol' = 'ul';

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('* ');
    const isNumbered = /^\d+\.\s/.test(trimmed);

    if (isBullet || isNumbered) {
       const currentType = isBullet ? 'ul' : 'ol';
       if (listItems.length > 0 && currentType !== listType) {
           const ListTag = listType;
           elements.push(
             <ListTag key={`list-${i}-prev`} className={`pl-5 mb-2 space-y-1 ${listType === 'ul' ? 'list-disc' : 'list-decimal'}`}>
               {listItems}
             </ListTag>
           );
           listItems = [];
       }
       listType = currentType;
       
       const content = parseBold(trimmed.replace(/^([-*]|\d+\.)\s/, ''));
       listItems.push(<li key={`li-${i}`}>{content}</li>);
    } else {
      if (listItems.length > 0) {
        const ListTag = listType;
        elements.push(
          <ListTag key={`list-${i}`} className={`pl-5 mb-2 space-y-1 ${listType === 'ul' ? 'list-disc' : 'list-decimal'}`}>
            {listItems}
          </ListTag>
        );
        listItems = [];
      }
      if (trimmed) {
        elements.push(<p key={`p-${i}`} className="mb-2 last:mb-0 min-h-[1em]">{parseBold(line)}</p>);
      }
    }
  });

  if (listItems.length > 0) {
    const ListTag = listType;
    elements.push(
      <ListTag key={`list-end`} className={`pl-5 mb-2 space-y-1 ${listType === 'ul' ? 'list-disc' : 'list-decimal'}`}>
        {listItems}
      </ListTag>
    );
  }

  return elements.length > 0 ? elements : [parseBold(text)];
};

// Main formatting function
const formatMessage = (text: string) => {
  const parts = text.split(/(```[\s\S]*?```)/g);
  return parts.map((part, index) => {
    if (part.startsWith('```') && part.endsWith('```')) {
      // Extract content and remove the first line if it's just the language identifier
      let content = part.slice(3, -3);
      const firstLineMatch = content.match(/^([a-z]+)\n/);
      if (firstLineMatch) {
        content = content.replace(/^([a-z]+)\n/, '');
      }
      return (
        <pre key={index} className="bg-slate-800 text-gray-100 p-3 rounded-lg overflow-x-auto my-2 text-xs font-mono shadow-inner border border-slate-700">
          <code>{content}</code>
        </pre>
      );
    }
    return <div key={index}>{processText(part)}</div>;
  });
};

const AICounselor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
  
  // Study Plan State
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [planData, setPlanData] = useState({
    university: '',
    program: '',
    startDate: ''
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const initializeChat = () => {
    resetChatSession();
    setMessages([
      {
        role: 'model',
        text: 'Hello! I am your UniTor AI Counselor. Ask me anything about studying in Germany, university selection, or visa procedures. You can also click the "Create Study Plan" button to generate a personalized timeline!',
        timestamp: new Date()
      }
    ]);
  };

  // Reset chat session on mount to ensure AI state matches UI state
  useEffect(() => {
    initializeChat();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loadingMessage]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [inputValue]);

  const handleSend = async () => {
    if (!inputValue.trim() || loadingMessage) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoadingMessage("UniTor AI is typing...");

    // Reset height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    const responseText = await getGeminiResponse(inputValue);

    const aiMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoadingMessage(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    // Send on Enter (without Shift) OR Ctrl+Enter OR Cmd+Enter
    if (e.key === 'Enter') {
      if (!e.shiftKey || e.ctrlKey || e.metaKey) {
        e.preventDefault();
        handleSend();
      }
    }
  };

  const handleReset = () => {
    initializeChat();
    setInputValue('');
  };

  const handlePlanSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowPlanModal(false);
    
    const userPrompt = `I am planning to study at **${planData.university}** for the **${planData.program}** program, starting in **${planData.startDate}**.
    
Please create a personalized, month-by-month study and application timeline for me starting from today (${new Date().toLocaleDateString()}).
Include specific deadlines and preparation steps for:
1. German Language (if needed) & IELTS/TOEFL.
2. APS Certificate application.
3. Uni-Assist or Direct Application windows.
4. Blocked Account & Insurance.
5. Visa Interview booking & preparation.
6. Arrival logistics.
    
Format this as a clear Plan with Milestones.`;

    const userMsg: ChatMessage = {
      role: 'user',
      text: `Generate Study Plan for ${planData.program} at ${planData.university}`,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setLoadingMessage("Creating your personalized study plan...");
    setPlanData({ university: '', program: '', startDate: '' }); // Reset form

    const responseText = await getGeminiResponse(userPrompt);

    const aiMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoadingMessage(null);
  };

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            UniTor AI Assistant
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Powered by Gemini. Get instant answers about your future in Germany.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col h-[600px] relative">
          
          {/* Header */}
          <div className="bg-slate-900 p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center">
              <div className="bg-yellow-500 p-2 rounded-full">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3 hidden sm:block">
                <p className="text-sm font-medium text-white">UniTor Smart Guide</p>
                <p className="text-xs text-gray-300">AI Counsel | Online</p>
              </div>
            </div>
            
            <div className="flex gap-3">
                <button
                    onClick={() => setShowPlanModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors shadow-sm"
                >
                    <Calendar className="h-4 w-4" />
                    <span className="hidden sm:inline">Create Study Plan</span>
                    <span className="sm:hidden">Plan</span>
                </button>
                <button 
                  onClick={handleReset}
                  className="p-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
                  title="Start New Chat"
                >
                  <RefreshCcw className="h-4 w-4" />
                </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => {
              // Check for error types
              const isConfigError = msg.role === 'model' && msg.text.includes("CONFIGURATION ERROR");
              const isGeneralError = msg.role === 'model' && (msg.text.includes("currently offline") || msg.text.includes("trouble connecting"));
              const isError = isConfigError || isGeneralError;
              
              return (
                <div
                  key={index}
                  className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex max-w-[85%] sm:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                      msg.role === 'user' 
                        ? 'bg-red-100 ml-2' 
                        : isError ? 'bg-red-50 mr-2' : 'bg-slate-200 mr-2'
                    }`}>
                      {msg.role === 'user' ? (
                        <User className="h-5 w-5 text-red-600" />
                      ) : isConfigError ? (
                        <Wrench className="h-5 w-5 text-red-600" />
                      ) : isGeneralError ? (
                        <AlertCircle className="h-5 w-5 text-red-600" />
                      ) : (
                        <Bot className="h-5 w-5 text-slate-700" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg text-sm overflow-hidden ${
                      msg.role === 'user' 
                        ? 'bg-red-600 text-white rounded-br-none' 
                        : isError 
                          ? 'bg-red-50 text-red-800 border border-red-200 rounded-bl-none shadow-sm'
                          : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
                    }`}>
                      <div className="leading-relaxed">
                        {formatMessage(msg.text)}
                      </div>
                      <p className={`text-[10px] mt-1 text-right ${msg.role === 'user' ? 'text-red-200' : 'text-gray-400'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {loadingMessage && (
              <div className="flex w-full justify-start">
                 <div className="flex items-center space-x-2 bg-white p-3 rounded-lg rounded-bl-none border border-gray-200 ml-10">
                    <Loader2 className="h-4 w-4 animate-spin text-red-600" />
                    <span className="text-sm text-gray-500">{loadingMessage}</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2 items-end">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about APS, Visa, or blocked accounts..."
                rows={1}
                className="flex-1 min-w-0 block w-full px-4 py-3 rounded-2xl border border-gray-300 focus:ring-red-500 focus:border-red-500 sm:text-sm bg-gray-50 resize-none max-h-[150px]"
                style={{ minHeight: '44px' }}
              />
              <button
                onClick={handleSend}
                disabled={!!loadingMessage || !inputValue.trim()}
                className={`inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-full shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 h-[44px] ${
                  !!loadingMessage || !inputValue.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-xs text-center text-gray-400">
              Press Enter to send, Shift+Enter for new line.
            </p>
          </div>

          {/* Study Plan Modal */}
          {showPlanModal && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 animate-fadeIn">
                <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden transform transition-all scale-100">
                    <div className="bg-slate-900 p-4 flex justify-between items-center">
                        <h3 className="text-white font-bold flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-yellow-500" />
                            Generate Study Plan
                        </h3>
                        <button onClick={() => setShowPlanModal(false)} className="text-gray-400 hover:text-white transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    
                    <form onSubmit={handlePlanSubmit} className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Target University</label>
                            <div className="relative">
                                <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    required
                                    value={planData.university}
                                    onChange={(e) => setPlanData({...planData, university: e.target.value})}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-sm"
                                    placeholder="e.g. TU Berlin"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Target Program</label>
                            <div className="relative">
                                <BookOpen className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    required
                                    value={planData.program}
                                    onChange={(e) => setPlanData({...planData, program: e.target.value})}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-sm"
                                    placeholder="e.g. M.Sc. Computer Science"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Desired Start Date</label>
                            <div className="relative">
                                <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <input 
                                    type="text" // Using text to allow flexible input like "Winter 2024" or date
                                    required
                                    value={planData.startDate}
                                    onChange={(e) => setPlanData({...planData, startDate: e.target.value})}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-sm"
                                    placeholder="e.g. Winter Semester 2025"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-2.5 rounded-lg shadow-md hover:from-red-500 hover:to-red-600 transition-all transform active:scale-95"
                        >
                            Generate My Plan
                        </button>
                    </form>
                </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AICounselor;