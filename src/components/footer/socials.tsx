import Image from "next/image";

export default function Socials() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <a
          href="#"
          className="relative inline-block h-[23px] w-[22px] rounded transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-900"
        >
          <span className="sr-only">Blue Sky</span>
          <Image src="/images/logo-bluesky.svg" alt="" fill sizes="22px" />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="relative inline-block h-[19px] w-[18px] rounded-sm transition-opacity hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-900"
        >
          <span className="sr-only">LinkedIn</span>
          <Image
            src="/images/logo-linkedin.svg"
            alt=""
            width={18}
            height={19}
          />
        </a>
      </li>
    </ul>
  );
}
