export default function BenefitsContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="py-16 md:py-20 xl:py-[120px]">{children}</div>;
}
