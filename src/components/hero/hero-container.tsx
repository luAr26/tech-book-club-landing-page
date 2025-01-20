import Container from "../container";

export default function HeroContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hero-main-bg">
      <div className="relative overflow-hidden pb-[80px] pt-6 md:pt-8">
        <Container>{children}</Container>
      </div>
    </div>
  );
}

// bg-[url('/images/pattern-light-bg.svg')]
