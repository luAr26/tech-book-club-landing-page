import { readingJourneySteps } from "@/data/steps";
import Step from "./step";

export default function ReadingJourney() {
  return (
    <div className="reading-journey-container relative hidden overflow-hidden bg-neutral-50 xl:mb-[120px] xl:flex xl:flex-col xl:items-center xl:gap-16 xl:bg-[url('/images/pattern-light-bg.svg')] xl:py-20">
      <h2 className="text-center text-[3.125rem] font-semibold leading-[1.2] -tracking-[4%]">
        Your tech <br />
        reading journey
      </h2>
      <ol className="max-auto grid max-w-[1050px] grid-cols-4 gap-12">
        {readingJourneySteps.map((step, i) => (
          <Step key={i} {...step} />
        ))}
      </ol>
    </div>
  );
}
