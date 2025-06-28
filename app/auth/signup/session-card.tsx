import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { getSession } from '@/lib/auth-server'
import React from 'react'

export default async function SessionCard() {
    const session = await getSession()

  return (
    <Card>
        <CardTitle>
            Vous êtes connecté
        </CardTitle>
        <CardContent>
            <CardTitle>{session?.user.name}</CardTitle>
            <CardDescription>{session?.user.createdAt.toLocaleDateString()}</CardDescription>
        </CardContent>
        <CardContent>
            <CardTitle>{session?.user.email}</CardTitle>
            <CardDescription> email vérifié ? {session?.user.emailVerified}</CardDescription>
        </CardContent>
    </Card>
  )
}
