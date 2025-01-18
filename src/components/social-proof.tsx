import Rating from "@/components/rating";
import { clsx } from "clsx";
import Image from "next/image";

type SocialProofProps = {
  dark?: boolean;
};

export default function SocialProof({ dark }: SocialProofProps) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <div className="relative h-[40px] w-[110px] shrink-0">
        <Image
          src="/images/image-avatars.webp"
          fill
          alt="avatars of people"
          sizes="110px"
        />
      </div>
      <div>
        <Rating />
        <p
          className={clsx(
            "text-preset-7 mt-1",
            dark ? "text-neutral-50" : "text-neutral-700",
          )}
        >
          200+ developers joined already
        </p>
      </div>
    </div>
  );
}
