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
import { useParams } from "next/navigation"
import { useRef } from "react"

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
                console.log("debug indexes", item,Array.isArray(item))
                const indexes = Array.isArray(item) ? item[0].replaceAll(" ","") : item.replaceAll(" ","")
                console.log("top level indexes", indexes)
                return (<div key={index} className="w-full">

                  <Link passHref href={`/veryBeginnerTutorials/Rubriques/${indexes}`} className="w-full">
                  {<Tree item={item} indexes={[indexes]} />}
              </Link>
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

  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === "button.tsx"}
        className="data-[active=true]:bg-transparent"
      >


        <File />
        <Link passHref href={`/veryBeginnerTutorials/Rubriques/${route}`} className="w-full">
        {name}
        </Link>
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

              <Link href={`/veryBeginnerTutorials/Rubriques/${route}`} className="w-full">

              <Tree key={index} item={subItem} indexes={addSubIndexes} />
             </Link>
              </div>
            )})}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
