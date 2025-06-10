
import Hero from '@/components/home/Hero';
import LivePreview from '@/components/home/LivePreview';
import SupportedAlgorithms from '@/components/home/SupportedAlgorithms';
import HowItWorks from '@/components/home/HowItWorks';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Mission from '@/components/home/Mission';
import FAQ from '@/components/home/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LivePreview />
      <SupportedAlgorithms />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Mission />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
