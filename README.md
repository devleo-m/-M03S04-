# SENAI Fullstack [Education]

## Resolução dos exercícios da Semana 04

### M3S04 | Roteiro

Neste projeto, iremos desenvolver uma aplicação para a escola SenaiLab. Esta aplicação permitirá aos administradores do portal visualizarem uma lista de sugestões para melhorias no ensino e demais sugestões dos alunos. Para realizarmos a comunicação com um backend, iremos contar com a ajuda da API construída na semana 02 do módulo 03.

#### **Estrutura da Aplicação**

A aplicação será composta apenas por:

- **Página de listagem de sugestões:** Onde será possível visualizar todas as sugestões criadas pelos alunos.
- **Modal de detalhes de uma sugestão:** Onde será possível visualizar e adicionar comentários para uma sugestão.

### M3S04 | Ex 1 - Preparação da Aplicação

**Objetivo:** Criar uma aplicação Angular 18.

**Instruções:**

- Inicie um novo projeto Angular utilizando o Angular CLI.
- No projeto Angular, utilize o Angular CLI para criar os seguintes itens:
  1. Um service que fará as chamadas ao backend.
  2. Três componentes de elementos que serão utilizados dentro das páginas.

### M3S04 | Ex 2 - Desenvolvimento de Componentes

**Objetivo:** Criar e integrar componentes para listagem, cabeçalho e rodapé.

**Instruções:**

- Crie um componente para listagem no formato desejado. Este componente deve receber um array de objetos e converter esses dados em uma listagem visualmente atrativa.
- Crie um componente de cabeçalho que deve incluir apenas o título “Caixa de sugestões”.
- Crie um componente de rodapé que exiba a frase “Desenvolvido por {seu_nome}”. No rodapé, o {seu_nome} deve ser um link que redireciona para o seu perfil no GitHub.

### M3S04 | Ex 3 - Desenvolvimento da Tela de Listagem

**Objetivo:** Criar uma tela de listagem que consuma dados do backend.

**Instruções:**

- Implemente a chamada ao backend no service criado anteriormente para obter a lista de sugestões.
- Desenvolva a tela de listagem utilizando o componente de cards criado. Cada card deve exibir:
  - Título da sugestão.
  - Descrição.
  - Data de criação da sugestão (no formato dd/MM/yyyy).
- Além da listagem na tela também deverá ter um título e uma barra de pesquisa que irá pesquisar por título.

### M3S04 | Ex 4 - Desenvolvimento do modal de comentários

**Objetivo:** Criar ou utilizar alguma lib para chamar um modal que liste não só informações da sugestão como também liste todos os comentários.

**Instruções:**

- Implemente a chamada ao backend no service criado anteriormente para obter a sugestão selecionada e seus comentários.
- Desenvolva o modal utilizando seu conhecimento em CSS e HTML, poderá também ser utilizado alguma biblioteca de componentes para criar o modal.
- No modal ele deverá possuir os seguintes elementos:
  - Um título indicando qual a sugestão selecionada.
  - A descrição, a data de criação e a última data de atualização (atributo alterado a cada novo comentário).
  - Mais abaixo crie uma nova seção com um título escrito “comentários”, nesta seção deverá conter um botão salvar comentário, um campo de textarea e, abaixo do campo de textarea, todos os comentários associados a aquela sugestão.

### M3S04 | Ex 5 - Feedback e validações

**Objetivo:** Fazer o uso de feedback constante para as funcionalidades e comunicação com o backend do portal.

**Instruções:**

- Adicione mensagens de sucesso ou erro nas chamadas de listagem de sugestões, criação de comentários e captura de uma sugestão.
- Além disso, adicione uma mensagem caso não possua itens tanto na listagem de sugestões como na listagem de comentários.
- A única validação que o portal terá é que o botão de adicionar comentário só poderá ficar desbloqueado após 20 caracteres digitados no campo do textarea.

### M3S04 | Ex 6 - Pesquisa

**Objetivo:** Implementar a pesquisa por título na tela de listagem de sugestão.

**Instruções:**

- Implementar a pesquisa por título em relação a listagem de sugestões, caso ela não esteja implementada no backend, faça a pesquisa pelo frontend mesmo.
