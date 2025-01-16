import Rating from "@/components/rating";
import Image from "next/image";

export default function SocialProof() {
  return (
    <div className="mt-5 flex items-center gap-3">
      <div className="relative h-[40px] w-[110px] shrink-0">
        <Image src="/images/image-avatars.webp" fill alt="avatars of people" />
      </div>
      <div>
        <Rating />
        <p className="text-preset-7 mt-1">200+ developers joined already</p>
      </div>
    </div>
  );
}
