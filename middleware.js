import { NextResponse } from "next/server";

export function middleware(req) {
    const url = req.nextUrl;
    const host = req.headers.get('host').split('.')[0];

    if (url.pathname.startsWith("/_next") || url.pathname.startsWith("/static")) {
        return NextResponse.next();
    }

    if (host == 'admin') {
        const token = req.cookies.get('Authorization')?.value.split(' ')[1];
        if (!token) {
            url.pathname = '/admin/login'
            return NextResponse.rewrite(url);
        } else {
            url.pathname = '/admin/dashboard'
            return NextResponse.rewrite(url);
        }
    }

    return NextResponse.next();
}