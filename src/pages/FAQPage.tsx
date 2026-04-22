import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router';
import { faqData } from '../data/products';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-20 sm:pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">FAQ</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            ВОПРОСЫ И ОТВЕТЫ
          </h1>
          <p className="mt-4 text-sm text-[#5C677D]">
            Нашли ответы на самые популярные вопросы о наших товарах, доставке и возврате.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, i) => (
            <div
              key={i}
              className="bg-[#000a1a] border border-white/5 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-display text-lg text-[#C5C3C6] pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#A67C52] shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 border-t border-white/5 pt-4">
                  <p className="text-sm text-[#5C677D] leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-[#A67C52]/10 to-[#BC6C25]/10 border border-[#A67C52]/20 rounded-xl text-center">
          <MessageCircle className="w-10 h-10 text-[#A67C52] mx-auto mb-4" />
          <h3 className="font-display text-xl text-[#C5C3C6]">Не нашли ответ?</h3>
          <p className="mt-2 text-sm text-[#5C677D]">
            Наши специалисты с радостью помогут вам. Свяжитесь с нами удобным способом.
          </p>
          <Link
            to="/contacts"
            className="mt-4 inline-flex items-center gap-2 bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] px-6 py-3 rounded-md font-medium text-sm transition-colors"
          >
            Связаться с нами
          </Link>
        </div>
      </div>
    </div>
  );
}
