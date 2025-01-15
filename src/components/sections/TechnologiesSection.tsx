import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";

// interface Technology {
//   name: string;
//   logo: string;
// }

const technologies = {
  frontend: [
    { name: 'Vue.js', logo: 'https://vuejs.org/images/logo.png' },
    { name: 'Angular', logo: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { name: 'React', logo: 'https://reactjs.org/logo-180x180.png' },
    { name: 'Flutter', logo: 'https://www.comvision.pk/Assets/images/Expert/FrontEnd/flutter.png' },
    { name: 'Bootstrap', logo: 'https://www.comvision.pk/Assets/images/Expert/FrontEnd/bootstrap.png' },
    { name: 'jQuery', logo: 'https://www.comvision.pk/Assets/images/Expert/FrontEnd/jQuery.png' },
    { name: 'CSS3', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png' },
    { name: 'HTML5', logo: 'https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png' }
  ],
  backend: [
    { name: '.NET Core', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg' },
    { name: 'C#', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
    { name: 'Laravel', logo: 'https://laravel.com/img/logomark.min.svg' },
    { name: 'PHP', logo: 'https://www.php.net/images/logos/new-php-logo.svg' },
    { name: 'Node.js', logo: 'https://www.comvision.pk/Assets/images/Expert/Backend/nodejs.png' },
    { name: 'Python', logo: 'https://www.python.org/static/community_logos/python-logo-generic.svg' },
    { name: 'Dart', logo: 'https://www.comvision.pk/Assets/images/Expert/Backend/dart.png' },
    { name: 'Delphi', logo: 'https://www.embarcadero.com/images/logos/delphi-logo-128.png' }
  ],
  databases: [
    { name: 'SQL Server', logo: 'https://www.comvision.pk/Assets/images/Expert/Database/sql.png' },
    { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
    { name: 'PostgreSQL', logo: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
    { name: 'Oracle', logo: 'https://www.comvision.pk/Assets/images/Expert/Database/oracle.png' },
    { name: 'MongoDB', logo: 'https://www.mongodb.com/assets/images/global/leaf.png' },
    { name: 'CouchDB', logo: 'https://couchdb.apache.org/image/couch@2x.png' },
    { name: 'Firebase', logo: 'https://www.comvision.pk/Assets/images/Expert/Database/firebase.png' },
    { name: 'SQLite', logo: 'https://www.sqlite.org/images/sqlite370_banner.gif' }
  ],
  mobile: [
    { name: 'Flutter', logo: 'https://www.comvision.pk/Assets/images/Expert/FrontEnd/flutter.png' },
    { name: 'React Native', logo: 'https://reactnative.dev/img/header_logo.svg' },
    { name: 'Swift', logo: 'https://developer.apple.com/swift/images/swift-og.png' },
    { name: 'Kotlin', logo: 'https://kotlinlang.org/docs/images/kotlin-logo.png' },
    { name: 'Java', logo: 'https://www.comvision.pk/Assets/images/Expert/MobileDevelopment/java.png' },
    { name: 'Xamarin', logo: 'https://www.comvision.pk/Assets/images/Expert/MobileDevelopment/xamarin.png' },
    { name: 'Ionic', logo: 'https://ionicframework.com/img/meta/logo.png' },
    { name: 'Unity', logo: 'https://www.comvision.pk/Assets/images/Expert/MobileDevelopment/unity.png' }
  ],
  analytics: [
    { name: 'Power BI', logo: 'https://powerbi.microsoft.com/pictures/application-logos/svg/powerbi.svg' },
    { name: 'Oracle BI', logo: 'https://www.comvision.pk/Assets/images/Expert/Dataanalytics/obi.png' },
    { name: 'SQL Server Reporting', logo: 'https://www.comvision.pk/Assets/images/Expert/Dataanalytics/ssrs.png' },
    { name: 'R', logo: 'https://www.r-project.org/logo/Rlogo.png' },
    { name: 'Apache Spark', logo: 'https://spark.apache.org/images/spark-logo-trademark.png' },
    { name: 'Hadoop', logo: 'https://hadoop.apache.org/hadoop-logo.jpg' },
    { name: 'Tableau', logo: 'https://www.tableau.com/sites/default/files/2022-04/TableauLogo_RGB.png' },
    { name: 'Kafka', logo: 'https://kafka.apache.org/logos/kafka_logo--simple.png' }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function TechnologiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-500 mb-4">
            Technology and Platforms
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We leverage cutting-edge technologies to deliver robust and scalable solutions
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Frontend */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-teal-600 dark:text-teal-400">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.frontend.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants}>
                  <Card className="p-4 h-full flex flex-col items-center justify-center hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
                    <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain mb-2" />
                    <span className="text-sm text-center font-medium">{tech.name}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-teal-600 dark:text-teal-400">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.backend.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants}>
                  <Card className="p-4 h-full flex flex-col items-center justify-center hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
                    <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain mb-2" />
                    <span className="text-sm text-center font-medium">{tech.name}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-teal-600 dark:text-teal-400">Databases</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.databases.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants}>
                  <Card className="p-4 h-full flex flex-col items-center justify-center hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
                    <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain mb-2" />
                    <span className="text-sm text-center font-medium">{tech.name}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-teal-600 dark:text-teal-400">Mobile Development</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.mobile.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants}>
                  <Card className="p-4 h-full flex flex-col items-center justify-center hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
                    <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain mb-2" />
                    <span className="text-sm text-center font-medium">{tech.name}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Data Analytics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-teal-600 dark:text-teal-400">Data Analytics</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {technologies.analytics.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants}>
                  <Card className="p-4 h-full flex flex-col items-center justify-center hover:border-teal-200 dark:hover:border-teal-800 transition-colors">
                    <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain mb-2" />
                    <span className="text-sm text-center font-medium">{tech.name}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}