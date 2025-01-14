import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:comvisions@yahoo.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+923365090906';
  };

  const handleLocationClick = () => {
    window.open('https://goo.gl/maps/XgHfmuew3ucr6U8LA?coh=178573&entry=tt', '_blank');
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-white dark:bg-gray-900 border-teal-100 dark:border-teal-900">
              <div className="space-y-6">
                <button
                  onClick={handleLocationClick}
                  className="flex items-start gap-4 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                >
                  <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Shah Center, Punjab Market, G-13/4 Islamabad, Pakistan
                    </p>
                    <span className="text-teal-600 dark:text-teal-400 hover:underline text-sm mt-1 inline-block">
                      Get Directions
                    </span>
                  </div>
                </button>

                <button
                  onClick={handlePhoneClick}
                  className="flex items-start gap-4 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                >
                  <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      +92 336 5090906
                    </p>
                  </div>
                </button>

                <button
                  onClick={handleEmailClick}
                  className="flex items-start gap-4 w-full text-left hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
                >
                  <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                      comvisions@yahoo.com
                    </p>
                  </div>
                </button>

                <div className="flex items-start gap-4 p-2">
                  <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="p-6 bg-white dark:bg-gray-900 border-teal-100 dark:border-teal-900">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.3647224464603!2d72.96938952822933!3d33.650567592875184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9700cc87febd%3A0x5fe787b5adc681d9!2sCOMVISION!5e0!3m2!1sen!2s!4v1736825331129!5m2!1sen!2s"
                width="600"
                height="450"
                className="rounded-lg w-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-6 lg:p-8 bg-white dark:bg-gray-900 border-teal-100 dark:border-teal-900">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+92 XXX XXXXXXX"
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[120px] bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                <Button className="w-full">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}