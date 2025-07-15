// src/app/api/queue/route.ts
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  const queue = await prisma.queueItem.findMany({
    orderBy: { createdAt: 'asc' }
  })
  return NextResponse.json(queue)
}

export async function POST(req: Request) {
  const body = await req.json()
  const item = await prisma.queueItem.create({
    data: { name: body.name },
  })
  return NextResponse.json(item)
}
