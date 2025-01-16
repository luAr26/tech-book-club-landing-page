import HeroCTA from "@/components/hero-cta";
import HeroText from "@/components/hero-text";
import Logo from "@/components/logo";
import SocialProof from "@/components/social-proof";

export default function Hero() {
  return (
    <div className="-mx-4 bg-[url('/images/pattern-light-bg.svg')] bg-cover bg-center bg-no-repeat px-4">
      <Logo />
      <HeroText />
      <HeroCTA />
      <SocialProof />
    </div>
  );
}
