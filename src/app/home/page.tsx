import Header from '@/components/home/Header';
import HeroSection from '@/components/home/HeroSection';
import InfoSection from '@/components/home/InfoSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import Footer from '@/components/home/Footer';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Главная - Площадка жителей комплекса - Сити-Квартал Октябрьский',
  description: 'Портал, площадка жителей комплекса Сити-Квартал Октябрьский',
};

const Home = () => (
  <div className="bg-gray-100">
    <Header />
    <HeroSection />
    <InfoSection />
    <FeaturesSection />
    <Footer />
  </div>
);

export default Home;
