import { Code, Cloud, Smartphone, BarChart3, Users, Cog, Share2, Palette } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface OurService {
  title: string;
  icon: LucideIcon;
  description: string;
  href: string;
}

export const ourServices: OurService[] = [
  {
    title: "Customized Software Development",
    icon: Code,
    description: "We create integrated business solutions for companies of all sizes. Create your own application with us from start or modify one of our 100+ pre-existing solutions.",
    href: "/services/software-development"
  },
  {
    title: "Web & Cloud",
    icon: Cloud,
    description: "Take your business to the next level with our cloud based solution. Track your logs and using our extensive BI dashboards, central management system for single and multiple branches, E-commerce solutions and much more",
    href: "/services/web-cloud"
  },
  {
    title: "Mobile Applications Development",
    icon: Smartphone,
    description: "Bring your business to the palm of your hand. Develop a fully functional mobile application with us according to your needs using the latest tools and technologies",
    href: "/services/mobile-apps"
  },
  {
    title: "Data Analytics & Audit Services",
    icon: BarChart3,
    description: "Discover insightful and valuable information from your data using our data analytics and audit services. Get help improving your business.",
    href: "/services/data-analytics"
  },
  {
    title: "Retail Chain Consultancy",
    icon: Users,
    description: "Specialized consultancy provided to businesses of all sizes. Improve the quality of your business, client satisfaction and be in tune with new trends in the market.",
    href: "/services/retail-consultancy"
  },
  {
    title: "Software Deployment & Trainings",
    icon: Cog,
    description: "Along with the complete deployment of the software, our expert team will give your staff all the hands on training to use the software and its features.",
    href: "/services/deployment-training"
  },
  {
    title: "Social Media Campaign",
    icon: Share2,
    description: "Why stay back in the world of social media and advancement? With our social media campaign, take your business on all social media platforms: facebook, instagram, twitter(X),etc.",
    href: "/services/social-media"
  },
  {
    title: "Graphic Designing (UI/UX)",
    icon: Palette,
    description: "Everything is incomplete without attractive graphic designs and themes in your website. We deal in all kinds of UI/UX designing: logo, mockup, theme, etc.",
    href: "/services/graphic-design"
  }
];