import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"

export function HoverCardFormation(props) {

    console.log(props)
    const {title,avatar,main,footer,href} = props.options
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button 
              className="m-0 p-0"
        variant="link">
          <Link href={href} className="text-blue-950/80">{title}</Link></Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">{title}</h4>
            <p className="text-sm">
              {main}
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="opacity-70 mr-2 w-4 h-4" />{" "}
              <span className="text-muted-foreground text-xs">
               {footer}
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
