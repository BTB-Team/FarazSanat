import AboutHero from './AboutHero';
import Introduction from '@/pages/home/Introduction';
import Leadership from './Leadership';
import TeamSection from './TeamSection';
import VisionMission from './VisionMission';
import CoreValues from './CoreValues';
import FactoryMachinery from './FactoryMachinery';
import CtaBlack from '@/components/cta/CtaBlack'; 

export default function About() {
  return (
    <div className="w-full bg-industrialGray overflow-hidden">
      <AboutHero />
      <Introduction/>
      <Leadership/>
      <TeamSection />
      <VisionMission/>
      <CoreValues />
      <FactoryMachinery/>
      <CtaBlack/> 
    </div>
  );
}
