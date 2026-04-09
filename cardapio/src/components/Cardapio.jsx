import { comidasItalianas } from "@/Pratos";


export default function Cardapio() {
  return (
    <div>
      <h1>Cardápio Italiano</h1>
      <ul>
        {
            comidasItalianas.map((prato) => (
                <li key={prato.id}>
                    <h2>{prato.nome}</h2>
                    <p>{prato.descricao}</p>
                    <button onClick={()=>{
                        console.log("👉 clique no botão", prato.nome);
                        window.dispatchEvent(new CustomEvent("adicionarPedido",{detail: prato}))
                    }}>Adicionar ao Pedido</button>
                </li>
            ))
        }
      </ul>
    </div>
  );
};

