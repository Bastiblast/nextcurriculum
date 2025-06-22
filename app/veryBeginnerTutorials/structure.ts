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
        ["Librairies", "React", "Next js"]
      ],
            [
        "Typescript", 
      ],
    ],
    [
      "Server Powering",
      ["SSH", "button.tsx", "card.tsx"],
      ["Linux", 
        "global", "VIM","ownership"],

    ],
    ["Tools",
      ["WSL2"], 
      ["IDE",
        "VSCode",
        "Extensions"
      ],
      ["Power Toys"]
    ],
  ],
}

export default data

