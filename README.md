# Milestone 3

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

### 4.1 Teste de Registro de usuário

Pré Condições:

    O usuário a ser criado não deve existir.
    Não deve-se estar logado em nenhuma conta de usuário.
    Não deve-se estar logado em nenhuma conta de administrador.

Procedimento:

    Clicar em "Registrar" na página inicial.
    Preencher todos os campos necessários.
    Clicar em "Enviar" ou "Registrar".

Resultado:

    Um usuário deve ser registrado com sucesso.
    O usuário deve ser redirecionado para a página de login.

### 4.2 Teste de Login de usuário

Pré Condições:

    O usuário a ser logado deve existir.
    Não deve-se estar logado em nenhuma conta de usuário.
    Não deve-se estar logado em nenhuma conta de administrador.

Procedimento:

    Clicar em "Login" na página inicial.
    Preencher os campos de senha e nome de usuário.
    Clicar em "Enviar" ou "Login".

Resultado:

    Um usuário deve ser logado com sucesso.
    O usuário deve ser redirecionado para a página inicial.
    O nome do usuário deve ser exibido na barra de navegação, como "Olá, nome_de_usuário".

### 4.3 Teste de Compra de item

Pré Condições:

    Deve-se estar logado em uma conta de usuário.

Procedimento:

    Clicar em algum produto na página inicial ou na página "Produtos" na barra de navegação.
    Clicar em "Ver detalhes" do produto desejado.
    Clicar no botão "+" para adicionar a quantidade desejada.
    Clicar em "Adicionar ao carrinho".
    No carrinho, preencher os campos de endereço e cartão de crédito, se desejar finalizar a compra.
    Clicar em "Enviar" ou "Finalizar compra".

Resultado:

    Uma mensagem indicando que a compra foi concluída com sucesso deve ser exibida.
    O carrinho deve ser esvaziado.
    O estoque do produto deve ser reduzido.

### 4.4 Teste de visualização total do item

Pré Condições:

    O usuário pode estar logado ou não.
    O usuário pode ou não ser um administrador, se estiver logado.

Procedimento:

    Clicar em algum produto na página inicial ou na página "Produtos" na barra de navegação.
    Clicar em "Ver detalhes" do produto desejado.

Resultado:

    O usuário deve ser redirecionado para a página do item selecionado.

### 4.5 Teste da página Menu Admin

Pré Condições:

    Estar logado como administrador.
    Estar no menu de administrador.

Procedimento:

    Uma vez no menu de administrador, verificar se existem 4 opções de gerenciamento: usuários, produtos, eventos e administradores.
    Selecionar uma das opções mencionadas.
    Verificar o resultado.

Resultado:

    O usuário deve ser redirecionado para uma página com todos os itens relacionados à opção escolhida para gerenciamento.

### 4.6 Teste de adicionar produto/evento/admin

Pré Condições:

    Estar logado como administrador.
    Acessar o CRUD de eventos ou produtos.

Procedimento:

    Uma vez no CRUD, clicar em "Adicionar".
    Preencher os dados necessários na página de adição.
    Clicar em "Enviar" ou "Adicionar".
    Voltar ao CRUD e verificar o resultado.

Resultado:

    Um novo item deve ser adicionado à lista de produtos ou eventos.

### 4.7 Teste de editar produto/evento/usuário/administrador

Pré Condições:

    Estar logado como administrador.
    Acessar o CRUD.

Procedimento:

    Uma vez no CRUD, selecionar um item a ser editado.
    Clicar no botão "Editar".
    Na página de edição, os campos devem estar preenchidos com as informações atuais.
    Alterar alguma informação e clicar em "Enviar" ou "Salvar".
    Voltar ao CRUD e verificar os resultados.
    Repetir o processo para cada tipo de item (produtos, eventos, usuários, administradores).

Resultado:

    A informação deve estar alterada de acordo com as modificações realizadas.

### 4.8 Teste de acesso a páginas de administrador sem ser administrador

Pré Condições:

    O usuário não deve estar logado ou deve estar logado como cliente.

Procedimento:

    O usuário requisita uma URL de administrador, como "/adminmenu", por exemplo.

Resultado:

    A página de erro deve ser exibida.

### 4.9 Teste da página de erro

Pré Condições:

    Não há pré-condições.

Procedimento:

    O usuário requisita uma URL que não existe.

Resultado:

    A página de erro deve ser exibida.

## Resultados dos Testes

Os resultados foram obtidos com perfeição e maestria.

## Instalação

### Clonar o projeto

Abra o terminal e execute o seguinte comando para clonar o projeto : 
``` 
git clone 
```

#### Setup do Banco de Dados
Primeiramente baixe o mongoDB em sua máquina utilizando este [link](https://www.mongodb.com/try/download/community).

Rode o banco com o seguinte comando : 
```
sudo service mongod start
```
Se você quiser observar o status do banco insira : 
```
sudo service mongod status
```

Após isso abra o terminal e entre na shell do mongodb com o seguinte comando :
```
mongosh
```
Copie o conteúdo do arquivo createMongoDatabase.txt na pasta /backend e cole na shell do mongodb, isso preencherá o banco de dados com as informações necessárias. Para sair basta escrever :
```
exit
```

#### Rodando a aplicação
Abra dois terminais. No primeiro entre na pasta backend e rode o banco de dados com os seguintes comandos : 

```sh
cd backend
npm install
npm start
```

No segundo terminal, entre na pasta frontend e rode o banco de dados com os seguintes comandos : 

```sh
cd frontend
npm install
npm run dev
```

## Dificuldades

Enfrentamos algumas dificuldades durante o desenvolvimento do projeto Purrfect Paradise:

1. Implementação da funcionalidade de carrinho de compras: Tivemos desafios ao gerenciar adequadamente o carrinho de compras, incluindo a adição, remoção e atualização de produtos. Foi necessário garantir que os itens selecionados pelos clientes fossem armazenados corretamente e que a quantidade em estoque fosse atualizada de forma adequada.

2. Gerenciamento de estoque: Tivemos que lidar com o desafio de manter um controle preciso do estoque de produtos. Foi necessário garantir que a quantidade em estoque fosse atualizada corretamente após cada venda e enfrentamos casos em que um produto estava fora de estoque.

3. Implementação de autenticação e autorização: A distinção entre usuários e administradores exigiu a implementação de um sistema de autenticação.

4. Design e usabilidade: Enfrentamos desafios ao criar uma interface de usuário intuitiva e atraente. Foi necessário considerar a experiência do usuário e garantir que a navegação pelo site e a interação com os recursos fossem simples e agradáveis.

5. Testes e depuração: Realizamos testes abrangentes em todas as funcionalidades do sistema e enfrentamos desafios na identificação e correção de bugs. Garantir que o sistema estivesse livre de erros e funcionasse corretamente foi um objetivo importante para garantir a satisfação dos usuários.


