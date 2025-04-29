import { NextResponse } from "next/server";


export async function GET() {


    return NextResponse.json("usuario recibido con exito!")
    
}

export async function POST(request){
    const dataForm = await request.json(); 
    console.log(dataForm);

    return NextResponse.json("Mensaje recibido correctamente")
}
