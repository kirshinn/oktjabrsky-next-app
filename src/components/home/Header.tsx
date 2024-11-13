import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-white shadow-md">
    <div className="flex items-center space-x-4">
      <Image src="/assets/images/logo.svg" alt="Логотип" width={40} height={40} />
      <div className="text-xl font-bold">ПОРТАЛ СИТИ-КВАРТАЛ ОКТЯБРЬСКИЙ</div>
    </div>
    <nav className="space-x-6">
      {/* <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Войти в ЛК
      </button> */}
      <Link href="/auth/login">
        <Button 
          variant="default"
          type="submit"
        >
          Войти в ЛК
        </Button>
      </Link>
    </nav>
  </header>
);

export default Header;
