import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, Sun, Moon, Code, Cloud, Smartphone, BarChart3, Users, 
  Cog, Share2, Palette, Network, Camera, ShoppingCart, Server 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  {
    name: 'Services',
    href: '/services',
    submenu: [
      {
        name: 'Software Solutions',
        items: [
          { name: 'Custom Development', href: '/services/custom-development', icon: <Code className="w-4 h-4" /> },
          { name: 'Cloud Solutions', href: '/services/cloud-solutions', icon: <Cloud className="w-4 h-4" /> },
          { name: 'Mobile Apps', href: '/services/mobile-apps', icon: <Smartphone className="w-4 h-4" /> },
          { name: 'Data Analytics', href: '/services/data-analytics', icon: <BarChart3 className="w-4 h-4" /> }
        ]
      },
      {
        name: 'Professional Services',
        items: [
          { name: 'Consultancy', href: '/services/consultancy', icon: <Users className="w-4 h-4" /> },
          { name: 'Deployment & Training', href: '/services/deployment', icon: <Cog className="w-4 h-4" /> },
          { name: 'Social Media', href: '/services/social-media', icon: <Share2 className="w-4 h-4" /> },
          { name: 'UI/UX Design', href: '/services/design', icon: <Palette className="w-4 h-4" /> }
        ]
      },
      {
        name: 'Hardware Solutions',
        items: [
          { name: 'Networking', href: '/services/networking', icon: <Network className="w-4 h-4" /> },
          { name: 'Security Systems', href: '/services/security', icon: <Camera className="w-4 h-4" /> },
          { name: 'POS Hardware', href: '/services/pos', icon: <ShoppingCart className="w-4 h-4" /> },
          { name: 'Servers', href: '/services/servers', icon: <Server className="w-4 h-4" /> }
        ]
      }
    ]
  },
  {
    name: 'Industries',
    href: '/industries',
    items: [
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Manufacturing', href: '/industries/manufacturing' }
    ]
  },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      {/* <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              
            </div>
            
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500">
                  ComVision
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mr-2"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>
                      <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500">
                        ComVision
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <nav className="flex flex-col space-y-4">
                      {navigation.map((item) => (
                        <div key={item.name} className="space-y-4">
                          <Link
                            to={item.href}
                            className={`block font-medium ${
                              location.pathname === item.href ? 'text-teal-600' : 'text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400'
                            }`}
                          >
                            {item.name}
                          </Link>
                          {item.submenu && (
                            <div className="pl-4 space-y-2">
                              {item.submenu.map((sub) => (
                                <div key={sub.name}>
                                  <h4 className="text-gray-500 text-sm font-semibold">{sub.name}</h4>
                                  {sub.items.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
                                    >
                                      {service.icon}
                                      <span>{service.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
