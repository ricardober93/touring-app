export const getTours = async ({
  skip = 0,
  take = 10,
}: {
  skip: number;
  take: number;
}) => {
  const tours = await prisma.tour.findMany({
    skip,
    take,
    orderBy: { updatedAt: "desc" },
  });

  const total = await prisma.tour.count();

  return {
    tours,
    total,
  };
};
