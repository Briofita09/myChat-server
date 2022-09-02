import { prisma } from "../src/database/database.js";

async function createServers() {
  await prisma.channel.upsert({
    where: {
      name: "channel 1",
    },
    update: {},
    create: { name: "channel 1" },
  });
  await prisma.channel.upsert({
    where: {
      name: "channel 2",
    },
    update: {},
    create: { name: "channel 2" },
  });
  await prisma.channel.upsert({
    where: {
      name: "channel 3",
    },
    update: {},
    create: { name: "channel 3" },
  });
  await prisma.channel.upsert({
    where: {
      name: "channel 4",
    },
    update: {},
    create: { name: "channel 4" },
  });
  await prisma.channel.upsert({
    where: {
      name: "channel 5",
    },
    update: {},
    create: { name: "channel 5" },
  });
  await prisma.channel.upsert({
    where: {
      name: "channel 6",
    },
    update: {},
    create: { name: "channel 6" },
  });
}

(async () => {
  await createServers();
})()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
