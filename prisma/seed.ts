const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec nisl lorem. Praesent pharetra, sapien ut fringilla malesuada, nisi felis ullamcorper ex, eu consectetur elit dolor sed dolor. Praesent orci mi, auctor aliquet semper vitae, volutpat quis augue. Cras porta sapien nec pharetra laoreet. Sed at velit sit amet mauris varius volutpat sit amet id mauris. Maecenas vitae mattis ante. Morbi nulla quam, sagittis at orci eu, scelerisque auctor neque.";

const createBurguers = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const burguersCategory = await prismaClient.category.create({
    data: {
      name: "Hambúrgueres",
      imageUrl:
        "https://utfs.io/f/92918634-fc03-4425-bc1f-d1fbc8933586-vzk6us.png",
    },
  });

  const burguerRestaurants = [
    {
      name: "The Burguer King",
      imageUrl:
        "https://utfs.io/f/020e448e-a7d8-433f-9622-cb3b68f34d48-p3apya.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Omni Burguer",
      imageUrl:
        "https://utfs.io/f/d0c54665-78d0-41af-98a4-8d1f459c622c-p3apy9.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "The Burguer Queen",
      imageUrl:
        "https://utfs.io/f/d9834f2e-bc37-4c64-981b-cabf03018322-p3apy8.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
    {
      name: "Burguer House",
      imageUrl:
        "https://utfs.io/f/9c193fc1-9dcb-4394-8be4-d783266134dc-p3apy7.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: burguersCategory.id,
        },
      },
    },
  ];

  for (const item of burguerRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    console.log(`Created ${restaurant.name}`);

    const burguerProducts = [
      {
        name: "Cheese Burguer",
        price: 30,
        description: description,
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/ae177fa1-129c-4f43-9928-aa8ac1080a18-yqapzx.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Double Cheese Burguer",
        price: 40,
        description: description,
        discountPercentage: 7,
        imageUrl:
          "https://utfs.io/f/dca007fe-0025-422e-9328-16d40f0a1792-yqapzy.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Bacon Burguer",
        price: 35,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/4cb1ca21-0748-4296-a23d-88e52687506a-yqapzz.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Double Bacon Burguer",
        price: 45,
        description: description,
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/ed9fde1e-0675-4829-8001-a775e2825dc6-yqaq00.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Chicken Burguer",
        price: 30,
        description: description,
        discountPercentage: 7,
        imageUrl:
          "https://utfs.io/f/0aff860a-3e05-42fd-9b2a-53d03c744949-yqaq01.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
      {
        name: "Double Chicken Burguer",
        price: 40,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/d2157790-fcb7-4d09-b074-80af4bfb9892-yqaq02.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: burguersCategory.id,
          },
        },
      },
    ];

    for (const product of burguerProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createPizzas = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const pizzasCategory = await prismaClient.category.create({
    data: {
      name: "Pizzas",
      imageUrl:
        "https://utfs.io/f/d9ca0163-6bc8-42dc-bbb3-377636849cd8-mtj7yz.png",
    },
  });

  const pizzaRestaurants = [
    {
      name: "Pizza Hut",
      imageUrl:
        "https://utfs.io/f/f50301c9-7968-4d76-b4a3-b8ed24e2089c-5p2j0.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "Omni Pizza",
      imageUrl:
        "https://utfs.io/f/8a9eb9dc-6434-4246-91c9-1c0a60a6e5f0-5p2j1.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "The Pizza Queen",
      imageUrl:
        "https://utfs.io/f/e83dc871-19e3-4d39-8163-fb2f1e24b6b1-5p2j2.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
    {
      name: "Pizza House",
      imageUrl:
        "https://utfs.io/f/a73ec63a-7fc8-4a23-8d03-62debee79e6a-5p2j3.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: pizzasCategory.id,
        },
      },
    },
  ];

  for (const item of pizzaRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    console.log(`Created ${restaurant.name}`);

    const pizzaProducts = [
      {
        name: "Pepperoni Pizza",
        price: 45,
        description: description,
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/645ba997-00b1-44ed-9928-b9eb41e93896-berpub.jpg",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Margarita Pizza",
        price: 40,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/4ee1f69b-e0a3-4166-bae5-b666996bcd3b-berpua.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Hawaiian Pizza",
        price: 45,
        description: "A delicious hawaiian pizza",
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/0bb7a869-f369-4506-94ea-6cc23c8dd92f-berpu9.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Vegetarian Pizza",
        price: 35,
        description: description,
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/1bb04a24-361c-4e3a-ad2f-81255f2d53b9-berpux.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
      {
        name: "Meat Lovers Pizza",
        price: 50,
        description: description,
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/ead919ee-2e3d-423f-b294-e525f9d6a5b7-berpuy.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: pizzasCategory.id,
          },
        },
      },
    ];

    for (const product of pizzaProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createJapanese = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const japaneseCategory = await prismaClient.category.create({
    data: {
      name: "Japonesa",
      imageUrl:
        "https://utfs.io/f/ccc2351a-49b0-4613-a233-3b3b3bd6a47c-yd9ii3.png",
    },
  });

  const japaneseRestaurants = [
    {
      name: "Sushi House",
      imageUrl:
        "https://utfs.io/f/7f52b936-9f7a-40cc-b22f-b62727ddb9cc-fu3r05.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      name: "Omni Sushi",
      imageUrl:
        "https://utfs.io/f/f809b477-7cf1-47f5-8664-0a4566225867-fu3r06.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      name: "The Sushi Queen",
      imageUrl:
        "https://utfs.io/f/42bb722a-0b76-40e8-8251-cee9093bed38-fu3r07.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
    {
      name: "Sushi House",
      imageUrl:
        "https://utfs.io/f/de37be82-23bf-4901-aeea-b93c281bf401-fu3r08.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: japaneseCategory.id,
        },
      },
    },
  ];

  for (const item of japaneseRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    console.log(`Created ${restaurant.name}`);

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    const japaneseProducts = [
      {
        name: "Sushi Combo",
        price: 30,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/5ef70d5c-892b-424d-8655-6bc2716411e1-1lryd0.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Sashimi Combo",
        price: 40,
        description: description,
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/e8b2fb18-d636-477f-8bed-cfe85358246f-1lryd1.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Nigiri Combo",
        price: 35,
        description: description,
        discountPercentage: 7,
        imageUrl:
          "https://utfs.io/f/fd9458a3-153b-4833-aca1-61a882da1ce6-1lryd2.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Temaki Combo",
        price: 45,
        description: description,
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/eec36a13-de2d-48ed-92d2-4f74477dad83-1lryd3.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Uramaki Combo",
        price: 30,
        description: description,
        discountPercentage: 10,
        imageUrl:
          "https://utfs.io/f/c04a5df1-c1ac-4e28-ba48-27d856caa553-1lryd4.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
      {
        name: "Hosomaki Combo",
        price: 40,
        description: description,
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/fd147569-14c6-428d-9a54-df64c61c6bb6-1lryd5.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: japaneseCategory.id,
          },
        },
      },
    ];

    for (const product of japaneseProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createBrazilian = async (
  desertsCategoryId: string,
  juicesCategoryId: string,
) => {
  const brazilianCategory = await prismaClient.category.create({
    data: {
      name: "Brasileira",
      imageUrl:
        "https://utfs.io/f/d84e3a7a-fcf6-4d3d-86bf-d62c0b1febdc-m1yv44.png",
    },
  });

  const brazilianRestaurants = [
    {
      name: "Churrascaria House",
      imageUrl:
        "https://utfs.io/f/5a090f6e-520f-418a-a42a-043b512314a2-n9n78u.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      name: "Omni Churrascaria",
      imageUrl:
        "https://utfs.io/f/87338583-660e-47f1-a80d-6ea804298bd5-n9n78v.png",
      deliveryFee: 5,
      deliveryTimeMinutes: 30,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      name: "The Churrascaria Queen",
      imageUrl:
        "https://utfs.io/f/b26b00ca-5041-46cb-9b68-a1856ed064ad-n9n78w.png",
      deliveryFee: 0,
      deliveryTimeMinutes: 45,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
    {
      name: "Churrascaria House",
      imageUrl:
        "https://utfs.io/f/c1f279ea-ac09-4e4f-9757-30018cb4c7bc-n9n78x.png",
      deliveryFee: 10,
      deliveryTimeMinutes: 20,
      categories: {
        connect: {
          id: brazilianCategory.id,
        },
      },
    },
  ];

  for (const item of brazilianRestaurants) {
    const restaurant = await prismaClient.restaurant.create({
      data: item,
    });

    console.log(`Created ${restaurant.name}`);

    await createDeserts(restaurant.id, desertsCategoryId);
    await createJuices(restaurant.id, juicesCategoryId);

    const brazilianProducts = [
      {
        name: "Camarão Citrus",
        price: 40,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/cecdeeb8-10e6-4be8-8553-0a120717d194-xf34p9.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Picanha Especial",
        price: 45,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/089299df-fcb9-446a-a8cc-75e4e26b7357-xf34p8.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Macarrão com Carne",
        price: 35,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/891eb8aa-635e-4cb3-b7fd-eb8d1c9f14e1-xf34p7.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Carne com Salada",
        price: 35,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/43d9e18a-4ba9-47b6-9a87-6d4fedbd6f41-xf34ol.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Filé Mignon com Fritas",
        price: 40,
        description: description,
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/0cfa51a6-1a88-4114-a6c6-bf607a5a1cb0-xf34ok.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
      {
        name: "Frango ao Molho",
        price: 40,
        description: description,
        discountPercentage: 5,
        imageUrl:
          "https://utfs.io/f/9158a622-4b87-4ec6-a726-569dee27a093-xf34oj.png",
        restaurant: {
          connect: {
            id: restaurant.id,
          },
        },
        category: {
          connect: {
            id: brazilianCategory.id,
          },
        },
      },
    ];

    for (const product of brazilianProducts) {
      await prismaClient.product.create({
        data: product,
      });

      console.log(`Created ${product.name}`);
    }
  }
};

const createDeserts = async (restaurantId: string, categoryId: string) => {
  await prismaClient.restaurant.update({
    where: {
      id: restaurantId,
    },
    data: {
      categories: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  const desertProducts = [
    {
      name: "Sorvete Especial",
      price: 30,
      description: description,
      discountPercentage: 10,
      imageUrl:
        "https://utfs.io/f/b703fcaa-eb9c-4257-a08e-fba0f0e12fc1-pr8gxl.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Bolo de Chocolate",
      price: 40,
      description: description,
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/029befff-aba7-49b3-91c4-8da022e699b0-pr8gxm.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Petit Gateau",
      price: 55,
      description: description,
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/98f262f6-dc35-428b-bac9-ac443f9f41bb-pr8gxn.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Bolo de Morango",
      price: 35,
      description: description,
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/6e6ad97a-f1f1-4d4b-bb40-f5ff25ba97d4-pr8gxo.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Biscoito de Chocolate",
      price: 30,
      description: description,
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/4b8d0b7c-daa9-46f6-aebd-385cf5e086f7-pr8gxp.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Torta de Morango",
      price: 45,
      description: description,
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/4caadde1-0a1c-45a6-895b-4bfb6986099d-pr8gxq.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  ];

  for (const product of desertProducts) {
    await prismaClient.product.create({
      data: product,
    });

    console.log(`Created ${product.name}`);
  }
};

const createJuices = async (restaurantId: string, categoryId: string) => {
  await prismaClient.restaurant.update({
    where: {
      id: restaurantId,
    },
    data: {
      categories: {
        connect: {
          id: categoryId,
        },
      },
    },
  });

  const juiceProducts = [
    {
      name: "Suco de Cenoura",
      price: 15,
      description: description,
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/5126e950-40ca-4ef1-a166-16274fec16bc-6b2vea.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco Cítrico",
      price: 20,
      description: description,
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/6dbe915d-af87-4f2a-b841-864ba9427da8-6b2ve9.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Limão",
      price: 12,
      description: description,
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/03aa4137-c949-4d2c-bdf2-bad6dd1f565e-6b2ve7.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Laranja",
      price: 12,
      description: description,
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/ce2b8e30-b922-4b1e-bdde-656348cd25c3-6b2ve6.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Abacaxi",
      price: 12,
      description: description,
      discountPercentage: 7,
      imageUrl:
        "https://utfs.io/f/c4202826-7014-4368-8941-fa1af9b9c8b2-6b2ve5.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
    {
      name: "Suco de Melancia",
      price: 12,
      description: description,
      discountPercentage: 5,
      imageUrl:
        "https://utfs.io/f/a9ba878f-79a8-4c25-883c-5c2e1670b256-6b2ve4.png",
      restaurant: {
        connect: {
          id: restaurantId,
        },
      },
      category: {
        connect: {
          id: categoryId,
        },
      },
    },
  ];

  for (const product of juiceProducts) {
    await prismaClient.product.create({
      data: product,
    });

    console.log(`Created ${product.name}`);
  }
};

const main = async () => {
  const desertsCategory = await prismaClient.category.create({
    data: {
      name: "Sobremesas",
      imageUrl:
        "https://utfs.io/f/0f81c141-4787-4a81-abce-cbd9c6596c7a-xayf5d.png",
    },
  });

  const juicesCategory = await prismaClient.category.create({
    data: {
      name: "Sucos",
      imageUrl:
        "https://utfs.io/f/9f3013bf-0778-4d80-a330-4da2682deaf9-o41y62.png",
    },
  });

  await createBurguers(desertsCategory.id, juicesCategory.id);
  await createPizzas(desertsCategory.id, juicesCategory.id);
  await createJapanese(desertsCategory.id, juicesCategory.id);
  await createBrazilian(desertsCategory.id, juicesCategory.id);
};

main()
  .then(() => {
    console.log("Seed do banco de dados realizado com sucesso!");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
