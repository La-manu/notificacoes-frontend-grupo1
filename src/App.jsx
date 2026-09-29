import { useState, useEffect } from "react"; // 1. Adicionado useEffect aqui
import { API_URL } from "./config"; // 2. Importado a URL da API do config.js
import FilterBar from "./components/FilterBar";
import NovaNotificacaoForm from "./components/NovaNotificacao";
import NotificationList from "./components/NotificationList";
import Saudacao from "./components/Saudacao";
import Button from "./components/button";

function App() {
  const [notificacoes, setNotificacoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const [filtro, setFiltro] = useState("todas");

  useEffect(() => {
    async function buscar() {
      try {
        const resposta = await fetch(`${API_URL}/notificacoes`);
        if (!resposta.ok) throw new Error("Erro ao buscar notificações");
        const dados = await resposta.json();
        setNotificacoes(dados);
      } catch (e) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    }

    buscar();
  }, []);

  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    return n.canal?.toLowerCase() === filtro.toLowerCase();
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

      {/* 5. Avisos de Carregando e Erro adicionados na tela */}
      {carregando && <p className="text-gray-500 my-4">Carregando notificações...</p>}
      {erro && <p className="text-red-500 my-4">Erro: {erro}</p>}

      {/* LISTA DE NOTIFICAÇÕES REAIS */}
      {!carregando && !erro && <NotificationList notificacoes={notificacoesVisiveis} />}

      <div className="mt-4">
        <Button variant="destaque">Enviar notificação de teste</Button>
      </div>
    </div>
  );
}

export default App;
