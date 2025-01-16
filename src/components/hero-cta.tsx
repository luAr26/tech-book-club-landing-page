import Image from "next/image";
import IconArrowDown from "/public/images/icon-arrow-down.svg";

export default function HeroCTA() {
  return (
    <a
      href="#membership"
      className="text-preset-6--mob mt-8 flex w-full items-center gap-4 rounded-lg border-2 border-neutral-900 bg-light-salmon-50 px-6 py-5 uppercase"
    >
      <span>Review membership options </span>
      <Image src={IconArrowDown} alt="" width="16" height="17" />
    </a>
  );
}
