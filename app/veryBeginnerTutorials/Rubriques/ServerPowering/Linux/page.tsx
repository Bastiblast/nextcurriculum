import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const distributions = [
    {
        name: "Ubuntu",
        description:
            "User-friendly, widely supported, and great for beginners. Popular for desktops and servers.",
    },
    {
        name: "Debian",
        description:
            "Stable, reliable, and the base for many other distributions. Preferred for servers and advanced users.",
    },
    {
        name: "Fedora",
        description:
            "Cutting-edge features, sponsored by Red Hat. Ideal for developers and those wanting the latest software.",
    },
    {
        name: "Arch Linux",
        description:
            "Rolling release, highly customizable, and minimal by default. Suited for advanced users who want full control.",
    },
    {
        name: "CentOS (now AlmaLinux/Rocky Linux)",
        description:
            "Enterprise-grade, stable, and used in production servers. CentOS is now replaced by AlmaLinux and Rocky Linux.",
    },
];

export default function LinuxPage() {
    return (
        <main className="mx-auto px-4 py-10 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Why Use Linux?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        <strong>The best reason to use Linux:</strong> <br />
                        <span>
                            Linux is open-source, secure, highly customizable, and free to use. It powers most servers, supercomputers, and is trusted for its stability and performance.
                        </span>
                    </p>
                </CardContent>
            </Card>

            <Separator className="my-8" />

            <Card>
                <CardHeader>
                    <CardTitle>The 5 Most Used Linux Distributions</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                        {distributions.map((distro) => (
                            <li key={distro.name}>
                                <div className="font-semibold">{distro.name}</div>
                                <div className="text-muted-foreground text-sm">{distro.description}</div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </main>
    );
}