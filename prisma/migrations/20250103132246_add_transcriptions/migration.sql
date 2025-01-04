-- AlterTable
ALTER TABLE "users" ALTER COLUMN "firstName" SET DEFAULT '',
ALTER COLUMN "lastName" SET DEFAULT '';

-- CreateTable
CREATE TABLE "Transcription" (
    "id" SERIAL NOT NULL,
    "filename" VARCHAR(50) NOT NULL,
    "text" TEXT NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "wordsQuantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    CONSTRAINT "Transcription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transcription" ADD CONSTRAINT "Transcription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
