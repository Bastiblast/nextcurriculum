import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const navigationCommands = [
    { command: "h, j, k, l", description: "Move cursor left, down, up, right" },
    { command: "gg / G", description: "Go to start / end of file" },
    { command: "w / b", description: "Jump forward / backward by word" },
    { command: "0 / $", description: "Go to start / end of line" },
    { command: ":n", description: "Go to line n" },
];

const copyCutPasteCommands = [
    { command: "yy / dd", description: "Copy (yank) / Cut (delete) current line" },
    { command: "yw / dw", description: "Copy / Cut word" },
    { command: "p / P", description: "Paste after / before cursor" },
    { command: "u / Ctrl+r", description: "Undo / Redo" },
];

const advancedUsage = [
    { command: ":split / :vsplit", description: "Split window horizontally / vertically" },
    { command: ":e filename", description: "Open file" },
    { command: ":w / :q / :wq", description: "Save / Quit / Save & Quit" },
    { command: ":%s/old/new/g", description: "Replace all 'old' with 'new'" },
    { command: "Visual Mode (v, V, Ctrl+v)", description: "Select by character, line, or block" },
];

export default function VIMPage() {
    return (
        <div className="mx-auto px-4 py-10 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Linux VIM Tools</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4 text-muted-foreground">
                        <strong>VIM</strong> is a powerful text editor available on most Linux systems. It is highly efficient for editing code and configuration files, offering both basic and advanced features for navigation, editing, and automation.
                    </p>
                    <Separator className="my-4" />
                    <h2 className="mb-2 font-semibold">Common Navigation Commands</h2>
                    <ul className="space-y-1 mb-4">
                        {navigationCommands.map((item, idx) => (
                            <li key={idx}>
                                <span className="bg-muted px-2 py-0.5 rounded font-mono">{item.command}</span>
                                <span className="ml-2 text-sm">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                    <Separator className="my-4" />
                    <h2 className="mb-2 font-semibold">Copy / Cut / Paste</h2>
                    <ul className="space-y-1 mb-4">
                        {copyCutPasteCommands.map((item, idx) => (
                            <li key={idx}>
                                <span className="bg-muted px-2 py-0.5 rounded font-mono">{item.command}</span>
                                <span className="ml-2 text-sm">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                    <Separator className="my-4" />
                    <h2 className="mb-2 font-semibold">Advanced Usage</h2>
                    <ul className="space-y-1">
                        {advancedUsage.map((item, idx) => (
                            <li key={idx}>
                                <span className="bg-muted px-2 py-0.5 rounded font-mono">{item.command}</span>
                                <span className="ml-2 text-sm">{item.description}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}