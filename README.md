# milestone2

# Purrfect Paradise

## Sobre
O Purrfect Paradise é uma loja de animais de estimação online que oferece uma ampla variedade de produtos para animais de estimação e publica blogs sobre eventos focados em animais de estimação. O objetivo deste projeto é fornecer aos donos de animais de estimação uma forma conveniente e confiável de comprar produtos para animais de estimação de alta qualidade, ao mesmo tempo em que oferece informações sobre eventos relevantes em sua área.

## Membros
| Nome          | Número USP    |
| ------------- |:-------------:|
| Kenzo Yves Yamashita Nobre      | 5028772       |
| Otavio Ferracioli Coletti      | 11767796      |
| Victor Rodrigues da Silva | 12566140      |

![image](https://user-images.githubusercontent.com/85137875/236708466-c0fbb063-e0bb-44c0-95be-e2a8b59e89a7.png)

## Índice
1. [Requisitos](#requisitos)
2. [Descrição do Projeto](#descrição-do-projeto)
3. [Comentários sobre o código](#comentarios-sobre-o-código)
4. [Plano de Testes](#plano-de-testes)
5. [Resultados dos Testes](#resultados-dos-testes)
6. [Instalação](#instalação)
7. [Dificuldades](#dificuldades)
8. [Comentários](#comentários)

## Requisitos

- O sistema possui 2 tipos de usuários: Clientes e Administradores
    - Os Administradores são responsáveis por registrar/gerenciar administradores, clientes, produtos e posts do blog fornecidos. O aplicativo já vem com uma conta admin com senha admin.
    - Os Clientes são usuários que acessam o sistema para comprar produtos e ler posts do blog sobre eventos relevantes relacionados a animais de estimação em sua área.
- O registro do administrador inclui: nome, ID, telefone, e-mail.
- O registro de cada cliente inclui: nome, ID, endereço, telefone, e-mail.
- O registro dos produtos incluem: nome, ID, foto, descrição, preço, quantidade (em estoque), quantidade vendida.
- Venda de produtos: Os produtos são selecionados, a quantidade é escolhida e eles são incluídos no carrinho. Os produtos são adquiridos através de um código pix. A quantidade de produtos vendidos é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados apenas no momento do pagamento ou pelos clientes.
- Gerenciamento de produtos: Os Administradores podem criar/atualizar/ler/excluir (CRUD) novos produtos. Por exemplo, eles podem alterar a quantidade em estoque.
- Funcionalidade de posts do blog: A loja de animais de estimação online se destaca pelos eventos relevantes sobre animais de estimação exibidos na seção de blog do site. Os usuários podem ver as últimas notícias, posts informativos e eventos futuros para participar com seus animais.
- Gerenciamento de posts do blog: Os Administradores podem criar/atualizar/ler/excluir (CRUD) novos posts.

## Descrição do Projeto

### Funcionalidades
Para comprar produtos em nossa loja de animais de estimação online, os clientes podem escolher os itens desejados e adicioná-los ao carrinho virtual. A quantidade de cada produto pode ser facilmente selecionada e ajustada conforme necessário. Quando chegar a hora de concluir a compra, os clientes podem usar o sistema de pagamento por código Pix para fazer um pagamento seguro e sem complicações. Uma vez confirmado o pagamento, nosso sistema de gerenciamento de estoque atualiza automaticamente as quantidades disponíveis para refletir os produtos vendidos, garantindo informações precisas sobre a disponibilidade dos produtos para futuros clientes. É importante destacar que os carrinhos são esvaziados somente após o recebimento do pagamento ou se o cliente optar por remover os itens do carrinho.

### Funcionalidade especial
Além disso, como parte do projeto da loja de animais de estimação online, uma funcionalidade especial é implementada, permitindo que os usuários acessem uma guia dedicada aos "Eventos" na barra de navegação. Essa funcionalidade oferece um recurso valioso para os donos de animais de estimação que desejam se manter informados sobre os últimos eventos relacionados a animais de estimação, incluindo campanhas de adoção, clínicas de castração, sessões de cuidados e outros eventos de interesse. Ao clicar na guia "Eventos", os usuários podem navegar por uma lista abrangente de eventos futuros, cada um acompanhado por uma breve descrição do que esperar. Isso pode ajudar os usuários a tomar decisões informadas sobre quais eventos participar e como cuidar melhor de seus animais de estimação. É importante ressaltar que apenas os administradores podem adicionar novos posts nesta guia, garantindo que as informações fornecidas sejam confiáveis e atualizadas.

### Requisitos das funcionalidades
Para tornar a loja de animais de estimação online uma aplicação sustentável e produtiva, é necessário armazenar algumas informações em um servidor. As principais informações que serão salvas no banco de dados são os dados dos administradores (como nome, ID, endereço, telefone, e-mail, nome de login e senha), dados dos clientes (como nome, ID, telefone, e-mail, nome de login e senha), produtos (como nome, identificador, foto, descrição, preço, quantidade em estoque e quantidade vendida) e eventos (como nome, foto, descrição, data, horário e localização).

### Protótipo
Foi desenvolvido o [Protótipo](https://www.figma.com/proto/aoYbKfVo5twtHE4pXq64fw/Untitled?node-id=228-427&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=228%3A427&show-proto-sidebar=1), [Mockup](https://www.figma.com/file/aoYbKfVo5twtHE4pXq64fw/Untitled?type=design&node-id=0-1&t=VsHLKqAyVCCDRMHS-0) no figma e o seguinte diagrama de navegação para planejar o projeto : 

![image](https://github.com/kenzonobre/Web-Project/assets/63797831/2a3819f8-866f-4755-86fb-57b4d10edcbe)


## Comentários sobre o código
## Plano de Testes
## Resultados dos Testes
## Instalação
### IDE recomendada

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Setup do Projeto

```sh
npm install
```

#### Compilar e simular

```sh
npm run dev
```

```sh
npm run backend
```

It is necessary to run both commands simultaneously to use the application

## Dificuldades
## Comentários


