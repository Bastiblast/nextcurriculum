"use client"

import React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  children,
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {


  const [childOne,childTwo] = children
  const [checked,setChecked] = React.useState(!true)

  React.useEffect(() => {
    console.log(checked)
  },[checked])

  return (
    <div className="relative flex flex-col h-7">

    <SwitchPrimitive.Root
    checked={checked}
      data-slot="switch"
      onCheckedChange={() => setChecked(!checked)}


      className={cn(
        "peer data-[state=checked]:bg-input data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 py-3 px-2 flex h-full w-auto shrink-0 items-center justify-around rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
      >
        <span className={
          cn(
        !checked ? "text-black" : "text-white/50",
        "pr-5 z-50 font-bold"
      )}>
          Connection
          </span>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "absolute left-0 bg-black dark:data-[state=unchecked]:bg-white dark:data-[state=checked]:bg-white pointer-events-none size-4 w-1/2 h-full rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%)] data-[state=unchecked]:translate-x-0"
        )}
        />
        <span className={
          cn(
        checked ? "text-black" : "text-white/50",
        "z-50 font-bold"
      )}>

        Inscription
        </span>
    </SwitchPrimitive.Root>

    {!checked ? childOne : childTwo}
        </div>
  )
}

export { Switch }
