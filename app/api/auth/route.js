import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

async function handler(){
    try {
        const { email, password } = await req.body();
        if(email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD){
            const token = jwt.sign({
                email,
                password
            }, process.env.JWT_SECRET,{
                expiresIn:"5 days"
            });
            const response = NextResponse.json({ok:true});
            response.cookies.set('Authorization',`Bearer ${token}`,{
                httpOnly: true,
                secure: false,
                path:'/',
            });
            return response;
        }
    } catch (err) {
        console.log(err);
        return Response.json({success:false, error: "some error occured"});
    }
}

export {handler as POST};