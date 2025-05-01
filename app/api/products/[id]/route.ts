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

// GET: Retrieve a product by ID
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "Invalid product ID." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("productsDb");
    const product = await db.collection("products").findOne({ id: productId });

    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error("Error retrieving product:", error);
    return NextResponse.json(
      { error: "Failed to retrieve product." },
      { status: 500 }
    );
  }
}

// PUT: Update a product by ID
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "Invalid product ID." },
        { status: 400 }
      );
    }

    const updatedProduct: Partial<Product> = await request.json();
    const client = await clientPromise;
    const db = client.db("productsDb");

    const result = await db.collection("products").findOneAndUpdate(
      { id: productId },
      { $set: updatedProduct },
      { returnDocument: "after" }
    );

    if (!result.value) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    return NextResponse.json(result.value, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product." },
      { status: 500 }
    );
  }
}

// DELETE: Remove a product by ID
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      return NextResponse.json(
        { error: "Invalid product ID." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("productsDb");

    const result = await db.collection("products").deleteOne({ id: productId });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    return NextResponse.json(
      { message: `Product with ID ${productId} deleted.` }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product." },
      { status: 500 }
    );
  }
}
