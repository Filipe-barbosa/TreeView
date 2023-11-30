# Desafio TreeVeww

Olá!!

seja bem vindo ao desafio TreeVieww!!

Este é um projeto desenvolvido para o processo seletivo da empresa JusBrasil.

## O Que é o TreeVieww

O TreeView é um componente React que oferece uma visualização de árvore interativa com caixas de seleção e capacidade de expansão. Ele é projetado para exibir dados hierárquicos de maneira clara e permitir a interação do usuário.

## Rodando o projeto

Para rodar o projeto instala-se as dependências com yarn ou npm install executando o comando `yarn` ou `npm start``. Para o desenvolvimento foi usada a biblioteca yarn
Para o desenvolvimento foi usada a biblioteca yarn.

#### Setup.

O projeto foi desenvolvido utilizando `TypeScript` e a biblioteca `React`. Para o pré-processamento de CSS optou-se pelo Sass e, como biblioteca de estilos, foi empregado o Radix-ui-primitives. A escolha do TypeScript trás inúmeros benefícios para a aplicação, destacando a imutabilidade no código e uma interpretação mais direta e facilitada do componente desenvolvido para os usuários que interagem com o design system.. A escolha do Vite deve-se à sua rapidez na configuração do React, aliada a uma comunidade extensa que oferece apoio e facilita a resolução de problemas durante o desenvolvimento.

## Estruturação do projeto

O projeto segue estruturado em pastas. A pasta components contém todos os componentes de estilização. Na pasta hooks estão alocados os contextos e a lógica utilizada. A pasta stories contém a documentação de estilos do componente utilizando a ferramenta storybook. Por fim, a pasta cypress contém os arquivos de configuração dos testes.

## Entendimento do problema .

Após revisar vídeos que explicavam o funcionamento desejado, a pessoa desenvolvedora identificou que o desafio estava relacionado a uma estrutura de árvore. Diante desse entendimento, optou por implementar um algoritmo de grafo em conjunto com uma estrutura de lookup.

Essa escolha foi motivada pela eficiência do algorítimo, em comparação com uma abordagem ingenua iterativa.
A utilização de grafos simplificou os cálculos, fornecendo uma estrutura clara para os dados dos filhos e pais. Isso eliminou a necessidade de empregar um algoritmo de busca em profundidade, resultando em maior interatividade. Com esse método, o algoritmo pode acessar os dados de qualquer nó com uma complexidade linear.

Inicialmente, cogitou-se uma implementação mais simples, envolvendo a iteração por uma lista de objetos aninhados devido à sua lógica mais direta. No entanto, ao compreender que o problema não especificava a dimensão total que a árvore poderia atingir, optou-se pelo método mais robusto. Essa abordagem permite que o componente opere eficientemente em todo o algoritmo, independentemente do tamanho, com uma complexidade linear. Em contraste, a abordagem inicial teria uma complexidade quadrática, o que faz diferença significativa em termos de desempenho e custo computacional, especialmente ao lidar com grandes volumes de dados.

### Resolução da lógica

O algoritmo recebe uma lista de objetos e os processa, gerando um item map e um grafo que indicam as relações de pai e filho, facilitando a visualização. Essas informações são essenciais para renderizar os elementos necessários.

Em seguida, ocorre uma varredura no grafo para atualizar o status de todos os nós, aproveitando o baixo custo de processamento dos filhos. Inicialmente, o algoritmo percorre todos os filhos, atualizando os estados. Se o nó tiver um nó pai, é realizado o processo de atualização nos níveis superiores. A estrutura de lookup permite uma modificação rápida das informações de um nó, contribuindo para a eficiência do algoritmo.
Todos os dados para a UI são gerados por meio de um contexto, pois assim a interface e a lógica são mantidas desacopladas facilitando a manuntenção e aplicação de testes na aplicação.

A lógica implementada lida apenas com a construção e atualização dos status. A exibição e a responsabilidade de colapar os elementos fica por conta da camada de UI.

### Componentes de exibição.

Buscando cumprir as recomendações foram utilizados scss sass e radix-ui-primities. Entretando, foi dedido que para o componente de arvóre seria utilizado o root do radix, decisão tomada já que o mesmo permite uma estilização manual, pois o componente é simples,maleavel e personalizável. Durante a construção foi oberservado que pelo nível de customização explanada no vídeo demosntrativo a utilização de um componente de lib para controlar a exibição e colapsagem dos elementos se tornaria um antipatterns refusenequest, por que muitas heranças do componente pai teriam de ser negadas.

Foram implementadas algumas keys de design tokem que buscaram cercar as cores e os espaçamentos, com isso o objetivo era uma fácil manuntenção dessas estilizações concentrando os valores em uma só variável o que além de padronizar facilita para futuras alterações.

### Formatação de código

Durante o desenvolvimento foi usado o es-Lint mais prettier configurados no projeto buscando um padrão caso mais pessoas sejam inseridas. Foi optado pela configuração default do lint, e fica como ponto de melhoria adicionar configurações personalizadas.

Outro método de padronização da base de código foi a instalação de husks de-pre commmit e pre-push para garantir que o código esteja dentro dos padrões.

### Cenários de testes de componente

Com a criação da lógica faz-se pertinente a validação da mesma, com isso foram desenvolvidos cenários de testes com a ferramenta cypress para garantir que o comportamento esperado está acontecendo. Para executar os teste insira o comando `yarn cypress open` e selecione no navegador a opção de teste de componente.

## Melhorias.

Dada a condição de tempo o produto até então desenvolvido trata-se da versão 0. Como versão 1 foram pensadas algumas melhorias tais como:

<ul>

#### Implementação de condição de parada da iteração

 <ul>
Aplicar uma condição de parada para o algorítimo, pois, na implementação atual a inserção de um array apontando para dentro do mesmo pode ocasionar na renderização infinita do componente.
</ul>

#### Chave de tradução.

<ul>
Inserir  chaves de tradução no código o que garante uma melhor usabilidade e também não ter strings soltas dentro da base.
</ul>

#### Remoção do dangerousHtml no componente de label.

<ul>
O HtmlDangerous utilizado na implementação é uma abordagem perigosa, pois dá margem para a inserção de código malicioso na aplicação. Tal abordagem foi usada por que não havia um escopo bem definido no projeto sobre quais tags seriam aceitas então todas foram liberadas, mas como ponto de melhoria futura o fechamento de escopo dessas tags e a tratativa para o componente aceitar apenas as listadas seria importante, controlando a injestão de código na aplicação.
</ul>

</ul>

## Considerações finais

As práticas desenvolvidas levaram em consideração uma boa qualidade de código, mas também visando entregar em tempo hábil.
