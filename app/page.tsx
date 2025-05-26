import { Card } from "@/components/ui/card";
import PersonnalsCard, { CardContent, CardDescription, CardHeader, CardTitle } from "./personnalsCard";
import { Label } from "@/components/ui/label";
import { HoverCard } from "@/components/ui/hover-card";
import { HoverCardFormation } from "@/components/hover-card-formation";
import { AvatarMy } from "@/components/avatar-my";

export default async function Home() {


  return (
    <>
    <header className="top-0 right-0 md:absolute flex justify-start items-center ml-6">
      <div className="md:flex justify-center items-center w-30">
        <AvatarMy/>
      </div>
      <div id="myInfo" className="p-6">
        <PersonnalsCard />
      </div>
    </header>
    <main>
      <section id="formation">
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
      </section>

    </main>
    </>
  );
}
