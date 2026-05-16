import { PrismaClient } from "@prisma/client";
import { parse } from "cookie";
const userClient = new PrismaClient();

function parseDate(date){
    const [day, month, year] = date.split('-').map(Number);
    const fullYear = year < 100 ? 2000 + year : year;
    return new Date(fullYear, month - 1, day + 1);
}

async function handler(req){
    try {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const queries = Object.fromEntries(url.searchParams);
        const date = queries.date
        console.log(date)
        let data = await userClient.query.findMany({
            where:{
                date:{    
                    lte: date
                }
            },
            orderBy:{
                date:"desc"
            }
        });
        data = data.map((dat)=>{
            const some = dat.date;
            dat.date = some.toLocaleDateString();
            return dat;
        });
        return Response.json({success:true, data},{status:200});
    } catch (err) {
        console.log(`Error occured: ${err}`);
        return Response.json({error: "some error occured"},{status: 500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET}