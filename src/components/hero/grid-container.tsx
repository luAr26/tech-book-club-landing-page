export default function GridContainer({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="xl:mt-20 xl:grid xl:grid-cols-2">{children}</div>;
}
