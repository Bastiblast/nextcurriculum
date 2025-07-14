'use client'

import { X } from "lucide-react"
import sendVerificationMail from "./serveVerificationMail"

export default function VerificationButton() {
    console.log("click on verify")
  return (
    <span className="flex flex-row">email non vérifié
                    <X className='text-red-500' onClick={sendVerificationMail}/></span>
  )
}
