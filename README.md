# 💰 Controle de Finanças Pessoal

Um sistema prático e intuitivo para gestão financeira diária, desenvolvido em React. Esta aplicação permite o registro de receitas e despesas, calculando o saldo em tempo real e mantendo o histórico salvo diretamente no navegador do usuário.

## 🚀 Funcionalidades

- **Dashboard Resumido:** Visualização rápida do total de Entradas, Saídas e do Saldo atual.
- **Registro de Transações:** Inserção de novos valores com descrição, quantia e categorização (Entrada ou Saída).
- **Listagem Dinâmica:** Tabela interativa exibindo todo o histórico de movimentações.
- **Exclusão de Registros:** Possibilidade de apagar transações incorretas ou antigas, atualizando o saldo automaticamente.
- **Persistência de Dados:** O sistema utiliza o `localStorage` do navegador. Você pode fechar a aba ou atualizar a página (F5) e seus dados financeiros continuarão salvos.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

- **[React](https://reactjs.org/):** Biblioteca JavaScript para construção da interface de usuário baseada em componentes.
- **[Styled Components](https://styled-components.com/):** Utilizado para o CSS in JS, garantindo a estilização isolada e dinâmica dos componentes.
- **[React Icons](https://react-icons.github.io/react-icons/):** Para a iconografia da aplicação (setas de entrada/saída e lixeira).
- **JavaScript (ES6+) / HTML5 / CSS3**

## 💡 Aprendizados e Estrutura

Durante o desenvolvimento deste projeto, foram aplicados conceitos fundamentais do ecossistema React:
- Gerenciamento de Estado com `useState`.
- Efeitos colaterais e ciclo de vida com `useEffect`.
- Imutabilidade na manipulação de Arrays e Objetos.
- Renderização condicional e métodos de array (`map`, `filter`, `reduce`) para cálculos matemáticos precisos de saldo.

## 📈 Futuras Implementações

O projeto possui uma base sólida e escalável. Algumas ideias para versões futuras incluem:
- [ ] Implementar gráficos visuais de gastos mensais.
- [ ] Adicionar um módulo para controle de rendimentos passivos (como dividendos de FIIs e ações).
- [ ] Criar categorias para as despesas (ex: Mercado, Lazer, Contas fixas).

## 💻 Como rodar o projeto localmente

1. Clone este repositório:
   git clone https://github.com/luizpimentel/sistema-gestao-financas

2.  Acesse a pasta do projeto:
    cd SEU_REPOSITORIO

3. Instale as dependências:
    npm install

4.  Inicie o servidor de desenvolvimento:
    npm start

Desenvolvido com dedicação por Luiz Felipe de Almeida Pimentel 🚀