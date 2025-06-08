import Link from 'next/link'
import React from 'react'
import SimpleLogo from '../lib/simplelogoalpha.png'
import Image from 'next/image'
import mainBackground from '../lib/backgroundalpharevers.png'
import { Separator } from '@/components/ui/separator'

export default function Page() {
  return (
    <>
    <Image 
      src={mainBackground.src} 
      alt='desert background' 
      fill quality={100} 
      style={
        { objectFit: 'contain',
          bottom: '0'
        }} 
  
    />
    <header className='flex flex-row p-12 z-10 relative'>
      <Image quality={100} alt='Lionside logo' width={100} height={100} className='md:w-100 md:h-100' src={SimpleLogo.src}/>
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl'>Bienvenue sur mon domaine</h1>
          <Separator className='m-1'/>
          <Link href='/curriculumVitae'>See my curriculum</Link>
          <Link href='/veryBeginnerTutorials'>Browse content in my Very Beginner Tutorials</Link>
        </div>
    </header>
    </>
  )
}
