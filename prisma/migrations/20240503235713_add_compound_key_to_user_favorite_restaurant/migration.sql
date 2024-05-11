/*
  Warnings:

  - The primary key for the `UserFavoriteRestaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `UserFavoriteRestaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserFavoriteRestaurant" DROP CONSTRAINT "UserFavoriteRestaurant_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "UserFavoriteRestaurant_pkey" PRIMARY KEY ("userId", "restaurantId");
