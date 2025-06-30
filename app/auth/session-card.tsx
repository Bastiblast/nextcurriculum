import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { getSession } from '@/lib/auth-server'
import React from 'react'
import SignOutButton from './signup/signOutButton'
import SignInForm from './signup/sign-in-form'
import SignUp from './signup/sign-up-form'
import { Switch } from './switch'

export default async function SessionCard() {
    const session = await getSession()


    const Connected = () =>     
    <Card className='flex items-center md:w-1/2 h-full'>
        <CardTitle>
            Vous êtes connecté
        </CardTitle>
        <CardContent>
            <CardTitle className='text-center'>{session?.user.name}</CardTitle>
            <CardDescription className='text-center'>Inscrit depuis le {session?.user.createdAt.toLocaleDateString()}</CardDescription>
        </CardContent>
        <CardContent>
            <CardTitle className='text-center'>{session?.user.email}</CardTitle>
            <CardDescription className='text-center'>{session?.user.emailVerified ? "email vérifié" : "email non vérifié"}</CardDescription>
        </CardContent>
        <SignOutButton/>
    </Card>

    const Unconnected = () => 
    <Card className='flex items-center  md:w-1/2 h-full overflow-y-auto'>
        <CardTitle>
            Vous êtes déconnecté
        </CardTitle>

        <Switch>

        <CardContent>
            <span className='text-center'>Déjà un compte ?</span>
            <SignInForm />
        </CardContent>
        <CardContent>
            <CardTitle>Nouveau sur le site ?</CardTitle>
            <SignUp/>
        </CardContent>
        </Switch>
    </Card>
  return (<>
  {session ? <Connected/> 
  : <Unconnected/>}
  </>)
}
