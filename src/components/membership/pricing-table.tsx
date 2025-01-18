"use client";
import { clsx } from "clsx";
import Image from "next/image";
import iconCheck from "/public/images/icon-check.svg";

type PricingTableProps = {
  name: string;
  price: number | string;
  benefits: string[];
  isPro?: boolean;
};

export default function PricingTable({
  name,
  price,
  benefits,
  isPro,
}: PricingTableProps) {
  const nameText = name[0].toUpperCase() + name.slice(1, name.length);
  const priceJSX =
    typeof price === "string" ? (
      <p className="text-preset-3 mt-6 text-neutral-900">{price}</p>
    ) : (
      <p className="mt-6 flex items-center gap-2">
        <span className="text-preset-3 text-neutral-900">${price}</span>{" "}
        <span className="text-preset-5 text-neutral-700">/month</span>
      </p>
    );

  return (
    <div
      className={clsx(
        "rounded-lg border border-neutral-200 p-6 xl:self-center",
        isPro && "bg-neutral-50 xl:px-6 xl:py-10",
      )}
    >
      <h3 className="text-preset-4 text-neutral-900">{nameText}</h3>
      {priceJSX}
      <hr className="mt-6 border-b border-t-0 border-neutral-200" />
      <ul className="mt-6 flex flex-col gap-4">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-center gap-3">
            <Image src={iconCheck} alt="" width="24" height="24" sizes="24px" />
            <span className="text-preset-5 text-neutral-700">{b}</span>
          </li>
        ))}
      </ul>
      <button
        className="ext-preset-6--mob md:text-preset-6 mt-8 inline-flex w-full justify-center rounded-lg border-2 border-neutral-900 bg-light-salmon-50 py-4 uppercase"
        onClick={() =>
          alert(`Thank you for choosing the ${nameText} membership.`)
        }
      >
        {typeof price === "string" ? "Talk to us" : "Subscribe"}
      </button>
    </div>
  );
}
