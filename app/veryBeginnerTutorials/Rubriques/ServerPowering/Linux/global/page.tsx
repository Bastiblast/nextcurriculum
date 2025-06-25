import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const linuxDirs = [
  { name: "/", desc: "Root directory, top of the hierarchy." },
  { name: "/home", desc: "User home directories." },
  { name: "/etc", desc: "System configuration files." },
  { name: "/var", desc: "Variable data (logs, spool files)." },
  { name: "/usr", desc: "User programs and data." },
  { name: "/bin", desc: "Essential user binaries." },
  { name: "/sbin", desc: "System binaries." },
  { name: "/tmp", desc: "Temporary files." },
  { name: "/opt", desc: "Optional application software packages." },
  { name: "/dev", desc: "Device files." },
];

const commands = [
  { cmd: "ls", desc: "List directory contents." },
  { cmd: "cd", desc: "Change directory." },
  { cmd: "pwd", desc: "Print working directory." },
  { cmd: "cp", desc: "Copy files and directories." },
  { cmd: "mv", desc: "Move/rename files and directories." },
  { cmd: "rm", desc: "Remove files or directories." },
  { cmd: "mkdir", desc: "Create new directory." },
  { cmd: "rmdir", desc: "Remove empty directory." },
  { cmd: "touch", desc: "Create empty file or update timestamp." },
  { cmd: "find", desc: "Search for files in a directory hierarchy." },
];

const clientApps = [
  { name: "Firefox", desc: "Web browser." },
  { name: "LibreOffice", desc: "Office suite." },
  { name: "VLC", desc: "Media player." },
  { name: "GIMP", desc: "Image editor." },
  { name: "Thunderbird", desc: "Email client." },
];

const serverApps = [
  { name: "OpenSSH", desc: "Secure remote access." },
  { name: "Nginx", desc: "Web server and reverse proxy." },
  { name: "Docker", desc: "Containerization platform." },
  { name: "Fail2ban", desc: "Intrusion prevention." },
  { name: "ufw", desc: "Uncomplicated Firewall." },
];

export default function LinuxGlobalPage() {
  return (
    <div className="space-y-8 mx-auto p-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Linux Directory Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {linuxDirs.map((dir) => (
              <li key={dir.name} className="flex items-center gap-3">
                <Badge variant="outline" className="min-w-[60px]">
                  {dir.name}
                </Badge>
                <span>{dir.desc}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>10 Most Useful Commands</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {commands.map((c) => (
              <li key={c.cmd} className="flex items-center gap-3">
                <Badge variant="secondary" className="min-w-[60px]">
                  {c.cmd}
                </Badge>
                <span>{c.desc}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator />

      <div className="gap-6 grid md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Client Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {clientApps.map((app) => (
                <li key={app.name} className="flex items-center gap-3">
                  <Badge variant="default">{app.name}</Badge>
                  <span>{app.desc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Top 5 Server Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {serverApps.map((app) => (
                <li key={app.name} className="flex items-center gap-3">
                  <Badge variant="default">{app.name}</Badge>
                  <span>{app.desc}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
