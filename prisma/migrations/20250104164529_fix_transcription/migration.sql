/*
  Warnings:

  - Added the required column `language` to the `transcriptions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transcriptions" DROP CONSTRAINT "transcriptions_ownerId_fkey";

-- AlterTable
ALTER TABLE "transcriptions" ADD COLUMN     "language" CHAR(2) NOT NULL;

-- AddForeignKey
ALTER TABLE "transcriptions" ADD CONSTRAINT "transcriptions_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
