import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const SSHPage: React.FC = () => (
  <main className="space-y-8 mx-auto p-6 max-w-2xl">
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="flex items-center gap-2">
            SSH Tutorial <Badge variant="secondary">Beginner</Badge>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <section>
          <h2 className="mb-2 font-semibold text-lg">Public Key vs Private Key</h2>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              <strong>Private Key:</strong> Stays on your computer. <br />
              <span className="font-semibold text-red-600">Never share it!</span>
            </li>
            <li>
              <strong>Public Key:</strong> Can be shared. <br />
              Place it on servers you want to access.
            </li>
          </ul>
          <p className="mt-2 text-muted-foreground">
            <strong>How it works:</strong> When you connect, the server checks if you have the matching private key for the public key it has.
          </p>
        </section>
        <Separator />
        <section>
          <h2 className="mb-2 font-semibold text-lg">Generate an ED25519 SSH Key</h2>
          <pre>
            ssh-keygen -t ed25519 -C &quot;your_email@example.com&quot;
          </pre>
          <ol className="space-y-1 mt-2 pl-5 list-decimal">
            <li>Run the command above in your terminal.</li>
            <li>Press Enter to accept the default file location.</li>
            <li>Set a passphrase (optional, but recommended).</li>
          </ol>
          <p className="mt-2">
            Your keys will be saved in <code className="bg-muted px-1 rounded">~/.ssh/id_ed25519</code> (private) and <code className="bg-muted px-1 rounded">~/.ssh/id_ed25519.pub</code> (public).
          </p>
        </section>
        <Separator />
        <section>
          <h2 className="mb-2 font-semibold text-lg">Send Your Public Key to a Server</h2>
          <pre>
            ssh-copy-id -i ~/.ssh/id_ed25519.pub user@server-address
          </pre>
          <p className="mt-2">
            Or manually copy the contents of <code className="bg-muted px-1 rounded">id_ed25519.pub</code> to <code className="bg-muted px-1 rounded">~/.ssh/authorized_keys</code> on the server.
          </p>
        </section>
        <Separator />
        <section>
          <h2 className="mb-2 font-semibold text-lg">Build an SSH Config File</h2>
          <p>
            Create or edit <code className="bg-muted px-1 rounded">~/.ssh/config</code>:
          </p>
          <pre>
{`Host myserver
  HostName server-address
  User your-username
  IdentityFile ~/.ssh/id_ed25519
`}
          </pre>
          <p className="mt-2">
            Now you can connect with <code className="bg-muted px-1 rounded">ssh myserver</code>.
          </p>
        </section>
      </CardContent>
    </Card>
  </main>
);

export default SSHPage;