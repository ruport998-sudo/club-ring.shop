import { Link } from 'react-router';
import { ShoppingBag, Star } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const defaultSize = product.sizes[0];

  return (
    <div className="group relative bg-[#000814] border border-white/5 rounded-lg overflow-hidden hover:border-[#A67C52]/30 transition-all duration-500">
      {/* Image */}
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-[#000a1a]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Hover overlay with quick add */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product, defaultSize);
            }}
            className="bg-[#A67C52] hover:bg-[#BC6C25] text-[#000814] px-6 py-3 rounded-md font-medium text-sm flex items-center gap-2 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            В КОРЗИНУ
          </button>
        </div>
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-[#A67C52] text-[#000814] text-[10px] font-bold px-2 py-1 rounded tracking-wider">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[#BC6C25] text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider flex items-center gap-1">
              <Star className="w-3 h-3" />
              TOP
            </span>
          )}
          {product.oldPrice && (
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider">
              SALE
            </span>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <div className="text-[10px] text-[#5C677D] tracking-widest uppercase mb-1">
          {product.sport}
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-lg text-[#C5C3C6] group-hover:text-[#A67C52] transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-[#A67C52] font-display text-xl">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
          {product.oldPrice && (
            <span className="text-[#5C677D] line-through text-sm">
              {product.oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
