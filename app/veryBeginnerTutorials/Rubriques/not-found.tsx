import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (

        <Card className='m-12'>
          <CardHeader>
        <CardTitle>Page Not Found</CardTitle>
          </CardHeader>
          <CardContent>
        <div className="flex flex-col items-center">
          <div className="mb-4 text-6xl">🤷‍♂️</div>
          <p className="mb-4 text-muted-foreground text-center">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might not exist yet, or the information is missing. Feel free to check back later or explore other sections of the wiki.
          </p>
          <Link href="/veryBeginnerTutorials/Rubriques" className="w-full">
            <Button variant="default" className="w-full">
          Go back to Rubriques
            </Button>
          </Link>
        </div>
          </CardContent>
        </Card>

  )
}
