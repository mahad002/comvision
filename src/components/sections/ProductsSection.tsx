import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState(products[0].category.toLowerCase());

  return (
    <section id="products" className="py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-8 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500">
            Our Products
          </h2>
          <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300">
            Discover our comprehensive range of business solutions
          </p>
        </motion.div>

        <Tabs defaultValue={activeCategory} className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8 lg:mb-12">
            <ScrollArea className="w-full max-w-3xl whitespace-nowrap rounded-lg">
              <TabsList className="inline-flex h-auto p-1 bg-transparent">
                {products.map((category) => (
                  <TabsTrigger 
                    key={category.category.toLowerCase()} 
                    value={category.category.toLowerCase()}
                    className="rounded-full border border-teal-200 bg-white px-4 sm:px-6 py-2 text-sm whitespace-nowrap hover:bg-teal-50 data-[state=active]:bg-teal-600 data-[state=active]:text-white dark:border-teal-800 dark:bg-gray-900 dark:hover:bg-teal-900 transition-all"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>
              <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>
          </div>

          {products.map((category) => (
            <TabsContent 
              key={category.category.toLowerCase()} 
              value={category.category.toLowerCase()}
              className="mt-4 lg:mt-6"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="text-center max-w-2xl mx-auto mb-6 lg:mb-8">
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category.category}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 w-full">
                  {category.items.map((product, index) => (
                    <ProductCard key={product.name} product={product} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}