-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_channelId_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "channelId" DROP NOT NULL,
ALTER COLUMN "channelId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_channelId_fkey" FOREIGN KEY ("channelId") REFERENCES "channels"("id") ON DELETE SET NULL ON UPDATE CASCADE;
