import React from "react";
import { Label } from "@/components/ui/label";
import CarouselExperiences from "@/app/curriculumVitae/@experiences/carousel-experiences";
import CarouselItem from "../carousel-item";
import { CardDescription } from "@/components/ui/card";
import data from '@/app/curriculumVitae/professional_experiences.json'
export default function Projects() {
  return (
    <div className="grid w-full justify-center md:justify-start">
      <Label className="flex items-center">
        <h4 className="py-3 text-lg md:text-xl">Projet</h4>
      </Label>
      <CarouselExperiences>
        {
          data.projets.map(expe => 
          <CarouselItem>
            <Label className="md:w-10 text-center text-wrap">{expe.period}</Label>
            <div className="flex flex-col justify-center items-start">
            <span>{expe.area}</span>
            <p>{expe.summary}</p>
            {expe.details?.map(detail => 
              <CardDescription>{detail}</CardDescription>
            )}
            </div>
          </CarouselItem>)
        }
      </CarouselExperiences>
    </div>
  );
}
