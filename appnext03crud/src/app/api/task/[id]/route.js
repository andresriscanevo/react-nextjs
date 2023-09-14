import { NextResponse } from "next/server";

export function GET(request, { params }) {
  return NextResponse.json("obtain task" + params.id);
}

export function DELETE(request, { params }) {
  return NextResponse.json("delete task" + params.id);
}
export function PUT(request, { params }) {
  return NextResponse.json("refresh task" + params.id);
}
