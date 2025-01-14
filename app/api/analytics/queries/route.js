import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function handler(req) {
  if (method === "GET") {
    try {
      const currentYear = new Date().getFullYear();
      const startYear = currentYear - 4;

      const queries = await prisma.query.findMany({
        where: {
          createdAt: {
            gte: new Date(`${startYear}-01-01T00:00:00Z`),
          },
        },
      });

      const countsByYear = queries.reduce((acc, query) => {
        const year = query.createdAt.getFullYear();
        // If the year already exists in the accumulator, increment it; otherwise, set to 1
        if (acc[year]) {
          acc[year]++;
        } else {
          acc[year] = 1;
        }
        return acc;
      });

      const chartData = [
        ["Year","Views","Queries"],
        ...Object.entries(countsByYear).sort(([a],[b]) => Number(a) - Number(b)).map(([year, {views, queries}])=> [year,views,queries])
      ]

      return Response.json({ data : countsByYear }, { status: 200 });
    } catch (error) {
      console.error("Error fetchind counts by year", error);
      return Response.json({ error: "Some err occured" }, { status: 500 });
    }
  }
}
