import { Product } from "@prisma/client";

interface DataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Product[] | undefined;
}

export default function ShowData({ data }: DataProps) {
  return (
    <div>
      {data?.map((i) => (
        <div key={i.id}>{i.name}</div>
      ))}
    </div>
  );
}
