"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, ChevronDown, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const suggestedPrompts = [
  "How can AI reduce my operational costs?",
  "What is a data mesh?",
  "How do I start with cloud migration?",
  "Explain ethical AI frameworks"
];

const models = ["Business Analyst", "Tech Advisor", "Data Insights"];

export default function SandboxSection() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! I'm the AdvaitAI Assistant. I can help you with AI strategy, business consulting, data analytics, and technology implementation. What challenge can I help you solve today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeModel, setActiveModel] = useState(models[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage], model: activeModel })
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply || "I am currently a conceptual demo, please implement the API." }]);
    } catch (error) {
      console.error(error);
       setMessages(prev => [...prev, { role: "assistant", content: "Sorry, I am facing connectivity issues. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <section className="py-24 bg-[#0A0A1A] w-full relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent text-[11px] font-semibold tracking-[0.12em] uppercase mb-4"
          >
            LIVE DEMO
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[48px] font-bold text-white mb-4"
          >
            Try AdvaitAI in Action
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[16px] text-white opacity-60 max-w-xl mx-auto"
          >
            Ask our AI assistant anything about business strategy, data analytics, or AI implementation.
          </motion.p>
        </div>

        {/* Chat Interface */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-[760px] mx-auto bg-[#111126] border border-[#2D2D4E] rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Top Bar */}
          <div className="bg-[#181836] border-b border-[#2D2D4E] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-brand-primary" />
              <span className="text-white font-semibold text-[15px]">AdvaitAI Assistant</span>
              <div className="flex items-center gap-2 px-2 py-1 bg-green-500/10 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-[10px] font-bold uppercase tracking-wider">Online</span>
              </div>
            </div>

            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-[13px] text-white/80 bg-[#0A0A1A]/50 px-3 py-1.5 rounded-md hover:bg-[#0A0A1A] transition-colors border border-white/5"
              >
                {activeModel} <ChevronDown className="w-3 h-3" />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-[#1A1A38] border border-[#2D2D4E] rounded-md shadow-lg overflow-hidden py-1 z-20">
                  {models.map(m => (
                    <button
                      key={m}
                      onClick={() => { setActiveModel(m); setIsDropdownOpen(false); }}
                      className={cn("w-full text-left px-4 py-2 text-[13px] hover:bg-brand-primary hover:text-white transition-colors", activeModel === m ? "text-brand-primary" : "text-white/80")}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-[380px] overflow-y-auto p-6 flex flex-col gap-6 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex w-full", msg.role === "assistant" ? "justify-start" : "justify-end")}>
                <div className={cn(
                  "max-w-[85%] rounded-[12px] px-5 py-4 text-[14px] leading-relaxed",
                  msg.role === "assistant" 
                    ? "bg-[#1A1A38] text-white rounded-tl-sm border border-white/5" 
                    : "bg-brand-primary text-white rounded-tr-sm shadow-xl"
                )}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#1A1A38] text-white rounded-[12px] rounded-tl-sm px-5 py-4 border border-white/5 flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 border-t border-[#2D2D4E] bg-[#0D0D1A]">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about AI strategy, automation, analytics..."
                className="w-full bg-[#1A1A38] text-white placeholder:text-white/30 rounded-xl pl-5 pr-14 py-4 outline-none border border-white/5 focus:border-brand-primary/50 transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-3 bg-brand-primary hover:bg-brand-secondary disabled:opacity-50 disabled:hover:bg-brand-primary transition-colors rounded-lg text-white"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </form>

            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {suggestedPrompts.map(prompt => (
                <button
                  key={prompt}
                  onClick={() => handlePromptClick(prompt)}
                  disabled={isLoading}
                  className="px-3 py-1.5 bg-[#1A1A38] hover:bg-[#2A2A58] border border-white/5 disabled:opacity-50 text-[12px] text-white/70 rounded-full transition-colors whitespace-nowrap"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
