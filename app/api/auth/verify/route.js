import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

async function handler(req){
    try {
        const {token} = await req.json();
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if(!verified){
            return NextResponse.json({valid: false},{status:409})
        }
        return NextResponse.json({valid: true}, {status:200});
    } catch (error) {
        console.log(error);
        return NextResponse.json({err: 'some error occured'},{status:500})
    }
}

export {handler as POST};