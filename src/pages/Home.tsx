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

      {/* Social Channels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="bg-gradient-to-r from-[#A67C52]/10 to-[#BC6C25]/10 border border-[#A67C52]/20 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-[#C5C3C6]">
            НАШИ КАНАЛЫ
          </h2>
          <p className="mt-3 text-sm text-[#5C677D] max-w-lg mx-auto">
            Подписывайтесь на наши каналы, чтобы быть в курсе новинок, акций и эксклюзивного контента
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://youtube.com/@club-ring?si=H3Lfmgl22SfLaOIC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-md font-medium text-sm transition-colors min-w-[160px] justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
            <a
              href="https://t.me/club_ring"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0088cc] hover:bg-[#006699] text-white px-6 py-3 rounded-md font-medium text-sm transition-colors min-w-[160px] justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a
              href="https://dzen.ru/club__ring"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#000000] hover:bg-[#1a1a1a] text-white px-6 py-3 rounded-md font-medium text-sm transition-colors min-w-[160px] justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0l3.708 8.292L24 12l-8.292 3.708L12 24l-3.708-8.292L0 12l8.292-3.708L12 0z"/>
              </svg>
              Дзен
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
