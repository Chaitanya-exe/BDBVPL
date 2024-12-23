import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const filters = await req.json();
        console.log(filters)
        const response = await userClient.query.findFirst({
            where:{
                ...filters
            }
        });
        console.log(response);
        if(response){
            await userClient.query.delete({
                where:{
                    ...filters
                }
            })
            console.log("query deleted");
            return NextResponse.json({success:true},{status:203});
        }
        return NextResponse.json({success:false,msg:"query not found"},{status:404});
    } catch (err) {
        console.log(`${err}`)
        return NextResponse.json({error: "some error occured"},{status:500});
    }
}

export {handler as DELETE};