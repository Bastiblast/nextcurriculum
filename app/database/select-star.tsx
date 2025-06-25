"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import React from "react";
import { changeRatingSafeAction } from "./review-safe-actions";

export default function SelectStar(props: { star: number; id: string }) {
  const { star, id } = props;
  const [starValue, setStarValue] = React.useState<null | number>(null);
  const { execute } = useAction(changeRatingSafeAction);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        const isFilled = i <= (starValue || star);
        const isUnfilled = i > (starValue || star);
        return (
          <span key={i}>
            <Button
              asChild
              className="p-0 h-6 w-6 rounded-full bg-transparent hover:bg-transparent focus:bg-transparent"
              onClick={() => execute({ star: i, reviewId: id })}
              onMouseEnter={() => {
                // Handle mouse enter event
                setStarValue(i);
              }}
              onMouseLeave={() => {
                // Handle mouse leave event
                setStarValue(null);
              }}
            >
              <Star
                className={cn({
                  "fill-yellow-500 text-yellow-500":
                    isFilled || starValue === i,
                  "fill-transparent text-yellow-500":
                    isUnfilled && starValue !== i,
                })}
              />
            </Button>
          </span>
        );
      })}
    </div>
  );
}
