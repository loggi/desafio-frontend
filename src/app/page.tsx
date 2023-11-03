import Main from "@/components/Main";
import { fetchOrders } from "./http";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between text-gray-950">
      <Main fetchOrders={fetchOrders} />
    </main>
  );
}
