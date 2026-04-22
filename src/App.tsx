import { Routes, Route } from 'react-router'
import { CartProvider } from './hooks/useCart'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import SportPage from './pages/SportPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import BlogPage from './pages/BlogPage'
import FAQPage from './pages/FAQPage'
import ContactsPage from './pages/ContactsPage'
import ReviewsPage from './pages/ReviewsPage'

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/sport/:sport" element={<SportPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}
