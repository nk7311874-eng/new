import {
  Bot,
  BarChart3,
  Chrome,
  Facebook,
  Globe,
  Megaphone,
  PenTool,
  Scissors,
  Search,
  Share2,
  Target,
  Instagram,
  Palette,
  Video,
  Layout,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Nitish Kumar',
  heroGreeting: "Hi, I'm",
  title: 'Digital Marketer | Meta Ads | SEO | Social Media Marketing',
  description:
    'I help businesses grow online through creative content strategies, social media marketing, paid advertising, and SEO.',
  profileImage: '/profile.png',
  profileImageAlt: 'Portrait of Nitish Kumar, Digital Marketer',
  aboutText:
    "I'm Nitish Kumar, a Digital Marketer passionate about helping businesses build their online presence. I am continuously learning and developing practical skills in Meta Ads, SEO, Social Media Marketing, Content Creation, and Digital Strategy.",
  footerText: '© 2026 Nitish Kumar | Digital Marketer. All Rights Reserved.',
};

export const contactDetails = {
  email: 'nk7311874@gmail.com',
  whatsappUrl: 'https://wa.me/919709619661',
  whatsappLabel: '+91 97096 19661',
  instagramUrl: 'https://www.instagram.com/your_handle',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tools', href: '#tools' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const skills: { name: string; description: string; icon: LucideIcon }[] = [
  { name: 'Meta Ads', description: 'Campaign setup, audience targeting and creative testing on Facebook and Instagram.', icon: Megaphone },
  { name: 'Social Media Marketing', description: 'Planning and posting content that builds reach and engagement.', icon: Share2 },
  { name: 'SEO', description: 'On-page optimisation, keyword research and search visibility basics.', icon: Search },
  { name: 'Content Strategy', description: 'Turning business goals into content pillars and a consistent calendar.', icon: PenTool },
  { name: 'Canva Designing', description: 'Scroll-stopping posts, carousels, banners and ad creatives.', icon: Palette },
  { name: 'Video Editing (CapCut)', description: 'Short-form reels and edits with hooks, captions and pacing.', icon: Video },
  { name: 'Lead Generation', description: 'Lead forms, landing flows and funnels that capture enquiries.', icon: Target },
  { name: 'Digital Marketing Strategy', description: 'Connecting channels into one plan built around measurable goals.', icon: BarChart3 },
];

export const services: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Meta Ads Campaign Management',
    description: 'Structured Facebook and Instagram campaigns, from audience research and creatives to testing and reporting.',
    icon: Megaphone,
  },
  {
    title: 'Social Media Management',
    description: 'Content planning, posting schedules and community engagement to keep your brand active and recognisable.',
    icon: Share2,
  },
  {
    title: 'SEO Optimization',
    description: 'Keyword research, on-page improvements and content structure to help your pages get found.',
    icon: Search,
  },
  {
    title: 'Content Creation',
    description: 'Designed graphics and short videos tailored to your audience and the platform they use.',
    icon: PenTool,
  },
  {
    title: 'Lead Generation',
    description: 'Lead-focused ad setups and simple funnels designed to turn attention into enquiries.',
    icon: Target,
  },
  {
    title: 'Instagram Marketing',
    description: 'Profile optimisation, reels and carousel strategy aimed at growing followers who care about your offer.',
    icon: Instagram,
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  focus: string[];
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    title: 'Magadh Vatika',
    category: 'Real Estate Lead Generation Campaign',
    description:
      'A lead-generation campaign concept for a real estate project, combining property-focused ad creatives with audience targeting and enquiry-led messaging.',
    focus: ['Meta Ads', 'Ad Creatives', 'Lead Forms'],
    image: 'https://images.pexels.com/photos/7578866/pexels-photo-7578866.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Real estate agent with a for sale sign in front of a house',
  },
  {
    title: 'Bizneeti Academy',
    category: 'Educational Marketing Campaign',
    description:
      'An educational marketing campaign built around clear course messaging, short-form content and a consistent social presence for learners.',
    focus: ['Content Strategy', 'Social Media', 'Video Editing'],
    image: 'https://images.pexels.com/photos/8055848/pexels-photo-8055848.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Student engaged in online learning with a laptop and notes',
  },
  {
    title: 'Instagram Content Strategy',
    category: 'AI Tools for Students',
    description:
      'A content strategy for an AI tools audience, mapping educational reels and carousels to the questions students search for most.',
    focus: ['Instagram', 'Content Planning', 'Canva'],
    image: 'https://images.pexels.com/photos/6016362/pexels-photo-6016362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Person creating social media content on a smartphone',
  },
  {
    title: 'Social Media Ad Creatives',
    category: 'Ad Creative Design',
    description:
      'A set of static and video ad creatives designed in Canva and CapCut, with variations for hooks, headlines and calls to action to support testing.',
    focus: ['Canva', 'CapCut', 'A/B Creatives'],
    image: 'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Tablet displaying a web analytics dashboard',
  },
];

export const tools: { name: string; category: string; icon: LucideIcon; color: string }[] = [
  { name: 'Meta Ads Manager', category: 'Paid Advertising', icon: Facebook, color: 'text-blue-400' },
  { name: 'Google Analytics', category: 'Analytics', icon: BarChart3, color: 'text-amber-400' },
  { name: 'Google Search Console', category: 'SEO', icon: Search, color: 'text-sky-400' },
  { name: 'Canva', category: 'Design', icon: Palette, color: 'text-cyan-300' },
  { name: 'CapCut', category: 'Video Editing', icon: Scissors, color: 'text-slate-200' },
  { name: 'ChatGPT', category: 'Content & Research', icon: Bot, color: 'text-emerald-400' },
  { name: 'WordPress', category: 'Websites', icon: Layout, color: 'text-indigo-300' },
];

export const journeySteps: { title: string; status: string; description: string; icon: LucideIcon }[] = [
  {
    title: 'Digital Marketing Foundations',
    status: 'Studying',
    description: 'Core concepts of funnels, audiences, channels and how marketing goals are measured.',
    icon: Globe,
  },
  {
    title: 'Meta Ads Practice',
    status: 'Practising',
    description: 'Building campaign structures, testing audiences and creatives, and reading ad reports.',
    icon: Chrome,
  },
  {
    title: 'SEO & Search Visibility',
    status: 'Practising',
    description: 'Keyword research, on-page basics and using Search Console to understand search data.',
    icon: Search,
  },
  {
    title: 'Hands-on Projects',
    status: 'In progress',
    description: 'Designing creatives, planning content and building mock campaigns for real-world briefs.',
    icon: Layout,
  },
];
