import bcrypt from "bcryptjs";

import prisma from "./../src/server/db";

async function seed() {
  const email = "admin@admin.qwik";

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  });

  const hashedPassword = await bcrypt.hash(
    "20a470bbf165e06e4f5200ab7cc364c036be29a1",
    10
  );

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
      role: "ADMIN",
    },
  });

  //   await prisma.tour.create({
  //     data: {
  //       title: "My first note",
  //       description: "This is my first note",
  //       difficulty: "EASY",
  //       duration: 120,
  //       price: 100,
  //       maxGroupSize: 10,
  //       summary: "This is my first note",
  //       imageCover: "https://www.example.com/image.jpg",
  //       image: "https://www.example.com/image.jpg",
  //       ratings: 4.5,
  //       ratingsQuantity: 4,
  //       slug: "my-first-note",
  //       startDates: ["2021-12-16,10:00", "2022-01-16,10:00", "2022-12-16,10:00"],
  //       userId: user.id,
  //     },
  //   });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
