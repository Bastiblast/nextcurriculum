'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { prisma } from '@/lib/prisma';

async function createReview(formData: FormData) {
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const rating = Number(formData.get('rating'));

    if (!title || !content || isNaN(rating)) {
        // Handle validation error (could be improved)
        return;
    }

    await prisma.review.create({
        data: {
            name: title,
            review: content,
            star: rating,
        },
    });

    revalidatePath('/database');
    redirect('/database');
}

export const deleteReview = async (reviewid : string) => {
            'use server'
            await prisma.review.delete({
              where: { id: reviewid }
            })
            revalidatePath('/database')
          }


 export const changeRating = async (reviewId: string, star: number) => {
    console.log('changeRating', reviewId, star)
    await prisma.review.update({
      where: { id: reviewId },
      data: { star }
    })

    revalidatePath('/database')
  }

