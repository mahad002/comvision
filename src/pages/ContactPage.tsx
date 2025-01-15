import { motion } from 'framer-motion';
import { ContactSection } from '@/components/sections/ContactSection';

export function ContactPage() {
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
            Contact Us
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can help transform your business.
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
              {/* <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Visit Our Office
              </h2> */}
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Who We Are
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                Customized software solutions for all businesses
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                With its diamond jubilee in the industry, ComVision aims to be the most reliable software company. We deal in customized software solutions for all kinds of business. Our vision is to provide clients with the latest technological solutions and not just the basic package. We have tailored solutions and products according to the requirements and needs of the client. Here at ComVision, client satisfaction is all that matters. From simple inventory management system to customized point of sale solution, BI reporting, finance management, employee management, attendance management, central management system(single/multiple branch(es)), and cloud based web-app, ComVision gives you an all-in-one package to help you run your business efficiently.
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

      <ContactSection />
    </div>
  );
}