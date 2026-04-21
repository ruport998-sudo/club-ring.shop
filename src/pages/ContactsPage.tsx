import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Контакты</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            СВЯЖИТЕСЬ С НАМИ
          </h1>
          <p className="mt-4 text-sm text-[#5C677D] max-w-2xl">
            Мы всегда рады помочь вам с выбором одежды и ответить на любые вопросы.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#000a1a] border border-white/5 rounded-lg p-6">
              <h3 className="font-display text-xl text-[#C5C3C6] mb-6">КОНТАКТЫ</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#A67C52]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#A67C52]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#C5C3C6]">Телефон</div>
                    <div className="text-sm text-[#5C677D]">+7 (999) 123-45-67</div>
                    <div className="text-xs text-[#5C677D]">WhatsApp / Telegram</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#A67C52]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#A67C52]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#C5C3C6]">Email</div>
                    <div className="text-sm text-[#5C677D]">info@clubring.ru</div>
                    <div className="text-sm text-[#5C677D]">support@clubring.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#A67C52]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#A67C52]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#C5C3C6]">Адрес</div>
                    <div className="text-sm text-[#5C677D]">Москва, ул. Спортивная, 1</div>
                    <div className="text-xs text-[#5C677D]">ТЦ «Арена», 3 этаж</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#A67C52]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#A67C52]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#C5C3C6]">Режим работы</div>
                    <div className="text-sm text-[#5C677D]">Ежедневно 9:00 — 21:00</div>
                    <div className="text-xs text-[#5C677D]">Онлайн-заказы круглосуточно</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-r from-[#A67C52]/10 to-[#BC6C25]/10 border border-[#A67C52]/20 rounded-lg p-6 text-center">
              <MessageCircle className="w-8 h-8 text-[#A67C52] mx-auto mb-3" />
              <h4 className="font-display text-lg text-[#C5C3C6]">ИИ-Консультант</h4>
              <p className="mt-2 text-xs text-[#5C677D]">
                Получите мгновенный ответ на любой вопрос через наш чат
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#000a1a] border border-white/5 rounded-lg p-6 sm:p-8">
              <h3 className="font-display text-xl text-[#C5C3C6] mb-6">НАПИШИТЕ НАМ</h3>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-[#5C677D] mb-2">Имя *</label>
                    <input
                      type="text"
                      className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] placeholder:text-[#5C677D] focus:outline-none focus:border-[#A67C52] transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#5C677D] mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] placeholder:text-[#5C677D] focus:outline-none focus:border-[#A67C52] transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#5C677D] mb-2">Тема</label>
                  <select className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#A67C52] transition-colors">
                    <option>Выбор одежды</option>
                    <option>Заказ и доставка</option>
                    <option>Возврат и обмен</option>
                    <option>Сотрудничество</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#5C677D] mb-2">Сообщение *</label>
                  <textarea
                    rows={6}
                    className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] placeholder:text-[#5C677D] focus:outline-none focus:border-[#A67C52] transition-colors resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] px-8 py-3 rounded-md font-medium text-sm transition-colors"
                >
                  ОТПРАВИТЬ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
