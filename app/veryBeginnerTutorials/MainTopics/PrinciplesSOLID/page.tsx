'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const principles = [
  {
    title: "S - Single Responsibility Principle",
    description: "A class should have only one reason to change. Each module or class should focus on a single task.",
    link: "https://en.wikipedia.org/wiki/Single-responsibility_principle"
  },
  {
    title: "O - Open/Closed Principle",
    description: "Software entities should be open for extension, but closed for modification.",
    link: "https://en.wikipedia.org/wiki/Open–closed_principle"
  },
  {
    title: "L - Liskov Substitution Principle",
    description: "Objects of a superclass should be replaceable with objects of a subclass without breaking the application.",
    link: "https://en.wikipedia.org/wiki/Liskov_substitution_principle"
  },
  {
    title: "I - Interface Segregation Principle",
    description: "No client should be forced to depend on methods it does not use.",
    link: "https://en.wikipedia.org/wiki/Interface_segregation_principle"
  },
  {
    title: "D - Dependency Inversion Principle",
    description: "Depend on abstractions, not on concretions. High-level modules should not depend on low-level modules.",
    link: "https://en.wikipedia.org/wiki/Dependency_inversion_principle"
  }
];

export default function SolidPrinciplesSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 m-5">
      {principles.map((p) => (
        <Card key={p.title}>
          <CardHeader>
            <CardTitle>{p.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{p.description}</p>
            <Button asChild variant="outline" size="sm">
              <Link href={p.link} target="_blank" rel="noopener noreferrer">
                Learn more
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}