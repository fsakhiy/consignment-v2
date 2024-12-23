export const dynamic = "force-dynamic";

import { fetchAll } from "./action";
import ProductItem from "./product";
import CreateProductForm from "./ProductCreateForm";

export default async function ProductPage() {
  const data = (await fetchAll())?.data;

  return (
    <div>
      <div>Product Page</div>
      <br />
      <CreateProductForm />
      <br />
      <div className="flex flex-col gap-2">
        {data?.map((i) => (
          <ProductItem key={i.id} i={i} />
        ))}
      </div>{" "}
    </div>
  );
}
