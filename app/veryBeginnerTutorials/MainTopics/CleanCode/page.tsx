import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const cleanCodePrinciples = [
    {
        title: "Meaningful Names",
        description: "Choose descriptive and unambiguous names for variables, functions, and classes.",
        details: `
- Use intention-revealing names.
- Avoid disinformation and meaningless distinctions.
- Use pronounceable and searchable names.
- Prefer names that describe the purpose or usage.
        `,
    },
    {
        title: "Functions Should Be Small",
        description: "Keep functions short and focused on a single task.",
        details: `
- Each function should do one thing and do it well.
- Functions should rarely be longer than 20 lines.
- Extract logic into smaller helper functions when possible.
        `,
    },
    {
        title: "Avoid Comments",
        description: "Write code that is self-explanatory, reducing the need for comments.",
        details: `
- Use comments only to explain why something is done, not what is done.
- Prefer expressive code over explanatory comments.
- Remove obsolete or misleading comments.
        `,
    },
    {
        title: "Formatting",
        description: "Consistent formatting improves readability.",
        details: `
- Use consistent indentation and spacing.
- Group related code together.
- Use blank lines to separate concepts.
        `,
    },
    {
        title: "Error Handling",
        description: "Handle errors gracefully and clearly.",
        details: `
- Use exceptions rather than return codes.
- Provide context with error messages.
- Avoid catching generic exceptions.
        `,
    },
    {
        title: "DRY Principle (Don't Repeat Yourself)",
        description: "Avoid code duplication by extracting common logic.",
        details: `
- Reuse code through functions, classes, or modules.
- Refactor duplicated logic into shared components.
        `,
    },
    {
        title: "Single Responsibility Principle",
        description: "Each module or class should have one reason to change.",
        details: `
- Organize code so each part has a clear, distinct responsibility.
- Avoid classes or functions that handle multiple concerns.
        `,
    },
];

export default function CleanCodePage() {
    return (
        <main className="max-w-2xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-6">Clean Code Principles</h1>
            <p className="mb-8 text-muted-foreground">
                Key principles from &quot;Clean Code: A Handbook of Agile Software Craftsmanship&quot; by Robert C. Martin.
            </p>
            <Accordion type="multiple" className="w-full">
                {cleanCodePrinciples.map((principle, idx) => (
                    <AccordionItem key={idx} value={principle.title}>
                        <AccordionTrigger>
                            <span className="font-semibold">{principle.title}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-2">{principle.description}</p>
                            <pre className="bg-muted rounded p-3 whitespace-pre-wrap text-sm">{principle.details}</pre>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </main>
    );
}