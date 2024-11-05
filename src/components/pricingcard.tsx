import { BadgeCheck } from "lucide-react"

import { Button } from "@/components/ui/button"

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  features: string[];
};

export default function PricingCard({
  title,
  description,
  price,
  features
}: PricingCardProps) {
  return (
    <div
      className="flex flex-col rounded-lg border border-gray-200 transform
        transition duration-300 hover:scale-105 shadow-sm
        hover:shadow-lg"
    >
      <div className="grid gap-4 p-6 flex-grow">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm leading-6 text-gray-500 h-18">
          {description}
        </p>
        <div className="text-4xl font-semibold">
          ${price}
        </div>
        <div className="grid gap-2 text-sm">
          {features.map((feature, index) => (
            <p
              key={index}
              className="flex items-center gap-2"
            >
              <BadgeCheck className="w-4 h-4" />
              {feature}
            </p>
          ))}
        </div>
      </div>

      <div className="p-4 border-t grid gap-2">
        <Button size="default" variant="ghost">
          Select
        </Button>
      </div>
    </div>
  )
}
