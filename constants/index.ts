import { FAQ, Feature, PricingPlan, Template, Testimonial } from "@/types";

export const features: Feature[] = [
  {
    title: "Drag-and-Drop Editor",
    description: "Easily create your page layout without any code.",
    link: "/",
  },
  {
    title: "Mobile Responsive",
    description: "Your pages look great on any device automatically.",
    link: "/",
  },
  {
    title: "SEO Optimized",
    description: "Ensure your page ranks well on search engines.",
    link: "/",
  },
  {
    title: "Analytics Integration",
    description: "Gain insights into your audience with built-in analytics.",
    link: "/",
  },
  {
    title: "Custom Domain Support",
    description: "Connect your own domain to make your site truly unique.",
    link: "/",
  },
  {
    title: "E-Commerce Ready",
    description: "Easily add products and start selling online.",
    link: "/",
  },
];

export const templates: Template[] = [
  {
    title: "Modern Business",
    description: "Perfect for startups and businesses.",
    imageUrl: "/images/template1.jpg",
    altText: "Template 1",
  },
  {
    title: "Creative Portfolio",
    description: "Showcase your creative work beautifully.",
    imageUrl: "/images/template2.jpg",
    altText: "Template 2",
  },
  {
    title: "E-Commerce",
    description: "Ideal for online stores and shops.",
    imageUrl: "/images/template3.jpg",
    altText: "Template 3",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "LaunchCraft made it so easy for me to set up my business site. I had a page ready in minutes! The drag-and-drop editor is incredibly intuitive, and the whole process felt seamless. My clients were impressed with the professional look of the site.",
    name: "Alex P.",
    title: "Startup Founder",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote:
      "The templates are beautiful and really flexible. I could customize every detail without coding! I was initially worried about having a cookie-cutter website, but LaunchCraft let me add my own touch to everything.",
    name: "Sarah K.",
    title: "Freelancer",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    quote:
      "The support team was incredibly helpful and responsive. They made everything effortless! I had a few questions about customizing my layout, and they guided me through each step. LaunchCraft’s customer service is unmatched!",
    name: "Michael B.",
    title: "Business Owner",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    quote:
      "Highly recommend! The design options are so modern and sleek. My website now has the polished look I always wanted, and my clients love it too. LaunchCraft’s mobile responsiveness is a big plus.",
    name: "Emily W.",
    title: "Designer",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    quote:
      "Great experience overall! I was able to launch my site quickly and without hassle. The built-in analytics tools helped me understand my audience better and tailor my content accordingly.",
    name: "John D.",
    title: "Developer",
    profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    quote:
      "LaunchCraft exceeded my expectations. I loved how intuitive the platform is, and the SEO features helped boost my website’s visibility. It’s clear they’ve thought of everything a business might need.",
    name: "Rachel H.",
    title: "Product Manager",
    profileImage: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    quote:
      "Absolutely worth it! The support and design options were top-notch. The platform is perfect for both beginners and seasoned professionals. The custom domain feature was exactly what I was looking for.",
    name: "Chris T.",
    title: "Entrepreneur",
    profileImage: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    quote:
      "Using LaunchCraft was a game changer for my business. Setting up my e-commerce store was a breeze, and I was able to start selling online within days. Couldn’t be happier with the results!",
    name: "Emma B.",
    title: "Online Coach",
    profileImage: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    quote:
      "I launched my portfolio in no time and got amazing feedback on the design. LaunchCraft makes everything look professional. I especially appreciated the variety of templates that made my site stand out.",
    name: "David L.",
    title: "Photographer",
    profileImage: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    quote:
      "The templates are beautiful, and it was so easy to use. My site is now SEO-optimized, mobile-friendly, and reflects my brand perfectly. Couldn’t recommend LaunchCraft enough!",
    name: "Olivia M.",
    title: "Digital Marketer",
    profileImage: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$9",
    priceFrequency: "per month",
    features: [
      "Access to all templates",
      "Basic customization",
      "Email support",
    ],
    buttonLabel: "Get Started",
  },
  {
    title: "Pro",
    price: "$29",
    priceFrequency: "per month",
    features: ["Advanced customization", "Priority support", "Custom domains"],
    buttonLabel: "Get Started",
  },
  {
    title: "Enterprise",
    price: "Contact Us",
    features: [
      "Full customization",
      "Dedicated support",
      "Custom integrations",
    ],
    buttonLabel: "Contact Us",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is LaunchCraft?",
    answer:
      "LaunchCraft is a no-code landing page builder that helps you create stunning, responsive websites quickly and easily.",
  },
  {
    question: "Do I need any coding skills?",
    answer:
      "No coding skills are needed! LaunchCraft is designed for everyone, from beginners to professionals.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes! You can connect your custom domain on our Pro and Enterprise plans.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features.",
  },
];
