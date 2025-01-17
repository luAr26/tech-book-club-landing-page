import GridContainer from "@/components/hero/grid-container";
import HeroContainer from "@/components/hero/hero-container";
import HeroCTA from "@/components/hero/hero-cta";
import HeroImage from "@/components/hero/hero-image";
import HeroText from "@/components/hero/hero-text";
import HeroTopContainer from "@/components/hero/hero-top-container";
import Logo from "@/components/logo";
import SocialProof from "@/components/social-proof";

export default function Hero() {
  return (
    <HeroContainer>
      <Logo />
      <GridContainer>
        <HeroTopContainer>
          <HeroText />
          <HeroCTA />
          <SocialProof />
        </HeroTopContainer>
        <HeroImage />
      </GridContainer>
    </HeroContainer>
  );
}
