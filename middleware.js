import { NextResponse } from "next/server";

export function middleware(req){
    const { pathname } = req.nextUrl;
    console.log(pathname)
    const host = req.headers.get('host').split('.')[0];
    if(host == 'admin'){
        const token = req.cookies.get('Authorization')?.value.split(' ')[1];
        if(!token){
            return NextResponse.rewrite(new URL('/login', req.url));
        }
        return NextResponse.rewrite(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
}