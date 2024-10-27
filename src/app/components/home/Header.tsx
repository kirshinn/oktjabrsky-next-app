import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-white shadow-md">
    <div className="flex items-center space-x-4">
      <Image src="/assets/images/logo.svg" alt="Логотип" width={40} height={40} />
      <div className="text-xl font-bold">ПОРТАЛ СИТИ-КВАРТАЛ ОКТЯБРЬСКИЙ</div>
    </div>
    <nav className="space-x-6">
      <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">Войти</Link>
    </nav>
  </header>
);

export default Header;
