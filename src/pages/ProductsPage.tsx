import { motion } from 'framer-motion';
import { ProductsSection } from '@/components/sections/ProductsSection';

export function ProductsPage() {
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
            Our Products
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of business solutions designed to streamline your operations
            and drive growth.
          </p>
        </motion.div>
      </section>

      {/* Rich Content Area */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Content Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Transform Your Business
              </h2>
                <p className="text-gray-600 dark:text-gray-300">
                {/* Add your custom content, images, and videos here to showcase your products in detail. */}
                Empowering your business with innovative solutions. Our products are designed to meet the unique needs of your business, providing you with the tools and resources necessary to succeed in today's competitive market. From advanced analytics to seamless integration, our solutions are built to enhance efficiency, drive growth, and ensure long-term success. Discover how our cutting-edge technology can transform your operations and take your business to the next level.
                </p>
            </motion.div>

            {/* Media Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <video className="w-full h-full" controls poster="https://www.comvision.pk/Assets/images/thumb-hrm.png">
                <source src="https://www.comvision.pk/Assets/video/HRM-Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      <ProductsSection />
    </div>
  );
}