import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const details = await request.json();

  return NextResponse.json(details)
}