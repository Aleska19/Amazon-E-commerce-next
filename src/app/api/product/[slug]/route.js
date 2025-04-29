import { NextResponse } from "next/server";
import mockData from "@/data/products.json";
import { resolve } from "styled-jsx/css";

const sleep = (timer) => { //simula una espera de 2 segundos
    return new Promise((resolve) => setTimeout(resolve, timer));
}

export async function GET(request, {params}) {
    const {slug} = params;

    const data = slug ? mockData.filter(item => item.id == slug) : mockData

    await sleep(2000)

    return NextResponse.json(data)
}