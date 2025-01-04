/*
  Warnings:

  - You are about to drop the `Transcription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transcription" DROP CONSTRAINT "Transcription_userId_fkey";

-- DropTable
DROP TABLE "Transcription";

-- CreateTable
CREATE TABLE "transcriptions" (
    "id" SERIAL NOT NULL,
    "filename" VARCHAR(50) NOT NULL,
    "text" TEXT NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "wordsQuantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    CONSTRAINT "transcriptions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transcriptions" ADD CONSTRAINT "transcriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
