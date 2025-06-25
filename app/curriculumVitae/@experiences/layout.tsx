import React, { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";

export default function Layout({
  teamLead,
  projects,
}: Readonly<{ teamLead: ReactNode; projects: ReactNode }>) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>
          <h2 className="m-0 p-0 text-2xl md:text-3xl text-center md:text-start">
            Experiences
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="md:ml-8">
        <Label>
          <h3 className="text-xl md:text-2xl">Amazon associate 2016 2025</h3>
        </Label>
        {teamLead}
        {projects}
      </CardContent>
    </Card>
  );
}
