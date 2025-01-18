type Membership = {
  name: string;
  price: number | string;
  benefits: string[];
  isPro?: boolean;
};

type Memberships = Membership[];

export const membershipsData: Memberships = [
  {
    name: "starter",
    price: 19,
    benefits: ["1 book/month", "online forums"],
  },
  {
    name: "pro",
    price: 29,
    benefits: ["2 books/month", "virtual meetups"],
    isPro: true,
  },
  {
    name: "enterprise",
    price: "Custom",
    benefits: ["Team access", "Private sessions"],
  },
];
