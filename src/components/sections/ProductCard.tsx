import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="group h-full hover:shadow-lg transition-all hover:border-teal-200 dark:hover:border-teal-800">
        <CardHeader className="p-4 lg:p-6">
          <div className="flex items-center gap-3 lg:gap-4">
            <div className="p-2 rounded-lg bg-teal-50 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400 group-hover:bg-teal-100 dark:group-hover:bg-teal-900 transition-colors">
              {product.icon}
            </div>
            <CardTitle className="text-lg lg:text-xl">{product.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 lg:p-6 pt-0 lg:pt-0">
          {product.image && (
            <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 mb-4">
            {product.description || "Streamline your operations with our comprehensive solution."}
          </p>
          <Button 
            variant="outline" 
            className="w-full border-teal-200 hover:bg-teal-50 dark:border-teal-800 dark:hover:bg-teal-900"
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}