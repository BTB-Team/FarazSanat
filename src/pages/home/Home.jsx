import HeroHome from './HeroHome';
import FeaturedCarousel from'./FeaturedCarousel';
import Introduction from './Introduction';
import FeaturedServices from './FeaturedServices'; 
import FAQ from './FAQ';
import CTA from '@/components/cta/CTA';
export default function Home() {
  return (
    <>
      <HeroHome/>
      <FeaturedCarousel/>
      <Introduction/>
      <FeaturedServices/>
      <FAQ/>
      <CTA/>
    </>
  );
}
