import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
} from "@/components/ui/shadcn-io/code-block/index";

export default function ORMPage() {
  return (
    <div className="space-y-6 mx-auto py-10 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Installing Prisma in Your Next.js Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Prisma is a modern ORM (Object-Relational Mapping) tool that helps
            you interact with your database in a type-safe way. To get started,
            install the Prisma client:
          </p>
          <CodeBlock value={`npm install @prisma/client`}>
            <CodeBlockBody value={`npm install @prisma/client`}>
              <CodeBlockContent language="bash">
                {`npm install @prisma/client`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            This command adds the Prisma client library to your project,
            allowing your Next.js app to communicate with your database.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How Prisma Works with Your Database</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Prisma uses a <b>schema file</b> to define your database models and
            relationships. When you make changes to your schema, Prisma can
            generate and run migrations to update your database structure
            automatically.
          </p>
          <p>
            This approach keeps your database and application code in sync, and
            provides type safety when querying your data.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Configuring the Database Connection (.env file)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Prisma uses a <b>.env</b> file to store your database connection URL
            securely. This URL tells Prisma how to connect to your database.
          </p>
          <p>
            Open (or create) a <code>.env</code> file in your project root and
            add the following line, replacing the value with your actual
            database connection string:
          </p>
          <CodeBlock value={`DATABASE_URL="your_database_connection_url"`}>
            <CodeBlockBody
              value={`DATABASE_URL="your_database_connection_url"`}
            >
              <CodeBlockContent language="env">
                {`DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            For example, for a local PostgreSQL database, it might look like:
          </p>
          <CodeBlock
            value={`DATABASE_URL="postgresql://user:password@localhost:5432/database"`}
          >
            <CodeBlockBody
              value={`DATABASE_URL="postgresql://user:password@localhost:5432/database"`}
            >
              <CodeBlockContent language="env">
                {`DATABASE_URL="postgres://user:password@localhost:5432/database"`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            Make sure to keep your <code>.env</code> file private and never
            commit it to public repositories.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Running Migrations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            After updating your Prisma schema, use the following command to
            create and apply a migration:
          </p>
          <CodeBlock value={`npx prisma migrate dev --name init`}>
            <CodeBlockBody value={`npx prisma migrate dev --name init`}>
              <CodeBlockContent language="bash">
                {`npx prisma migrate dev --name init`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            This command creates a new migration named <b>init</b> and applies
            it to your database. It also updates the Prisma client to match your
            schema.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exploring Your Data with Prisma Studio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            To view and edit your database records in a user-friendly interface,
            run:
          </p>
          <CodeBlock value={`npx prisma studio`}>
            <CodeBlockBody value={`npx prisma studio`}>
              <CodeBlockContent language="bash">
                {`npx prisma studio`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            Prisma Studio opens a web UI where you can browse and manage your
            data easily.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
