import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PowerToysKeyboardManager () {
    return (
        <div className="max-w-xl mx-auto mt-10">
            <Card>
                <CardHeader>
                    <CardTitle>PowerToys Keyboard Manager</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">
                        The <strong>Keyboard Manager</strong> in PowerToys allows you to remap keys and create custom shortcuts on Windows, making your workflow more efficient.
                    </p>
                    <h3 className="font-semibold mb-2">How to Install PowerToys with Windows Package Manager</h3>
                    <ol className="list-decimal list-inside mb-4 space-y-1">
                        <li>
                            Open <span className="font-mono bg-muted px-1 py-0.5 rounded">Windows Terminal</span> or <span className="font-mono bg-muted px-1 py-0.5 rounded">Command Prompt</span>.
                        </li>
                        <li>
                            Run the following command:
                            <pre className="bg-muted rounded p-2 mt-2 mb-0 font-mono text-sm overflow-x-auto">
                                winget install --id Microsoft.PowerToys --source winget
                            </pre>
                        </li>
                        <li>
                            After installation, launch PowerToys and enable <strong>Keyboard Manager</strong> from the sidebar.
                        </li>
                    </ol>
                    <Button asChild>
                        <a
                            href="https://learn.microsoft.com/fr-fr/windows/powertoys/install#installing-with-windows-package-manager"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more in the official docs
                        </a>
                    </Button>
                </CardContent>
            </Card>
            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Keyboard Manager Features</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Remap Keys:</strong> Change the function of any key on your keyboard.
                        </li>
                        <li>
                            <strong>Create Shortcuts:</strong> Assign custom shortcuts to frequently used actions.
                        </li>
                        <li>
                            <strong>Import/Export Settings:</strong> Share your keyboard configurations with others or use them on different machines.
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
};

export default PowerToysKeyboardManager;