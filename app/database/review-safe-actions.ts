'use server'; 
 
import { prisma } from '@/lib/prisma';
 import { actionClient } from '@/lib/safe-action-client';
import { revalidatePath } from 'next/cache';

import { returnValidationErrors } from "next-safe-action";
import { z } from "zod";

const reviewSchema = z.object({
  name: z.string().min(1, 'Name is required').max(15, 'Name must be less than 15 characters'),
  review: z.string().min(1, 'Review is required').max(500, 'Review must be less than 500 characters'),
  star: z.number().min(1, 'Star rating is required').max(5, 'Star rating must be between 1 and 5'),
})

 export const addReviewSafeAction = actionClient
 .inputSchema(reviewSchema)
 .action(async ({parsedInput: input }) => {
    
  const { name, review, star } = input;
  await prisma.review.create({
    data: {
      name,
      review,
      star
    }
  });

  revalidatePath('/database');
 


  return   returnValidationErrors(reviewSchema, { _errors: ["Review ajouté avec succès !"] })
});
