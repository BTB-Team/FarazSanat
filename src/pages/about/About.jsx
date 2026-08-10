import AboutHero from './AboutHero';
import Introduction from '@/pages/home/Introduction';
import Leadership from './Leadership';
import VisionMission from './VisionMission';
import CoreValues from './CoreValues';
import FactoryMachinery from './FactoryMachinery';
import CTA from '@/components/cta/CTA'; 

export default function About() {
  return (
    <div className="w-full bg-industrialGray overflow-hidden">
      <AboutHero />
      <Introduction/>
      <Leadership/>
      <VisionMission/>
      <CoreValues />
      <FactoryMachinery/>
      <CTA /> 
    </div>
  );
}
