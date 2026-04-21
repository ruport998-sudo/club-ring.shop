import { Link } from 'react-router';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag className="w-16 h-16 text-[#5C677D] mx-auto mb-6" />
          <h1 className="font-display text-4xl text-[#C5C3C6]">КОРЗИНА ПУСТА</h1>
          <p className="mt-3 text-sm text-[#5C677D]">Добавьте товары из каталога</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 bg-[#F7B538] hover:bg-[#BC6C25] text-[#000814] px-8 py-3 rounded-md font-medium text-sm transition-colors"
          >
            ПЕРЕЙТИ В КАТАЛОГ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl sm:text-5xl text-[#C5C3C6] mb-8">
          КОРЗИНА
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4 bg-[#000a1a] border border-white/5 rounded-lg p-4"
              >
                <Link
                  to={`/product/${item.product.id}`}
                  className="w-24 h-24 bg-[#000814] rounded-md overflow-hidden shrink-0"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="font-display text-lg text-[#C5C3C6] hover:text-[#F7B538] transition-colors truncate">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#5C677D] mt-1">Размер: {item.size}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-[#C5C3C6] hover:border-[#F7B538] hover:text-[#F7B538] transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm text-[#C5C3C6]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="w-8 h-8 border border-white/10 rounded flex items-center justify-center text-[#C5C3C6] hover:border-[#F7B538] hover:text-[#F7B538] transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="font-display text-lg text-[#F7B538]">
                        {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.product.id, item.size)}
                  className="text-[#5C677D] hover:text-red-500 transition-colors self-start"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#000a1a] border border-white/5 rounded-lg p-6 sticky top-28">
              <h2 className="font-display text-xl text-[#C5C3C6] mb-6">ИТОГО</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#5C677D]">Товары</span>
                  <span className="text-[#C5C3C6]">
                    {items.reduce((s, i) => s + i.quantity, 0)} шт.
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#5C677D]">Доставка</span>
                  <span className="text-[#C5C3C6]">
                    {totalPrice > 15000 ? 'Бесплатно' : '500 ₽'}
                  </span>
                </div>
                <div className="border-t border-white/5 pt-3 flex justify-between">
                  <span className="font-display text-lg text-[#C5C3C6]">ВСЕГО</span>
                  <span className="font-display text-2xl text-[#F7B538]">
                    {(totalPrice > 15000 ? totalPrice : totalPrice + 500).toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full py-4 bg-[#F7B538] hover:bg-[#BC6C25] text-[#000814] rounded-md font-medium text-sm flex items-center justify-center gap-2 transition-colors"
              >
                ОФОРМИТЬ ЗАКАЗ
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/"
                className="mt-3 w-full py-3 border border-white/10 text-[#5C677D] rounded-md text-sm flex items-center justify-center hover:border-[#C5C3C6] hover:text-[#C5C3C6] transition-colors"
              >
                Продолжить покупки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
