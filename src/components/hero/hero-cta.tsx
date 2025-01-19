import Image from "next/image";
import IconArrowDown from "/public/images/icon-arrow-down.svg";

export default function HeroCTA() {
  return (
    <a
      href="#membership"
      className="text-preset-6--mob md:text-preset-6 mt-8 inline-flex items-center gap-4 rounded-lg border-2 border-neutral-900 bg-light-salmon-50 px-6 py-5 uppercase hover:bg-gradient focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:ring-offset-[3px] md:gap-6"
    >
      <span>Review membership options </span>
      <Image src={IconArrowDown} alt="" width="16" height="17" sizes="16px" />
    </a>
  );
}
