export const dynamic = 'force-dynamic';

import { fetchAll } from "./action";
import TestButton from "./ProductCreateForm";
import ShowData from "./data";

export default async function ProductPage() {
  const data = (await fetchAll())?.data;

  return (
    <div>
      <div>Product Page</div>
      <br />
      <ShowData data={data} />
      <br />
      <TestButton />
    </div>
  );
}
