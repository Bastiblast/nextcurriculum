import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section className="relative flex justify-center w-full p-3 h-[calc(90%)]">
      <React.Suspense>

      {children}
      </React.Suspense>
    </section>
  );
}