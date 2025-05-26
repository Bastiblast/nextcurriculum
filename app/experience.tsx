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
            <div className='grid grid-cols-4'>
            <Label className='row-span-3'>
                Amazon associate - 2016-2025
            </Label>
                <Label className='row-span-3 flex items-center '>
                    Gestion de secteur
                </Label>
                <div className='flex flex-col justify-center items-start'>Responsable des expéditions
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
                <div className='flex flex-col justify-center items-start'>Responsable de l&apos;emballage
                    <CardDescription>équipe de 10 à 30 personnes.</CardDescription>
                    <CardDescription>+ évennement aléatoire moyen</CardDescription>
                    <CardDescription>- beaucoup de transaction</CardDescription>
                </div>
                <CardDescription>
                    <ul className='list-disc'>
                        <li>Suivie de 3 carnets de commande afin de respecte</li>
                        <li>Suivie de 3 carnets de commande afin de respecte</li>
                        <li>Suivie de 3 carnets de commande afin de respecte</li>
                        <li>Suivie de 3 carnets de commande afin de respecte</li>
                        <li>Suivie de 3 carnets de commande afin de respecte</li>
                    </ul></CardDescription>
                <div className='flex items-center'>Préparation des commandes et mise en rayon</div>
                <CardDescription>details</CardDescription>
            </div>
            Formateur
            
            

        </CardContent>
    </Card>
  )
}
