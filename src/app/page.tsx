import Benefits from "@/components/benefits/benefits";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Hero from "@/components/hero/hero";
import MembershipOptions from "@/components/membership/membership-options";
import ReadingJourney from "@/components/reading-journey/reading-journey";
import Testimonial from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <>
      <Container>
        <Hero />
        <Benefits />
        <ReadingJourney />
        <MembershipOptions />
        <Testimonial />
      </Container>
      <Footer />
    </>
  );
}
