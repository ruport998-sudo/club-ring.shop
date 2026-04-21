import { Link } from 'react-router';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogPosts } from '../data/products';

export default function BlogPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[10px] text-[#A67C52] tracking-[0.3em] uppercase">Блог</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            ЖУРНАЛ CLUB RING
          </h1>
          <p className="mt-4 text-sm text-[#5C677D] max-w-2xl">
            Экспертные статьи, гайды и советы по выбору одежды, технике тренировок и подготовке к соревнованиям.
          </p>
        </div>

        {/* Featured Post */}
        <Link
          to="#"
          className="group block relative aspect-[21/9] rounded-xl overflow-hidden border border-white/5 hover:border-[#A67C52]/30 transition-all duration-500 mb-12"
        >
          <img
            src="/blog/article-1.jpg"
            alt="Featured"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <span className="inline-block bg-[#A67C52] text-[#000814] text-[10px] font-bold px-3 py-1 rounded tracking-wider mb-4">
              FEATURED
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white group-hover:text-[#A67C52] transition-colors">
              КАК ВЫБРАТЬ ИДЕАЛЬНЫЕ БОКСЁРСКИЕ ПЕРЧАТКИ
            </h2>
            <p className="mt-3 text-sm text-[#C5C3C6] max-w-xl">
              Полное руководство по выбору профессиональных боксёрских перчаток. Разбираем вес, материалы, типы набивки и шнуровки.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs text-[#5C677D]">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 15 апреля 2026</span>
              <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> Бокс</span>
            </div>
          </div>
        </Link>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-[#000a1a] border border-white/5 rounded-lg overflow-hidden hover:border-[#A67C52]/20 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] text-[#A67C52] tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-[#5C677D]">{post.date}</span>
                </div>
                <h3 className="font-display text-xl text-[#C5C3C6] group-hover:text-[#A67C52] transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-[#5C677D] leading-relaxed">{post.excerpt}</p>
                <button className="mt-4 flex items-center gap-2 text-sm text-[#A67C52] group-hover:gap-3 transition-all">
                  Читать статью
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
