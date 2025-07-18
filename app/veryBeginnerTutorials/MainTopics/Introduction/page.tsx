import React from "react";

export default function Page() {
  return (
    <>
      <div>Introduction</div>

      <div className="space-y-4">
        <h2 className="font-semibold text-xl">
          Résumé de la section <code>veryBeginnerTutorials</code>
        </h2>
        <p>
          Ce site sert de recueil de notes personnelles sur divers sujets liés à
          la programmation. La section <code>veryBeginnerTutorials</code>{" "}
          propose des tutoriels pour débutants, couvrant les bases essentielles.
        </p>
        <div>
          <h3 className="font-medium">Arborescence des pages :</h3>
          <pre className="bg-muted p-4 rounded-md text-sm">
            {`
Web Development
  HTML
    hello
      route.ts
    page.tsx
    layout.tsx
    CSS
      page.tsx
  CSS
    page.tsx
  JavaScript
    native
    Librairies
      React
      Nextjs
  Typescript
Server Powering
  SSH
    button.tsx
    card.tsx
  Linux
    global
    VIM
Tools
  WSL2
  IDE
    VSCode
    Extensions
public
  favicon.ico
  vercel.svg
.eslintrc.json
.gitignore
next.config.js
tailwind.config.js
package.json
README.md
  `}
          </pre>
        </div>
        <div>
          <h3 className="font-medium">Points forts :</h3>
          <ul className="list-disc list-inside">
            <li>Organisation claire par niveau et sujet</li>
            <li>Navigation simple grâce à l’arborescence</li>
            <li>Notes personnalisées et adaptées à l’auteur</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium">Points faibles :</h3>
          <ul className="list-disc list-inside">
            <li>Contenu potentiellement limité à l’expérience de l’auteur</li>
            <li>Peu de contributions externes</li>
            <li>
              Manque possible de généralisation pour d’autres utilisateurs
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
