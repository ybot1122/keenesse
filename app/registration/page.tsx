"use server";

import { redirect } from "next/navigation";

export default async function Confirm({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  redirect("https://form.jotform.com/242546998937176");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between"></main>
  );
}
