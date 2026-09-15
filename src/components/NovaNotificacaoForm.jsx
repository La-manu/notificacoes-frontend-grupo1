import { useState } from "react";
import Button from "./Button";

function NovaNotificacaoForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");
  const [canal, setCanal] = useState("PUSH");

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim()) return;

    onAdicionar({
      id: Date.now(),
      canal,
      hora: new Date().toLocaleTimeString().slice(0, 5),
      titulo,
      texto,
      lida: false,
    });

    setTitulo("");
    setTexto("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título da notificação"
        className="border border-gray-200 rounded-lg px-3 py-2"
      />
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Texto"
        className="border border-gray-200 rounded-lg px-3 py-2"
      />
      <Button variant="destaque">Adicionar notificação</Button>
    </form>
  );
}

export default NovaNotificacaoForm;