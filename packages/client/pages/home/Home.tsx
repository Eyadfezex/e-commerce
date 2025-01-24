/**
 * Home Page Component
 *
 * This component represents the homepage of the application. It combines various sections to provide a complete user experience.
 * The homepage includes a hero section, new arrivals, top-selling items, browse by dress style, and customer reviews.
 */

import BrowseDressStyle from "@/components/BrowseDressStyle";
import Hero from "@/components/Hero";
import NewArrival from "@/components/NewArrival";
import Reviews from "@/components/Reviews/ReviewSection";
import TopSelling from "@/components/TopSelling";

/**
 * Home Component
 * @returns {JSX.Element} - The homepage layout, combining multiple sections for a cohesive user experience.
 */
export default async function Home() {
  return (
    <>
      {/* Hero section showcasing featured content */}
      <Hero />
      {/* Section displaying newly arrived products */}
      <NewArrival />
      {/* Section highlighting top-selling items */}
      <TopSelling />
      {/* Section to browse products by dress style */}
      <BrowseDressStyle />
      {/* Customer review section */}
      <Reviews />
    </>
  );
}
