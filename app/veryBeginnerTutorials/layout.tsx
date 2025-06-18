import { AppSidebar } from "./app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ReactNode } from "react"
import VBTBreadcrumb from "./breadcrumb"

export default function Layout({children}: Readonly<{children: ReactNode}>) {
  console.log("Layout veryBeginnerTutorials")
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex items-center gap-2 px-4 border-b h-16 shrink-0">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        <VBTBreadcrumb/>
        </header>

              {children}

      </SidebarInset>
    </SidebarProvider>
  )
}
