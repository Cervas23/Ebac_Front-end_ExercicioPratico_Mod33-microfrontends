import { useEffect, useState } from "react";

export default function Pedidos() {

    const[pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const handler = (event) => {
            console.log("🔥 evento recebido", event.detail.nome);

            setPedidos((prev) => {
            const existe = prev.find(p => p.id === event.detail.id);

            if (existe) {
                return prev.map(p =>
                p.id === event.detail.id
                    ? { ...p, quantidade: (p.quantidade || 1) + 1 }
                    : p
                );
            }

            return [...prev, { ...event.detail, quantidade: 1 }];
            });
        };

        window.addEventListener("adicionarPedido", handler);

        return () => {
            window.removeEventListener("adicionarPedido", handler);
        };
    }, []);

    return (
        <div>
        <h1>🛒 Pedidos</h1>
        {pedidos.length === 0 ? (
            <p>Não há pedidos no momento.</p>
        ) : (
            <ul id="lista-pedidos">
            {pedidos.map((pedido) => (
                <li key={pedido.id}>
                <h2>{pedido.nome}</h2>
                <p>Quantidade: {pedido.quantidade}</p>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
}