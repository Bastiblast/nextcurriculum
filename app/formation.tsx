import React from 'react'
import { Card } from "@/components/ui/card";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./personnalsCard";
import { Label } from "@/components/ui/label";
import { HoverCardFormation } from "@/components/hover-card-formation";

export default function Formation() {
  return (
            <Card>
          <CardHeader>
            <CardTitle>
              Formation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Label>
             <HoverCardFormation 
              options={{
                title:"Bac a lauréat",
                main:"Lycée Polyvalent la Saulaie - Saint-Marcellin",
                href:"https://lasaulaie.ent.auvergnerhonealpes.fr/",
                avatar:"https://cdn.ent.auvergnerhonealpes.fr/images/favicon.ico",
                footer:"Recommend by official MDN - from Jad Joubran"
                }}/>
                  - Gestion et Communication en entreprise
            </Label>
            <CardDescription>
              Optenu en 2007
            </CardDescription>
            <Label>
              <HoverCardFormation 
              options={{
                title:"Bioforce",
                main:"Bioforce est un leader français de la formation, reconnu par la communauté humanitaire internationale.",
                href:"https://www.bioforce.org/bioforce/",
                avatar:"https://www.bioforce.org/wp-content/uploads/2020/05/favicon.png",
                footer:"Empowering Humanitarian"
                }}/> - Logistique appliquée au milieu humanitaire
            </Label>
            <CardDescription>
              Evaluation continue et ecris valider - Mémoire de terrain mis en attente
            </CardDescription>            
            <Label>
              <HoverCardFormation 
              options={{
                title:"Learn Javascript",
                main:"The easiest way to  learn  &  practice  modern JavaScript",
                avatar:"https://learnjavascript.online/assets/fav2/favicon.ico",
                href:"https://learnjavascript.online/",
                footer:"Recommend by official MDN - from Jad Joubran"
                }}/> - Fondamental en HTML, CSS et formation avancé en javascript
            </Label>
            <CardDescription>
              Optenu en 2022
            </CardDescription>
          </CardContent>
        </Card>
  )
}
