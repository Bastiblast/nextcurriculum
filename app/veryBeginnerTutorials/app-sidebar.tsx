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
                return (<div key={index} className="w-full">
                  <Link passHref href={`/veryBeginnerTutorials/Rubriques/${item[0].replaceAll(" ","")}`} className="w-full">
                  <div onClick={(e) => {
                    console.log("Clicked on item:", item,data.tree[index])
                  }}>

                  <Tree item={item} />
                  </div>
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

function Tree({ item }: { item: string | any[]}) {
  const params = useParams()
  const slugs = params as { techno?: string, compose?: string, element?: string }
  const techno = slugs.techno ? "/" +  slugs.techno.replaceAll(" ","") : ""
  const compose = slugs.compose ? "/" + slugs.compose.replaceAll(" ","") : ""
  const element = slugs.element ? "/" + slugs.element.replaceAll(" ","") : ""
  const newPath = "/veryBeginnerTutorials/Rubriques/"

  const [name, ...items] = Array.isArray(item) ? item : [item]

  console.log("item:", item, "name:", name, "items:", items)
  if (!items.length) {
    return (
      <SidebarMenuButton
        isActive={name === "button.tsx"}
        className="data-[active=true]:bg-transparent"
      >
        <div onClick={(e) => {
          console.log("Clicked on solo item:", item, data.tree[item])
        }}>

        <File />
              <Link passHref href={newPath + "/" + name} className="w-full">

        {name}
        </Link>
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
            {items.map((subItem, index) => (
              <div key={index} className="w-full" onClick={
                (e) => {
                  e.stopPropagation()
                  //console.log(data.tree[index])
                }
                }>

              <Link key={index} replace href={newPath + "/" + subItem[0]} className="w-full">
              <Tree key={index} item={subItem} />
              </Link>
              </div>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
