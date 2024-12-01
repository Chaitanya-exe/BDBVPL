/*
  Warnings:

  - The `query` column on the `Query` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[phone_number]` on the table `Query` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Query` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Query" DROP COLUMN "query",
ADD COLUMN     "query" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Query_phone_number_key" ON "Query"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Query_email_key" ON "Query"("email");
