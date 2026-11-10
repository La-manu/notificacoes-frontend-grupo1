# Relatório de acessibilidade
## Antes
- Nota do Lighthouse (mobile): 75%
- Problemas apontados pelo Lighthouse: 
- Os elementos de seleção não têm elementos de <label> associados;
- As cores de primeiro e segundo plano não têm uma taxa de contraste suficiente; 
- Os elementos de título não aparecem em uma ordem sequencial descendente; 
- O documento não tem um ponto de referência principal.
- Problemas apontados pelo axe: 
- Elementos devem atender aos limites mínimos de proporção de contraste de cores; 
- falha no contraste mínimo de cores; 
- O elemento <select> deve ter um nome acessível;
- Problemas encontrados no teste do teclado: não houve problemas 

## Depois
- Nota do Lighthouse (mobile): 100
- O que foi corrigido: - Adicionado rótulo acessível (`aria-label`) ao elemento `<select>` de canais;
  - Corrigido o contraste de cor do texto dos badges ("PUSH" e "EMAIL") aumentando a opacidade/escuridão do texto;
  - Ajustada a hierarquia de títulos mudando a tag do título do card de `<h3>` para `<h2>`.
- O que ainda não está bom (e por quê): Tudo está bom.