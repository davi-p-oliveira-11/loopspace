"use client"

import prisma from "@/lib/prisma";

export default async function Home() {
  await prisma
  return (
    <div className="m-4">
      <h1>home ṕage content</h1>
    </div>
  );
}
