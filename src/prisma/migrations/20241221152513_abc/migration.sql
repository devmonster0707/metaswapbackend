/*
  Warnings:

  - You are about to alter the column `body` on the `calypsoinvoiceupdate` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Json`.
  - You are about to alter the column `body` on the `calypsopayoutupdate` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Json`.

*/
-- AlterTable
ALTER TABLE `calypsoinvoiceupdate` MODIFY `body` JSON NOT NULL;

-- AlterTable
ALTER TABLE `calypsopayoutupdate` MODIFY `body` JSON NOT NULL;
