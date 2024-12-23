"use client"
import { deleteProduct } from "./action";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i: any
}

export default function ProductItem({i}: Props) {
  return (
    <div className="flex flex-row gap-3 p-1 border rounded-md">
      <button type="button" onClick={() => deleteProduct(i.id)}>
        <DeleteOutlineIcon fontSize="small">delete</DeleteOutlineIcon>
      </button>
      <div className="font-semibold text-xl">
        {i.name}
      </div>
    </div>
  );
}
