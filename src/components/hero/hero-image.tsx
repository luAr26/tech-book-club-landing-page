import Image from "next/image";

export default function HeroImage() {
  return (
    <>
      {/* Mobile image */}
      <div className="relative mt-16 h-[372px] w-[343] overflow-hidden rounded-md md:hidden">
        <Image
          src="/images/image-hero-mobile.webp"
          alt="People reading books together."
          fill
          className="object-cover"
          sizes="343px"
        />
      </div>
      {/* Tablet image */}
      <div className="relative mt-16 hidden h-[798px] w-[704px] overflow-hidden rounded-md md:block xl:hidden">
        <Image
          src="/images/image-hero-tablet.webp"
          alt="People reading books together."
          fill
          className="object-cover"
          sizes="704px"
        />
      </div>

      {/* Desktop image */}
      <div className="relative hidden h-[606px] w-[536px] justify-self-end overflow-hidden rounded-md xl:block">
        <Image
          src="/images/image-hero-desktop.webp"
          alt="People reading books together."
          fill
          className="object-cover"
          sizes="704px"
        />
      </div>
    </>
  );
}
