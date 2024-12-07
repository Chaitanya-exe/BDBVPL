import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

async function handler(req){
    try {
        const { email, password } = await req.json();
        console.log(`${email}_${password}`)
        if(email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD){
            const token = jwt.sign({
                email,
                password
            }, process.env.JWT_SECRET,{
                expiresIn:"5 days"
            });
            const response = NextResponse.json({ok:true},{status:200});
            response.cookies.set('Authorization',`Bearer ${token}`,{
                httpOnly: true,
                secure: false,
                path:'/',
            });
            console.log('Token was assigned')
            return response;
        } else{
            return Response.json({msg:"invalid credentials", ok:false},{status:409});
        }
    } catch (err) {
        console.log(err);
        return Response.json({success:false, error: "some error occured"});
    }
}

export {handler as POST};