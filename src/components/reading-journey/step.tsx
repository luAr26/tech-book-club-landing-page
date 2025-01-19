type StepProps = {
  stepNumber: number;
  stepDescription: string;
};

export default function Step({ stepNumber, stepDescription }: StepProps) {
  return (
    <li className="reading-journey-step relative">
      <span className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border-2 border-neutral-900 text-[1.5rem]">
        {stepNumber}
      </span>
      <h3 className="mt-6 text-balance text-[1.125rem] font-semibold text-neutral-900">
        {stepDescription}
      </h3>
    </li>
  );
}
