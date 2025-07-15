
import { PrismaClient } from '@prisma/client' 

const prisma = new PrismaClient()

async function main() {
  await prisma.queue.create({
    data: { name: 'Главная очередь' },
  })

  await prisma.queueItem.createMany({
    data: [
      { name: 'Айсулу' },
      { name: 'Иван' },
      { name: 'Мария' },
    ],
  })

  console.log('✅ Данные успешно добавлены!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
