import Rating from "../rating";

export default function Testimonial() {
  return (
    <div className="py-16 md:py-20 xl:flex xl:flex-col xl:items-center xl:py-[120px]">
      <Rating />
      <blockquote className="mt-8 xl:max-w-[970px] xl:text-center">
        <p className="text-preset-3--mob md:text-preset-3 text-balance text-neutral-900">
          "This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!"
        </p>
        <p className="text-preset-5 mt-8 text-neutral-700">
          <cite className="not-italic">Sarah Chen, Software Architect</cite>
        </p>
      </blockquote>
    </div>
  );
}
