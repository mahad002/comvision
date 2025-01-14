import { motion } from 'framer-motion';
import { OurServicesSection } from '@/components/sections/OurServicesSection';
import { IBSServicesSection } from '@/components/sections/IBSServicesSection';

export function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50/50 to-white dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 mb-6">
            Our Services
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software solutions and services to transform your business operations
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Our Services Section */}
        <OurServicesSection />
        
        {/* IBS Services Section */}
        <IBSServicesSection />
        
      </div>
    </div>
  );
}