import { useState } from 'react';
import { Star, ThumbsUp, Send } from 'lucide-react';
import { reviews } from '../data/products';

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', rating: 5, text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: '', rating: 5, text: '' });
    }, 3000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-[10px] text-[#F7B538] tracking-[0.3em] uppercase">Отзывы</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#C5C3C6] mt-2">
            ОТЗЫВЫ КЛИЕНТОВ
          </h1>
          <p className="mt-4 text-sm text-[#5C677D]">
            Узнайте, что говорят о нас наши покупатели. Ваше мнение помогает нам становиться лучше.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-[#000a1a] border border-white/5 rounded-lg p-5 text-center">
            <div className="font-display text-3xl text-[#F7B538]">4.9</div>
            <div className="flex items-center justify-center gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#F7B538]" fill="currentColor" />
              ))}
            </div>
            <div className="text-xs text-[#5C677D] mt-2">Средняя оценка</div>
          </div>
          <div className="bg-[#000a1a] border border-white/5 rounded-lg p-5 text-center">
            <div className="font-display text-3xl text-[#F7B538]">340+</div>
            <div className="text-xs text-[#5C677D] mt-2">Отзывов</div>
          </div>
          <div className="bg-[#000a1a] border border-white/5 rounded-lg p-5 text-center">
            <div className="font-display text-3xl text-[#F7B538]">98%</div>
            <div className="text-xs text-[#5C677D] mt-2">Рекомендуют</div>
          </div>
          <div className="bg-[#000a1a] border border-white/5 rounded-lg p-5 text-center">
            <div className="font-display text-3xl text-[#F7B538]">5★</div>
            <div className="text-xs text-[#5C677D] mt-2">Большинство оценок</div>
          </div>
        </div>

        {/* Write Review Button */}
        <div className="mb-10">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#F7B538] hover:bg-[#BC6C25] text-[#000814] px-8 py-3 rounded-md font-medium text-sm transition-colors"
          >
            {showForm ? 'ОТМЕНИТЬ' : 'ОСТАВИТЬ ОТЗЫВ'}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <div className="mb-12 bg-[#000a1a] border border-white/5 rounded-lg p-6">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-display text-2xl text-[#C5C3C6]">Спасибо за отзыв!</h3>
                <p className="mt-2 text-sm text-[#5C677D]">Ваш отзыв появится после модерации.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl text-[#C5C3C6]">Написать отзыв</h3>
                <div>
                  <label className="block text-xs text-[#5C677D] mb-2">Ваше имя *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#F7B538] transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#5C677D] mb-2">Оценка</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= formData.rating ? 'text-[#F7B538]' : 'text-[#5C677D]'
                          }`}
                          fill={star <= formData.rating ? 'currentColor' : 'none'}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#5C677D] mb-2">Отзыв *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    className="w-full bg-[#000814] border border-white/10 rounded-md px-4 py-3 text-sm text-[#C5C3C6] focus:outline-none focus:border-[#F7B538] transition-colors resize-none"
                    placeholder="Расскажите о вашем опыте..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#F7B538] hover:bg-[#BC6C25] text-[#000814] px-6 py-3 rounded-md font-medium text-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  ОТПРАВИТЬ ОТЗЫВ
                </button>
              </form>
            )}
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#000a1a] border border-white/5 rounded-lg p-6 hover:border-[#F7B538]/10 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F7B538]/20 to-[#BC6C25]/20 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-display text-lg text-[#F7B538]">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="font-medium text-[#C5C3C6]">{review.name}</span>
                      <span className="text-xs text-[#5C677D] ml-3">{review.date}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'text-[#F7B538]' : 'text-[#5C677D]'}`}
                          fill={i < review.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[#C5C3C6] leading-relaxed">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
