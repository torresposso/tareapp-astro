// src/pages/api/users.ts
import type { APIRoute } from "astro";
import { db } from "@/db/client";

export const GET: APIRoute = async () => {
  const data = await db.query.users.findMany({
    with: {
      tasks: true,
      memberships: {
        with: { team: true },
      },
    },
  });

  return new Response(JSON.stringify(data, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
};
