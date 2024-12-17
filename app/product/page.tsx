"use server";

import { fetchAll } from "./server";
import TestButton from "./ProductCreateForm";

export default async function ProductPage() {
  const data = (await fetchAll())?.data;

  return (
    <div>
      <div>Product Page</div>
      <br />
      <div>
        {data?.map((i) => (
          <div key={i.id}>{i.name}</div>
        ))}
      </div>
      <br />
      <TestButton />
    </div>
  );
}
