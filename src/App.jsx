import { useState } from "react";
import FilterBar from "./components/FilterBar";
import NovaNotificacaoForm from "./components/NovaNotificacao";
import NotificationList from "./components/NotificationList";
import Saudacao from "./components/Saudacao";

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
  <div>
    <Saudacao />
  </div>;

  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState(notificacoesExemplo);
  // Agora as notificações ficam em um estado

  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    if (filtro === "push") return n.canal === "PUSH";
    if (filtro === "email") return n.canal === "EMAIL";
  });

  function adicionarNotificacao(nova) {
    setNotificacoes((atual) => [nova, ...atual]);
  }

  const notificacoesFiltradas = notificacoes.filter((n) => {
    if (filtro === "todas") return true;

    return n.canal.toLowerCase() === filtro;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Central de Notificações</h1>

      {/* FORMULÁRIO DE ADICIONAR */}
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />

      <div className="flex gap-2 mb-4">
        <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />
      </div>

      <NotificationList notificacoes={notificacoesVisiveis} />

      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />

      <Button variant="destaque">Enviar notificação de teste</Button>
    </div>
  );
}

export default App;
