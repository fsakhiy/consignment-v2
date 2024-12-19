"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function fetchAll() {
  const dbData = await prisma.product.findMany();
  
  return {
    data: dbData,
  };
}

export async function create(name: string) {
  await prisma.product.create({
    data: {
      name: name,
    },
  });

  revalidatePath("/product");
}
