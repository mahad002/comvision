import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { ibsServices } from '@/data/ibsServices';
import { ArrowRight } from 'lucide-react';

export function IBSServicesSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 mb-4">
            IBS Operational Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Complete range of support and maintenance functions to ensure smooth operation of your IT systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ibsServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-teal-200 dark:hover:border-teal-800">
                  {/* Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-white dark:bg-gray-900 transition-colors duration-300 group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 transition-colors duration-300 group-hover:bg-teal-100 dark:group-hover:bg-teal-900">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold transform group-hover:translate-x-1 transition-transform duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 transform opacity-80 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}