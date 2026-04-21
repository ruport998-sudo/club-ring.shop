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
              <Truck className="w-5 h-5 text-[#F7B538] shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#C5C3C6]">Доставка по РФ</div>
                <div className="text-xs text-[#5C677D]">2-7 рабочих дней</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-5 h-5 text-[#F7B538] shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#C5C3C6]">Возврат 14 дней</div>
                <div className="text-xs text-[#5C677D]">Без лишних вопросов</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#F7B538] shrink-0" />
              <div>
                <div className="text-sm font-medium text-[#C5C3C6]">Гарантия качества</div>
                <div className="text-xs text-[#5C677D]">Только оригиналы</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-[#F7B538] shrink-0" />
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
            <Link to="/" className="font-display text-3xl text-[#F7B538] tracking-wider">
              CLUB RING
            </Link>
            <p className="mt-4 text-sm text-[#5C677D] leading-relaxed">
              Премиальная спортивная экипировка для тех, кто выбирает лучшее. Качество без компромиссов.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#5C677D]">
                <Phone className="w-4 h-4 text-[#F7B538]" />
                +7 (999) 123-45-67
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5C677D]">
                <Mail className="w-4 h-4 text-[#F7B538]" />
                info@clubring.ru
              </div>
              <div className="flex items-center gap-2 text-sm text-[#5C677D]">
                <MapPin className="w-4 h-4 text-[#F7B538]" />
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
                  <Link to={cat.path} className="text-sm text-[#5C677D] hover:text-[#F7B538] transition-colors">
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
                  <Link to={cat.path} className="text-sm text-[#5C677D] hover:text-[#F7B538] transition-colors">
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
                  <Link to={link.path} className="text-sm text-[#5C677D] hover:text-[#F7B538] transition-colors">
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
