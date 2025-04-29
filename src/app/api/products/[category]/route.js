import { NextResponse } from "next/server";
import mockData from "@/data/products.json";

export async function GET(request, {params}) {
    const {category} = params;
    console.log(mockData);
    const data = category ? mockData.filter(item => item.category == category) : mockData



    return NextResponse.json(data)
}
