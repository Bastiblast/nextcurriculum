import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import myPhoto from '../lib/mePhoto.jpg'
export function AvatarMy() {
  return (
    <Avatar className="w-20 h-20">
      <AvatarImage src={myPhoto.src} alt="my-photo" />
      <AvatarFallback>me</AvatarFallback>
    </Avatar>
  )
}
