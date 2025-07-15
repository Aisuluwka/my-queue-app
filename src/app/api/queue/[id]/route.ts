import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.queueItem.delete({
      where: { id: Number(params.id) },
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Ошибка удаления:', error)
    return NextResponse.json({ error: 'Ошибка удаления' }, { status: 500 })
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
      const { name } = await req.json()
  
      const updated = await prisma.queueItem.update({
        where: { id: Number(params.id) },
        data: { name },
      })
  
      return NextResponse.json(updated)
    } catch (error) {
      console.error('Ошибка редактирования:', error)
      return NextResponse.json({ error: 'Ошибка редактирования' }, { status: 500 })
    }
  }
  