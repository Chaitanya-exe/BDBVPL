import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const body = await req.json();
        console.log(body)

        const dbRes = await userClient.query.findFirst({
            where:{
                phone_number: body.number
            }
        });
        if(dbRes){
            const response = await userClient.query.update({
                where:{
                    phone_number: body.number
                },
                data:{
                    query: {
                        push: body.userQuery
                    }
                }
            });
            return Response.json({response, success:true, msg:"query submitted"},{status:201});
        } else{
            const response = await userClient.query.create({
                data:{
                    customer_name: body.name,
                    phone_number: body.number,
                    email: body.email,
                    query: [body.userQuery],
                    type: body.type
                }
            });
            return Response.json({response, success: true, msg:"query submitted"})
        }
    } catch (err) {
        console.log(`Error occured: ${err}`);
        return Response.json({error: "Some error occured"},{status:500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as POST};