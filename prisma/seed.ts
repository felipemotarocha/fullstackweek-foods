const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const createBurguers = async () => {
  const burguersCategory = await prismaClient.category.create({
    data: {
      name: "Burguers",
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

    console.log(`Created ${restaurant.name}`);

    const burguerProducts = [
      {
        name: "Cheese Burguer",
        price: 30,
        description: "A delicious cheese burguer",
        discountPercentage: 0,
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
        description: "A delicious double cheese burguer",
        discountPercentage: 0,
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
        description: "A delicious bacon burguer",
        discountPercentage: 0,
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
        description: "A delicious double bacon burguer",
        discountPercentage: 0,
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
        description: "A delicious chicken burguer",
        discountPercentage: 0,
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
        description: "A delicious double chicken burguer",
        discountPercentage: 0,
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

const createPizzas = async () => {
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

    console.log(`Created ${restaurant.name}`);

    const pizzaProducts = [
      {
        name: "Pepperoni Pizza",
        price: 30,
        description: "A delicious pepperoni pizza",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/e49d8e21-ace5-4803-bd1e-4dc8cd1712b1-berpu3.png",
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
        description: "A delicious margarita pizza",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/3b1fed03-3d45-4c68-8bfd-7affccaeee9e-berpu4.png",
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
        price: 35,
        description: "A delicious hawaiian pizza",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/39af18ac-ddbc-4e94-bfba-8d411ee2a823-berpu5.png",
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
        price: 45,
        description: "A delicious vegetarian pizza",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/88620dce-1d5f-4f0b-b8f1-d268c48eecd9-berpu7.png",
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
        price: 30,
        description: "A delicious meat lovers pizza",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/e26ec412-360b-4432-98b5-1a2557de3fa3-berpu8.png",
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

const createJapanese = async () => {
  const japaneseCategory = await prismaClient.category.create({
    data: {
      name: "Japanese",
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

    const japaneseProducts = [
      {
        name: "Sushi Combo",
        price: 30,
        description: "A delicious sushi combo",
        discountPercentage: 0,
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
        description: "A delicious sashimi combo",
        discountPercentage: 0,
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
        description: "A delicious nigiri combo",
        discountPercentage: 0,
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
        description: "A delicious temaki combo",
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
        description: "A delicious uramaki combo",
        discountPercentage: 0,
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
        description: "A delicious hosomaki combo",
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

const createBrazilian = async () => {
  const brazilianCategory = await prismaClient.category.create({
    data: {
      name: "Brazilian",
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

    const brazilianProducts = [
      {
        name: "Frango Primavera",
        price: 30,
        description: "A delicious picanha",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/721392f0-93bd-46ea-985c-f5da35db706d-xf34pf.png",
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
        name: "Frango Grelhado",
        price: 40,
        description: "A delicious picanha",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/e51743ed-50b3-4d88-ba9f-eb824661f3a7-xf34pe.png",
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
        name: "Salada Especial",
        price: 35,
        description: "A delicious picanha",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/cfb51851-535d-4dd9-9029-82a240cafac1-xf34pd.png",
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
        name: "Omelete",
        price: 35,
        description: "A delicious picanha",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/3e1abeeb-46cc-4ad2-89db-a136f2f9ae66-xf34pc.png",
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
        name: "Picanha",
        price: 50,
        description: "A delicious picanha",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/5d9118c2-8fb1-4753-88f6-432a6a4a9a16-xf34pb.png",
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
        name: "Feijoada",
        price: 60,
        description: "A delicious picanha",
        discountPercentage: 0,
        imageUrl:
          "https://utfs.io/f/65bdc9db-f58e-409e-92f0-a40f3946f8b9-xf34pa.png",
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

const main = async () => {
  await createBurguers();
  await createPizzas();
  await createJapanese();
  await createBrazilian();
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
