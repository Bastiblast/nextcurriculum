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
        "Javascript",

        ["native"],
        ["Librairies", "React", "Next js"],
        ["ORM", "Prisma"],
      ],
      ["Typescript"],
    ],
    [
      "Server Powering",
      ["SSH", "button.tsx", "card.tsx"],
      ["Linux", "global", "VIM", "ownership"],
      ["Database", "PostgreSQL"],
    ],
    ["Tools", ["WSL2"], ["IDE", "VSCode", "Extensions"], ["Power Toys"]],
  ],
};

export default data;
