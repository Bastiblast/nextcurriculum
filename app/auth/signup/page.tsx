import { Card, CardTitle } from '@/components/ui/card'
import React from 'react'
import SessionCard from './session-card'

export default async function AuthPage() {

    
  return (
    <Card>
        <CardTitle>Auth page</CardTitle>
        <SessionCard />
    </Card>
  )
}
