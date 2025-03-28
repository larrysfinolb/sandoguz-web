import type { IStaff } from "@/types/staff";
import notion from "@/utils/notion";
import { NextResponse } from "next/server";

const DATABASE_ID = '1bc46e181f6e802d8861ff4370de62c5'

function getValue(value: any) {
  return value ?? null;
}

export async function GET() {
  try {
    const query = { database_id: DATABASE_ID }

    const { results } = await notion.databases.query(query)

    const staff: IStaff[] = results.map((page: any) => {
      const { properties } = page
      const { id, imagen, nombre, departamento, cargo, educacion, correo, telefono } = properties

      return {
        id: getValue(id?.unique_id?.number),
        image: getValue(imagen?.files[0]?.file.url),
        name: getValue(nombre?.title[0]?.plain_text),
        department: getValue(departamento?.select?.name),
        position: getValue(cargo?.rich_text[0]?.plain_text),
        education: getValue(educacion?.rich_text[0]?.plain_text),
        email: getValue(correo?.rich_text[0]?.plain_text),
        phone: getValue(telefono?.rich_text[0]?.plain_text),
      }
    })

    return NextResponse.json(staff);
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "INTERNAL SERVER ERROR" }, { status: 500 });
  }
}