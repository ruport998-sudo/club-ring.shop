import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import AIChat from './AIChat';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#000814] text-[#C5C3C6]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
