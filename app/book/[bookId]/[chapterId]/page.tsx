"use client";
import { useState, useEffect, useRef } from "react";
import { demoBook } from "@/lib/books";
import { generateChatResponse } from "@/lib/gemini";
import { jsPDF } from "jspdf";

export default function ChatPage({
  params,
}: {
  params: { bookId: string; chapterId: string };
}) {
  const [messages, setMessages] = useState<
    { role: "user" | "model"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chapterContext = demoBook.chapters[0].content;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleExportPDF = () => {
    const doc = new jsPDF();
    let yPos = 20;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text(`Chat History: ${demoBook.title}`, 20, yPos);
    yPos += 15;

    doc.setFontSize(12);
    messages.forEach((msg) => {
      doc.setFont("helvetica", "bold");
      doc.text(msg.role === "user" ? "You:" : "AI Companion:", 20, yPos);
      yPos += 6;

      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(msg.text, 170);
      doc.text(lines, 20, yPos);
      yPos += lines.length * 6 + 10;

      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
    });

    doc.save("book-ai-chat-export.pdf");
  };

  useEffect(() => {
    // Initial greeting
    setMessages([
      {
        role: "model",
        text: `Hello! I'm your Literary Companion. I've finished loading chapter 1 of Alice in Wonderland. How can I help you explore this story?`,
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      let startIndex = 0;
      while (
        startIndex < messages.length &&
        messages[startIndex].role === "model"
      ) {
        startIndex++;
      }
      const historyForGemini = messages.slice(startIndex).map((m) => ({
        role: m.role === "model" ? "assistant" : "user",
        text: m.text,
      }));
      const response = await generateChatResponse(
        historyForGemini,
        userMsg,
        chapterContext,
      );

      setMessages((prev) => [...prev, { role: "model", text: response }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "I'm having trouble connecting right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_20px_40px_rgba(70,71,211,0.08)]">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button className="text-indigo-600 dark:text-indigo-400 hover:scale-105 transition-transform duration-200">
              <span className="material-symbols-outlined" data-icon="menu">
                menu
              </span>
            </button>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black text-[#f4f1ff] tracking-tight mb-1">
                {demoBook.title}
              </h1>
              <span className="text-xs font-medium text-slate-500 tracking-wide uppercase">
                {demoBook.chapters[0].title}
              </span>
            </div>
          </div>
          <button
            onClick={handleExportPDF}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(70,71,211,0.2)] hover:scale-105 transition-transform active:scale-95"
          >
            Export PDF
          </button>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-32 px-4 md:px-8 max-w-4xl mx-auto w-full flex flex-col gap-8 min-h-screen relative">
        <div className="absolute inset-0 pointer-events-none data-aura opacity-50"></div>
        <div className="w-full max-w-4xl space-y-10 relative z-10 flex flex-col pb-20">
          {messages.map((msg, idx) =>
            msg.role === "model" ? (
              <div key={idx} className="flex flex-col gap-4">
                <div className="flex items-center gap-3 ml-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/80">
                    AI Companion
                  </span>
                </div>
                <div className="glass-card ghost-border p-6 md:p-8 rounded-xl shadow-2xl max-w-[90%]">
                  <p className="text-on-surface leading-relaxed text-lg font-medium whitespace-pre-wrap">
                    {msg.text}
                  </p>
                </div>
              </div>
            ) : (
              <div key={idx} className="flex flex-col items-end gap-2">
                <div className="bg-primary-container text-on-primary-container px-6 py-4 rounded-xl rounded-tr-none shadow-xl shadow-primary-container/10 max-w-[80%]">
                  <p className="font-semibold italic">&quot;{msg.text}&quot;</p>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/40 mr-2">
                  User
                </span>
              </div>
            ),
          )}
          {isLoading && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 ml-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-primary text-sm">
                    auto_awesome
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary/80 animate-pulse">
                  Thinking...
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-3xl px-4 z-50">
        <form
          onSubmit={handleSend}
          className="bg-surface-container-high/60 backdrop-blur-3xl p-2 pl-6 rounded-full border border-outline-variant/20 shadow-2xl flex items-center gap-4"
        >
          <span
            className="material-symbols-outlined text-on-surface-variant/40"
            data-icon="attachment"
          >
            attachment
          </span>
          <input
            className="flex-1 bg-transparent border-none text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-0 text-sm md:text-base font-medium"
            placeholder="Ask about the chapter..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-primary to-primary-container px-8 py-3 rounded-full text-on-primary-fixed font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(135,129,255,0.4)] hover:shadow-[0_0_30px_rgba(135,129,255,0.6)] transition-all active:scale-95 disabled:opacity-50 group"
          >
            <span>Ask</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              send
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
