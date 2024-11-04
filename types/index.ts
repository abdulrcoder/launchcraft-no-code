export type Feature = {
  title: string;
  description: string;
  link: string;
};

export type Template = {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  profileImage: string;
};

export type PricingPlan = {
  title: string;
  price: string;
  priceFrequency?: string;
  features: string[];
  buttonLabel: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
