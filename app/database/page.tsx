import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import React from 'react'
import SelectStar from './select-star'

export default async function page() {

  const reviews = await prisma.review.findMany()


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
          <SelectStar id={review.id} star={review.star}/>
        </CardDescription>
      </Card>
    ))}
    </>
  )
}
