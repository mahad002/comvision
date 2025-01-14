import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img
              className="h-12 w-auto mb-4"
              src="/comvision-logo.png"
              alt="Comvision"
            />
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Comvision provides integrated business solutions to help companies streamline their operations and achieve digital transformation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  Retail Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Comvision. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-100">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}