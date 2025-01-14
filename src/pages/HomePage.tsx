import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { IBSServicesSection } from '@/components/sections/IBSServicesSection';
import { OurServicesSection } from '@/components/sections/OurServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <OurServicesSection />
      <IBSServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}