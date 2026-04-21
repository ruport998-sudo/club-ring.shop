import { useParams } from 'react-router';
import { Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products, sportCategories } from '../data/products';

export default function SportPage() {
  const { sport } = useParams();
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name' | 'new'>('new');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => p.sport === sport);

    switch (sortBy) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'new':
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [sport, sortBy]);

  const sportName = sportCategories.find(s => s.id === sport)?.name || sport?.toUpperCase();

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Title */}
        <div className="mb-8">
          <span className="text-[10px] text-[#F7B538] tracking-[0.3em] uppercase">Вид спорта</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            {sportName}
          </h1>
          <p className="mt-2 text-sm text-[#5C677D]">
            {filteredProducts.length} товаров для {sportName?.toLowerCase()}
          </p>
        </div>

        {/* Banner */}
        <div className="relative aspect-[21/9] rounded-xl overflow-hidden border border-white/5 mb-10">
          <img
            src={sportCategories.find(s => s.id === sport)?.image || '/products/boxing-gloves-1.jpg'}
            alt={sportName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl text-white">
              ЭКИПИРОВКА ДЛЯ {sportName}
            </h2>
            <p className="mt-2 text-sm text-[#C5C3C6] max-w-lg">
              Профессиональная экипировка премиум-класса для тренировок и соревнований
            </p>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-[#C5C3C6] hover:text-[#F7B538] transition-colors"
          >
            <Filter className="w-4 h-4" />
            Фильтры
          </button>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#5C677D]">Сортировка:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="bg-[#000a1a] border border-white/10 rounded-md px-3 py-2 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#F7B538]"
            >
              <option value="new">Сначала новые</option>
              <option value="price-asc">Цена: по возрастанию</option>
              <option value="price-desc">Цена: по убыванию</option>
              <option value="name">По названию</option>
            </select>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="mb-8 p-6 bg-[#000a1a] border border-white/5 rounded-lg">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-medium text-[#C5C3C6] mb-3">Цена</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-[#5C677D] cursor-pointer hover:text-[#F7B538]">
                    <input type="checkbox" className="accent-[#F7B538]" />
                    До 10 000 ₽
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#5C677D] cursor-pointer hover:text-[#F7B538]">
                    <input type="checkbox" className="accent-[#F7B538]" />
                    10 000 - 20 000 ₽
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#5C677D] cursor-pointer hover:text-[#F7B538]">
                    <input type="checkbox" className="accent-[#F7B538]" />
                    От 20 000 ₽
                  </label>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#C5C3C6] mb-3">Размер</h4>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL', '40', '41', '42', '43', '44'].map(size => (
                    <button
                      key={size}
                      className="w-10 h-10 border border-white/10 rounded text-xs text-[#5C677D] hover:border-[#F7B538] hover:text-[#F7B538] transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#C5C3C6] mb-3">Наличие</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-[#5C677D] cursor-pointer hover:text-[#F7B538]">
                    <input type="checkbox" className="accent-[#F7B538]" defaultChecked />
                    В наличии
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#5C677D] cursor-pointer hover:text-[#F7B538]">
                    <input type="checkbox" className="accent-[#F7B538]" />
                    Новинки
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[#5C677D] cursor-pointer hover:text-[#F7B538]">
                    <input type="checkbox" className="accent-[#F7B538]" />
                    Со скидкой
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#5C677D]">Товары для этого вида спорта скоро появятся</p>
          </div>
        )}
      </div>
    </div>
  );
}
