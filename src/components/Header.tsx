import { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { totalItems } = useCart();
  const location = useLocation();

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'ГЛАВНАЯ', path: '/' },
    {
      label: 'МАГАЗИН',
      path: '#',
      dropdown: [
        { label: 'Кроссовки', path: '/shop/sneakers' },
        { label: 'Спортивные костюмы', path: '/shop/tracksuits' },
        { label: 'Куртки', path: '/shop/jackets' },
        { label: 'Кепки', path: '/shop/caps' },
        { label: 'Футболки', path: '/shop/tshirts' },
      ],
    },
    {
      label: 'ВИДЫ СПОРТА',
      path: '#',
      dropdown: [
        { label: 'Бокс', path: '/sport/boxing' },
        { label: 'Футбол', path: '/sport/football' },
        { label: 'MMA', path: '/sport/mma' },
        { label: 'Баскетбол', path: '/sport/basketball' },
      ],
    },
    { label: 'БЛОГ', path: '/blog' },
    { label: 'КОНТАКТЫ', path: '/contacts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000814]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="font-display text-2xl lg:text-3xl text-[#A67C52] tracking-wider">
              CLUB RING
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-4 py-2 text-xs tracking-widest transition-colors ${
                      isActive(link.path) ? 'text-[#A67C52]' : 'text-[#C5C3C6] hover:text-[#A67C52]'
                    }`}
                  >
                    {link.label}
                  </button>
                  {activeDropdown === link.label && (
                    <div 
                      className="absolute top-full left-0 mt-0 w-56 bg-[#000814]/95 backdrop-blur-xl border border-white/10 rounded-md overflow-hidden shadow-2xl"
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-3 text-sm text-[#C5C3C6] hover:text-[#A67C52] hover:bg-white/5 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-xs tracking-widest transition-colors ${
                    isActive(link.path) ? 'text-[#A67C52]' : 'text-[#C5C3C6] hover:text-[#A67C52]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative text-[#C5C3C6] hover:text-[#A67C52] transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#A67C52] text-[#000814] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden text-[#C5C3C6] hover:text-[#A67C52] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#000814]/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="space-y-1">
                  <div className="px-4 py-2 text-xs tracking-widest text-[#A67C52]">{link.label}</div>
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      className="block px-8 py-2 text-sm text-[#C5C3C6] hover:text-[#A67C52] transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 text-sm text-[#C5C3C6] hover:text-[#A67C52] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
