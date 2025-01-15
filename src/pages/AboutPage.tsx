import { motion } from 'framer-motion';
import { AboutSection } from '@/components/sections/AboutSection';
import { TechnologiesSection } from '@/components/sections/TechnologiesSection';

const techLogos = [
  'https://vuejs.org/images/logo.png',
  'https://angular.io/assets/images/logos/angular/angular.svg',
  'https://reactjs.org/logo-180x180.png',
  'https://www.comvision.pk/Assets/images/Expert/Backend/nodejs.png',
  'https://www.python.org/static/community_logos/python-logo-generic.svg',
  'https://laravel.com/img/logomark.min.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg',
  'https://www.mysql.com/common/logos/logo-mysql-170x115.png'
];

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50/50 to-white dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 mb-6">
                About ComVision
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Empowering businesses through innovative technology solutions and expert software development
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-2 bg-teal-50 dark:bg-teal-900/50 px-4 py-2 rounded-full"
                >
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">25+ Years</span>
                  <span className="text-gray-600 dark:text-gray-400">Experience</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 bg-teal-50 dark:bg-teal-900/50 px-4 py-2 rounded-full"
                >
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">500+</span>
                  <span className="text-gray-600 dark:text-gray-400">Happy Clients</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 bg-teal-50 dark:bg-teal-900/50 px-4 py-2 rounded-full"
                >
                  <span className="text-teal-600 dark:text-teal-400 font-semibold">60+</span>
                  <span className="text-gray-600 dark:text-gray-400">Products</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Technology Logos Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-4 gap-4">
                {techLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={logo}
                      alt={`Technology ${index + 1}`}
                      className="w-full h-12 object-contain"
                    />
                  </motion.div>
                ))}
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rich Content Area */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            {/* Content */}
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

            {/* Media */}
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

      <TechnologiesSection />
      <AboutSection />
    </div>
  );
}