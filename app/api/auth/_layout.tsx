import { Separator } from "@radix-ui/react-separator";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
    return (
        <>
        <header>
            Auth
        </header>
        <Separator/>
        <section>
            {children}
        </section>
        </>
    );
}