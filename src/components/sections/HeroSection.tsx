import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const phrases = [
  "Transform Your Business with Integrated Solutions",
  "Innovate with Advanced Cloud Technologies",
  "Streamline Operations with Smart Software",
  "Accelerate Growth with Digital Solutions"
];

export function HeroSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          setTypingSpeed(100);
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(50);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          setTypingSpeed(50);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(100);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 lg:pt-24 pb-12 lg:pb-16">
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="min-h-[12rem] lg:min-h-[16rem] flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500">
              {currentText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
          <p className="mt-4 lg:mt-6 text-base lg:text-lg leading-7 lg:leading-8 text-gray-600 dark:text-gray-300 px-4">
            Comprehensive software solutions designed to streamline your operations and drive growth
          </p>
          <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            <Button size="lg" className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-teal-200 hover:bg-teal-50 dark:border-teal-800 dark:hover:bg-teal-900"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}