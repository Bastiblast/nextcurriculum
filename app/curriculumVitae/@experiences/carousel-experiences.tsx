import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const options = ["Formation","Experiences","Project","Compétence","Activité"]
export default function CarouselExperiences(props: React.PropsWithChildren) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-sm"
    >
      <CarouselContent>
        {props.children}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
