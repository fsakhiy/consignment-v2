export const dynamic = "force-dynamic";

// import ProductItem from "@/components/product-item";
import { fetchAll } from "./action";
import CreateProductForm from "./ProductCreateForm";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function ProductPage() {
  const data = (await fetchAll())?.data;
  const refactoredData = data.map((d, index) => ({
    index: index + 1,
    ...d,
  }))

  return (
    <div>
      <div>Product Page</div>
      <br />
      <CreateProductForm />
      <br />
      {/* <div className="flex flex-col gap-2">
        {data?.map((i) => (
          <ProductItem key={i.id} i={i} />
        ))}
      </div> */}
      <div>
        <DataTable columns={columns} data={refactoredData} />
      </div>
    </div>
  );
}
