import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient();

async function handler(){
    try {
        
    } catch (err) {
        console.log(`Error occured: ${err}`);
        return Response.json({error: "some error occured"},{status: 500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET}