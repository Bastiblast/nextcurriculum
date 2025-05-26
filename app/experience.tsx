import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import React from 'react'
import { CardDescription } from './personnalsCard'

export default function Experience() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>
                Experiences
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className='grid gap-8 auto-rows-auto grid-flow-col'>
            <Label className='row-span-3 w-18 text-center'>
                Amazon associate 2016-2025
            </Label>
                <Label className='row-span-3 flex items-center auto-cols-min'>
                    Gestion de secteur
                </Label>
                <div className='grid grid-cols-2 gap-8 justify-start'>
                    <div className='flex flex-col justify-center items-start'>Expédition des commandes
                        <CardDescription>équipe de 10 à 30 personnes.</CardDescription>
                        <CardDescription>+ peu de transaction</CardDescription>
                        <CardDescription>- haute fréquence d'évenement indésirable</CardDescription>
                    </div>
                    <CardDescription>
                        <ul className='list-disc'>
                            <li>Suivie du flux de camion entrant et sortant</li>
                            <li>Application des procédures de prise en charge</li>
                            <li>Assurer la sécurité sur la zone</li>
                            <li>Déterminer les prioriters et s&apos;assurer du bon déroulement des opérations de chargement</li>
                        </ul>
                    </CardDescription>

                </div>
                <div className='grid grid-cols-2 gap-8 justify-start'>
                    <div className='flex flex-col justify-center items-start'>Emballage et injection de colis
                        <CardDescription>équipe de 10 à 30 personnes.</CardDescription>
                        <CardDescription>+ évennement aléatoire moyen</CardDescription>
                        <CardDescription>- beaucoup de transaction</CardDescription>
                    </div>
                    <CardDescription>
                        <ul className='list-disc'>
                            <li>Calcule de capacité</li>
                            <li>Organisation et optimisation des flux</li>
                            <li>Suivi des performances et des anomalies</li>
                            <li>Accompagnement et coaching</li>
                            <li>Animation de projet et réalisation d'amélioration continue</li>
                        </ul>
                    </CardDescription>
                </div>
                <div className='grid grid-cols-2 gap-8 justify-start'>
                    <div className='flex items-center'>Préparation des commandes et mise en rayon</div>
                    <CardDescription>details</CardDescription>
                </div>
            </div>
        
            
            

        </CardContent>
    </Card>
  )
}
