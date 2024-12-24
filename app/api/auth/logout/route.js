import { NextResponse } from "next/server";

async function handler(req){
    try {
        const response = NextResponse.json({ok:true, msg:"logged out successfully"});
        response.cookies.delete("Authorization");
        return response;
    } catch (err) {
        console.log(err);
        return NextResponse.json({error:"some error occured"},{status:500});
    }
}

export {handler as GET};