import { Link } from 'react-router';
import { Play, ArrowRight, Star, Quote } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products, blogPosts, reviews, categories, sportCategories } from '../data/products';

export default function Home() {
  const bestsellers = products.filter(p => p.isBestseller);
  const newArrivals = products.filter(p => p.isNew);

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Bestsellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Лучшее</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
              ХИТЫ ПРОДАЖ
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:flex items-center gap-2 text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors"
          >
            Все товары
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Новинки</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
              НОВОЕ ПОСТУПЛЕНИЕ
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:flex items-center gap-2 text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors"
          >
            Все товары
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="mb-10">
          <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Каталог</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            ПО КАТЕГОРИЯМ
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop/${cat.id}`}
              className="group relative aspect-[3/4] rounded-lg overflow-hidden border border-white/5 hover:border-[#A67C52]/30 transition-all duration-500"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg text-white group-hover:text-[#A67C52] transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sports Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="mb-10">
          <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Виды спорта</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            ПО ВИДАМ СПОРТА
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {sportCategories.map((sport) => (
            <Link
              key={sport.id}
              to={`/sport/${sport.id}`}
              className="group relative aspect-square rounded-lg overflow-hidden border border-white/5 hover:border-[#A67C52]/30 transition-all duration-500"
            >
              <img
                src={sport.image}
                alt={sport.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-2xl text-white group-hover:text-[#A67C52] transition-colors">
                  {sport.name}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#5C677D] group-hover:text-[#A67C52] transition-colors">
                  Смотреть
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Video Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="mb-10">
          <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Контент</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            ВИДЕО-БЛОГ
          </h2>
        </div>
        <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/5 group cursor-pointer">
          <img
            src="/blog/article-1.jpg"
            alt="Video blog"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#A67C52]/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-[#A67C52]/20">
              <Play className="w-8 h-8 text-[#000814] ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-display text-2xl sm:text-3xl text-white">
              ТРЕНИРОВКА КАК ПРОФЕССИОНАЛ
            </h3>
            <p className="mt-2 text-sm text-[#C5C3C6]">
              Полное руководство по подготовке бойца от нашего чемпиона
            </p>
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Статьи</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
              ПОЛЕЗНЫЕ МАТЕРИАЛЫ
            </h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:flex items-center gap-2 text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors"
          >
            Все статьи
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to="/blog"
              className="group bg-[#000a1a] border border-white/5 rounded-lg overflow-hidden hover:border-[#A67C52]/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] text-[#A67C52] tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-[#5C677D]">{post.date}</span>
                </div>
                <h3 className="font-display text-xl text-[#C5C3C6] group-hover:text-[#A67C52] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-[#5C677D] line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-[#A67C52]">
                  Читать
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Отзывы</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
              ЧТО ГОВОРЯТ КЛИЕНТЫ
            </h2>
          </div>
          <Link
            to="/reviews"
            className="hidden sm:flex items-center gap-2 text-sm text-[#5C677D] hover:text-[#A67C52] transition-colors"
          >
            Все отзывы
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#000a1a] border border-white/5 rounded-lg p-6 hover:border-[#A67C52]/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#A67C52]/30 mb-4" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < review.rating ? 'text-[#A67C52]' : 'text-[#5C677D]'}`}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="text-sm text-[#C5C3C6] leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-sm font-medium text-[#C5C3C6]">{review.name}</span>
                <span className="text-xs text-[#5C677D]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] px-8 py-3 rounded-md font-medium text-sm transition-colors"
          >
            ОСТАВИТЬ ОТЗЫВ
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="bg-gradient-to-r from-[#A67C52]/10 to-[#BC6C25]/10 border border-[#A67C52]/20 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-[#C5C3C6]">
            ПОДПИШИТЕСЬ НА НОВОСТИ
          </h2>
          <p className="mt-3 text-sm text-[#5C677D] max-w-lg mx-auto">
            Получайте первыми информацию о новых коллекциях, эксклюзивных предложениях и скидках
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] placeholder:text-[#5C677D] focus:outline-none focus:border-[#A67C52] transition-colors"
            />
            <button className="bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] px-6 py-3 rounded-md font-medium text-sm transition-colors whitespace-nowrap">
              ПОДПИСАТЬСЯ
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
