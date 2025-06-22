"use client"

import * as React from "react"
import { ChevronRight, File, Folder } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { notFound,useRouter } from "next/navigation"
import data from "./structure"
// This is sample data.


export function AppSidebar() {

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Very Beginner Tutorials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Link href="/veryBeginnerTutorials" className="w-full">
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Main topic</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.changes.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton>
                    <File />
                    <Link href={`/veryBeginnerTutorials/MainTopics/${item.file.replaceAll(" ","")}`} className="w-full">

                    {item.file}
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.state}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Rubriques</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.tree.map((item, index) => {
                const [header] = Array.isArray(item) ? item : [item]
                const trimmedHeader = typeof header === "string" ? header.replaceAll(" ","") : notFound()
                return (<div key={index} className="w-full">
        <div onClick={(e) => {
          e.stopPropagation
          console.log("Navigating to:", `/veryBeginnerTutorials/Rubriques/${trimmedHeader}`)
          //return router.push(`/veryBeginnerTutorials/Rubriques/${trimmedHeader}`)
          }} className="w-full">

                  <Tree item={item} indexes={[trimmedHeader]} />
          </div>
        
                  </div>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function Tree({ item, indexes }: { item: string | any[], indexes: string[] }) {

  const [name, ...items] = Array.isArray(item) ? item : [item]

  const incrementIndexes = indexes.find((i: string) => i === name.replaceAll(" ","")) ? [...indexes]  : [...indexes,name.replaceAll(" ","")]

  const route = incrementIndexes.join("/").replaceAll(",","/")

  const router = useRouter()

  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === "button.tsx"}
        className="data-[active=true]:bg-transparent"
        onClick={() => {
          return router.push(`/veryBeginnerTutorials/Rubriques/${route}`)}}
      >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
</svg>




        {name}
      </SidebarMenuButton>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen={name === "components" || name === "ui"}
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <ChevronRight className="transition-transform" />
            <Folder />
            {name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {
            
            items.map((subItem, index) => {
              const [item] = Array.isArray(subItem) ? subItem : [subItem]
              const itemKey = item.replaceAll(" ","")
              const addSubIndexes = incrementIndexes.includes(itemKey) ? incrementIndexes : [...incrementIndexes, itemKey]
              return (
                <Tree key={index} item={subItem} indexes={addSubIndexes} />
            )})}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
