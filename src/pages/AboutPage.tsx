import { motion } from 'framer-motion';
import { AboutSection } from '@/components/sections/AboutSection';

export function AboutPage() {
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
            About ComVision
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn about our journey, mission, and commitment to delivering innovative software solutions.
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
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Add your custom content, images, and videos here to tell your company's story.
              </p>
            </motion.div>

            {/* Media Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Add your media content here
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}