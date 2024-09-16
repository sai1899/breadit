/*
  Warnings:

  - Added the required column `creatirId` to the `Subreddit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subreddit" ADD COLUMN     "creatirId" TEXT NOT NULL;
