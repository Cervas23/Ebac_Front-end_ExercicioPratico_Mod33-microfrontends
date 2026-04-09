import dynamic from "next/dynamic";

const Cardapio = dynamic(() => import("cardapio/Cardapio"), {ssr: false});
const Pedidos = dynamic(() => import("pedidos/Pedidos"), {ssr: false});
export default function Home() {
  return (
    <>
      <h1>🍽️ Bem-vindo ao Restaurante Virtual!</h1>
      <Cardapio/>
      
      <Pedidos/>
    </>
  );
}
