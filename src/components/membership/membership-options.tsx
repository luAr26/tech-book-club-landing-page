import PricingTable from "@/components/membership/pricing-table";
import { membershipsData } from "@/data/memberships";

export default function MembershipOptions() {
  return (
    <div id="membership">
      <h2 className="text-preset-2--mob md:text-preset-2 text-neutral-900">
        Membership options
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 xl:grid-cols-3">
        {membershipsData.map((membership, i) => (
          <PricingTable {...membership} key={i} />
        ))}
      </div>
    </div>
  );
}
