import { UserFavoriteRestaurant } from "@prisma/client";

export const isRestaurantFavorited = (
  restaurantId: string,
  userFavoriteRestaurants: UserFavoriteRestaurant[],
) => userFavoriteRestaurants?.some((fav) => fav.restaurantId === restaurantId);
