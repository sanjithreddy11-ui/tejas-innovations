export type BlogFAQ = {
  question: string;
  answer: string;
};

export type BlogSection = {
  id: string;
  heading: string;
  content: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image:string;
  sections: BlogSection[];
  faqs?: BlogFAQ[];
};

import { websiteCostIndia2026 } from "./blogs/website-cost-india-2026";
import { websiteDevelopmentGuide2026 } from "./blogs/websiteDevelopmentGuide2026";
import { bestWebDevCompanyHyderabad2026 } from "./blogs/bestWebDevCompanyHyderabad2026";
import { seoForOldWebsites2026 } from "./blogs/seoForOldWebsites2026";
import { bestSeoAgencyHyderabad2026 } from "./blogs/bestSeoAgencyHyderabad2026";
import { websiteMaintenanceCostIndia2026 } from "./blogs/websiteMaintenanceCostIndia2026";
import { ecommerceWebsiteDevelopmentGuide2026 } from "./blogs/ecommerceWebsiteDevelopmentGuide2026";
import { wordpressVsCustomWebsite2026 } from "./blogs/wordpressVsCustomWebsite2026";
import { bestRestaurantWebsiteFeatures2026 } from "./blogs/bestRestaurantWebsiteFeatures2026";
import { realEstateWebsiteDevelopment2026 } from "./blogs/realEstateWebsiteDevelopment2026";

export const blogs: BlogPost[] = [
  websiteCostIndia2026,
  websiteDevelopmentGuide2026,
  bestWebDevCompanyHyderabad2026,
  seoForOldWebsites2026,
  bestSeoAgencyHyderabad2026,
  websiteMaintenanceCostIndia2026,
  ecommerceWebsiteDevelopmentGuide2026,
  wordpressVsCustomWebsite2026,
  bestRestaurantWebsiteFeatures2026,
  realEstateWebsiteDevelopment2026

];