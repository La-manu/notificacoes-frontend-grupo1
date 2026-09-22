import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NovaNotificacaoForm from "./components/NovaNotificacao";
import NotificationList from "./components/NotificationList";
import Saudacao from "./components/Saudacao";
import Button from "./components/button"; 

const notificacoesExemplo = [
  {
    id: 1,
    canal: "PUSH",
    hora: "14:32",
    titulo: "Inscrição confirmada",
    texto: "Seu lugar está garantido.",
    lida: false,
  },
  {
    id: 2,
    canal: "EMAIL",
    hora: "13:10",
    titulo: "Evento amanhã",
    texto: "Não esqueça o notebook.",
    lida: true,
  },
];

function App() {
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState(notificacoesExemplo);

  // Lógica de filtro unificada (ajustada para ignorar maiúsculas/minúsculas)
  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    return n.canal.toLowerCase() === filtro.toLowerCase();
  });

  function adicionarNotificacao(nova) {
    setNotificacoes((atual) => [nova, ...atual]);
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Adicionado o componente de Saudação aqui no topo */}
      <Saudacao />

      <h1 className="text-2xl font-bold my-4">Central de Notificações</h1>

      {/* ÚNICO FORMULÁRIO DE ADICIONAR */}
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />

      <div className="flex gap-2 my-4">
        <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />
      </div>

      {/* LISTA DE NOTIFICAÇÕES */}
      <NotificationList notificacoes={notificacoesVisiveis} />

      {/* FORMULÁRIO DUPLICADO FOI REMOVIDO DAQUI */}

      <div className="mt-4">
        <Button variant="destaque">Enviar notificação de teste</Button>
      </div>
    </div>
  );
}

export default App;
