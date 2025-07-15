-- CreateTable
CREATE TABLE "QueueItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "served" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "QueueItem_pkey" PRIMARY KEY ("id")
);
