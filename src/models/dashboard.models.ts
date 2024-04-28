import prisma from "~/server/db";

export const getDataDashboard = async () => {
  const indexTours = await prisma.tour.count();

  return {
    indexTours,
  };
};
