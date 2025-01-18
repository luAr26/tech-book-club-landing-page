import BenefitsContainer from "@/components/benefits/benefits-container";
import Image from "next/image";
import iconCheck from "/public/images/icon-check.svg";

export default function Benefits() {
  return (
    <BenefitsContainer>
      {/* Section 1 */}
      <div className="xl:flex xl:flex-row-reverse xl:items-center xl:gap-20">
        <div>
          <h2 className="text-preset-2--mob md:text-preset-2 text-neutral-900">
            Read together,
            <br /> grow together
          </h2>
          <ul className="mt-6 flex flex-col gap-4 md:mt-[34px] md:gap-6">
            <li className="flex items-center gap-[0.875rem]">
              <Image src={iconCheck} alt="" width="28" height="28" />
              <span className="text-preset-5 text-neutral-700">
                Monthly curated tech reads selected by industry experts
              </span>
            </li>
            <li className="flex items-center gap-[0.875rem]">
              <Image src={iconCheck} alt="" width="28" height="28" />
              <span className="text-preset-5 text-neutral-700">
                Virtual and in-person meetups for deep-dive discussions
              </span>
            </li>
            <li className="flex items-center gap-[0.875rem]">
              <Image src={iconCheck} alt="" width="28" height="28" />
              <span className="text-preset-5 text-neutral-700">
                Early access to new tech book releases
              </span>
            </li>
            <li className="flex items-center gap-[0.875rem]">
              <Image src={iconCheck} alt="" width="28" height="28" />
              <span className="text-preset-5 text-neutral-700">
                Author Q&A sessions with tech thought leaders
              </span>
            </li>
          </ul>
        </div>
        {/* Mobile */}
        <div className="relative mt-10 h-[319px] w-full max-w-[343px] overflow-hidden rounded-[12.25px] md:hidden">
          <Image
            src="/images/image-read-together-mobile.webp"
            alt="People enjoying books together."
            fill
            className="object-cover"
            sizes="343px"
          />
        </div>
        {/* Tablet */}
        <div className="relative mt-10 hidden h-[654px] w-[704px] overflow-hidden rounded-[12.25px] md:block xl:hidden">
          <Image
            src="/images/image-read-together-tablet.webp"
            alt="People enjoying books together."
            fill
            className="object-cover"
            sizes="654px"
          />
        </div>
        {/* Desktop */}
        <div className="relative hidden h-[520px] w-[560px] overflow-hidden rounded-[12.25px] xl:block">
          <Image
            src="/images/image-read-together-desktop.webp"
            alt="People enjoying books together."
            fill
            className="object-cover"
            sizes="560px"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="mt-16 md:mt-20 xl:mt-[120px] xl:flex xl:items-center xl:gap-10">
        <div>
          <h2>
            <h2 className="text-preset-2--mob md:text-preset-2 text-neutral-900">
              Not your average <br />
              book <span>club</span>
            </h2>
            <p className="text-preset-5 mt-6 text-neutral-700">
              Connect with a community that speaks your language - from{" "}
              <strong className="font-bold">Python</strong>
              to <strong className="font-bold">TypeScript</strong> and
              everything in between. Our discussions blend technical depth with
              practical applications.
            </p>
          </h2>
        </div>
        {/* Mobile */}
        <div className="relative mt-10 h-[319px] w-full max-w-[343px] overflow-hidden rounded-[12.25px] md:hidden">
          <Image
            src="/images/image-not-average-mobile.webp"
            alt="People enjoying books together."
            fill
            className="object-cover"
            sizes="343px"
          />
        </div>
        {/* Tablet */}
        <div className="relative">
          <div className="relative mt-10 hidden h-[654px] w-[704px] overflow-hidden rounded-[12.25px] md:block xl:hidden">
            <Image
              src="/images/image-not-average-tablet.webp"
              alt="People enjoying books together."
              fill
              className="object-cover"
              sizes="654px"
            />
          </div>
          <div className="absolute bottom-[50px] right-[50px] hidden h-[138px] w-[120px] md:block xl:hidden">
            <Image
              src="/images/logos-tech.svg"
              alt="Github, Typescript and React logos"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
        </div>
        {/* Desktop */}
        <div className="relative">
          <div className="relative hidden h-[520px] w-[560px] overflow-hidden rounded-[12.25px] xl:block">
            <Image
              src="/images/image-not-average-desktop.webp"
              alt="People enjoying books together."
              fill
              className="object-cover"
              sizes="560px"
            />
          </div>
          <div className="absolute -left-[80px] bottom-[43px] hidden h-[138px] w-[120px] xl:block">
            <Image
              src="/images/logos-tech.svg"
              alt="Github, Typescript and React logos"
              fill
              className="object-cover"
              sizes="120px"
            />
          </div>
        </div>
      </div>
    </BenefitsContainer>
  );
}
