# SENAI Fullstack [Educação]

## Exercícios da Semana 04

### Roteiro do Projeto

Vamos criar uma aplicação para a escola SenaiLab. Com ela, os administradores poderão ver uma lista de sugestões de melhorias e comentários enviados pelos alunos. O backend que vamos usar foi feito na Semana 02 do Módulo 03.

#### Estrutura da Aplicação

A aplicação terá:

- **Página de sugestões:** Lista todas as sugestões enviadas.
- **Modal de detalhes:** Mostra informações detalhadas de uma sugestão e permite adicionar comentários.

### Exercício 1 - Preparação do Projeto

**Objetivo:** Configurar uma aplicação Angular.

**Passos:**

1. Crie um novo projeto Angular usando o Angular CLI.
2. No projeto, use o Angular CLI para criar:
   - Um **service** que vai fazer as chamadas ao backend.
   - Três **componentes** que serão usados na aplicação.

### Exercício 2 - Componentes de Interface

**Objetivo:** Criar componentes básicos para a aplicação.

**Passos:**

1. Crie um componente para **listar sugestões**. Ele deve receber um array de dados e exibi-los como uma lista.
2. Crie um componente de **cabeçalho** com o título “Caixa de Sugestões”.
3. Crie um componente de **rodapé** com a frase “Desenvolvido por Leonardo”. Esse texto deve ter um link para o seu GitHub.

### Exercício 3 - Tela de Listagem

**Objetivo:** Desenvolver a tela que exibe a lista de sugestões.

**Passos:**

1. Use o service criado para buscar dados do backend.
2. Na tela, mostre os seguintes detalhes de cada sugestão:
   - Título.
   - Descrição.
   - Data de criação (formato: dd/MM/yyyy).
3. Adicione um **título da página** e uma **barra de pesquisa** para filtrar por título.

### Exercício 4 - Modal de Comentários

**Objetivo:** Criar um modal para mostrar os detalhes de uma sugestão e seus comentários.

**Passos:**

1. Use o service para buscar os detalhes e comentários da sugestão selecionada.
2. No modal, mostre:
   - Título da sugestão.
   - Descrição.
   - Data de criação.
   - Última data de atualização.
   - Uma seção chamada “Comentários” com:
     - Um campo de texto para adicionar novos comentários.
     - Um botão para salvar o comentário (desbloqueado apenas após 20 caracteres).
     - A lista de comentários existentes.

### Exercício 5 - Feedback e Validações

**Objetivo:** Melhorar a experiência do usuário com mensagens de feedback.

**Passos:**

1. Mostre mensagens de sucesso ou erro ao:
   - Listar sugestões.
   - Criar um comentário.
   - Buscar uma sugestão.
2. Adicione uma mensagem caso não existam sugestões ou comentários.

### Exercício 6 - Pesquisa por Título

**Objetivo:** Implementar a funcionalidade de busca na lista de sugestões.

**Passos:**

1. Adicione uma barra de pesquisa que filtra as sugestões pelo título.
2. Se o backend não oferecer suporte para busca, faça o filtro no frontend.

---

💡 **Dica:** Mantenha o código organizado e documente cada parte para facilitar futuras atualizações.