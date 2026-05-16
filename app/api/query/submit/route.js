import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const userClient = new PrismaClient({
    log:['error','info']
});

async function handler(req){
    try {
        const body = await req.json();
        console.log(body)

        const dbRes = await userClient.query.findUnique({
            where:{
                phone_number: body.phone_number
            }
        });
        if(dbRes){
            const response = await userClient.query.update({
                where:{
                    phone_number: body.phone_number
                },
                data:{
                    query: {
                        push: body.userQuery
                    }
                }
            });
            return NextResponse.json({response, success:true, msg:"query submitted"},{status:201});
        } else{
            const response = await userClient.query.create({
                data:{
                    customer_name: body.customer_name,
                    phone_number: body.phone_number,
                    email: body.email,
                    query: [body.userQuery],
                    type: body.type.toUpperCase()
                }
            });
            return NextResponse.json({response, success: true, msg:"query submitted"})
        }
    } catch (err) {
        console.log(`Error occured: ${err}`);
        return NextResponse.json({error: "Some error occured"},{status:500});
    } finally{
        await userClient.$disconnect();
    }
}

export {handler as POST};