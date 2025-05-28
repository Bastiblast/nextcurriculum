import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { CardDescription } from './personnalsCard'
import { Separator } from '@/components/ui/separator'
import { CarouselExperiences } from './carousel-experiences'

export default function Experience() {
  return (
    <Card className='flex justify-start'>
        <CardHeader>
            <CardTitle>
                <CarouselExperiences/>
                <h2 className='m-0 p-0 text-2xl md:text-3xl'>Experiences</h2>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className='gap-2 grid auto-rows-auto'>
            <Label className='text-center'>
                <h3 className='text-xl md:text-2xl'>Amazon associate 2016 2025</h3>
            </Label>
                <Label className='flex items-center auto-cols-min'>
                    <h4 className='py-3 text-lg md:text-xl'>Gestion d'équipe</h4>
                </Label>
                <div className='justify-start gap-3 grid md:grid-flow-col auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>depuis 2019</Label>
                    <div className='flex flex-col justify-center items-start w-70'>Expédition des commandes
                        <CardDescription>équipe de 10 à 30 personnes.</CardDescription>
                        <CardDescription>+ peu de transaction</CardDescription>
                        <CardDescription>- haute fréquence d'évenement indésirable</CardDescription>
                    </div>
                    <CardDescription>
                        <ul className='w-auto list-disc'>
                            <li>Suivie du flux de camion entrant et sortant</li>
                            <li>Application des procédures de prise en charge</li>
                            <li>Assurer la sécurité sur la zone</li>
                            <li>Déterminer les prioriters et s&apos;assurer du bon déroulement des opérations de chargement</li>
                        </ul>
                    </CardDescription>

                </div>
                <Separator/>
                <div className='justify-start gap-3 grid md:grid-flow-col auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>depuis 2021</Label>
                    <div className='flex flex-col justify-center items-start w-70'>
                        Emballage et injection de colis
                        <CardDescription>équipe de 10 à 30 personnes.</CardDescription>
                        <CardDescription>+ évennement aléatoire moyen</CardDescription>
                        <CardDescription>- beaucoup de transaction</CardDescription>
                    </div>
                    <CardDescription>
                        <ul className='w-auto list-disc'>
                            <li>Calcule de capacité</li>
                            <li>Organisation et optimisation des flux</li>
                            <li>Suivi des performances et des anomalies</li>
                            <li>Accompagnement et coaching</li>
                            <li>Animation de projet et réalisation d'amélioration continue</li>
                        </ul>
                    </CardDescription>
                </div>
                <Separator/>

                <div className='justify-start gap-3 grid md:grid-flow-col auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>depuis 2023</Label>
                    <div className='flex flex-col justify-center items-start w-70'>
                        Prélèvement et mise en rayon
                        <CardDescription>équipe de 60 à 120 personnes.</CardDescription>
                        <CardDescription>+ évennement aléatoire moyen</CardDescription>
                        <CardDescription>- beaucoup de transaction</CardDescription>
                    </div>
                    <CardDescription>                        
                        <ul className='w-auto list-disc'>
                            <li>Accueil et suivie interimaire</li>
                            <li>Fluidifier l'utilisation de l'espace de stockage</li>
                            <li>Suivi des performances et des anomalies</li>
                            <li>Accompagnement et coaching</li>
                            <li>Animation de projet et réalisation d'amélioration continue</li>
                        </ul>
                    </CardDescription>
                </div>
                <Separator/>

                <div className='justify-start gap-3 grid md:grid-flow-col auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>depuis 2024</Label>
                    <div className='flex flex-col justify-center items-start w-70'>
                        Contrôle inventaire et qualité
                        <CardDescription>équipe de 10 à 20 personnes.</CardDescription>
                        <CardDescription>+ peu d'effectif</CardDescription>
                        <CardDescription>- composé de postes à haute complexité</CardDescription>
                    </div>
                    <CardDescription>                        
                        <ul className='w-auto list-disc'>
                            <li>Accampagnement sur la fusion de service</li>
                            <li>Correction des anomalies de produit en lien avec les équipes internationnals</li>
                            <li>Application des statégie de correction de stock</li>
                            <li>Analyse des déviations de procédure</li>
                            <li>Assistance aux autres services pour le maintiens de la qualité global</li>
                        </ul>
                    </CardDescription>
                </div>
            </div>
        
            
            

        </CardContent>
    </Card>
  )
}
