import Image from "next/image";

export default function Socials() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <a href="#">
          <span className="sr-only">Blue Sky</span>
          <Image src="/images/logo-bluesky.svg" alt="" width={22} height={23} />
        </a>
      </li>
      <li>
        <a href="#">
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
