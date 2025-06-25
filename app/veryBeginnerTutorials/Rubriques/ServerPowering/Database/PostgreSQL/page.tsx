import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
} from "@/components/ui/shadcn-io/code-block/index";

export default function PostgreSQLUserGuide() {
  return (
    <div className="mx-auto py-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Creating a PostgreSQL User with Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To create a new PostgreSQL user (also called a role) with a
            password, connect to your PostgreSQL server using a superuser
            account (like <code>postgres</code>) and run:
          </p>
          <CodeBlock value={`CREATE USER myuser WITH PASSWORD 'mypassword';`}>
            <CodeBlockBody
              value={`CREATE USER myuser WITH PASSWORD 'mypassword';`}
            >
              <CodeBlockContent language="sql">
                {`CREATE USER myuser WITH PASSWORD 'mypassword';`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            Replace <code>myuser</code> with your desired username and{" "}
            <code>mypassword</code> with a strong password.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>
            Granting <code>CREATEDB</code> Privilege
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To allow the user to create new databases, grant the{" "}
            <code>CREATEDB</code> privilege:
          </p>
          <CodeBlock value={`ALTER USER myuser CREATEDB;`}>
            <CodeBlockBody value={`ALTER USER myuser CREATEDB;`}>
              <CodeBlockContent language="sql">
                {`ALTER USER myuser CREATEDB;`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            Now, <code>myuser</code> can create databases on the PostgreSQL
            server.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Creating a New Database</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To create a new database, use the <code>CREATE DATABASE</code>{" "}
            command. For example:
          </p>
          <CodeBlock value={`CREATE DATABASE mydatabase;`}>
            <CodeBlockBody value={`CREATE DATABASE mydatabase;`}>
              <CodeBlockContent language="sql">
                {`CREATE DATABASE mydatabase;`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            Replace <code>mydatabase</code> with your desired database name.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Creating a New Table</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To create a new table in your database, use the{" "}
            <code>CREATE TABLE</code> statement. For example:
          </p>
          <CodeBlock
            value={`CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE NOT NULL\n);`}
          >
            <CodeBlockBody
              value={`CREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE NOT NULL\n);`}
            >
              <CodeBlockContent language="sql">
                {`CREATE TABLE users (
              id SERIAL PRIMARY KEY,
              name TEXT NOT NULL,
              email TEXT UNIQUE NOT NULL
            );`}
              </CodeBlockContent>
            </CodeBlockBody>
          </CodeBlock>
          <p>
            This creates a <code>users</code> table with <code>id</code>,{" "}
            <code>name</code>, and <code>email</code> columns.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
