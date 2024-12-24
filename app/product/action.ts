"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { formSchema } from "./ProductCreateForm";

export async function fetchAll() {
  const dbData = await prisma.product.findMany({
    orderBy: {
      createdAt: 'asc'
    }
  });
  
  return {
    data: dbData,
  };
}

export async function create(values: z.infer<typeof formSchema>) {
  await prisma.product.create({
    data: {
      name: values.name,
      sku: values.sku,
      description: values.description
    },
  });

  revalidatePath("/product");
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/product')
}
