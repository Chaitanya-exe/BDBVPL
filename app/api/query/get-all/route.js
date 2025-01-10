import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const data = await userClient.query.findMany();
        return NextResponse.json({success:true, data},{status:200});
    } catch (err) {
        return NextResponse.json({err:"some error occured"},{status:500})
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as GET}