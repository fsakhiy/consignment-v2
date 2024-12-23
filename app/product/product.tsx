"use client"
import { deleteProduct } from "./action";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i: any
}

export default function ProductItem({i}: Props) {
  return (
    <div key={i.id}>
      {i.name}
      <button type="button" onClick={() => deleteProduct(i.id)}>
        delete
      </button>
    </div>
  );
}
