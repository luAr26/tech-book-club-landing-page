import Image from "next/image";
import star from "/public/images/icon-star.svg";

export default function Rating() {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image src={star} alt="" key={index} width={24} height={25} />
      ))}
    </div>
  );
}
