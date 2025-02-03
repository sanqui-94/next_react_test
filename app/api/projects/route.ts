import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  try {
    const projects = await query("SELECT * FROM projects");
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
  }
}

