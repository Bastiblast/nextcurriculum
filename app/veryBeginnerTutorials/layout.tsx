import { AppSidebar } from "./app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ReactNode, Suspense } from "react"

export default function Template({children}: Readonly<{children: ReactNode}>) {
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
        </header>
        <Suspense key={Date.now()} fallback={<Loading />}>
              {children}
              </Suspense>

      </SidebarInset>
    </SidebarProvider>
  )
}

function Loading() {
  'use client'
  return (
            <div className="flex flex-col flex-1 gap-4 p-4">
          <div className="gap-4 grid md:grid-cols-3 auto-rows-min">
            <div className="bg-muted/50 rounded-xl aspect-video" />
            <div className="bg-muted/50 rounded-xl aspect-video" />
            <div className="bg-muted/50 rounded-xl aspect-video" />
          </div>
        Chargement....
          <div className="flex-1 bg-muted/50 rounded-xl min-h-[100vh] md:min-h-min" />
        </div>
  )
}