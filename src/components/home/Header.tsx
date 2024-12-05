"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => (
  <header className="flex justify-between items-center p-6 bg-white shadow-md">
    <div className="flex items-center space-x-4">
      <Image src="/assets/images/logo.svg" alt="Логотип" width={40} height={40} />
      <div className="text-xl font-bold">ПОРТАЛ СИТИ-КВАРТАЛ ОКТЯБРЬСКИЙ</div>
    </div>
    <nav className="space-x-6">
        <Button 
          variant="default"
          onClick={() => {
            console.log("аутентификация");
          }}
        >
          Войти в ЛК
        </Button>
    </nav>
  </header>
);

export default Header;
