-- DropForeignKey
ALTER TABLE "public"."Startup" DROP CONSTRAINT "Startup_playlistId_fkey";

-- AlterTable
ALTER TABLE "Startup" ALTER COLUMN "views" SET DEFAULT 0,
ALTER COLUMN "playlistId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Startup" ADD CONSTRAINT "Startup_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;
