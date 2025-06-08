import React from 'react'
import { Label } from '@/components/ui/label'
import CarouselExperiences from '@/app/curriculumVitae/@experiences/carousel-experiences'
import CarouselItem from '../carousel-item'
import { CardDescription } from '@/components/ui/card'

export default function Projects() {
  return (
    <div className='grid w-full justify-center md:justify-start'>

                <Label className='flex items-center'>
                    <h4 className='py-3 text-lg md:text-xl'>Projet</h4>
                </Label>
                <CarouselExperiences>
                <CarouselItem className=''>

                <div className='justify-start grid md:grid-flow-row auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>2022</Label>
                    <div className='flex flex-col justify-center items-start'>Affichage des chariots terminés
                        <CardDescription></CardDescription>
                        <CardDescription>adaptation d&apos;un script tamper monkey</CardDescription>
                    </div>
                    <CardDescription>
                        <ul className='list-disc px-5'>
                            <li>Affichage sur un moniteur</li>
                            <li>Permet d&apos;aiguiller les chariots sur les FIFOs</li>
                            <li>Suppression d&apos;un poste sans valeur ajouté</li>
                        </ul>
                    </CardDescription>

                </div>
                </CarouselItem>
                <CarouselItem>

                <div className='justify-start grid md:grid-flow-row auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>2023</Label>
                    <div className='flex flex-col justify-center items-start'>
                        Tableau de bord de suivi des prélèvements de commande
                        <CardDescription>Tracking de l&apos;activité</CardDescription>
                        <CardDescription>Réduit l&apos;utilisation des sites annexes</CardDescription>
                        <CardDescription>Regroupe les informations</CardDescription>
                    </div>
                    <CardDescription>
                        <ul className='px-5 list-disc'>
                            <li>Affiche l&apos;équivalent de 3 pages d&apos;informations en une</li>
                            <li>Ajoute des informations utile récupérer sur des API tiers</li>
                            <li>Aide les responsables de zone à maitriser le prélèvement dans les temps impartis.</li>
                            <li>Améliore la réactivité et la disponibilité des responsables sur le terrain</li>
                        </ul>
                    </CardDescription>
                </div>
                
                </CarouselItem>
                <CarouselItem>


                <div className='justify-start grid md:grid-flow-row auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>depuis 2023</Label>
                    <div className='flex flex-col justify-center items-start'>
                        Prélèvement et mise en rayon
                        <CardDescription>équipe de 60 à 120 personnes.</CardDescription>
                        <CardDescription>+ évennement aléatoire moyen</CardDescription>
                        <CardDescription>- beaucoup de transaction</CardDescription>
                    </div>
                    <CardDescription>                        
                        <ul className='px-5 list-disc'>
                            <li>Accueil et suivie interimaire</li>
                            <li>Fluidifier l&apos;utilisation de l&apos;espace de stockage</li>
                            <li>Suivi des performances et des anomalies</li>
                            <li>Accompagnement et coaching</li>
                            <li>Animation de projet et réalisation d&apos;amélioration continue</li>
                        </ul>
                    </CardDescription>
                </div>
                </CarouselItem>
                
                <CarouselItem>

                <div className='justify-start grid md:grid-flow-row auto-rows-min'>
                    <Label className='md:w-10 text-center text-wrap'>depuis 2024</Label>
                    <div className='flex flex-col justify-center items-start'>
                        Contrôle inventaire et qualité
                        <CardDescription>équipe de 10 à 20 personnes.</CardDescription>
                        <CardDescription>+ peu d&apos;effectif</CardDescription>
                        <CardDescription>- composé de postes à haute complexité</CardDescription>
                    </div>
                    <CardDescription>                        
                        <ul className='px-5 list-disc'>
                            <li>Accampagnement sur la fusion de service</li>
                            <li>Correction des anomalies de produit en lien avec les équipes internationnals</li>
                            <li>Application des statégie de correction de stock</li>
                            <li>Analyse des déviations de procédure</li>
                            <li>Assistance aux autres services pour le maintiens de la qualité global</li>
                        </ul>
                    </CardDescription>
                </div>
                </CarouselItem>

                </CarouselExperiences>

            </div>
  )
}
