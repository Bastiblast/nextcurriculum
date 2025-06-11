import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

const reviews = await prisma.review.findMany()

    return (<>
    <div>page</div>
    {reviews.map((review) => (
      <div key={review.id}>
        <h2>{review.name}</h2>
        <p>{review.review}</p>
        <p>Rating: {review.star}</p>
      </div>
    ))}
    </>
  )
}
