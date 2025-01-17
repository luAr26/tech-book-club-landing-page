import Image from "next/image";
import logo from "/public/images/logo.svg";

export default function Logo() {
  return (
    <div className="relative h-[36px] w-[193px]">
      <Image src={logo} fill alt="logo" />
    </div>
  );
}
