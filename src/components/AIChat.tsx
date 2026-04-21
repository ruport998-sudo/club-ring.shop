import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Здравствуйте! Я ИИ-консультант CLUB RING. Чем могу помочь? С радостью подскажу по размерам, наличию и подберу экипировку!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate API delay - ready for real API integration
    setTimeout(() => {
      const responses = [
        'Отличный выбор! Уточните, пожалуйста, ваш размер и предпочтительный вид спорта — я подберу оптимальный вариант.',
        'Да, этот товар есть в наличии. Рекомендую обратить внимание на нашу таблицу размеров на странице товара.',
        'Для бокса рекомендую перчатки CHAMPION LACE-UP — профессиональное качество по доступной цене.',
        'Доставка по Москве занимает 1-2 дня, по России — 3-7 рабочих дней. Бесплатно при заказе от 15000 ₽.',
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { role: 'assistant', content: randomResponse }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] bg-[#000814]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 border-b border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 bg-[#A67C52]/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#A67C52]" />
            </div>
            <div>
              <div className="text-sm font-medium text-[#C5C3C6]">ИИ-Консультант</div>
              <div className="text-xs text-[#5C677D]">CLUB RING</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 bg-[#A67C52]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-[#A67C52]" />
                  </div>
                )}
                <div className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                  msg.role === 'user'
                    ? 'bg-[#A67C52] text-[#000814]'
                    : 'bg-white/5 text-[#C5C3C6]'
                }`}>
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-6 h-6 bg-[#C5C3C6]/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-[#C5C3C6]" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-[#A67C52]/20 rounded-full flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-[#A67C52] animate-pulse" />
                </div>
                <div className="bg-white/5 px-3 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#5C677D] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-[#5C677D] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-[#5C677D] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Введите сообщение..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-[#C5C3C6] placeholder:text-[#5C677D] focus:outline-none focus:border-[#A67C52] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-9 h-9 bg-[#A67C52] hover:bg-[#BC6C25] disabled:opacity-50 text-[#000814] rounded-lg flex items-center justify-center transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
