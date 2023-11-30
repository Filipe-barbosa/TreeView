# Desafio TreeVeww

Ola seja bem vindo ao desafio TreeVieww!!

Este é um projeto desenvolvido como parte para a aprovação no processo seletivo da empresa JusBrasil.

## O Que é o TreeVieww

O TreeView é um componente React que oferece uma visualização de árvore interativa com caixas de seleção e capacidade de expansão. Ele é projetado para exibir dados hierárquicos de maneira clara e permitir a interação do usuário.

## Rodando o projeto

Para rodar o projeto instala-se as dependências com yarn ou npm install, para rodar apenas com o comando `yarn dev` ou `npm start`.
Para o desenvolvimento foi usada a biblioteca yarn.

#### Setup.

O projeto foi desenvolvido utilizando `TypeScript` e a biblioteca `React`. Para o pré-processamento de CSS, optou-se pelo Sass, e como biblioteca de estilos, foi empregado o Radix-ui-primitives. A escolha do TypeScript fundamentou-se na crença de que uma linguagem fortemente tipada traria inúmeros benefícios para a aplicação, destacando a imutabilidade no código e uma interpretação mais direta e facilitada do componente desenvolvido para os usuários interagentes do design system. A seleção do Vite deve-se à sua rapidez na configuração do React, aliada a uma comunidade extensa que oferece apoio e facilita a resolução de problemas durante o desenvolvimento.

## Estruturação do projeto

O projeto segue estruturado em pastas onde temos a pasta components que contém todos os componentes, e a context onde estão alocados os contextos e logicas utilizadas. e uma pasta stories onde contem a documentacao de estilos do componente por meio da ferramente storybook.

## Entendimento do problema .

Após revisar vídeos que explicavam o funcionamento desejado, a pessoa desenvolvedora identificou que o desafio estava relacionado a uma estrutura de árvore. Diante desse entendimento, optou por implementar um algoritmo de grafo encadeado em conjunto com uma estrutura de lookup.

Essa escolha foi motivada pela eficiência computacional em comparação com uma abordagem utilizando uma árvore recursiva. A utilização de grafos encadeados simplificou os cálculos, fornecendo uma estrutura clara para os dados dos filhos e pais. Isso eliminou a necessidade de empregar um algoritmo de busca em profundidade, resultando em maior interatividade. Com esse método, o algoritmo pode acessar os dados de qualquer nó com uma complexidade linear.

Inicialmente, cogitou-se uma implementação mais simples, envolvendo a iteração por uma lista de objetos aninhados devido à sua lógica mais direta. No entanto, ao compreender que o problema não especificava a dimensão total que a árvore poderia atingir, optou-se pelo método mais robusto. Essa abordagem permite que o componente opere eficientemente em todo o algoritmo, independentemente do tamanho, com uma complexidade linear. Em contraste, a abordagem inicial teria uma complexidade quadrática, o que faz diferença significativa em termos de desempenho e custo computacional, especialmente ao lidar com grandes volumes de dados.

### resolução da lógica

O algoritmo recebe uma lista de objetos e os processa, gerando um item map e um grafo que indicam as relações de pai e filho, facilitando a visualização. Essas informações são essenciais para renderizar os elementos necessários.

Em seguida, ocorre uma varredura no grafo para atualizar o status de todos os nós, aproveitando o baixo custo de processamento dos filhos. Inicialmente, o algoritmo percorre todos os filhos, atualizando os estados. Se o nó tiver um nó pai, é realizado o processo de atualização nos níveis superiores. A estrutura de lookup permite uma modificação rápida das informações de um nó, contribuindo para a eficiência do algoritmo.
Todos os dados para a UI são gerados por meio de um contexto pois assim a interface e a lógica são mantidas desacopladas facilitando a manuntenção e aplicação de testes na aplicação.

Esta abordagem de lógica lida apenas com a construção e atualização dos status, o exibição e colapsagem dos elementos fica por conta da UI.

### Componentes de exibição.

Buscando cumprir as recomendações foram utilizados scss sass e radix-ui-primities.
Embora usando o root do radix para o componente de arvóre foi optada por uma estilização manual pois o componente é simples,maleavel e personalizavel, durante a construção foi oberservado que pelo nível de customização explanada no vídeo demosntrativo a utilização de um componente de lib para controlar a exibição e colapsagem dos elementos se tornaria um antipatterns refusenequest, por que muitas eranças do componente pai teriam de ser negadas.

Foram implementadas algumas keys de design tokem que buscaram cercar as cores e os espaçamentos, com isso o objetico era uma fácil manuntenção dessas estilizações concentro os válores em uma só variável o que alem de padronizar facilita para futuras alterações.

### Formatação de código

Durante o desenvolvimento foi usado o es-Lint mais prettier configurados no projeto buscando um padrão caso mais pessoas sejam inseridas. Foi obpato pela configuração default do lint, e fica como ponto de melhoria configurações personalizadas para melhorar os padrões de código.

Outro método de padronização da base de código foi a instalação de husks de pre commmit e pre push para garantir que o código esteja dentro dos padrões.

## Melhorias.

Dada a condição de tempo o produto até então desenvolvido trata-se da versão 0. Como versão 1 foram pensadas algumas melhorias tais como:

<ul>

#### implementação de condição de parada da iteração

 <ul>
Aplicar uma condição de parada para o algorítipo pois na implentacão atual a inserção de um array apontando para dentro do mesmo pode ocasionar na renderização infinita do componente.
</ul>

#### Chave de tradução.

<ul>
Inserir  chaves de tradução no código o que garante uma melhor usabilidade e tambem não ter strings soltas dentro da base.
</ul>

#### Remoção do dangerousHtml no componente de label.

<ul>
O HtmlDangerous utilizado na implementação implementação e uma abordagem perigosa pois da margem para a inserção de código malicioso na aplicação, tal abordagem o foi usada por que não hávia um escopo bem definido no projeto sobre quais tags seriam aceitas, com isso não foram limitadas, mas como ponto de melhoria futura o fechamento de escopo dessas tags e a trativa para o compoente aceitar apenas as listadas, controlando a injestão de código na aplicação.
</ul>

#### Teste unitário.

<ul>
Estratégia que faz muito sentido para a evolução do produto, o que seria de muito valor para uma versão um com o aumento de elementos e equipe, o teste embora custoso se faz indispensável.

</ul>

</ul>

## Considerações finais

As práticas desenvolvidas levaram em consideração uma boa qualidade de código mas tambem visando entregar em tempo hábil.
