import { useState } from 'react';
import { Link } from 'react-router';
import { Check, CreditCard, Truck, MapPin } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    payment: 'card',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  if (items.length === 0 && step === 'form') {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-display text-4xl text-[#C5C3C6]">Корзина пуста</h1>
        <Link to="/" className="mt-4 inline-block text-[#A67C52] hover:underline">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="pt-32 pb-16">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-display text-4xl text-[#C5C3C6]">ЗАКАЗ ОФОРМЛЕН!</h1>
          <p className="mt-4 text-sm text-[#5C677D]">
            Спасибо за покупку! Мы отправили подтверждение на ваш email.
            Номер заказа: <span className="text-[#A67C52]">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          </p>
          <div className="mt-8 p-6 bg-[#000a1a] border border-white/5 rounded-lg text-left">
            <h3 className="font-display text-lg text-[#C5C3C6] mb-4">Информация о доставке</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-[#5C677D]">
                <MapPin className="w-4 h-4 text-[#A67C52]" />
                {formData.city}, {formData.address}
              </div>
              <div className="flex items-center gap-2 text-[#5C677D]">
                <Truck className="w-4 h-4 text-[#A67C52]" />
                Доставка 2-7 рабочих дней
              </div>
              <div className="flex items-center gap-2 text-[#5C677D]">
                <CreditCard className="w-4 h-4 text-[#A67C52]" />
                Оплата при получении
              </div>
            </div>
          </div>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] px-8 py-3 rounded-md font-medium text-sm transition-colors"
          >
            ВЕРНУТЬСЯ НА ГЛАВНУЮ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl text-[#C5C3C6] mb-8">
          ОФОРМЛЕНИЕ ЗАКАЗА
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-[#000a1a] border border-white/5 rounded-lg p-6">
                <h2 className="font-display text-xl text-[#C5C3C6] mb-4">Контактные данные</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#5C677D] mb-2">Имя *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#A67C52] transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#5C677D] mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#A67C52] transition-colors"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-[#5C677D] mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#A67C52] transition-colors"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#000a1a] border border-white/5 rounded-lg p-6">
                <h2 className="font-display text-xl text-[#C5C3C6] mb-4">Адрес доставки</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#5C677D] mb-2">Город *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#A67C52] transition-colors"
                      placeholder="Москва"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-[#5C677D] mb-2">Адрес *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#A67C52] transition-colors"
                      placeholder="Улица, дом, квартира"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#000a1a] border border-white/5 rounded-lg p-6">
                <h2 className="font-display text-xl text-[#C5C3C6] mb-4">Способ оплаты</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border border-[#A67C52]/30 bg-[#A67C52]/5 rounded-lg cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.payment === 'card'}
                      onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                      className="accent-[#A67C52]"
                    />
                    <CreditCard className="w-5 h-5 text-[#A67C52]" />
                    <div>
                      <div className="text-sm text-[#C5C3C6]">Картой при получении</div>
                      <div className="text-xs text-[#5C677D]">Visa, Mastercard, МИР</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-white/10 rounded-lg cursor-pointer hover:border-white/20 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.payment === 'cash'}
                      onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                      className="accent-[#A67C52]"
                    />
                    <div className="w-5 h-5 flex items-center justify-center text-[#5C677D]">₽</div>
                    <div>
                      <div className="text-sm text-[#C5C3C6]">Наличными при получении</div>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] rounded-md font-medium text-sm transition-colors"
              >
                ПОДТВЕРДИТЬ ЗАКАЗ
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#000a1a] border border-white/5 rounded-lg p-6 sticky top-28">
              <h2 className="font-display text-xl text-[#C5C3C6] mb-6">ВАШ ЗАКАЗ</h2>
              <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                    <div className="w-14 h-14 bg-[#000814] rounded overflow-hidden shrink-0">
                      <img src={item.product.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm text-[#C5C3C6] truncate">{item.product.name}</div>
                      <div className="text-xs text-[#5C677D]">
                        {item.size} × {item.quantity}
                      </div>
                      <div className="text-sm text-[#A67C52]">
                        {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/5 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#5C677D]">Товары</span>
                  <span className="text-[#C5C3C6]">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5C677D]">Доставка</span>
                  <span className="text-[#C5C3C6]">
                    {totalPrice > 15000 ? 'Бесплатно' : '500 ₽'}
                  </span>
                </div>
                <div className="border-t border-white/5 pt-2 flex justify-between">
                  <span className="font-display text-lg text-[#C5C3C6]">ИТОГО</span>
                  <span className="font-display text-2xl text-[#A67C52]">
                    {(totalPrice > 15000 ? totalPrice : totalPrice + 500).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
