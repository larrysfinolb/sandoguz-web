import type { IActivity } from "@/types/activity";
import notion from "@/utils/notion";
import { NextResponse } from "next/server";

const DATABASE_ID = "1bc46e181f6e8015b230d2e175420f68";

function getValue(value: any) {
  return value ?? null;
}
export async function GET() {
  try {
    const query = { database_id: DATABASE_ID };

    const { results } = await notion.databases.query(query);

    const activities: IActivity[] = results.map((page: any) => {
      const { properties } = page;
      const { id, fecha, nombre, descripcion } = properties;

      return {
        id: getValue(id?.unique_id?.number),
        date: getValue(fecha?.date?.start),
        name: getValue(nombre?.title[0]?.plain_text),
        description: getValue(descripcion?.rich_text[0]?.plain_text),
      };
    });

    return NextResponse.json(activities);
  } catch (error: any) {
    return NextResponse.json({ error: "INTERNAL SERVER ERROR" }, { status: 500 });
  }
}
