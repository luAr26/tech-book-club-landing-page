export default function HeroContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative -mx-4 overflow-hidden px-4 pb-[80px] pt-6 md:-mx-8 md:px-8 md:pt-8">
      {children}
      <div className="hero-bg absolute bottom-0 right-0 -z-10 h-[684px] w-[684px] translate-x-[50%] translate-y-[50%]"></div>
    </div>
  );
}

// bg-[url('/images/pattern-light-bg.svg')]
