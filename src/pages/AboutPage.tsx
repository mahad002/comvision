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
              ComVision started as a small team of passionate developers with a vision to revolutionize the software industry. Over the years, we have grown into a dynamic company that values innovation, quality, and customer satisfaction. Our mission is to deliver cutting-edge software solutions that empower businesses to achieve their goals and stay ahead in a competitive market. We are committed to continuous improvement and excellence in everything we do, ensuring that our clients receive the best possible service and support.
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

      <AboutSection />
    </div>
  );
}