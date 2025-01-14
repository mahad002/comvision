import { motion } from 'framer-motion';
import { Code, Building2, MapPin, Award, Brain, Sparkles, Target } from 'lucide-react';
import { Card } from "@/components/ui/card";
// import { Shield, Clock, Heart } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '25+', icon: <Building2 className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '500+', icon: <Award className="w-5 h-5" /> },
  { label: 'Products', value: '60+', icon: <Code className="w-5 h-5" /> },
  { label: 'Cities', value: '40+', icon: <MapPin className="w-5 h-5" /> },
];

const values = [
  { 
    title: 'Innovation', 
    icon: <Sparkles className="w-6 h-6" />, 
    description: 'We continuously explore and implement cutting-edge technologies to deliver transformative solutions.' 
  },
  { 
    title: 'Excellence', 
    icon: <Target className="w-6 h-6" />, 
    description: 'We strive for excellence in everything we do through our competitive human resource force.' 
  },
  { 
    title: 'Expertise', 
    icon: <Brain className="w-6 h-6" />, 
    description: 'Our team of experienced professionals brings deep domain knowledge and technical expertise.' 
  },
];

const timeline = [
  { year: '2008', title: 'Company Founded', description: 'ComVision was established with a vision to transform business operations through technology.' },
  { year: '2012', title: 'Major Expansion', description: 'Expanded our product portfolio to include 20+ business solutions.' },
  { year: '2016', title: 'Cloud Solutions', description: 'Launched our cloud-based solutions for better accessibility and scalability.' },
  { year: '2020', title: 'Global Reach', description: 'Extended our services to international markets with localized solutions.' },
  { year: '2023', title: 'Innovation Hub', description: 'Established R&D center for emerging technologies and AI integration.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 overflow-hidden">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 mb-6">
            Empowering Businesses Through Technology
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            ComVision is a specialized software company providing innovative business solutions
            that help organizations improve their operations and achieve their objectives.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-12 mb-16 lg:mb-24"
        >
          <Card className="p-8 bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-100 dark:border-teal-900">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We envision a future where our software solutions revolutionize how organizations operate, enabling them to streamline processes, enhance productivity, and gain a competitive edge. By harnessing the power of emerging technologies such as artificial intelligence, machine learning, cloud computing, and data analytics, we aim to create transformative solutions that address complex challenges and unlock new opportunities.
            </p>
          </Card>
          <Card className="p-8 bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-100 dark:border-teal-900">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              We envision a future where our software solutions revolutionize how organizations operate, enabling them to streamline processes, enhance productivity, and gain a competitive edge. By harnessing the power of emerging technologies such as artificial intelligence, machine learning, cloud computing, and data analytics, we aim to create transformative solutions that address complex challenges and unlock new opportunities.
            </p>
          </Card>
        </motion.div>

        {/* Why Comvision */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Comvision?
            </h3>
          </div>
          <Card className="p-8 bg-gradient-to-br from-teal-500/10 to-teal-600/10 border-teal-100 dark:border-teal-900">
            <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              Comvision is a specialized software company with a dedicated focus on developing high-quality software solutions. Our team consists of experienced software engineers and professionals who have deep expertise in various technologies and domains. This expertise allows us to deliver tailored and innovative solutions to address your specific business needs.
            </p>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16 lg:mb-24"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg blur-lg opacity-25 group-hover:opacity-40 transition-opacity" />
              <Card className="relative h-full p-6 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 border-teal-100 dark:border-teal-900 group-hover:border-teal-200 dark:group-hover:border-teal-800 transition-colors">
                <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-24"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="p-6 bg-white dark:bg-gray-900 border-teal-100 dark:border-teal-900">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{value.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              A timeline of our major milestones and achievements
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-teal-600 to-teal-200 dark:from-teal-500 dark:to-teal-900" />
            
            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-500 z-10">
                    <div className="absolute inset-0 rounded-full bg-teal-600 dark:bg-teal-500 animate-ping opacity-75" />
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-teal-100 dark:border-teal-900">
                      <div className="text-teal-600 dark:text-teal-400 font-bold mb-2">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}