import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import React from 'react'
import SelectStar from './select-star'
import { revalidatePath } from 'next/cache'

export default async function page() {

  const reviews = await prisma.review.findMany()

  const changeRating = async (reviewId: string, star: number) => {
    'use server'
    console.log('changeRating', reviewId, star)
    await prisma.review.update({
      where: { id: reviewId },
      data: { star }
    })

    revalidatePath('/database')
  }
    return (<>
    <div>The reviewsse</div>
    {reviews.map((review) => (
      <Card key={review.id}>
        <CardTitle>
          <h2>{review.name}</h2>
        </CardTitle>
        <CardDescription>
        <p>{review.review}</p>
        <p>Rating: {review.star}</p>
          <SelectStar changeRating={changeRating} id={review.id} star={review.star}/>
        </CardDescription>
      </Card>
    ))}
    </>
  )
}
