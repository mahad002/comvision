import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { ourServices } from '@/data/ourServices';
import { ArrowRight } from 'lucide-react';

export function OurServicesSection() {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Comprehensive range of software solutions and services to transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent dark:from-teal-950/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content Container */}
                  <div className="relative p-6">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 transition-colors duration-300 group-hover:bg-teal-100 dark:group-hover:bg-teal-900 group-hover:scale-110 transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 transition-all duration-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="absolute bottom-6 right-6 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center text-teal-600 dark:text-teal-400">
                        <span className="text-sm font-medium mr-2">Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-b from-teal-600 to-teal-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100" />
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}