'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

  const changeRating = async (reviewId: string, star: number) => {
    await prisma.review.update({
      where: { id: reviewId },
      data: { star }
    })

    revalidatePath('/database')
  }


  export { changeRating }