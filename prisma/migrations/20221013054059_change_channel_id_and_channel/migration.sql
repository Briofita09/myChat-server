/*
  Warnings:

  - Made the column `channelId` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_channelId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "channelId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
