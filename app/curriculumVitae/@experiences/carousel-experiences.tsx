import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const options = ["Formation","Experiences","Project","Compétence","Activité"]
export function CarouselExperiences() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from(options).map((name, index) => (
          <CarouselItem key={index} className="md:basis-1 lg:basis-2/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex justify-center items-center p-6 aspect-square">
                  <span className="font-semibold text-3xl">{name}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
