import { ReactNode } from 'react';
import {
  Store, Monitor, Settings, Utensils, CakeSlice, Coffee, Hospital, School,
   Factory, Box, Clock,  Glasses, Cloud, ShoppingCart, Smartphone, Shirt, 
  Palette, Pill,
  Cpu, PackageCheck,  Boxes,
  BookOpen, Scissors,
} from 'lucide-react';

// import {
//   Package, Flask, Kitchen, Archive, Building, Phone,  Briefcase, Building2, ShoppingBag, Salad, HardDrive,
//   Wrench, BookCheck, Cog, UserCircle, ClipboardList, Banknote, Home,  Hammer, GalleryVerticalEnd, DoorClosed, Construction, 
//   Coins, DollarSign, Key, Warehouse, Laptop,  Receipt, Gift, Users,  Beef, Gamepad, Shoes, Car, Fuel,
// } from 'lucide-react';

export interface Product {
  name: string;
  icon: ReactNode;
  description?: string;
  image?: string;
}

export interface ProductCategory {
  category: string;
  description: string;
  items: Product[];
}

export const products: ProductCategory[] = [
  {
    category: "Retail",
    description: "Complete retail management solutions for various business types",
    items: [
      { name: "IBS RMS (Retail Management System)", icon: <Store className="w-6 h-6" />, description: "Comprehensive retail management system" },
      { name: "IBS Point of Sale", icon: <Monitor className="w-6 h-6" />, description: "Advanced point of sale solution" },
      { name: "IBS Retail Chain Management", icon: <Settings className="w-6 h-6" />, description: "Multi-store retail chain management" },
      { name: "IBS Inventory Management System", icon: <Box className="w-6 h-6" />, description: "Efficient inventory control system" },
      { name: "IBS Cash & Carry", icon: <ShoppingCart className="w-6 h-6" />, description: "Wholesale management solution" }
    ]
  },
  {
    category: "Food & Beverage",
    description: "Specialized solutions for food service businesses",
    items: [
      { name: "IBS Restaurant Management System", icon: <Utensils className="w-6 h-6" />, description: "Complete restaurant management solution" },
      { name: "IBS Bakery Management System", icon: <CakeSlice className="w-6 h-6" />, description: "Bakery-specific management system" },
      { name: "IBS Shake Bar", icon: <Coffee className="w-6 h-6" />, description: "Beverage shop management" },
      { name: "IBS Coffee Shop", icon: <Coffee className="w-6 h-6" />, description: "Café management system" }
    ]
  },
  {
    category: "Healthcare",
    description: "Healthcare management solutions",
    items: [
      { name: "IBS Hospital Management System", icon: <Hospital className="w-6 h-6" />, description: "Complete hospital management solution" },
      { name: "IBS Pharmacy", icon: <Pill className="w-6 h-6" />, description: "Pharmacy management system" },
      { name: "Mobile App for Hospital Appointment", icon: <Smartphone className="w-6 h-6" />, description: "Patient appointment booking app" }
    ]
  },
  {
    category: "Fashion & Lifestyle",
    description: "Retail solutions for fashion and lifestyle businesses",
    items: [
      { name: "IBS Garments Shop", icon: <Shirt className="w-6 h-6" />, description: "Clothing store management" },
      { name: "IBS Cloth Store", icon: <Palette className="w-6 h-6" />, description: "Fabric store management" },
      { name: "IBS Optics Store", icon: <Glasses className="w-6 h-6" />, description: "Eyewear store management" },
      { name: "IBS Saloon", icon: <Scissors className="w-6 h-6" />, description: "Salon management system" }
    ]
  },
  {
    category: "Education",
    description: "Educational institution management solutions",
    items: [
      { name: "IBS School Management System", icon: <School className="w-6 h-6" />, description: "Complete school management solution" },
      { name: "IBS Books & Stationary", icon: <BookOpen className="w-6 h-6" />, description: "Bookstore management system" }
    ]
  },
  {
    category: "Manufacturing",
    description: "Solutions for manufacturing and production",
    items: [
      { name: "IBS Manufacturing Unit", icon: <Factory className="w-6 h-6" />, description: "Manufacturing process management" },
      { name: "IBS Production Unit", icon: <Cpu className="w-6 h-6" />, description: "Production line management" },
      { name: "IBS Packing Unit", icon: <PackageCheck className="w-6 h-6" />, description: "Packaging process management" },
      { name: "IBS Plastic Bags Factory", icon: <Boxes className="w-6 h-6" />, description: "Plastic manufacturing management" }
    ]
  },
  {
    category: "Cloud Solutions",
    description: "Cloud-based management solutions",
    items: [
      { name: "Central Management System Portal", icon: <Cloud className="w-6 h-6" />, description: "Centralized management platform" },
      { name: "E-Commerce Solution for Store", icon: <ShoppingCart className="w-6 h-6" />, description: "Online store platform" },
      { name: "E-Commerce Solution for Restaurants", icon: <Utensils className="w-6 h-6" />, description: "Restaurant online ordering system" },
      { name: "Central Management Mobile App", icon: <Smartphone className="w-6 h-6" />, description: "Mobile management solution" },
      { name: "Online Attendance App", icon: <Clock className="w-6 h-6" />, description: "Digital attendance tracking" }
    ]
  }
];