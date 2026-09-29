import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { API_URL } from "../../config"; // Sobe dois níveis para achar o config.js na raiz

import FilterBar from "../components/FilterBar";
import NovaNotificacaoForm from "../components/NovaNotificacao";
import NotificationList from "../components/NotificationList";
import Saudacao from "../components/Saudacao";
import Button from "../components/button"; 

// Notificações padrão de fallback/teste
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

function Home() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  
  const [filtro, setFiltro] = useState("todas");
  const [notificacoes, setNotificacoes] = useState(notificacoesExemplo); 

  // Carregar dados iniciais da API assim que o componente montar
  useEffect(() => {
    if (!token) return;

    async function carregarNotificacoes() {
      try {
        const resposta = await fetch(`${API_URL}/notificacoes`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        
        if (resposta.ok) {
          const dados = await resposta.json();
          // Atualiza o estado se a API retornar registros válidos
          if (Array.isArray(dados) && dados.length > 0) {
            setNotificacoes(dados);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API. Mantendo lista padrão:", error);
      }
    }

    carregarNotificacoes();
  }, [token]);

  // Filtro de exibição local
  const notificacoesVisiveis = notificacoes.filter((n) => {
    if (filtro === "todas") return true;
    return n.canal?.toLowerCase() === filtro.toLowerCase();
  });

  // Envia nova notificação para a API com cabeçalho de autenticação
  async function adicionarNotificacao(nova) {
    try {
      const resposta = await fetch(`${API_URL}/notificacoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(nova),
      });

      if (!resposta.ok) {
        throw new Error("Erro na resposta do servidor.");
      }

      const notificacaoSalva = await resposta.json();
      setNotificacoes((atual) => [notificacaoSalva, ...atual]);
    } catch (error) {
      console.error("Erro ao sincronizar com a API:", error);
      // Fallback: Adiciona localmente caso o servidor esteja offline
      const novaLocal = { ...nova, id: Date.now() };
      setNotificacoes((atual) => [novaLocal, ...atual]);
    }
  }

  const handleSair = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <Saudacao />
        <button 
          onClick={handleSair} 
          className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-3 rounded transition"
        >
          Sair
        </button>
      </div>

      <h1 className="text-2xl font-bold my-4">Central de Notificações</h1>
      
      <NovaNotificacaoForm onAdicionar={adicionarNotificacao} />

      <div className="flex gap-2 my-4">
        <FilterBar filtroAtual={filtro} onFiltroChange={setFiltro} />
      </div>

      <NotificationList notificacoes={notificacoesVisiveis} />

      <div className="mt-4">
        <Button variant="destaque">Enviar notificação de teste</Button>
      </div>
    </div>
  );
}

export default Home;
