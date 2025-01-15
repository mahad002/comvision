import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
// import {  X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 justify-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              className="h-10 w-auto mb-2"
              src="https://www.comvision.pk/Assets/images/Logo/Logo-Comvision-nav.png"
              alt="Comvision"
            />
          </Link>
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="lg:hidden"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="lg:hidden"
                    >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="lg:hidden">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex items-center justify-between">
                    <Link to="/" className="-m-1.5 p-1.5" onClick={handleCloseMenu}>
                      <img
                        className="h-8 w-auto"
                        src="https://www.comvision.pk/Assets/images/Logo/Logo-Comvision-nav.png"
                        alt="Comvision"
                      />
                    </Link>
              {/* <Button variant="ghost" onClick={handleCloseMenu}>
                <X className="h-6 w-6" />
              </Button> */}
            </div>
          </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-800">
            <div className="space-y-2 py-6">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
            <Link
              key={item.name}
              to={item.href}
              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                isActive
                  ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/50'
                  : 'text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
              onClick={handleCloseMenu}
            >
              {item.name}
            </Link>
                );
              })}
            </div>
            <div className="py-6">
              <Button className="w-full">Contact Sales</Button>
            </div>
          </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 justify-center">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  isActive
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-gray-900 dark:text-gray-100 hover:text-teal-600 dark:hover:text-teal-400'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop Theme Toggle Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button>Contact Sales</Button>
        </div>
      </nav>
    </header>
  );
}
