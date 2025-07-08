import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import React from "react";
import SelectStar from "./select-star";
import { revalidatePath } from "next/cache";
import EditTitle from "./edit-title";
import CreateReview from "./review-form";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default async function page() {
  const reviews = await prisma.review.findMany();

  return (
    <div className="flex">
      <CreateReview className="m-2 p-4 w-1/3" />

      <div className="overflow-x-scroll">
        <div>The reviewsse</div>
        <div className="flex">
          {reviews.map((review) => (
            <Card key={review.id} className="relative m-2 p-4">
              <CardTitle>
                <h2>{review.name}</h2>
              </CardTitle>
              <CardDescription>
                <p>{review.review}</p>
                <p>Rating: {review.star}</p>
                <SelectStar id={review.id} star={review.star} />
              </CardDescription>
              <EditTitle reviewId={review.id} />

              <form
                action={async () => {
                  "use server";
                  await prisma.review.delete({
                    where: { id: review.id },
                  });
                  revalidatePath("/database");
                }}
              >
                <Button
                  type="submit"
                  variant={"outline"}
                  className="top-0 right-0 absolute m-2"
                >
                  <X />
                </Button>
              </form>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
