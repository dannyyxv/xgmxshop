import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";


type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string; 
};

// GET: Retrieve all products
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("productsDb");
    const products = await db.collection("products").find().toArray();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error retrieving products:", error);
    return NextResponse.json(
      { error: "Failed to retrieve products." },
      { status: 500 }
    );
  }
}

// POST: Add a new product
export async function POST(request: Request) {
  try {
    const newProduct: Product = await request.json();
    const client = await clientPromise;
    const db = client.db("productsDb");

    const lastProduct = await db
      .collection("products")
      .find()
      .sort({ id: -1 })
      .limit(1)
      .toArray();
    newProduct.id = lastProduct[0]?.id ? lastProduct[0].id + 1 : 1;

    const result = await db.collection("products").insertOne(newProduct);
    return NextResponse.json(
      { ...newProduct, _id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { error: "Failed to add product." },
      { status: 500 }
    );
  }
}
