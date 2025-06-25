"use server";

import { prisma } from "@/lib/prisma";
import { actionClient } from "@/lib/safe-action-client";
import { revalidatePath } from "next/cache";

import { returnValidationErrors } from "next-safe-action";
import { z } from "zod";

const addReviewSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(15, "Name must be less than 15 characters"),
  review: z
    .string()
    .min(1, "Review is required")
    .max(500, "Review must be less than 500 characters"),
  star: z
    .number()
    .min(1, "Star rating is required")
    .max(5, "Star rating must be between 1 and 5"),
});

export const addReviewSafeAction = actionClient
  .inputSchema(addReviewSchema)
  .action(async ({ parsedInput: input }) => {
    const { name, review, star } = input;
    await prisma.review.create({
      data: {
        name,
        review,
        star,
      },
    });

    revalidatePath("/database");

    return returnValidationErrors(addReviewSchema, {
      _errors: ["Review ajouté avec succès !"],
    });
  });

const changeRatingSchema = z.object({
  reviewId: z.string().min(1, "Review ID is required"),
  star: z
    .number()
    .min(1, "Star rating is required")
    .max(5, "Star rating must be between 1 and 5"),
});

export const changeRatingSafeAction = actionClient
  .inputSchema(changeRatingSchema)
  .action(async ({ parsedInput: input }) => {
    const { reviewId, star } = input;
    console.log("changeRatingSafeAction", reviewId, star);

    await prisma.review.update({
      where: { id: reviewId },
      data: { star },
    });

    revalidatePath("/database");

    return returnValidationErrors(changeRatingSchema, {
      _errors: ["Rating updated successfully!"],
    });
  });

const deleteReviewSchema = z.object({
  reviewid: z.string().min(1, "Review ID is required"),
});

export const deleteReviewSafeAction = actionClient
  .inputSchema(deleteReviewSchema)
  .action(async ({ parsedInput: input }) => {
    const { reviewid } = input;
    console.log("deleteReviewSafeAction", reviewid);

    await prisma.review.delete({
      where: { id: reviewid },
    });
    revalidatePath("/database");

    return returnValidationErrors(deleteReviewSchema, {
      _errors: ["Review deleted successfully!"],
    });
  });
