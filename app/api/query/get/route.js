import { PrismaClient } from "@prisma/client";
const userClient = new PrismaClient();

async function handler(req){
    try {
        const url = new URL(req);
        const queries = url.queries();
        console.log(queries);
        return Response.json({success:true},{status:200});
    } catch (err) {
        console.log(`Error occured: ${err}`);
        return Response.json({error: "some error occured"},{status: 500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET}