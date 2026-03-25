"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { demoBook } from "@/lib/books";
import { generateChatResponse } from "@/lib/gemini";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/app/contexts/AuthContext";
import { jsPDF } from "jspdf";

export default function ChatPage({
  params,
}: {
  params: { bookId: string; chapterId: string };
}) {
  const router = useRouter();
  const { user } = useAuth();
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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-outline-variant/20"
               style={{ backgroundColor: "color-mix(in srgb, var(--color-surface-container-low) 90%, transparent)" }}>
        <div className="flex items-center justify-between w-full px-4 md:px-6 h-16">

          {/* Left — back button */}
          <div className="flex items-center gap-2 min-w-[120px]">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors group"
            >
              <span className="material-symbols-outlined text-xl group-hover:-translate-x-0.5 transition-transform">arrow_back</span>
              <span className="hidden sm:block text-sm font-semibold">Home</span>
            </button>
          </div>

          {/* Center — book info */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-base md:text-lg font-black text-on-surface tracking-tight leading-tight line-clamp-1">
              {demoBook.title}
            </h1>
            <span className="text-[10px] font-semibold text-on-surface-variant tracking-widest uppercase">
              {demoBook.chapters[0].title}
            </span>
          </div>

          {/* Right — actions */}
          <div className="flex items-center gap-2 md:gap-3 min-w-[120px] justify-end">
            <ThemeToggle />
            <button
              onClick={handleExportPDF}
              className="hidden sm:block bg-primary text-white px-4 py-1.5 rounded-full font-bold text-xs hover:scale-105 transition-transform active:scale-95 shadow-md"
              style={{ background: "linear-gradient(135deg, #5b52d9, #0077a8)" }}
            >
              Export PDF
            </button>
            {/* Profile avatar */}
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName ?? "Profile"}
                className="w-8 h-8 rounded-full border-2 border-primary/40 object-cover"
                title={user.displayName ?? "Profile"}
              />
            ) : (
              <Link href="/login"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
                title="Sign in"
              >
                <span className="material-symbols-outlined text-primary" style={{ fontSize: "18px" }}>person</span>
              </Link>
            )}
          </div>
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
