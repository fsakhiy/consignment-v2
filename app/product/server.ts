"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function fetchAll() {
  try {
    const dbData = await prisma.product.findMany();
    return {
      data: dbData,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {} 
}

export async function create(name: string) {
  await prisma.product.create({
    data: {
      name: name,
    },
  });

  revalidatePath("/product");
}
