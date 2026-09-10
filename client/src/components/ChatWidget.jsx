import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Trash2, Send } from "lucide-react";
import { CONTACT } from "../config/contact";

const QUICK_CHIPS = [
  { label: "⚡ EV Bikes", text: "What electric bikes do you have?" },
  { label: "🏍️ Sports Bikes", text: "Tell me about MC 500RR and 800RR" },
  { label: "⛽ Petrol Bikes", text: "What petrol bikes are available?" },
  { label: "🔋 Battery Tips", text: "How should I charge my electric bike?" },
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDot, setShowDot] = useState(false);
  const [history, setHistory] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!open) setShowDot(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open]);

  function openChat() {
    setOpen(true);
    setShowDot(false);
    if (messages.length === 0) {
      setMessages([
        {
          role: "bot",
          text: "👋 Hi! I'm MiChe AI. Ask me anything about our electric bikes, scooters, petrol vehicles, prices, EMI, or test rides.",
        },
      ]);
    }
  }

  function clearChat() {
    setMessages([
      {
        role: "bot",
        text: "🔄 Chat cleared. How can I help you with MiChe vehicles?",
      },
    ]);
    setHistory([]);
    setTimeout(() => inputRef.current?.focus(), 80);
  }

  async function sendMessage(text) {
    const msg = text.trim();
    if (!msg || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setInput("");
    setLoading(true);
    setTimeout(() => inputRef.current?.focus(), 0);

    const newHistory = [...history, { role: "user", content: msg }];

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, history: newHistory }),
      });
      const data = await res.json();
      const reply = data.reply || data.error || "Something went wrong.";
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
      setHistory([...newHistory, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `Connection error. Please try again or call ${CONTACT.phoneDisplay}.`,
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  // Mobile ma panel style alag, desktop ma original
  const panelStyle = isMobile
    ? {
        position: "fixed",
        bottom: 90,
        left: 12,
        right: 12,
        maxHeight: 520,
        zIndex: 9999,
      }
    : {
        position: "absolute",
        bottom: "4rem",
        right: 0,
        width: 360,
        maxHeight: 520,
      };

  return (
    <div className="fixed bottom-5 z-50" style={{ right: "5rem" }}>
      {/* Toggle Button */}
      <button
        onClick={() => (open ? setOpen(false) : openChat())}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-cyan to-brand-orange text-brand-dark flex items-center justify-center shadow-lg hover:scale-105 transition-transform relative"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
        {showDot && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-red rounded-full border-2 border-brand-dark animate-pulse" />
        )}
      </button>

      {/* Chat Panel */}
      {open && (
        <div
          style={panelStyle}
          className="bg-brand-dark/75 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-up"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-cyan to-brand-orange flex items-center justify-center text-brand-dark text-xs font-bold flex-shrink-0">
              AI
            </div>
            <div className="flex-1 min-w-0">
              <strong className="text-sm text-white">MiChe AI</strong>
              <p className="text-[10px] text-brand-green flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full inline-block" />
                Online — always ready
              </p>
            </div>
            <button
              onClick={clearChat}
              className="p-1.5 text-white/40 hover:text-white transition-colors"
              title="Clear chat"
              onMouseDown={(e) => e.preventDefault()}
            >
              <Trash2 size={16} />
            </button>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 text-white/40 hover:text-white transition-colors"
              title="Close"
              onMouseDown={(e) => e.preventDefault()}
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-[200px] max-h-[320px]"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-brand-cyan text-brand-dark rounded-br-md"
                      : "bg-white/10 text-white/90 rounded-bl-md"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1.5 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2 h-2 bg-brand-cyan/60 rounded-full"
                      style={{
                        animation: `pulse-dot 1.4s ${i * 0.2}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Quick Chips */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {QUICK_CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => sendMessage(chip.text)}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/20 text-white/60 hover:border-brand-cyan hover:text-brand-cyan transition-colors"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 px-3 py-3 border-t border-white/10">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about vehicles, prices, EMI..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-brand-cyan transition-colors"
              disabled={loading}
              autoComplete="off"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              onMouseDown={(e) => e.preventDefault()}
              className="p-2.5 bg-brand-cyan text-brand-dark rounded-xl hover:bg-brand-cyan/80 transition-colors disabled:opacity-30"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
