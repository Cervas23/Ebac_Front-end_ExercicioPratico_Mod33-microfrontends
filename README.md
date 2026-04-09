# 🍽️ Micro Frontends - Restaurante Virtual

Projeto desenvolvido com **Next.js + Module Federation**, simulando um restaurante virtual dividido em micro frontends independentes.

---

## 🧩 Estrutura do Projeto

O sistema é composto por três aplicações:

* **Cardápio (3001)** → Lista de pratos e permite adicionar ao pedido
* **Pedidos (3002)** → Exibe os itens adicionados
* **Container (3000)** → Orquestra e integra os micro frontends

---

## 🚀 Como rodar o projeto

### 1. Instalar dependências (em cada micro)

```bash
npm install
```

---

### 2. Rodar cada aplicação

#### 🍝 Cardápio

```bash
npm run dev
```

Acesse: http://localhost:3001

---

#### 🛒 Pedidos

```bash
npm run dev
```

Acesse: http://localhost:3002

---

#### 🧩 Container (App principal)

```bash
npm run dev
```

Acesse: http://localhost:3000

````

---

### ⚠️ Ordem de execução

Sempre subir nesta ordem:

1. Cardápio  
2. Pedidos  
3. Container  

---

## 🔗 Comunicação entre os Micro Frontends

A comunicação entre os micro frontends foi feita utilizando eventos globais do navegador:

### 📤 Envio de dados (Cardápio)

Quando o usuário clica em **"Adicionar ao Pedido"**, um evento é disparado:

```js
window.dispatchEvent(
  new CustomEvent("adicionarPedido", { detail: prato })
);
````

---

### 📥 Recebimento de dados (Pedidos)

O micro frontend de pedidos escuta esse evento:

```js
useEffect(() => {
  const handler = (event) => {
    setPedidos((prev) => [...prev, event.detail]);
  };

  window.addEventListener("adicionarPedido", handler);

  return () => {
    window.removeEventListener("adicionarPedido", handler);
  };
}, []);
```

---

### 🧠 Funcionamento

* O **Cardápio** emite um evento global com os dados do prato
* O **Pedidos** escuta esse evento e atualiza o estado
* O **Container** apenas renderiza os dois micro frontends

---

## ⚠️ Observações importantes

* É essencial remover listeners no `useEffect` para evitar duplicação de eventos
* O uso de `window` funciona para comunicação simples, mas não é o ideal para sistemas maiores
* Em projetos mais robustos, recomenda-se usar gerenciamento de estado compartilhado ou APIs

---

## 🛠️ Tecnologias utilizadas

* Next.js
* React
* Module Federation
* Webpack

---

## 📌 Status

✅ Micro frontends independentes funcionando
✅ Comunicação entre aplicações
✅ Integração via container

---

Feito para fins de aprendizado em arquitetura de micro frontends
