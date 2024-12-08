import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
    const url = req.nextUrl;
    const host = req.headers.get('host').split('.')[0];

    if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/static") || url.pathname.startsWith("/api")) {
        return NextResponse.next();
    }

    try {
        if (host == 'admin') {
            const token = req.headers.get('cookie')?.split(" ")[1];
            console.log(token)
            if (!token) {
                url.pathname = '/admin/login'
                return NextResponse.rewrite(url);
            } else {
                const verified = jwt.verify(token, process.env.JWT_SECRET);
                console.log(verified)
                url.pathname = '/admin/dashboard'
                return NextResponse.rewrite(url);
            }
        }
    } catch (err) {
        console.log(err)
    }

    return NextResponse.next();
}