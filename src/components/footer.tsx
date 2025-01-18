import Socials from "@/components/footer/socials";
import Image from "next/image";
import Container from "./container";
import SocialProof from "./social-proof";
import IconArrowUp from "/public/images/icon-arrow-up.svg";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer-bg rounded-t-xl bg-neutral-900">
      <Container>
        <div className="flex flex-col items-center pt-12 md:pt-16 xl:mx-auto xl:max-w-[753px] xl:pt-20">
          <h2 className="text-preset-2--mob md:text-preset-2 text-center text-neutral-50">
            Ready to debug your reading list?
          </h2>
          <a
            href="#membership"
            className="text-preset-6--mob md:text-preset-6 mb-1 mt-10 inline-flex items-center justify-between gap-4 rounded-lg border-2 border-neutral-0 bg-[transparent] px-6 py-5 uppercase text-neutral-0"
          >
            <span>Review membership options </span>
            <Image
              src={IconArrowUp}
              alt=""
              width="16"
              height="17"
              sizes="16px"
            />
          </a>
          <SocialProof dark={true} />
        </div>
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-t-neutral-700 py-6 md:flex-row md:justify-between md:gap-0">
          <p className="text-present-7 text-neutral-50">
            &copy; {year} Tech Book Club
          </p>
          <Socials />
        </div>
      </Container>
    </footer>
  );
}
