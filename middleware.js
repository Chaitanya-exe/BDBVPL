import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
    const url = req.nextUrl;
    const host = req.headers.get('host').split('.')[0];

    if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/static") || url.pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    if (host === 'admin') {
        const token = req.headers.get('cookie')?.split("%20")[1];
        if (!token) {
            url.pathname = '/admin/login'
            return NextResponse.rewrite(url);
        }
        return NextResponse.next();
            
    }
    if(process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"){
        url.pathname = '/maintanence'
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}