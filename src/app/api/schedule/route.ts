import type { ISchedule } from "@/types/schedule";
import notion from "@/utils/notion";
import { NextResponse } from "next/server";

const DATABASE_ID = '1c446e181f6e8082b449d9bd20839ab7'

function getValue(value: any) {
  return value ?? null;
}

export async function GET() {
  try {
    const query = { database_id: DATABASE_ID }

    const { results } = await notion.databases.query(query)

    const schedule: ISchedule[] = results.map((page: any) => {
      const { properties } = page
      const { id, nombre, grado, horario_imagen } = properties

      return {
        id: getValue(id?.unique_id?.number),
        name: getValue(nombre?.title[0]?.plain_text),
        grade: getValue(grado?.number),
        scheduleImage: getValue(horario_imagen?.files[0]?.file.url),
      }
    })

    return NextResponse.json(schedule);
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "INTERNAL SERVER ERROR" }, { status: 500 });
  }
}