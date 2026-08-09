import AboutHero from './AboutHero';
import Leadership from './Leadership';
import VisionMission from './VisionMission';
import CoreValues from './CoreValues';
import FactoryMachinery from './FactoryMachinery';
import CTA from '@/components/cta/CTA'; 

export default function About() {
  return (
    <div className="w-full bg-industrialGray overflow-hidden">
      <AboutHero />
      <Leadership/>
      <VisionMission/>
      <CoreValues />
      <FactoryMachinery/>
      <CTA /> 
    </div>
  );
}
