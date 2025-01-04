/*
  Warnings:

  - You are about to drop the column `userId` on the `transcriptions` table. All the data in the column will be lost.
  - Added the required column `ownerId` to the `transcriptions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transcriptions" DROP CONSTRAINT "transcriptions_userId_fkey";

-- AlterTable
ALTER TABLE "transcriptions" DROP COLUMN "userId",
ADD COLUMN     "ownerId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "transcriptions" ADD CONSTRAINT "transcriptions_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
