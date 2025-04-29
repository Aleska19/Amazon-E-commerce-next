import { NextResponse } from "next/server";

const usuarios = [
    {id:1, nombre:"Aleska Cegarra", email:"aleskacrf@gmail.com"},
    {id:2, nombre:"Royer Cegarra", email:"aleskacrf@gmail.com"},
    {id:3, nombre:"Helen Cegarra", email:"aleskacrf@gmail.com"},
]

export async function GET(request, {params}) {
    

    return NextResponse.json(usuarios)
}

export async function POST(request, {params}) {
    const {nombre, email} = await request.json();;
    console.log(nombre);
    console.log(email);
    usuarios.push({id:(usuarios.length+1), nombre:nombre, email:email})

    return NextResponse.json(usuarios)
    
}