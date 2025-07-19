'use client'

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SignOutButton() {

    const router = useRouter()

    const signOut = async () => await authClient.signOut({
  fetchOptions: {
    onSuccess: () => {
      router.push("/auth/signup"); // redirect to login page
    },
  },
});;
    
  return (
            <Button className=''
        onClick={signOut}>Déconnecter</Button>
  )
}
