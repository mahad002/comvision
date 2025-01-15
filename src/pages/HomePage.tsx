import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { IBSServicesSection } from '@/components/sections/IBSServicesSection';
import { OurServicesSection } from '@/components/sections/OurServicesSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
// import { TechnologiesSection } from '@/components/sections/TechnologiesSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <TechnologiesSection /> */}
      <OurServicesSection />
      <IBSServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}