import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselExperiences(props: React.PropsWithChildren) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-md mx-8 md:max-w-xl"
    >
      <CarouselContent>
        {props.children}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
