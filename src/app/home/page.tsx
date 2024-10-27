import Header from '@/app/components/home/Header';
import HeroSection from '@/app/components/home/HeroSection';
import InfoSection from '@/app/components/home/InfoSection';
import FeaturesSection from '@/app/components/home/FeaturesSection';
import Footer from '@/app/components/home/Footer';

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
