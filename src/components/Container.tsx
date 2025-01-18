export default function Container({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mx-auto w-full max-w-[375px] px-4 md:max-w-screen-md md:px-8 xl:max-w-[1234px]">
      {children}
    </div>
  );
}
