import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

import {myInfo} from './personnals'

import SVGPhone from "@/lib/calling-phone-receive-phone-svgrepo-com"
import SVGMail from "@/lib/mail-reception-svgrepo-com"
import { AvatarMy } from "@/components/avatar-my"


export default function PersonnalsCard () {

  const {firstName,lastName,birthDay} = myInfo

  const birthDate = new Date(birthDay)
  const ageDate = new Date(Date.now() - birthDay)

  const intlBirthDate = new Intl.DateTimeFormat("fr-FR",{
    dateStyle: "long"
  }).format(birthDate)

  return <>
  <Card>
    <CardHeader>
      <div className="flex flex-row">
        <AvatarMy/>
        <div className="flex flex-col justify-center ml-4">
          <CardTitle> {firstName + " " + lastName}</CardTitle>
          <CardTitle> {(ageDate.getFullYear() -1970) + " ans" }</CardTitle>
          <CardDescription>
            Actuellement employé chez Amazon
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <Label>Née le {intlBirthDate}</Label>
      <Label><SVGMail/> <a href="mailto:million.bastien@gmail.com">million.bastien@gmail.com</a> /</Label>
      <Label><SVGPhone /> <a href="tel:+33633894237">06.33.89.42.37</a></Label>
    </CardContent>
    <CardFooter>Team leader depuis 2019</CardFooter>
  </Card>
  </>
}
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
