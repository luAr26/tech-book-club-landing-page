export default function HeroTopContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="xl:content-center">{children}</div>;
}
