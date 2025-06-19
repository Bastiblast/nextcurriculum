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
import { notFound, useParams,useRouter } from "next/navigation"

// This is sample data.
const data = {
  changes: [
    {
      file: "Introduction",
      state: "M",
    },
    {
      file: "Principles SOLID",
      state: "U",
    },
    {
      file: "app/layout.tsx",
      state: "M",
    },
  ],
  // TODO - use data to make static rendering
  tree: [
    [
      "Web Development",
      [
        "HTML",
        ["hello", ["route.ts"]],
        "page.tsx",
        "layout.tsx",
        ["CSS", ["page.tsx"]],
      ],
      ["CSS", ["page.tsx"]],
      [
        "JavaScript", 
        ["native",
          
        ],
        ["Librairies", ["React", "Nextjs"]]
      ],
            [
        "Typescript", 
      ],
    ],
    [
      "Server powering",
      ["SSH", "button.tsx", "card.tsx"],
      "header.tsx",
      "footer.tsx",
    ],
    ["Tools",
      ["WSL2"], 
      ["IDE",
        "VSCode",
        "Extensions"
      ]
    ],
    ["public", "favicon.ico", "vercel.svg"],
    ".eslintrc.json",
    ".gitignore",
    "next.config.js",
    "tailwind.config.js",
    "package.json",
    "README.md",
  ],
}

export function AppSidebar({ ...props }: {props : React.ComponentProps<typeof Sidebar> }) {
  const params = useParams()
  const slugs = params as { techno?: string, compose?: string, element?: string }
  const router = useRouter()
  console.log("Slugs:", slugs)


  return (
    <Sidebar {...props}>
      <SidebarContent>
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
                const header = Array.isArray(item) ? item[0] : item
                const trimmedHeader = typeof header === "string" ? header.replaceAll(" ","") : notFound()
                return (<div key={index} className="w-full">
        <div onClick={() => {
          console.log("Navigating to:", `/veryBeginnerTutorials/Rubriques/${trimmedHeader}`)
          return router.push(`/veryBeginnerTutorials/Rubriques/${trimmedHeader}`)}} className="w-full">

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
      >


        <File />
        <div onClick={() => {
          console.log("Navigating to:", `/veryBeginnerTutorials/Rubriques/${route}`)
          return router.push(`/veryBeginnerTutorials/Rubriques/${route}`)}} className="w-full">
        {name}
        </div>
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
              const item = Array.isArray(subItem) ? [subItem[0].replaceAll(" ","")] : [subItem.replaceAll(" ","")]
              const addSubIndexes = incrementIndexes.includes(item[0]) ? incrementIndexes : [...incrementIndexes, item[0]]
              const route = addSubIndexes.join("/").replaceAll(",","/")
              return (

              <div key={index} className="w-full">

               <div onClick={(e) => {
                e.stopPropagation()
                console.log("Navigating to:", `/veryBeginnerTutorials/Rubriques/${route}`)
                return router.push(`/veryBeginnerTutorials/Rubriques/${route}`)}} className="z-10 w-full">

              <Tree key={index} item={subItem} indexes={addSubIndexes} />
             </div>
              </div>
            )})}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
