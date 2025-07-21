'use server'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import MailForm from './form-mail'


export default async function Page() {


  return (
      <Card>
        <CardHeader>
          <CardTitle>
            Send a mail
          </CardTitle>
          <CardDescription>
            envoyer un mail de contact@lionside.fr
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MailForm/>
        </CardContent>
      </Card>
  )
}

