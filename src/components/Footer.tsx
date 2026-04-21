import { Link } from 'react-router';
import { Phone, Mail, MapPin, CreditCard, Truck, RotateCcw, Shield } from 'lucide-react';

export default function Footer() {
  const shopCategories = [
    { label: 'Кроссовки', path: '/shop/sneakers' },
    { label: 'Спортивные костюмы', path: '/shop/tracksuits' },
    { label: 'Спортивные куртки', path: '/shop/jackets' },
    { label: 'Кепки-бейсболки', path: '/shop/caps' },
    { label: 'Футболки', path: '/shop/tshirts' },
  ];

  const sportCategories = [
    { label: 'Бокс', path: '/sport/boxing' },
    { label: 'Футбол', path: '/sport/football' },
    { label: 'MMA', path: '/sport/mma' },
    { label: 'Баскетбол', path: '/sport/basketball' },
  ];

  const infoLinks = [
    { label: 'Блог', path: '/blog' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Контакты', path: '/contacts' },
    { label: 'Отзывы', path: '/reviews' },
  ];

  return (
    <footer className="bg-[#000510] border-t border-white/5">
      {/* Features Bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-[#A67C52] shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#C5C3C6]">Доставка по РФ</div>
                <div className="text-xs text-[#5C677D]">2-7 рабочих дней</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-[#A67C52] shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#C5C3C6]">Возврат 14 дней</div>
                <div className="text-xs text-[#5C677D]">Без лишних вопросов</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#A67C52] shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#C5C3C6]">Гарантия качества</div>
                <div className="text-xs text-[#5C677D]">Только оригиналы</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-[#A67C52] shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#C5C3C6]">Оплата картой</div>
                <div className="text-xs text-[#5C677D]">Visa, Mastercard, МИР</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-3xl text-[#A67C52] tracking-wider">
              CLUB RING
            </Link>
            <p className="mt-4 text-sm text-[#5C677D] leading-relaxed">
              Премиальная спортивная одежда для тех, кто выбирает лучшее. Качество без компромиссов.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://youtube.com/@club-ring?si=H3Lfmgl22SfLaOIC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#FF0000] hover:bg-[#CC0000] rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://t.me/club_ring"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#0088cc] hover:bg-[#006699] rounded-full flex items-center justify-center transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://dzen.ru/club__ring"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#000000] hover:bg-[#1a1a1a] border border-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Дзен"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0l3.708 8.292L24 12l-8.292 3.708L12 24l-3.708-8.292L0 12l8.292-3.708L12 0z"/>
                </svg>
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#5C677D]">
                <Phone className="w-4 h-4 text-[#A67C52]" />
                +7 (999) 123-45-67
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5C677D]">
                <Mail className="w-4 h-4 text-[#A67C52]" />
                info@clubring.ru
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5C677D]">
                <MapPin className="w-4 h-4 text-[#A67C52]" />
                Москва, ул. Спортивная, 1
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-display text-lg text-[#C5C3C6] mb-4">КАТЕГОРИИ</h4>
            <ul className="space-y-2">
              {shopCategories.map((cat) => (
                <li key={cat.path}>
                  <Link to={cat.path} className="text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-display text-lg text-[#C5C3C6] mb-4">ВИДЫ СПОРТА</h4>
            <ul className="space-y-2">
              {sportCategories.map((cat) => (
                <li key={cat.path}>
                  <Link to={cat.path} className="text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-lg text-[#C5C3C6] mb-4">ИНФОРМАЦИЯ</h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Order */}
          <div>
            <h4 className="font-display text-lg text-[#C5C3C6] mb-4">ЗАКАЗ И ВОЗВРАТ</h4>
            <ul className="space-y-2 text-sm text-[#5C677D]">
              <li>Оплата: картой онлайн</li>
              <li>Доставка: СДЭК, Boxberry</li>
              <li>Возврат: в течение 14 дней</li>
              <li>При браке: за наш счёт</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/5">
              <h4 className="font-display text-sm text-[#C5C3C6] mb-2">ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ</h4>
              <p className="text-xs text-[#5C677D] leading-relaxed">
                ООО «КЛУБ РИНГ»<br />
                ИНН: 7701234567<br />
                ОГРН: 1157746123456<br />
                Москва, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#5C677D]">
            © 2026 CLUB RING. Все права защищены.
          </p>
          <p className="text-xs text-[#5C677D]">
            Политика конфиденциальности · Публичная оферта
          </p>
        </div>
      </div>
    </footer>
  );
}
