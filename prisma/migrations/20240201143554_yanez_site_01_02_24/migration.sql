/*
  Warnings:

  - You are about to drop the column `name` on the `Subscribers` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Subscribers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Subscribers" DROP COLUMN "name",
DROP COLUMN "surname";
