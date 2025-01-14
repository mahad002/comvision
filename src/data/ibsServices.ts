import { Network, Camera, ShoppingCart, Server, Scale, Printer, Receipt, HardDrive } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface IBSService {
  title: string;
  icon: LucideIcon;
  description: string;
  href: string;
  image: string;
}

export const ibsServices: IBSService[] = [
  {
    title: "Networking",
    icon: Network,
    description: "Complete networking solutions for your business infrastructure",
    href: "networking",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "IP & Digital Camera Installation",
    icon: Camera,
    description: "Professional security camera installation and maintenance",
    href: "ip-camera",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "POS Hardware",
    icon: ShoppingCart,
    description: "Complete point of sale hardware solutions",
    href: "pos-hardware",
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Servers & Systems",
    icon: Server,
    description: "Enterprise-grade server and system solutions",
    href: "servers",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Digital Weighing Scales",
    icon: Scale,
    description: "Precision digital weighing solutions",
    href: "weighing-scales",
    image: "https://www.comvision.pk/Assets/images/OperationalServices/Digital%20Weighing%20Scales.png"
  },
  {
    title: "Thermal & Barcode Rolls Distribution",
    icon: Printer,
    description: "High-quality printing supplies for your business",
    href: "thermal-rolls",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Receipt Printers",
    icon: Receipt,
    description: "Reliable receipt printing solutions",
    href: "receipt-printers",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Data Recovery Services",
    icon: HardDrive,
    description: "Professional data recovery and backup solutions",
    href: "data-recovery",
    image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&w=2000&auto=format&fit=crop"
  }
];