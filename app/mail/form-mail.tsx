'use client'

import { Button } from "@/components/ui/button"
import sendEmail from "./sendEmail"
import { toast } from "sonner"
import { useRef } from "react"

export default function MailForm () {

    
  const to = useRef<HTMLInputElement>(null)
  const subject = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLTextAreaElement>(null)

  const handleClick = async () => {
                if (to.current && subject.current && text.current) {
                    const formDataMail = {
                        to:to.current.value,
                        subject:subject.current.value,
                        text:text.current.value}
                    console.log(formDataMail)
                    console.log("information for mail",formDataMail)
                    await sendEmail(formDataMail)
                    toast.success("Envoi du mail en cour")
                } else {
                    toast.error("Toutes les informations doivent être renseignés.")
                }

                }
  return (
            <div className='flex flex-col'>
            <label className='border-2 p-2' htmlFor='to'>Destinataire</label>
            <input className='border-2 p-2' ref={to} name='to'/>
            <label className='border-2 p-2' htmlFor='subject'>Objet</label>
            <input className='border-2 p-2' ref={subject} name='subject'/>
            <label className='border-2 p-2' htmlFor='text'>Texte</label>
            <textarea className='border-2 p-2 h-100 text-start' ref={text} name='body'/>
            <Button 
            className='bg-slate-300 p-2 rounded-md'
            onClick={handleClick}>Envoyer</Button>
          </div>
  )
}