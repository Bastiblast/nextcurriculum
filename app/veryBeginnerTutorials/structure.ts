const data = {
  changes: [
    {
      file: "Introduction",
      state: "M",
    },
    {
      file: "Principles SOLID",
      state: "U",
    },
    {
      file: "Clean Code",
      state: "M",
    },
  ],
  tree: [
    [
      "Web Development",
      [
        "HTML",
        ["hello", ["route.ts"]],
        "page.tsx",
        "layout.tsx",
        ["CSS", ["page.tsx"]],
      ],
      ["CSS", ["page.tsx"]],
      [
        "JavaScript", 
        ["native",
          
        ],
        ["Librairies", ["React", "Nextjs"]]
      ],
            [
        "Typescript", 
      ],
    ],
    [
      "Server Powering",
      ["SSH", "button.tsx", "card.tsx"],
      ["Linux", "global", "VIM"],

    ],
    ["Tools",
      ["WSL2"], 
      ["IDE",
        "VSCode",
        "Extensions"
      ],
      ["PowerToys"]
    ],
    ["public", "favicon.ico", "vercel.svg"],
    ".eslintrc.json",
    ".gitignore",
    "next.config.js",
    "tailwind.config.js",
    "package.json",
    "README.md",
  ],
}

export default data

