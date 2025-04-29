import { NextResponse } from "next/server";

const usuarios = [
    {id:1, nombre:"Aleska Cegarra", email:"aleskacrf@gmail.com"},
    {id:2, nombre:"Royer Cegarra", email:"aleskacrf@gmail.com"},
    {id:3, nombre:"Helen Cegarra", email:"aleskacrf@gmail.com"},
]

export async function GET(request, {params}) {
    const {id} = params;


    const users = usuarios.find(item => item.id == id);

    return NextResponse.json(users)
}