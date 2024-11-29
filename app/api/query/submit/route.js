import { PrismaClient } from "@prisma/client";

const userClient = new PrismaClient();

async function handler(req){
    try {
        const body = await req.json();

        const dbRes = await userClient.query.findFirst({
            where:{
                phone_number: body.number
            }
        });
        console.log(dbRes);
        if(dbRes){
            const response = await userClient.query.update({
                where:{
                    phone_number: body.number
                },
                data:{
                    query: {
                        push: body.query
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
                    query: [body.query],
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