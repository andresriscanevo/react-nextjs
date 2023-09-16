import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const taskid = await prisma.task.findUnique({
    where: { id: Number(params.id) },
  });
  return NextResponse.json(taskid);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const taskUpdate = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });
  return NextResponse.json(taskUpdate);
}
export async function DELETE(request, { params }) {
  try {
    const taskdelete = await prisma.task.delete({
      where: { id: Number(params.id) },
    });
    return NextResponse.json(taskdelete);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
