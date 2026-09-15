import { useState } from "react";

function Rotulo({ children }) {
  return (
    <code className="inline-block bg-slate-900 text-slate-100 text-xs font-mono px-2 py-1 rounded">
      {children}
    </code>
  );
}

function Secao({ numero, titulo, corFaixa, children }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${corFaixa}`}>
          {numero}
        </span>
        <h2 className="text-xl font-bold text-slate-800">{titulo}</h2>
      </div>
      <div className="pl-11">{children}</div>
    </section>
  );
}

function Exemplo({ descricao, classe, children }) {
  return (
    <div className="mb-4">
      <div className="mb-2">{children}</div>
      <div className="flex flex-wrap items-center gap-2 text-sm">
        <span className="text-slate-500">{descricao}</span>
        <Rotulo>{classe}</Rotulo>
      </div>
    </div>
  );
}

export default function GuiaTailwind() {
  const [largura, setLargura] = useState("desktop");

  const larguraPreview = {
    mobile: "max-w-[240px]",
    tablet: "max-w-[420px]",
    desktop: "max-w-full",
  }[largura];

  const colunasAtivas = {
    mobile: "grid-cols-1",
    tablet: "grid-cols-2",
    desktop: "grid-cols-3",
  }[largura];

  const classeAtiva = {
    mobile: "(base, sem prefixo)",
    tablet: "md:grid-cols-2",
    desktop: "lg:grid-cols-3",
  }[largura];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 border-b-2 border-slate-800 pb-4">
          <p className="text-xs font-mono tracking-wide text-slate-500 mb-1">PEND · Bloco 3 · React</p>
          <h1 className="text-3xl font-bold text-slate-900">Tailwind CSS v4 — Guia Visual</h1>
          <p className="text-slate-600 mt-1">Cada classe abaixo já foi escrita por vocês em CSS puro. Aqui está o mesmo resultado, com outra sintaxe.</p>
        </header>

        {/* 1. ESPAÇAMENTO */}
        <Secao numero="1" titulo="Espaçamento" corFaixa="bg-teal-600">
          <Exemplo descricao="padding pequeno" classe="p-2 bg-teal-100">
            <div className="p-2 bg-teal-100 border border-teal-300 rounded inline-block">conteúdo</div>
          </Exemplo>
          <Exemplo descricao="padding médio" classe="p-4 bg-teal-100">
            <div className="p-4 bg-teal-100 border border-teal-300 rounded inline-block">conteúdo</div>
          </Exemplo>
          <Exemplo descricao="padding grande" classe="p-8 bg-teal-100">
            <div className="p-8 bg-teal-100 border border-teal-300 rounded inline-block">conteúdo</div>
          </Exemplo>
          <Exemplo descricao="espaço entre itens (gap)" classe="flex gap-4">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-teal-500 rounded"></div>
              <div className="w-10 h-10 bg-teal-500 rounded"></div>
              <div className="w-10 h-10 bg-teal-500 rounded"></div>
            </div>
          </Exemplo>
        </Secao>

        {/* 2. TIPOGRAFIA */}
        <Secao numero="2" titulo="Tipografia" corFaixa="bg-orange-500">
          <Exemplo descricao="texto pequeno" classe="text-sm">
            <p className="text-sm text-slate-800">Central de Notificações</p>
          </Exemplo>
          <Exemplo descricao="texto base" classe="text-base">
            <p className="text-base text-slate-800">Central de Notificações</p>
          </Exemplo>
          <Exemplo descricao="título de seção" classe="text-2xl font-bold">
            <p className="text-2xl font-bold text-slate-800">Central de Notificações</p>
          </Exemplo>
          <Exemplo descricao="peso negrito" classe="font-bold">
            <p className="font-bold text-slate-800">Você tem 3 notificações não lidas</p>
          </Exemplo>
        </Secao>

        {/* 3. CORES E BORDAS */}
        <Secao numero="3" titulo="Cores, bordas e cantos" corFaixa="bg-rose-500">
          <div className="flex flex-wrap gap-4 mb-4">
            <Exemplo descricao="fundo colorido" classe="bg-teal-600">
              <div className="w-20 h-20 bg-teal-600 rounded-lg"></div>
            </Exemplo>
            <Exemplo descricao="fundo colorido" classe="bg-rose-500">
              <div className="w-20 h-20 bg-rose-500 rounded-lg"></div>
            </Exemplo>
            <Exemplo descricao="fundo colorido" classe="bg-amber-400">
              <div className="w-20 h-20 bg-amber-400 rounded-lg"></div>
            </Exemplo>
          </div>
          <div className="flex flex-wrap gap-4">
            <Exemplo descricao="borda simples" classe="border border-slate-300 rounded">
              <div className="w-20 h-20 border border-slate-300 rounded bg-white"></div>
            </Exemplo>
            <Exemplo descricao="cantos bem arredondados" classe="rounded-xl">
              <div className="w-20 h-20 bg-slate-700 rounded-xl"></div>
            </Exemplo>
            <Exemplo descricao="totalmente redondo" classe="rounded-full">
              <div className="w-20 h-20 bg-slate-700 rounded-full"></div>
            </Exemplo>
          </div>
        </Secao>

        {/* 4. FLEXBOX */}
        <Secao numero="4" titulo="Flexbox — igual ao encontro 2" corFaixa="bg-cyan-600">
          <Exemplo descricao="linha, espaço entre os itens" classe="flex justify-between">
            <div className="flex justify-between bg-cyan-50 border border-cyan-200 rounded p-3">
              <div className="w-12 h-12 bg-cyan-600 rounded"></div>
              <div className="w-12 h-12 bg-cyan-600 rounded"></div>
              <div className="w-12 h-12 bg-cyan-600 rounded"></div>
            </div>
          </Exemplo>
          <Exemplo descricao="linha, centralizado" classe="flex justify-center items-center">
            <div className="flex justify-center items-center bg-cyan-50 border border-cyan-200 rounded p-3 h-20">
              <div className="w-12 h-12 bg-cyan-600 rounded"></div>
            </div>
          </Exemplo>
          <Exemplo descricao="coluna" classe="flex flex-col gap-2">
            <div className="flex flex-col gap-2 bg-cyan-50 border border-cyan-200 rounded p-3 w-fit">
              <div className="w-24 h-6 bg-cyan-600 rounded"></div>
              <div className="w-24 h-6 bg-cyan-600 rounded"></div>
              <div className="w-24 h-6 bg-cyan-600 rounded"></div>
            </div>
          </Exemplo>
        </Secao>

        {/* 5. GRID */}
        <Secao numero="5" titulo="Grid — igual ao encontro 2" corFaixa="bg-indigo-600">
          <Exemplo descricao="grade de 3 colunas" classe="grid grid-cols-3 gap-3">
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-12 bg-indigo-500 rounded flex items-center justify-center text-white text-sm">
                  {n}
                </div>
              ))}
            </div>
          </Exemplo>
        </Secao>

        {/* 6. BREAKPOINTS - SIMULADOR INTERATIVO */}
        <Secao numero="6" titulo="Breakpoints — simulador ao vivo" corFaixa="bg-violet-600">
          <p className="text-slate-600 mb-4">
            Cliquem nos botões para simular a largura da tela. A grade abaixo usa{" "}
            <Rotulo>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</Rotulo> — mobile-first, igual ao que já escreveram em CSS puro.
          </p>

          <div className="flex gap-2 mb-4">
            {["mobile", "tablet", "desktop"].map((tam) => (
              <button
                key={tam}
                onClick={() => setLargura(tam)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                  largura === tam
                    ? "bg-violet-600 text-white border-violet-600"
                    : "bg-white text-slate-600 border-slate-300"
                }`}
              >
                {tam === "mobile" ? "📱 Mobile" : tam === "tablet" ? "📟 Tablet" : "🖥️ Desktop"}
              </button>
            ))}
          </div>

          <div className="mb-3 text-sm text-slate-500">
            Classe ativa agora: <Rotulo>{classeAtiva}</Rotulo>
          </div>

          <div className="bg-violet-50 border-2 border-dashed border-violet-300 rounded-lg p-4">
            <div className={`mx-auto transition-all duration-300 ${larguraPreview}`}>
              <div className={`grid ${colunasAtivas} gap-3`}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="h-16 bg-violet-500 rounded flex items-center justify-center text-white text-sm font-semibold">
                    Card {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Secao>

        {/* 7. ESTADOS */}
        <Secao numero="7" titulo="Estados — hover e foco" corFaixa="bg-emerald-600">
          <p className="text-slate-600 mb-4">Passem o mouse e cliquem de verdade — estas classes reagem ao vivo.</p>
          <div className="flex flex-wrap gap-3">
            <Exemplo descricao="muda a cor ao passar o mouse" classe="hover:bg-emerald-800">
              <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-800 text-white rounded-lg font-semibold transition-colors">
                Passe o mouse aqui
              </button>
            </Exemplo>
            <Exemplo descricao="contorno ao focar (tab ou clique)" classe="focus:ring-4 focus:ring-emerald-300">
              <input
                type="text"
                placeholder="Clique aqui"
                className="px-3 py-2 border border-slate-300 rounded-lg outline-none focus:ring-4 focus:ring-emerald-300"
              />
            </Exemplo>
          </div>
        </Secao>

        <footer className="border-t border-slate-200 pt-6 mt-10 text-sm text-slate-500">
          Guia completo com a tabela de conversão CSS → Tailwind: <Rotulo>00-guia-tailwind-v4.md</Rotulo>
        </footer>
      </div>
    </div>
  );
}
