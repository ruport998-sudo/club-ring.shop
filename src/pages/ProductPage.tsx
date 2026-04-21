import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { ShoppingBag, Check, ArrowLeft, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState('');
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-display text-4xl text-[#C5C3C6]">Товар не найден</h1>
        <Link to="/" className="mt-4 inline-block text-[#A67C52] hover:underline">
          Вернуться на главную
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Назад
        </Link>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="aspect-square bg-[#000a1a] rounded-xl overflow-hidden border border-white/5">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">
              {product.sport}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl text-[#C5C3C6] mt-2">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <span className="text-3xl font-display text-[#A67C52]">
                {product.price.toLocaleString('ru-RU')} ₽
              </span>
              {product.oldPrice && (
                <span className="text-xl text-[#5C677D] line-through">
                  {product.oldPrice.toLocaleString('ru-RU')} ₽
                </span>
              )}
            </div>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#A67C52]" fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-[#5C677D]">4.9 (127 отзывов)</span>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm text-[#C5C3C6] leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mt-6 space-y-2">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#5C677D]">
                  <Check className="w-4 h-4 text-[#A67C52] shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-[#C5C3C6] mb-3">
                РАЗМЕР <span className="text-[#A67C52]">*</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border rounded-md text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-[#A67C52] bg-[#A67C52]/10 text-[#A67C52]'
                        : 'border-white/10 text-[#5C677D] hover:border-[#C5C3C6] hover:text-[#C5C3C6]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="mt-8">
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || added}
                className={`w-full py-4 rounded-md font-medium text-sm flex items-center justify-center gap-2 transition-all ${
                  added
                    ? 'bg-green-600 text-white'
                    : selectedSize
                    ? 'bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814]'
                    : 'bg-white/5 text-[#5C677D] cursor-not-allowed'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" />
                    ДОБАВЛЕНО
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    {selectedSize ? 'ДОБАВИТЬ В КОРЗИНУ' : 'ВЫБЕРИТЕ РАЗМЕР'}
                  </>
                )}
              </button>
            </div>

            {/* Delivery Info */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
              <div className="text-center">
                <Truck className="w-5 h-5 text-[#A67C52] mx-auto mb-2" />
                <div className="text-xs text-[#5C677D]">Доставка 2-7 дней</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 text-[#A67C52] mx-auto mb-2" />
                <div className="text-xs text-[#5C677D]">Возврат 14 дней</div>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 text-[#A67C52] mx-auto mb-2" />
                <div className="text-xs text-[#5C677D]">Гарантия качества</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-16 border-t border-white/5">
            <h2 className="font-display text-3xl text-[#C5C3C6] mb-8">ПОХОЖИЕ ТОВАРЫ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
