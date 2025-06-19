import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Terminal, Download } from "lucide-react";

export default function WSL2Tutorial() {
    return (
        <div className="mx-auto py-10 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Terminal className="w-6 h-6 text-blue-600" />
                        Install WSL2 via Command Line
                    </CardTitle>
                    <div className="mt-2 text-muted-foreground text-sm">
                        <b>Alternative:</b> You can install WSL2 with a single command (Windows 10 21H2+ or Windows 11):
                        <pre className="bg-muted mt-2 p-3 rounded overflow-x-auto text-sm">
                            <code>wsl --install</code>
                        </pre>
                        This command enables all required features and installs Ubuntu by default.
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <ol className="space-y-4 list-decimal list-inside">
                        <li>
                            <span className="font-semibold">Open PowerShell as Administrator</span>
                            <div className="text-muted-foreground text-sm">
                                Right-click the Start button &rarr; <b>Windows PowerShell (Admin)</b>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">Enable WSL & Virtual Machine Platform</span>
                            <pre className="bg-muted mt-2 p-3 rounded overflow-x-auto text-sm">
                                <code>
                                    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart{'\n'}
                                    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
                                </code>
                            </pre>
                        </li>
                        <li>
                            <span className="font-semibold">Restart your computer</span>
                        </li>
                        <li>
                            <span className="font-semibold">Install WSL2 Kernel Update</span>
                            <div className="flex items-center gap-2 mt-2">
                                <Button asChild variant="outline" size="sm">
                                    <a
                                        href="https://aka.ms/wsl2kernel"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Download className="mr-1 w-4 h-4" />
                                        Download WSL2 Kernel
                                    </a>
                                </Button>
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">Set WSL2 as Default</span>
                            <pre className="bg-muted mt-2 p-3 rounded overflow-x-auto text-sm">
                                <code>wsl --set-default-version 2</code>
                            </pre>
                        </li>
                        <li>
                            <span className="font-semibold">Install a Linux Distribution</span>
                            <div className="text-muted-foreground text-sm">
                                Open Microsoft Store, search for <b>Ubuntu</b> (or your preferred distro), and install it.
                            </div>
                        </li>
                        <li>
                            <span className="font-semibold">Launch your Linux distribution</span>
                            <div className="text-muted-foreground text-sm">
                                Complete the setup (username & password) on first launch.
                            </div>
                        </li>
                    </ol>
                    <div className="flex items-center gap-2 mt-6 font-medium text-green-600">
                        <CheckCircle2 className="w-5 h-5" />
                        WSL2 is now ready to use!
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}