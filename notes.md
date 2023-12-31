#### 15/11/2023

```
npm uninstall -g expo-cli
npm i
npm fund
npm audit fix
npx expo start
npx expo start --web
```

Curso de React Native: criando um app

@01-Criando o projeto 

@@01
Apresentação

[00:00] Você quer desenvolver aplicativos Android e iOS aprendendo uma única tecnologia e usando programas que pesam menos que um ambiente inativo? Eu sou Natalia Kelim Thiel, instrutora aqui da Alura e neste curso nós vamos aprender a criar aplicações híbridas usando React Native com Expo!
[00:17] Todos SDKs e programas que você precisa configurar para desenvolver em uma única plataforma. Fique tranquilo! Nós da Alura queremos que você possa começar a desenvolver aplicativos, sendo você um programador experiente ou se você estiver começando na programação.

[00:33] Por isso, o único requisito deste curso é que você saiba o básico de JavaScript. Se você ainda não sabe, fique tranquilo também porque aqui na Alura nós temos vários cursos sobre o JavaScript.

[00:44] Eu vou deixar um curso linkado aqui na página deste curso de React Native para que você possa aprender esses conceitos. Depois que você aprender, não se esqueça de voltar aqui para o curso de React Native para continuar a aprender o mundo mobile.

[00:58] Nós vamos utilizar o React Native com o Expo, que facilita muito na hora de criarmos o nosso ambiente. Nós não vamos precisar instalar softwares pesados; como o Android Studio, por exemplo. Nós só vamos precisar instalar o Node.js e usar um editor de texto simples.

[01:16] E também, você vai poder rodar no seu celular - seja ele iOS, mesmo não tendo um macOS ou Android, em qualquer sistema operacional; seja ele Windows, Mac ou Linux.

[01:29] Nós vamos utilizar o conceito de um e-commerce de produtos naturais que se chama orgs. Nós vamos aprender os componentes do React Native, como textos, assim como esse título, Cesta de Verduras; ou mesmo o Detalhes da cesta, que é um texto que está por cima da imagem.

[01:46] Nós também vamos aprender a adicionar imagens e vamos aprender a adicionar botões, como o botão de "Comprar". Nós também vamos aprender a criar os nossos próprios componentes e estilizar os componentes que criamos e também estilizar os componentes do React Native para que eles fiquem parecidos com essa tela que você está vendo.

[02:06] Nós também vamos criar listas, essa lista de itens da cesta. Nós vamos aprender o que precisamos evitar e como podemos otimizar essa lista para que o dispositivo não trave caso haja uma lista muito grande.

[02:22] Nós também vamos utilizar o Google Fontes, fontes externas. Essa é a fonte padrão do Android. Nós instalamos uma fonte mais bonita para que o nosso aplicativo fique mais legal. Então essa é a fonte normal e essa é a fonte externa que adicionamos.

[02:40] Se você tem interesse em começar no mundo mobile ou aprender React Native, uma única tecnologia para desenvolver aplicativos para Android e iOS, te espero neste curso. Vamos lá?

@@02
React Native e Expo

[00:00] Agora que nós já decidimos ou estamos considerando utilizar o React Native como tecnologia na nossa aplicação, vamos dar uma olhada aqui no site do React Native, nas "Docs", para vermos como que instalamos o ambiente aqui em "Environment setup", na primeira opção, para começarmos a desenvolver em React Native!
[00:20] Já de cara nós começamos com a nossa primeira decisão: nós vamos utilizar Expo CLI ou React Native CLI? Qual dos dois é melhor? No começo, para desenvolvermos aplicações nativas mesmo, Android, iOS e até hoje em dia nós precisamos instalar o Java, precisamos instalar SDK de Android e emuladores - no caso de Android, o Android Studio ou Xcode - para desenvolvermos para iOS.

[00:48]Além disso, nós só podemos desenvolver para iOS em sistemas macOS no computador da Apple. Então, já que estamos utilizando o React Native, que ele converte o mesmo código para código nativo em ambas as plataformas, nós talvez não precisaríamos nos preocupar com tudo isso.

[01:06] Na verdade, não necessariamente. Se nós utilizarmos o React Native CLI nós ainda vamos precisar configurar o ambiente para cada plataforma que estivermos desenvolvendo.

[01:17] Então, se nós quisermos rodar a aplicação no Android, fazer o build dela ou gerar um pacote para instalar, nós vamos precisar configurar todo o ambiente Android. E se quisermos fazer isso para iOS, nós também precisamos configurar o ambiente iOS no computador da Apple.

[01:34] Então nós temos uma opção aqui que é recente, que é o Expo CLI - que até vem como padrão no React Native agora que permite fazer isso de forma muito mais fácil, porque antes só existia o React Native CLI, que é o modo tradicional de criar aplicação.

[01:53] Então nós, utilizando o Expo, podemos criar uma aplicação e rodar ela sem a necessidade de configurarmos o ambiente nativo em si. Isso acontece porque o Expo instala uma aplicação no nosso celular que vai intermediar o React Native e o nosso celular em si.

[02:10] Então dentro dessa aplicação do Expo já tem todos os códigos nativos necessários para rodar no Android ou no iOS. Então nós só precisamos desenvolver e instalar essa aplicação no nosso celular para que ela compile os códigos e nos mostre o aplicativo nativo sem a necessidade de configurar todo um ambiente de desenvolvimento complexo.

[02:33] Outra vantagem que o Expo disponibiliza para nós são as atualizações via OTA, que significa atualizar o aplicativo na loja sem a necessidade de fazer upload de uma nova versão.

[02:45] Nós fazemos upload para o servidor do Expo e ele já automaticamente atualiza o app dentro dele mesmo, sem o usuário fazer qualquer download na loja, por exemplo.

[02:57] Mas por causa disso também, por conta do código nativo já estar dentro desse aplicativo do Expo, nós temos algumas limitações. Alguns recursos nativos que teríamos no React Native tradicional não são possíveis com o Expo e nós também temos uma aplicação um pouco maior, porque ela demanda que todo esse código nativo já esteja nesse aplicativo base.

[03:20] Então se você quer uma aplicação muito pequena, pode ser que o Expo não seja ideal; mas como estamos começando com o React Native para facilitarmos as coisas, nós vamos utilizar o Expo neste curso.

[03:32] Nas próximas atividades você vai ver como configuramos o ambiente com o Expo, que basicamente é só a instalação no Node e do Expo; e também como que vamos começar a criar o nosso projeto Expo do zero.

@@03
Preparando o ambiente: instalação do Expo e download do projeto

Para realizar o curso, é preciso que você tenha alguns softwares instalados na sua máquina. Por isso, antes de iniciar nossa jornada de aprendizados, é preciso que você leia com atenção algumas instruções e baixe os materiais necessários para acompanhar bem o curso.
Instalando o Expo
Este projeto implementa a tela de detalhes da cesta do e-commerce orgs. Nesta tela são mostrados dados estáticos do nome da cesta, fazenda, preço e itens da cesta. O aplicativo foi construído no React Native com Expo.

Por isso, é necessário ter o expo instalado na sua máquina. Caso você não tenha, separamos um artigo para você fazer a instalação de forma descomplicada. Para acessá-lo, clique aqui.

Baixando o código no Git
Após concluir a instalação, você também pode baixar o projeto base do nosso curso, para acompanhar com mais eficiência as aulas. Para acessá-lo, clique aqui.

Na página do git, clique no botão “Code” e selecione a opção “Download ZIP” para baixar o projeto. Recomendamos que teste o projeto e veja se ele apresenta os comportamentos esperados.

https://www.alura.com.br/artigos/como-instalar-configurar-expo-do-react-native?utm_source=gnarus&utm_medium=timeline&_gl=1*nqhfei*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwMDA4NDg4Ni4xMDQuMS4xNzAwMDg2MTU1LjAuMC4w*_fplc*aTl2U3liayUyQjZLM2ZMNlNJS0FZaWE2dXdqa0RkJTJGbjJUMFpFdk1FU3lDU1Bsb09PeCUyRjJpUklwRjlsaHBQZXlrTVhDdUpyc3pTMG9rM09jSU5HeFNKWmc3a2xMMjd1MWYwbEdYYWJDSVhOckFwcWc5N0MxMG5ZbllUdlJDTVh3JTNEJTNE

https://github.com/alura-cursos/react-native-comecando-do-zero-/tree/projeto-base

https://cursos.alura.com.br/extra/alura-mais/react-native-como-instalar-o-expo-no-mac-c1223?_gl=1*1j948wm*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwMDA4NDg4Ni4xMDQuMS4xNzAwMDg2MTM3LjAuMC4w*_fplc*aTl2U3liayUyQjZLM2ZMNlNJS0FZaWE2dXdqa0RkJTJGbjJUMFpFdk1FU3lDU1Bsb09PeCUyRjJpUklwRjlsaHBQZXlrTVhDdUpyc3pTMG9rM09jSU5HeFNKWmc3a2xMMjd1MWYwbEdYYWJDSVhOckFwcWc5N0MxMG5ZbllUdlJDTVh3JTNEJTNE

@@04
Criação da aplicação

[00:00] Depois de configurar o ambiente, vamos criar o nosso projeto. Se você ainda não instalou o Node.js ou o Expo, volte nas atividades anteriores e instale eles seguindo o passo a passo.
[00:12] Agora, se você veio do Node.js, pode estar habituado a criar um projeto dentro do npm-init e ir adicionando as bibliotecas manualmente; mas esse processo pode ser um pouco complicado se nós vamos utilizar alguma coisa tão complexa quando o React Native.

[00:28] Então, tanto o Expo quanto o React Native já disponibilizam comandos para criarmos o nosso projeto de uma forma mais fácil, já englobando todas as bibliotecas necessárias.

[00:39] Aqui no Expo nós já podemos ver na documentação que basta nós instalarmos o Expo, que nós já fizemos, e digitar expo init botando o nome do projeto.

[00:51] Então vamos abrir o nosso terminal na pasta que você desejar, basta digitar cd e entrar nas pastas. Nós vamos criar um projeto Expo aqui. Vamos digitar expo init e o nosso projeto vai ser o orgs-cesta porque nós vamos criar a tela da cesta do aplicativo Orgs.

[01:12] Então eu vou apertar a tecla "Enter" e ele vai me perguntar qual é o template que eu quero escolher. Para começarmos, vamos colocar no blank mesmo que é um aplicativo limpo, que vai ter só uma tela ali de exemplo.

[01:28] Esse processo pode demorar um pouco, visto que nós vamos baixar todas as bibliotecas, as dependências e instalar dentro da pasta "orgs-cesta". Daqui a pouco eu voltarei com o projeto criado.

[01:41] Pronto! O projeto já foi criado e aqui ele já diz algumas coisas que podemos fazer para rodar ele; mas antes de rodarmos, vamos dar uma olhada nos arquivos que foram criados dentro desta pasta que é a "orgs-cesta".

[01:55] Para abrir os arquivos eu vou utilizar o VS Code, mas você pode usar o editor de texto que você quiser. Vou abrir aqui o VS Code, em "File". Nós vamos abrir uma pasta. Eu vou entrar no caminho, em "orgs-cesta".

[02:13] Podemos autorizar. Vamos fechar a aba "Getting Started" e aqui nós já temos as pastas da nossa aplicação, os arquivos e as pastas nesta parte da esquerda.

[02:22] Nós podemos ver aqui algumas coisas do Expo, nós podemos ver o "node_modules". O "package-lock" e o "package.json", que são do Node e que nós vamos ter as versões das bibliotecas que estamos utilizando.

[02:36] Nós vamos ter no "node_modules" todos os arquivos dessas bibliotecas que estamos utilizando e temos também o "app.json", que é um arquivo que só vai ter no Expo. No React Native normal nós não vamos ter esse arquivo.

[02:51] Aqui nós podemos configurar algumas coisas do Expo que ele facilita para nós. Por exemplo: o nome da aplicação, então podemos colocar aqui "Orgs", por exemplo, para ficar mais bonito. Esse é o nome que apareceria na gaveta de aplicativos.

[03:] A versão do aplicativo, o ícone que está dentro da pasta assets, que vão ter os ícones. A splash screen ele já permite atualizar a splash screen e também algumas outras coisas.

[03:17] Nós temos também o "App.js", que é o arquivo JavaScript onde nós começamos a desenvolver a nossa aplicação.

[03:23] Na próxima aula nós vamos rodar esse projeto que acabamos de criar e começar a editar a nossa aplicação!

@@05
Rodando a aplicação

[00:00] Já configuramos o ambiente e criamos o nosso projeto. Agora nós temos tudo pronto para rodarmos a nossa aplicação!
[00:06] Lembra daquele aplicativo que você tinha que instalar no seu celular? Confira aí se você instalou o aplicativo do Expo, que ele pode se chamar ExpoGO também, da loja de aplicativos da Play Store ou App Store. Ele vai ser importante para nós podermos rodar a aplicação no celular.

[00:23] Se você vai utilizar algum simulador, se está habituado a utilizar simulador, você pode usar ele sem nenhum problema e sem a necessidade de instalar esse aplicativo. Eu vou utilizar o simulador para poder mostrar para você o que está acontecendo aqui na tela.

[00:38] Vamos abrir aqui a nossa pasta no terminal. Nós podemos abrir o terminal ou podemos vir em "Terminal" no Visual Studio e clicarmos um "New Terminal", que ele cria um terminal aqui dentro para nós dentro da pasta certa.

[00:54] Então, para nós rodarmos a nossa aplicação nós podemos digitar ‘npm start’ ou podemos também fazer um ‘expo start’. Eu vou rodar o ‘npm start’ aqui e mostrar porque nós também podemos usar o ‘expo start’.

[01:12] Isso porque aqui no ‘package.json’, se formos ver o comando ‘start’, que é esse que nós startamos com ‘npm’, chama o ‘expo start’. Então basicamente é a mesma coisa.

[01:24] Agora, o que aconteceu aqui quando eu rodei esse comando? Abriu uma nova janela no navegador. Essa janela é uma interface gráfica, é a mesma coisa que está rolando por baixo dos panos aqui no terminal. Ele vai ficar aberto rodando, mas aí tem uma interface gráfica para facilitar as coisas. Nós podemos fazer as coisas por aqui também se quisermos.

[01:46] Mas vamos olhar a interface gráfica aqui. Deixe-me dar um zoom. Nós podemos rodar no simulador ou no iOS, se você estiver utilizando simuladores Android e iOS, ou se você estiver utilizando o aplicativo do Expo basta escanear o QR Code com o seu celular.

[02:03] Se você não estiver na mesma rede, se você estiver utilizando rede cabeada para o computador e 3G para o celular, troque a "Connection" para "Tunnel". Isso vai fazer com que ele abra um túnel via internet para baixar a sua aplicação.

[02:20] De outra forma, ele configuraria aqui via "LAN", para que você baixasse o aplicativo pela rede. Se você colocar "Tunnel", pode ser que demore um pouco mais para baixar a aplicação, já que ele vai baixar pela internet; então depende da conexão dos seus aparelhos. Eu vou rodar aqui no Android simulator mesmo.

[02:44] Depois que eu terminar a primeira instalação, que pode demorar um pouco porque ele vai baixar todos os arquivos da aplicação, ele vai abrir esta tela - que é a tela do Expo mesmo, para avisar que ele está aqui e nós podemos pressionar as teclas "Command + M" ou "Ctrl + M" para abrirmos esse menu.

[03:03] Nós podemos dar um "Got it". Podemos dar "Reload", fazer algumas coisas. Fechando esse menu, nós já viemos aqui para uma tela da aplicação mesmo, que está falando aqui para abrirmos o "App.js" para começarmos a trabalhar na nossa aplicação.

[03:18] Então, vamos fazer isso! Vamos vir aqui nos arquivos do projeto. Deixe-me minimizar um pouco esse terminal e abrir o "App.js". Eu vou fechar essa tela lateral aqui. Nós já estamos dentro do "App.js", vamos então começar a editar alguma coisa! Vamos editar a mensagem que está escrita para abrirmos o aplicativo.

[03:44] Vamos apagar e digitar ‘Alura!’. Vou salvar aqui e agora nós temos que ir na nossa aplicação. Nós não precisamos dar "Reload" nem nada. Isso é porque o React Native já tem ‘live reload’, então tanto no Expo quanto no React Native normal as coisas se atualizam automaticamente na tela.

[04:06] Isso se nós editarmos aqui um arquivo JavaScript. Se adicionarmos bibliotecas, fazermos alguma coisa mais nativa, aí pode ser necessário recarregarmos ou até fazermos build novamente da nossa aplicação.

[04:19] Na próxima aula nós vamos começar a entender o que são os componentes React Native e começar a criar a tela da nossa aplicação em si!

@@06
React Native vs Expo

Nesta aula criamos um projeto React Native utilizando Expo e também entendemos um pouco sobre as diferenças entre utilizar o Expo CLI e o React Native CLI.
Marque as alternativas abaixo que são verdadeiras em relação ao uso das duas interfaces.

Utilizando o Expo não precisamos instalar o ambiente Java com Android Studio ou Xcode, pois ele é enviado diretamente ao aplicativo do Expo instalado no celular que já inclui os códigos nativos necessários.
 
Alternativa correta! Isso mesmo, com o Expo é mais fácil e rápido começar a desenvolver uma aplicação React Native.
Alternativa correta
Para utilizar o React Native não precisamos instalar o Node.js, pois utilizaremos o Android Studio e o Xcode. Além disso, há limitações em utilizar o Expo em determinadas funcionalidades nativas.
 
Alternativa correta
Na prática não há diferença alguma, apenas temos a vantagem de não precisar nos preocupar com o ambiente utilizando Expo. Então, podemos sempre criar projetos com Expo para qualquer aplicativo.
 
Alternativa correta
Os aplicativos criados com o Expo em geral ocupam um pouco mais de espaço no celular do que aplicativos criados da forma tradicional em React Native, pois o expo já mantém todos os recursos necessários em caso de atualizações OTA.
 
Alternativa correta! Por permitir atualizações sem envio de um novo arquivo para as lojas de aplicativos, o Expo já adiciona na base do aplicativo todos os códigos fontes de funcionalidades que ele permite na aplicação, mesmo que não estejamos utilizando no momento.

@@07
Faça como eu fiz: Um projeto com Expo

Prepare o ambiente com Node.js e Expo para poder criar um projeto React Native. Então, rode o bundle do projeto no computador e rode o aplicativo do Expo no seu celular escaneando o QR Code gerado pelo Expo.

É muito importante que você tenha conseguido configurar o ambiente, criar o projeto e utilizar o aplicativo Expo para prosseguir com o curso. Caso tenha ficado alguma dúvida nos contate através do Fórum!

@@08
Para saber mais: Limitações do Expo

Na documentação do Expo (em inglês), podemos ver a lista de funcionalidades que o expo ainda não suporta. Um resumo dessas limitações são:
As APIs de bluetooth, WebRTC e compras integradas com as lojas Play Store e App Store ainda não foram implementadas.
Áudio tocando de fundo quando a aplicação está fechada com controle do sistema ainda não funciona.
Aplicações que precisam ser extremamente pequenas requerem builds manuais mais complexos.
Bibliotecas nativas proprietárias que não são muito utilizadas não estão disponíveis no Expo para evitar aumentar o tamanho do aplicativo.
Serviços de notificações via push, com exceção do Expo notification service, podem necessitar de implementações manuais mais complexas.
As SDKs mínimas suportadas são Android 5 e iOS 10.
A versão gratuita pode gerar filas na hora do build para produção.
O tamanho máximo de assets que podem ser atualizados via OTA é 50 MiB.
Alterações nativas são necessárias para publicar apps que têm um público alvo menor de 13 anos.

https://docs.expo.io/introduction/why-not-expo/

@@09
O que aprendemos?

Nesta aula, aprendemos:
Preparar o ambiente
Instalamos o Node.js e o Expo para poder desenvolver aplicativos React Native com Expo.
Diferenças entre React Native CLI e Expo CLI
Entendemos que o Expo CLI cria uma aplicação React Native com limitações, em contrapartida podemos testar nossas aplicações sem configurar Android Studio ou Xcode.
Criar um aplicativo Expo do zero
Utilizamos o Expo CLI para criar um projeto React Native em branco.
Função live reload
O React Native vem por padrão com a funcionalidade de live reload, que atualiza a tela do app ao salvar novos códigos em tempo real.

#### 17/11/2023

@02-Componentes e estilos

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

@@02
Componente de função

[00:00] Nesta aula nós vamos começar a construir a tela da nossa aplicação, a tela de cesta. No fim do curso ela vai estar parecida com este layout aqui.
[00:10] Nós vamos ter uma imagem de topo com um título por cima dela, um texto. Vamos ter também o nome da cesta, que é “Cesta de Verduras”. Vamos ter informações sobre o fazendeiro, o produtor, com uma imagem e o nome.

[00:26] Nós também temos a descrição da nossa cesta, um preço, um botão de "Comprar" e os itens da nossa cesta: tomate, brócolis - com uma imagem do lado.

[00:40] Vamos verificar se a nossa aplicação está rodando corretamente. Eu vou abrir aqui o Terminal e vou digitar npm start. Se a sua aplicação já estiver rodando, você não precisa fazer isso. Então lembre-se que quando nós rodamos o npm start, ele vai startar o bundler do React Native e também vai abrir uma página web.

[00:58] Não necessariamente nós precisamos usar essa página. No caso, você pode escanear o QR Code, mas nós podemos usar também direto no Terminal. Aqui também tem o QR Code. Eu vou apertar a tecla "a".

[01:10] Por quê? Eu quero abrir no simulador. Você provavelmente vai abrir no seu celular, então não precisa fazer esse processo, basta escanear o QR Code que nós já vimos na última aula.

[01:21] Vou apertar tecla "a" para ele rodar aqui no simulador e podermos ver na tela o que está acontecendo.

[01:28] Vamos abrir o simulador aqui. Está rodando... Pronto, já carregou a aplicação aqui e nós estamos com o Alura! Se nós abrirmos o "App.js", por exemplo, vamos abrir aqui e colocar mais um a no Alura. Salvamos. Já está carregando aqui, então está tudo certo.

[01:50] Agora vamos entender um pouco melhor o que são esses componentes. Nesta aula nós vamos aprender a criar o componente para fazermos a nossa tela de cesta, porque a tela também é um componente e nós vamos primeiro começar dando uma olhada no que já temos aqui no "App.js".

[02:09] O "App.js" vai retornar uma função que se chama App. Dentro dessa função nós temos aqui um View, um Text, StatusBar. Isso é uma estrutura de XML, ela é muito parecida com XML.

[02:24] Nós podemos fazer tags usando esse abre e fecha <> e elas podem ter alguma coisa dentro e depois fecharem embaixo, ou elas podem fechar nelas mesmas e não terem nada dentro, só propriedades - que são valores que nós podemos colocar aqui dentro.

[02:44] Por exemplo: StatusBar tem style="auto", então style é uma propriedade e "auto" é o valor dessa propriedade.

[02:55] A mesma coisa nós temos aqui no Text. O Text não tem nenhuma propriedade, mas ele tem um valor dentro. Então nós “abrimos a boca de jacaré”, nós falamos assim geralmente, colocamos o Text, fechamos e colocamos o texto dentro. Para fecharmos, basta botarmos uma barra antes do Text dentro das bocas de jacaré, ou dos maiores e menores.

[03:23] Agora, o View, Text e StatusBar são componentes, então o que nós usamos de tag aqui já são componentes. Nós importamos eles aqui do react-native. A View é própria do react-native e a StatusBar é própria do expo-status-bar, que são pacotes que nós podemos utilizar.

[03:46] Então, quer dizer que nós só podemos usar componentes que vêm de bibliotecas de pacotes? Claro que não! Nós podemos criar os nossos próprios componentes - e é isso que vamos fazer neste vídeo de agora!

[04:01] Mas antes, vamos dar mais uma olhada na estrutura dos componentes. Eles são como se fossem peças de Lego que nós encaixamos e montamos a nossa aplicação. Então nós podemos fazer ele modular mesmo. Uma coisa importante que vale ressaltar é que este import do react-native é muito importante para que nós possamos usar os componentes desta forma.

[04:25] Se você veio do JavaScript que não utiliza React, você deve estar achando estranho retornarmos essas tags dentro do próprio JavaScript, do arquivo Java Script. Para que possamos fazer isso, o React Native e o React utilizam uma coisa chamada JSX, que é uma misturo do JavaScript com XML, podemos falar dessa forma.

[04:48] E para que nós permitamos isso dentro da nossa aplicação no React Native, nós precisamos importar o React, então se eu remover o import React from react - repare que o React não está sendo usado em nenhum lugar da nossa aplicação - mas se eu remover e salvar, nós vamos ter um erro na nossa tela, porque nós não podemos utilizar tags sem importar o React.

[05:14] Salvando aqui e importando de novo nós já temos a nossa aplicação funcionando novamente. Agora, como que nós vamos criar um componente desses aqui? Porque esses aqui vêm lá da biblioteca.

[05:27] Nós vamos fazer igual o "App.js". O "App.js" é um componente, porque nós podemos criar componentes apenas criando uma função que retorna algum outro componente. Dessa forma, nós vamos criar o nosso componente.

[05:45] Vamos criar uma organização de pastas na nossa aplicação. Nós podemos criar uma pasta na raiz chamada "src" para armazenarmos todo o nosso código fonte.

[05:59] Então nós podemos criar também uma pasta chamada "telas" para armazenarmos as nossas telas. Necessariamente nós vamos ter outras telas neste projeto aqui. Neste curso nós vamos ter uma só, mas depois pode ser que você queira criar outras.

[06:15] Então dentro de "telas" nós vamos criar o arquivo chamado "Cesta.js". Agora nós vamos criar a nossa tela de cesta, que vai ser um componente. Lembrando: nós precisamos importar o React, então vai ser a primeira coisa que vamos fazer: import React fromreact;. Agora, nós vamos criar a função da nossa cesta.

[06:48] Vamos criar aqui, então function Cesta() {}. Nós precisamos retornar alguma coisa aqui, então eu vou usar o return, O que podemos retornar? Vamos testar aqui só retornando um Text? Ficou <Text>Cesta</Text>, para nós dizermos em qual tela nós estamos.

[07:15] Outra curiosidade do React Native é que nós precisamos sempre colocar o Text ao redor do texto que queremos exibir. O React Native não sabe o que é um texto solto, como no React ou no HTML, que você pode colocar um texto solto e ele vai ser exibido.

[07:33] O React Native precisa da tag Text para exibir coisas na tela, para exibir os textos na tela. Então sempre que queremos exibir um texto, nós utilizamos Text ou um componente que tenha Text dentro.

[07:46] Está faltando uma coisa ainda! Nós sempre que utilizamos um componente, nós precisamos importar ele de algum lugar. O React Native não sabe de onde que vem esse Text. É um componente que criamos? É um componente de uma biblioteca? É do próprio React Native? Ele não tem como saber se não importarmos.

[08:05] Então vamos importar aqui o {Text}, utilizando a estrutura de chaves. Na frente: from 'react-native'. Agora deixe-me diminuir a barra lateral. Agora, por que nós utilizamos aqui chaves e no outro import nós não utilizamos chaves?

[08:29] Isso é porque quando nós utilizamos chaves, nós estamos pegando um componente que foi exportado do React Native. Neste caso aqui, para nós exportarmos o nosso componente e para que possamos utilizar o nosso componente em outros arquivos, nós precisamos exportar ele.

[08:45] Então basta adicionarmos um export antes da função. Quando nós exportamos o nosso componente, nós pegamos o nosso componente usando as chaves.

[08:57] Agora, quando nós não queremos usar as chaves, é porque nós só podemos pegar um componente. No export nós podemos exportar vários aqui. Se eu quiser colocar vários aqui, eu posso exportar e chamar ele com o próprio nome dele.

[09:11] Já quando nós não utilizarmos chaves, o que está acontecendo lá por trás dos panos é que ele está exportando como default, então basta adicionar um export default. O default é “padrão” em inglês, se chama “padrão”. Então é o export padrão do arquivo. Como ele é o padrão, só pode ter um, por isso que nós podemos importar sem usar as chaves.

[09:38] Então, neste caso, como nós queremos que esse arquivo seja o componente da cesta, nós geralmente exportamos como default, para que tenha só um componente e não tenha erro depois para importarmos.

[09:52] Ok, nós criamos aqui o nosso componente usando uma função e retornamos um Text com o nome Cesta. Agora, não está acontecendo nada! Por quê? Porque nós não estamos importando ele, não estamos utilizando ele lá no "App.js".

[10:09] E agora, nós vamos importar a Cesta aqui no nosso arquivo, para que possamos exibir ele. Então aqui, ao invés de colocar esse <Text>Alura!</Text>, eu vou colocar a cesta. <Cesta - aí eu posso fechar o componente aqui direto. Não tem nada dentro dele, não está pegando nenhum parâmetro nem nada do tipo. Então eu vou abrir, botar a cesta e fechar já diretamente.

[10:37] Lembrando que nós precisamos sempre importar, porque o React Native não sabe de onde que vem a cesta. Vamos importar utilizando Cesta, sem os colchetes, porque nós já exportamos como default, from. Nós não vamos utilizar nenhuma biblioteca aqui, como ele está sugerindo, nós vamos pegar dos arquivos do nosso projeto mesmo.

[10:58] Então, para partirmos do ponto que nós estamos, nós sempre utilizamos ./ e nós estamos aqui na estrutura de pastas fora, na raiz do projeto. Agora nós precisamos entrar na pasta "src" e na pasta "telas". Vamos colocar aqui: ./src/telas/ - o nosso componente, que é cesta. Nós não precisamos colocar o .js porque ele já entende que é um arquivo JavaScript.

[11:28] Agora nós temos a cesta importada! Vamos salvar aqui e ver o que acontece. Nós já temos o nome Cesta, já está funcionando a nossa aplicação. É isso, nós já criamos nosso primeiro componente!

[11:42] Na próxima aula nós vamos continuar o nosso componente, criar o topo aqui e estilizar ele, começar a utilizar esses estilos que estamos vendo aqui no "App.js". Então eu te verei no próximo vídeo!

@@03
Para saber mais: Componente de classe

No último vídeo, vimos como criar componentes com base em funções, mas há outra forma de criar componentes.
Nos primórdios do React Native, componentes com base em classes eram a única forma de declarar componentes. Dessa forma, é criada uma classe que estende Component importado de react, e é implementado um método render que retorna as TAGs do componente.

Você pode ver um exemplo abaixo:

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>Olá mundo!</Text>
      </View>
    );
  }
}

export default MeuComponente;COPIAR CÓDIGO
Ainda hoje, é possível utilizar essa forma de criação de componentes. Porém, ela é bem menos usada, pois impossibilita a utilização de algumas funcionalidades recentes do React Native.

Você pode ler mais na documentação do React Native, clicando aqui.

https://reactnative.dev/docs/getting-started#function-components-and-class-components

@@04
Preparando o ambiente: Download das imagens

No próximo vídeo, iremos usar algumas imagens no nosso app. Você pode baixá-las do projeto do github, clicando aqui e depois em “Download”, ou por esse link direto.

https://github.com/alura-cursos/react-native-comecando-do-zero/blob/main/assets.zip

https://github.com/alura-cursos/react-native-comecando-do-zero/raw/main/assets.zip

@@05
Imagem e estilos

[00:00] Neste vídeo nós vamos começar a produzir os elementos da nossa tela, começando pelo topo onde nós temos o título da tela, que é o detalhe da cesta e uma imagem.
[00:10] Nós poderíamos exportar essa imagem com o texto já dentro para facilitarmos no nosso layout, mas aí nós não poderíamos mudar o texto, mudar a fonte ou o tamanho da fonte. Então fica muito melhor se nós fizermos a imagem separada do texto - e é isso que nós vamos fazer!

[00:29] Antes disso, vamos dar uma olhada aqui na nossa "App.js", para darmos uma limpada nele e começarmos a trabalhar. Vamos começar removendo esses estilos que nós não vamos precisar do "App.js" e aí tiramos a referência dele do View.

[00:49] Deixe-me abrir aqui também, vou minimizar aqui. Aí nós temos isso aqui. Eu tirei os estilos e aconteceu alguma coisa. Cadê o texto que estava aqui dentro?

[00:59] Na verdade, ele está aqui em cima. Isso porque aqui nos estilos - deixe-me voltar - nós tínhamos que o alinhamento das coisas eram no centro. Então quando nós tínhamos aqui, o texto estava alinhado no centro. No caso, os componentes aqui dentro.

[01:15] Quando nós removemos, o componente para de estar alinhado no centro e ele vai lá para cima, mas não está legal assim. Nós queremos que o nosso texto não fique ali por cima da StatusBar.

[01:30] Para isso, nós vamos utilizar outra StatusBar. Nós vamos remover essa StatusBar do Expo. Deixe-me apagar aqui também, e adicionar uma StatusBar aqui do React Native, StatusBar

[01:49] Vou salvar aqui. Neste momento ele já atualizou aqui e está funcionando. Só que se eu carregar, nós não estaremos utilizando a StatusBar ainda. Se eu recarregar sem a StatusBar do Expo vai acontecer a mesma coisa que aconteceu antes.

[02:03] A cesta está por baixo da StatusBar, então nós pegamos a StatusBar do React Native e vamos aplicar ela aqui dentro. Pronto, agora nós já temos a cesta abaixo da StatusBar e a StatusBar preta!

[02:21] Só que pode acontecer de você estar no iOS, por exemplo - e ainda assim está acontecendo esse problema. Por isso é importante usar também o SafeAreaView. O SafeAreaView, eu vou colocar ele aqui, também importando do react-native. Vou tirar esse Text que nós não estamos usando também.

[02:43] O SafeAreaView faz com que no iOS apenas, essa barra e também a barra de ações que temos aqui em iPhones mais recentes, têm uma barra virtual, ela é evitada pelo que está dentro.

[02:59] Então ele vai criar uma margem ali por fora. Nós podemos substituir o SafeAreaView onde tínhamos View, então vai ficar o SafeAreaView com a StatusBar e a Cesta dentro.

[03:11] Vou remover a importação da View porque nós também não estamos usando. Vou salvar. Não vai mudar nada aqui porque aqui é Android, mas no iOS, se você tiver esse problema, provavelmente ele vai ser resolvido.

[03:23] E agora? Nós já arrumamos o "App.js". Vamos dar uma olhada no nosso "src/telas>Cesta.js", o nosso componente de Cesta. Deixe-me diminuir a barra lateral. O que nós queremos? Nós queremos adicionar uma imagem.

[03:39] Então eu vou adicionar aqui um componente imagem. Vou tirar esse Text que temos aqui e vou colocar aqui: Image, sem a letra “m” no final, é Image apenas. Esse é componente do React Native que permite adicionar imagens.

[03:56] Veja aqui que o VS Code, o editor de texto, ele já está dizendo aqui para auto importar do react-native. Então vamos clicar aqui e ele automaticamente vai importar a imagem para nós.

[04:06] Eu vou remover o Text que nós não estamos usando no momento e adicionar aqui o source. O source é de onde vem a nossa imagem. Então para botarmos uma imagem nós precisamos chamar a tag Image e passar a imagem como source.

[04:25] Onde que está a imagem? Nós não baixamos ainda! Na verdade, se você viu a atividade anterior, você já baixou ela, mas ela não está no projeto ainda.

[04:34] Então eu vou pegar aqui o mesmo arquivo que você provavelmente vai baixar, que vem aqui desse "assets.zip". Basta vir em "Download" e aí você vai baixar aqui o "assets.zip". Extraia ele, que vai ter a pasta "assets".

[04:52] Essa pasta tem os assets da aplicação que são parecidos com os que da barra lateral. Então,nós vamos vir aqui e substituir os "assets" que tem aqui dentro. Deixe-me pegar aqui os assets de novo. Eu vou arrastar ele aqui para dentro.

[05:08] Deixe-me fazer o seguinte: arrastei ele para nenhuma pasta e aí vai me perguntar se eu quero adicionar ele como uma nova pasta aqui no projeto, ou se eu quero copiar a pasta aqui para dentro. Eu quero copiar.

[05:21] Aí ele vai perguntar se eu quero sobrescrever o que tem dentro da pasta "assets", porque ela já existe. Eu quero sobrescrever. Feito isso, nós temos aqui os arquivos sobrescritos. Vou salvar aqui e vai dar um erro. Por quê? Porque nós estamos utilizando o source da imagem e não está dizendo de onde que vem a imagem, mas nós já temos a imagem aqui.

[05:45] Nós temos o "topo.png". Então nós só precisamos importar ela aqui dentro. Nós damos um import, chamamos de topo essa variável from e aí temos que dizer de onde que queremos importar. Como está algumas pastas anteriores, nós digitamos ../../assets/topo.png e aí nós pegamos o topo e colocamos no Image.

[06:19] Pronto, agora nós não temos mais um erro! Agora, como nós fazemos para que essa imagem fique do tamanho certo? Porque ela está muito grande aqui!

[06:29] Vamos começar criando os estilos. Então, aqui embaixo do nosso componente eu vou criar uma constante chamada estilos que vai ter o StyleSheet.create.

[06:47] O StyleSheet é utilizado para criarmos os estilos no React Native. Ele otimiza os estilos. Nós poderíamos utilizar direto um objeto, mas dessa forma os estilos ficam mais otimizados.

[06:59] Então eu vou criar aqui o estilo topo e aqui dentro eu coloco quais são as características do estilo que eu quero. As características são muito semelhantes ao CSS. Por exemplo: a largura é o width, igual ao CSS e aí eu vou colocar dois pontos e o que eu quero. Seria legal se essa imagem tivesse em 100% da tela.

[07:21] Então eu vou colocar aqui "100%". Aspas porque nós estamos dentro de um objeto. Não existe 100% como um valor no JavaScript, então nós temos que fazer no formato de string mesmo. Se nós colocássemos apenas 100, ele ia considerar 100 pixels. Vamos salvar aqui... Nada está acontecendo!

[07:43] Na verdade, aconteceu um erro porque nós não importamos esse StyleSheet. Vamos colocar o StyleSheet aqui no import do react-native, juntamente com a imagem. Nós ainda não estamos aplicando esse topo, esse estilo topo na imagem. Para fazermos isso, nós só precisamos digitar style={topo}. Na verdade, temos que pegar o estilos.topo. Vem aqui de dentro dos estilos.

[08:10] Vem aqui, de dentro dos estilos. Vou salvar... E ainda não deu certo!

[08:17] Por quê? Porque nós estamos definindo 100%. Aqui a imagem está ocupando 100%, mas repare que ela está centralizada. Esse é o centro da imagem, ela não está mais no canto. Só que aqui para os lados a imagem ainda existe.

[08:34] Então, nós temos que setar também o height dela, porque ela está preenchendo a tela. Ela preencheu o 100% aqui, só que ela manteve a mesma altura. Então, na altura nós poderíamos colocar 200, por exemplo.

[08:53] Não deu certo! Ela não ficou exatamente do tamanho que eu queria. Ela está menor do que nós esperávamos. Nós não podemos colocar um valor fixo aqui, porque esse valor do height vai depender do tamanho da tela. Então nós precisamos saber qual é o tamanho da tela.

[09:12] Para fazermos isso, nós podemos usar o Dimensions aqui do react-native. Então nós importamos o Dimensions aqui e vamos botar aqui embaixo do topo. Vamos criar uma constante chamada width, que é para dizer a largura da tela =Dimensions.get. Então nós queremos pegar a screen. Quais são as dimensões da screen e o que queremos pegar? O width!

[09:44] Pronto! Agora, nessa variável width nós já sabemos qual é a largura da tela. E agora, com essa largura, o que nós fazemos? Nós podemos fazer uma conta aqui no height. Nós pegamos a altura da imagem, dividimos pela largura e multiplicamos pelo width.

[10:05] Então, vamos fazer o seguinte: a altura nós sabemos que é 578. Se você ver as propriedades da imagem, verá que essa é a altura dela. Então nós dividimos por 768, que é a largura dela total e multiplica pelo width. Vamos salvar aqui.

[10:29] Pronto, agora nós temos a altura exata, independentemente do tamanho da tela do celular!

[10:34] Agora que nós temos a imagem no lugar certo e do tamanho certo, vamos adicionar o texto. Lembra que nós não podemos retornar dois elementos aqui no return?

[10:47] Se eu adicionar o Text aqui embaixo, vai dar erro aqui, porque nós estamos retornando duas coisas. Ele não entende o que é esse Text que está sozinho aqui.

[10:58] Então nós precisamos botar alguma coisa ao redor disso. Para isso, eu vou adicionar aqui simplesmente um fragmento. Um fragmento não é bem um componente, mas ele é uma coisa que vai agrupar esses outros componentes que estão aqui dentro. Deixe-me colocar o Text aqui. Ele vai agrupar sem a necessidade de criar uma View, sem a necessidade de criar outra camada.

[11:28] Então a Image e o Text vão ser irmãs da StatusBar. Se eu criasse uma View aqui, a View que seria a irmã da StatusBar nesse caso, da StatusBar do "App.js".

[11:44] Já que nós não precisamos estilizar ou fazer alguma coisa nesse sentido aqui com uma View, não tem necessidade de utilizarmos a View. Então vamos utilizar um fragmento que fica mais simples.

[11:57] E aqui no Text nós vamos escrever Detalhes da cesta, que é o título da nossa página. Vou salvar aqui. Na verdade, primeiro nós temos que importar o Text.

[12:12] Vou importar o Text, salvar... E ele não está conseguindo se conectar! Deve ter dado algum erro de conexão. Vamos ver se nós conseguimos fazer um "Reload".

[12:21] Eu apertei as teclas "Ctrl + M" e fiz um "Reload". Pronto, a nossa aplicação já está carregando!

[12:27] Eu dei um "Reload" aqui e nossa aplicação já carregou novamente. Então apareceu aqui a string que nós colocamos, que é Detalhes da cesta, mas ela está aqui embaixo.

[12:39] Nós precisamos colocar ela, na verdade, aqui em cima. Nós até poderíamos colocar ela em cima da Image, mas mesmo assim ela não estará embaixo na imagem ali.

[12:49] Então, vamos voltar ela para depois da Image e definir alguns estilos para esse texto. Vou colocar aqui style e aí aqui vai ser os estilos.titulo, que é o título da nossa tela.

[13:08] Então nós precisamos definir o que são os estilos do título aqui embaixo nos estilos. Vou colocar aqui titulo e vou abrir e fechar as chaves aqui dentro dos estilos lá do StyleSheet.create.

[13:25] Agora, o que podemos fazer? Primeiro, nós precisamos que esse texto suba lá para cima. Como que nós podemos fazer isso? Se nós definirmos o texto como position: 'absolut'?

[13:38] Lembrando que nós precisamos fazer isso entre aspas, porque absolut não é uma variável. Deixe-me colocar aspas duplas. Não importa as aspas, mas é só para ficar bonito igual ao outro.

[13:51] Com a position: "absolut" nós jogamos o texto lá para cima, isso acontece porque a posição dele está absoluta com base em tudo. Ela não está relativa. Geralmente, a posição relativa faz com que as coisas fiquem uma embaixo da outra. Então aqui nós fizemos com que a posição ficasse absoluta, então as coisas estão uma por cima da outra.

[14:13] E por que nós não adicionamos o texto aqui em cima da Image? Porque se nós adicionarmos esse texto aqui em cima ele vai estar primeiro, e aí a imagem, que está por segundo, vai ficar por cima do texto.

[14:26] Então nós precisamos que o texto fique embaixo e, adicionando o position: "absolut", ele sobe lá para cima, se alinhando lá no começo de todos os elementos.

[14:37] Depois do position: "absolut", o que nós vamos fazer? Nós podemos alinhar esse texto no centro. Se eu digitar um aTextAlign: "center", veja só que é bem parecido com o CSS mesmo.

[14:50] O TextAlign, só mudaria porque teria um traço aqui, mas então nós utilizamos o a letra “A” maiúscula. TextAlign: "center". Vou salvar... Nada está acontecendo. Por quê? Porque o texto está só nesse canto, ele é só isso. Então ele está alinhado no centro dele mesmo porque ele é só isso.

[15:08] Para nós alinharmos ele no centro de tudo, nós precisamos definir o tamanho dele. Então aqui eu vou colocar width: "100%". Lembrando que "100%" também precisa das aspas e vamos salvar. Pronto, agora ele já está aqui no centro da tela!

[15:26] Agora, o nosso layout, se nós olharmos, nós vamos ver que é branco é maior e tem uma margem também nesse detalhe da cesta. Vamos ajustar isso aqui também.

[15:43] Vou alterar aqui para Detalhe da cesta - estava escrito Detalhes, mas tudo bem. Aí nós abrimos aqui o simulador ainda e começamos a editar aqui.

[15:56] Vamos definir o fontSize e a altura da fonte como 16. Nós também podemos definir o lineHeight como 26. Salvamos, já ficou maior! Agora vamos definir o color da fonte, qual é a cor como white, branco. Pronto!

[16:22] Estamos com a fonte branca aqui. Nós também precisamos que ela esteja mais em negrito. Ela não está em negrito. Então nós usamos o fontWeight para definir a gordura da fonte, nós colocamos como bold. Então, negrito.

[16:38] E aí, nós também podemos adicionar um padding, que é para darmos aquele espaçamento lá em cima de 16. Pronto! Agora o nosso título está aqui com o espaçamento, está em negrito e está por cima da imagem. Com a imagem e o texto inserido, nós encerramos este vídeo.

[16:58] No próximo vídeo nós vamos criar a próxima seção, que é a seção de informações que fica aqui embaixo. Te verei em breve!

@@06
Detalhes da cesta

[00:00] Agora que criamos um topo bonito para a nossa aplicação, vamos então fazer a parte de informações da nossa cesta de verduras - que no caso aqui tem um nome da cesta, “Cesta de Verduras”, a fazenda da cesta com a logo e o nome e também uma descrição e o preço.
[00:19] Se nós observarmos bem, nós vemos que temos uma margem aqui em toda a parte inferior da nossa aplicação. Então nós podemos criar uma View para contermos tudo isso e nós não precisamos colocar essa margem em todos os elementos. Então vamos começar fazendo isso!

[00:36] Vou minimizar aqui e nós vamos no nosso código, no "src/telas>Cesta.js" e vamos criar a nossa View. Vou adicionar aqui a nossa View e vou começar a adicionar também os Text das informações que nós queremos mostrar. O primeiro é o nome da cesta vai ser Cesta de Verduras. Depois nós temos a fazenda Jenny Jack Farm.

[01:19] Depois nós temos a descrição. Uma cesta com produtos selecionados cuidadosamente da fazenda diretamente para a sua cozinha. Então eu vou escrever aqui Uma cesta com produtos selecionados cuidadosamente da fazendo direto para a sua cozinha.

[02:00] Eu vou ajustar aqui e apertar algumas vezes a tecla "Enter" para ficar mais legível. Diminuir. Vamos salvar e dar uma olhada como está ficando aqui no simulador.

[02:13] Nós já temos aqui um erro. Nós não importamos a View. Então vamos importar a View de react-native e pronto! Nós temos aqui uma cesta selecionada, até a descrição nós temos. Então falta só o preço.

[02:27] Text e adicionamos o preço aqui que vai ser R$40: 40,00. Pronto, agora nós precisamos estilizar esses textos. Então vamos criar aqui mais estilos.

[02:47] Primeiro, nós podemos adicionar o estilo de nome, que é o nome da cesta e esse nome da cesta nós podemos colocar aqui como fontSize: 26, lineHeight: 42. O lineHeight é o tamanho da linha. Com ele, nós podemos definir até onde a nossa fonte vai na nossa linha.

[03:21] E também ali tem também a cor color. A cor nós colocamos entre aspas, ela vai ser "#464646". É uma cor hexadecimal.

[03:37] Salvando aqui nós podemos ver que quase não muda nada e nós também temos outra coisa, que é o fontWeight: "bold" para definirmos aqui que o nosso texto vai ser em negrito.

[03:52] Aí nós precisamos aplicar o nome aqui em cima, senão vai mudar nada. Vou colocar aqui o style={estilos.nome}. Pronto, agora nós já temos o texto grande aqui!

[04:09] Só que, lembra que tínhamos falado que íamos deixar uma margem aqui ao redor? Nós não fizemos isso porque nós precisamos aplicar estilos na View também. A view por si só não tem nenhuma margem.

[04:22] Então vamos vir aqui antes do nome e aplicar os estilos chamados de cesta. Então vamos criar um parâmetro chamado de cesta e dentro deles nós podemos aplicar duas propriedades que não existem normalmente no CSS tradicional, mas nós podemos aplicar ele aqui no React Native, que é o paddingVertical.

[04:45] Então quer dizer na vertical, o de cima e o debaixo vão ser 8; e o paddingHorizontal, que é da esquerda e da direita vai ser 16. Esse paddingHorizontal e paddingVertical existem porque no React Native nós não podemos definir o padding, por exemplo, e colocar aqui 26 8 8 26, supondo.

[05:13] Isso nós poderíamos fazer no CSS, mas não podemos definir mais de um valor para o padding, podemos definir só um valor. Então, nós podemos fazer de uma forma mais simplificada também usando paddingVertical e paddingHorizontal.

[05:29] Salvando aqui, nada acontece porque nós precisamos aplicar o estilo da cesta aqui na View. Então vamos subir aqui na View, criar aqui a propriedade style dentro da View e pegar os estilos.cesta. Salvando... Pronto, agora nós já temos aqui uma margem, um padding para que os conteúdos não fiquem grudados nas laterais da tela!

[05:51] Agora vamos partir então para o próximo item, que é o nome da fazenda: nomeFazenda. Depois nós adicionamos a imagem. O nomeFazenda, então, vai ter um fontSize: 16. Nós também temos o lineHeight: 26.

[06:22] Depois vamos ter que colocar uma margem entre a imagem e ele, mas por enquanto pode ser só isso. Vamos salvar aqui e aplicar o nome da fazenda lá em cima. Então: style=estilos.nomeFazenda. No Text do nome da fazenda: Jenny Jack Farm.

[06:50] Agora nós aplicamos também o estilo da descrição. Nós criamos o estilo da descrição aqui embaixo. O estilo da descrição vai ser color: "#A3A3A3", então: "#A3A3A3".

[07:16] Nós vamos ter um fontSize: 16 também e o lineHeight: 26. Vamos aproveitar aqui também e criar já o preço, que vai ser outro objeto aqui no nosso objeto de estilos.

[07:44] Nós vamos ter aqui color. A cor do preço é um pouco diferente, #2A9F85. Aí nós temos o fontWeight:, que vai ser "bold". Também tem o fontSize: 26, fontSize: 26 e lineHeight: 42, tendo também uma marginTop de 8, para ficar um espaçamento ali um pouco maior do que os outros: marginTop: 8.

[08:38] Vamos salvar e ver como está ficando. Nada acontece porque nós temos que aplicar todos esses estilos em cada um Text. Então vamos vir aqui em cima no Text, onde temos a descrição style={estilos.descricao}.

[08:59] Aí temos também ali embaixo no preço, no Text do preço style={estilos.preco}. Salvando... Pronto, agora nós já temos a nossa descrição, que está um pouco mais cinza claro e o preço que está na cor verde! Vamos dar uma olhada aqui... Comparando com o layout, até que está bem parecido.

[09:25] Está bem parecido aqui! Agora nós precisamos adicionar a imagem da fazenda. Então vamos voltar ao nosso código. Como que nós podemos fazer isso, como que nós adicionamos a imagem da fazenda aqui do lado?

[09:40] Nós podemos mudar a ordenação dos itens da nossa tela. Então, ao invés de nós fazermos um embaixo do outro, nós conseguimos fazer um do lado do outro.

[09:49] Mas para não alterar todos os outros elementos que estão aqui na nossa tela, para que o nome não fique do lado do nome da fazenda, por exemplo, nós precisamos agrupar eles em outra seção, em outra View.

[10:02] Então, abaixo do nome da Cesta de Verduras, vamos criar uma View que vai armazenar o nome da fazenda. Ela vai armazenar o nome da fazenda e também a imagem da fazenda.

[10:20] Então, como já vimos na última aula, nós podemos utilizar Image, definirmos qual é o source dela, qual é a fonte dessa imagem; e aí nós colocamos aqui dentro o import da imagem que nós queremos adicionar.

[10:40] Vamos importar aqui em cima, abaixo do import da imagem de topo, vamos fazer o import logo from. Aí nós voltamos duas pastas: assets/logo.png. Pronto, agora nós temos aqui o logo da nossa fazenda!

[11:04] Vamos dar uma olhada aqui, acho que esse é o nome mesmo, é o "logo.png". Vou salvar aqui. Está um embaixo do outro. Nós não fizemos nada ainda para ordenarmos ela e nós também não definimos um tamanho para essa logo. Então vamos começar definindo aqui.

[11:25] Nós podemos fazer aqui, perto do nomeFazenda para ficar organizado aqui nos estilos. Então, antes do nome da fazenda eu vou colocar aqui imagemFazenda.

[11:38] A imagemFazenda nós podemos definir o tamanho, a largura e a altura dela como 32; e o Height: 32 também. Salvando e aplicando lá na imagem. Então aqui na imagem nós temos que adicionar a tag style, a propriedade style e aqui estilos.imagemFazenda, então: style={estilos.imagemFazenda}. Nós já temos a logo pequena.

[12:08] Mas nós ainda precisamos ordenar eles um do lado do outro, então antes da imagem nós criamos aqui um novo estilo chamado fazenda; e dentro da fazenda nós vamos ter uma propriedade para mudar a ordenação das coisas na tela.

[12:29] Então ela vai se chamar flexDirection. Aqui nós colocamos row. Vamos salvar e aplicar a fazenda na View que está vazia, que tem a imagem e o nome da fazenda. Então: style={estilos.fazenda}. Lembrando sempre de usar aqui as chaves: style={estilos.fazenda}.

[13:01] Vamos salvar aqui. Ainda faltou só uma margem entre eles. Então vamos vir aqui na fazenda de novo e criar um paddingVertical: 12. Nós vamos deixar um espaçamento de 12 e agora aqui no nomeFazenda nós podemos também adicionar uma marginLeft, uma margem à esquerda do nome da fazenda de 12... Pronto!

[13:38] Agora nós temos a logo e o nome da fazenda aqui do lado, mas o que foi que aconteceu aqui? Por que nós utilizamos esse flexDirection: row? O que significa isso? Nós temos o flex, que é um conceito que já vem lá do CSS também, ele nos permite organizar as coisas dentro da tela.

[14:02] Nós podemos colocar as coisas para a esquerda, para a direita ou uma para cada lado. Nós podemos colocar as coisas no centro da tela e fazer com que as coisas vão caindo conforme vai diminuindo a largura, principalmente quando nós estamos trabalhando com responsividade. Então o flex serve para isso.

[14:21] Mas por padrão, no React Native o flexDirection é column, ou seja, ele vai ir um abaixo do outro em uma coluna - mas nós queríamos que aqui na fazenda as coisas fossem uma do lado da outra, como uma linha.

[14:35] Então é por isso que nós aplicamos o flexDirection: row. Essa é uma diferença entre o flex no CSS, no React e o flex no React Native. Na verdade, o flex existe fora do React, ele é uma propriedade CSS.

[14:53] Outra diferença também é que, por padrão, todos os elementos do React Native já são flex. Então eles já têm o flex aplicado e já ficam um embaixo do outro.

[15:05] Lá do React, por exemplo, se você está acostumado com CSS normal, o flex não vem como padrão. Lá você teria que dizer que cada elemento é display: "flex" e aí você poderia utilizar flexDirection, essas outras coisas. Aqui todos os elementos são display: "flex" por padrão.

[15:30] Agora que já criamos a nossa área de informações aqui da cesta, nós podemos notar uma coisa. Vamos abrir aqui o layout e colocar do lado.

[15:41] Ainda tem alguma coisa que não está certa. Se olharmos bem, a fonte é diferente. Então na próxima aula nós vamos aplicar uma fonte diferente na nossa aplicação, essa fonte igual a que está no layout. Te verei em breve!

@@07
Fonte externa

[00:00] Como já falamos no vídeo passado, nós queremos que a fonte que está aparecendo aqui no layout seja aplicada no nosso aplicativo também. Então, como que nós poderíamos aplicar uma fonte? Nós poderíamos vir aqui no "Cesta.js" e aplicar o estilo fontFamily, por exemplo, aqui no topo.
[00:23] E aí, a fonte que estamos utilizando no nosso layout se chama Montserrat. Vamos salvar. Já temos um problema aqui! Já deu um erro dizendo que a fonte Montserrat não está no nosso sistema. Isso é porque ela não é padrão nem no Android e nem o iOS e também não é padrão no React Native.

[00:48] Onde está essa fonte, então? Nós encontramos ela aqui no Google Fonts. Então, se eu digitar aqui Montserrat, ela já vai aparecer aqui. Nós poderíamos baixar os arquivos .ttf dessa fonte e instalar eles manualmente, mas vamos dar uma olhada aqui no Expo para vermos o que ele tem a dizer sobre fontes.

[01:07] Digitando aqui na documentação do Expo font na busca, nós já encontramos como segundo resultado usar uma fonte do Google. Então, aqui no docs.expo.io/guides/using-custom-fonts nós podemos ver como que fazemos para instalarmos uma fonte do Google via Expo.

[01:27] Nós temos aqui basicamente o comando expo install expo-font @expo-google-fonts/ e o nome da fonte. Então, vamos fazer isso! Vamos pegar esse comando aqui, abrir o nosso Terminal, colar ele aqui e digitar, só completar com montserrat, com a letra “m” minúscula.

[01:54] Vou apertar a tecla Enter aqui e ele vai instalar a fonte no nosso projeto. Lembrando que tem que estar dentro da pasta do projeto, é claro.

[02:02] Nós já temos a fonte instalada no nosso projeto. Vamos ver o que mais a documentação diz. Ela tem um exemplo aqui aplicando essa fonte no app, no "App.js" mesmo. Então nós importamos esse useFonts do pacote que acabamos de instalar, que é o @expo-google-fonts/montserrat.

[02:23] O inter é a fonte que eles estão usando como exemplo e aí nós criamos aqui uma variável - fontsLoaded, que é para saber se a fonte foi carregada ou não . Então, enquanto ela não foi carregada, ele retorna alguma outra coisa que não vai ser a aplicação.

[02:40] Vamos fazer isso, então! Vamos vir aqui no nosso "App.js". Nós viemos aqui no "App.js" e vamos importar aqui o useFonts e também a nossa fonte. Vamos primeiro ajustar aqui que o from está errado, o from é @expo-google-fonts/montserrat.

[03:13] E aí nós podemos importar as fontes. Nós não podemos importar somente a Montserrat e ele já vem com tudo junto. Na verdade, nós temos que importar cada uma que vamos querer.

[03:25] No caso, nós queremos a Montserrat_400Regular, que é o tamanho normal da fonte; e nós também queremos a Montserrat_700Bold, que é a fonte em negrito. Nós importamos aqui o useFonts, importamos Montserrat_400Regular e Montserrat bold do @expo-google-fonts/montserrat.

[03:51] Agora vamos carregar ela na nossa aplicação. Nós podemos criar uma constante aqui dentro da função, const [fonteCarregada] = useFonts({. Aí nós passamos um objeto das fontes que queremos usar.

[04:16] Nós podemos definir o nome da fonte e definir qual que é a fonte dessas aqui. Então podemos customizar esse nome. Vamos customizar ele para MontserratRegular.

[04:30] Então a MontserratRegular vai ser esse mesmo objeto da Montserrat que nós importamos aqui, Montserrat_400Regular. O primeiro elemento desse nosso objeto vai ser "MontserratRegular": Montserrat_400Regular.

[04:51] O segundo vai ser a fonte em negrito, então nós precisamos definir aqui como nós podemos definir, na verdade, o MontserratBold, para ficar mais fácil depois de usarmos. Vamos colocar aqui que é a Montserrat_700Bold.

[05:10] Nós chamamos as duas fontes e agora precisamos pegar essa variável fonteCarregada e fazer com que a nossa aplicação não seja mostrada caso a fonte ainda estiver carregando. Porque se nós tentarmos mostrar nossa aplicação antes da fonte carregar, as fontes não vão estar carregadas, então pode ser que nós tenhamos um problema com nosso layout.

[05:34] Então vamos fazer um if aqui embaixo do useFonts, se exclamação fontCarregada, se a fonte não estiver carregada, nós vamos retornar uma View aqui. Só uma View vazia.

[05:51] Vou adicionar a View também aqui no import do react-native. Essa variável aqui, quando é atualizada, o aplicativo inteiro é carregado. Então cada vez que ela for atualizada, ele vai passar aqui de novo.

[06:04] Então quando nós não tivermos a fonte carregada, não vai aparecer nada, vai aparecer uma tela em branco. Quando nós tivermos a fonte carregada, nós vamos ter o return da nossa aplicação normal.

[06:18] Como fazemos para testar isso? Vamos abrir aqui o nosso simulador e tentar aplicar a fonte em algum texto. Vamos escolher aqui o texto da cesta, o nome da cesta e o nomeFazenda também. Vamos colocar aqui fontFamily. No nome da cesta temos MontserratBold. No nomeFazenda temos fontFamily: "MontserratRegular".

[07:04] Vamos salvar aqui e ver o que acontece... Nada está acontecendo, mas que estranho! Isso é porque nós não recarregamos a nossa aplicação. Pode ser que apareça até um erro aí para você. Então nós precisamos parar a nossa aplicação. Deixe-me parar ela aqui, e carregar de novo. Então eu vou rodar ela de novo aqui, digitando npm start.

[07:28] Enquanto está startando aqui eu vou fechar também tudo que estiver aberto aqui no nosso simulador ou no seu celular, por exemplo. Aí você pode escanear o QR Code - ou no caso, eu vou apertar aqui para abrir no simulador novamente.

[07:46] Está abrindo aqui! Agora parece que carregou a fonte, mas se nós olharmos bem, veremos que foi só a fonte da fazenda que carregou. Vamos ter certeza aqui. Comentamos essa fonte aqui, vamos comentar elas e salvar.

[08:09] Está diferente aqui! Se nós colocarmos a fonte no nomeFazenda, nós atualizamos o nome da fazenda. Se colocamos a fonte no título, nada acontece. Por quê? Porque a fonte fontFamily, no caso da MontserratBold, o normal dela, o fontWeight normal já é Bold e nós não temos um fontWeight: "bold" na fonte que o normal já é bold.

[08:35] Então nós não precisamos colocar aqui que o fontWeighté bold. Pronto, agora a fonte atualizou!

[08:41] Agora vamos pensar um pouco sobre essa biblioteca que nós adicionamos de fonte. Será que tem algum perigo, já que vem do Google Fonts, vem da internet, dessa fonte não carregar quando o aplicativo estiver sem internet, por exemplo?

[08:57] Na verdade, não! Se nós olharmos aqui na documentação. Vamos vir aqui. Na documentação do Google Fonts nós podemos acessar o projeto do Google Fonts, então eu cliquei no projeto que é expo/google-fonts lá do github e nós podemos vir aqui nos pacotes. Na verdade, não é o pacote! Vamos voltar para o Google Fonts, "font-packages".

[09:27] Aqui nós temos todos os arquivos de todas as fontes. Por exemplo: Montserrat está aqui. Aqui nós temos todos os ttfs dessa fonte. Então, quando nós instalamos a fonte Montserrat via essa biblioteca, nós já baixamos todos esses ttfs.

[09:44] Então eles já estão na nossa máquina. Nós podemos, inclusive, ver aqui dentro do "node_modules", que é onde ficam as bibliotecas. No "@expo-google-fonts", aqui estão os ttfs da nossa fonte que estamos importando.

[09:58] Então quando nós fazemos o build, quando mandamos o aplicativo para o celular, ele já manda o arquivo ttf junto. É por isso que nós não precisamos nos preocupar em a fonte não ser carregada, por exemplo, quando o usuário estiver sem internet.

[10:12] Só se nós estivermos sem internet e não conseguirmos instalar a fonte; mas como nós já instalamos no nosso projeto, ela já está baixada.

[10:23] Na próxima aula nós vamos ver como vamos inserir esse fontFamily em cada um dos nossos textos, porque se nós formos colocando um a um e ainda verificando o que é bold e o que não é vai demorar um pouco, vai dar um trabalho. Além que qualquer pessoa pode vir aqui, inserir um texto e não se atentar à fonte.

[10:42] Então vamos fazer um componente para generalizarmos isso e também vamos refatorar um pouco nossa aplicação para ela ficar com uma cara melhor por baixo dos panos no código.

[10:53] Te verei na próxima aula!

@@08
Componentes

Nessa aula, aprendemos o que são componentes, como criá-los e como utilizá-los. Dê uma olhada nos arquivos abaixo e assinale os componentes que não irão gerar erros ao executar a aplicação.

import React from 'react';
import { View, Text } from 'react-native';

function MeuComponente() {
  return <View>
    <Text>Olá mundo!</Text>
  </View>
}

export default MeuComponente;
 
Alternativa correta! Isso mesmo, assim podemos criar um componente em forma de função. Precisamos importar o React, mesmo que não usamos, para que possamos adicionar as TAGs. Então apenas exportar uma função retornando os componentes, também importados, como se fosse um XML.
Alternativa correta
import React, { Component } from 'react';
import { View } from 'react-native';

class MeuComponente extends Component {
  render() {
    return (
      <View>
        <Text>Olá mundo!</Text>
      </View>
    );
  }
}

export default MeuComponente;
 
Alternativa correta
import { View, Text } from 'react-native';

export default function MeuComponente() {
  return <View>
    <Text>Olá mundo!</Text>
  </View>
}
 
Alternativa correta
import React from 'react';
import { Text } from 'react-native';

export default function MeuComponente() {
  return <Text>Olá mundo!</Text>
}
 
Alternativa correta! Isso mesmo, esse componente também está correto, podemos retornar apenas o Text sem nenhuma View, mas precisamos nos atentar que textos sempre precisam estar entre TAGs Text!

@@09
Estilos

Além dos componentes, aprendemos nessa aula a adicionar estilos para eles também! Os estilos servem para dar mais vida aos nossos componentes, adicionando tamanhos, tipos de fonte, cores e alinhamentos, posicionando eles para o centro, por exemplo.
Das afirmações abaixo, qual delas é falsa sobre estilizar componentes?

Selecione uma alternativa

Quando se trata de estilos no React Native, sempre precisamos adicioná-los em um arquivo separado do componente.
 
Alternativa correta! Exato, essa é a alternativa falsa. Podemos criar estilos no mesmo arquivo dos componentes sem nenhum problema, é até recomendado que façamos isso para que os estilos não possam ser reutilizados por outro componente e criem problemas ao fazer alterações.
Alternativa correta
Estilos podem ser declarados direto no componente sem a necessidade de StyleSheet.
 
Alternativa correta
Componentes no React Native não são estilizados com arquivos .css como no React.
 
Alternativa correta
Usando StyleSheet ajudamos o React Native a otimizar os estilos.

@@10
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@11
O que aprendemos?

Nesta aula, aprendemos:
Utilizar componentes:
Aprendemos a utilizar componentes próprios do react native como Text e View, componentes de bibliotecas e também nossos próprios componentes.
Criar componentes:
Utilizando funções, criamos nosso primeiro componente: a Cesta.
Estilizar componentes:
A fim de sermos mais fiéis ao layout, usamos estilos para mudar fontes, tamanhos, alinhamentos, espaçamentos e cores.
Fonte externa:
Usando uma biblioteca do expo, adicionamos uma fonte externa do Google Fontes e aplicamos um texto na nossa aplicação.

#### 18/11/2023

@03-Refatorando

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/react-native-comecando-do-zero-/tree/aula2

@@02
Componente de texto

[00:00] Na última aula nós criamos o componente de cesta e nós também adicionamos uma fonte customizada à nossa cesta, mas nós vimos que adicionar aqui como fontFamily fica um pouco maçante de termos que replicar e lembrar que estamos utilizando essa fonte cada vez que adicionarmos um texto.
[00:17] Então ia ser muito bom se tivesse uma forma de que todos os textos já tivessem a fonte que queremos. Nós podemos criar um componente para utilizarmos sempre esse componente no lugar do texto e que ele já tenha por padrão esse estilo.

[00:35] Vamos fazer o seguinte: vamos criar um componente que faça isso. Para isso, nós podemos criar uma pasta chamada "componentes" aqui dentro da "src".

[00:54] Então eu vou criar uma pasta chamada "componentes " e nessa pasta nós vamos criar o nosso componente de texto. Eu vou criar um novo arquivo aqui chamado "Texto.js"

[00:59] Aqui nós vamos começar importando o React porque nós sempre temos que fazer isso nos nossos componentes importar o React from react e vamos exportar como default o nosso componente. Então, export default function Text(){} e return, o que nós queremos que tenha neste texto. Para exibirmos o texto nós precisamos usar o Text

[01:29] Então vamos usar o Text aqui, importando ele do react-native, então: import {text} from react-native;.

[01:47] Agora nós já importamos e nós queremos que o texto que seja passado dentro do texto, nosso componente de texto, igual a como fazemos aqui no Text seja passado para dentro desse Text aqui. Como nós podemos fazer isso?

[02:03] O React Native já nos disponibiliza todos os elementos filhos, o que está dentro aqui, nós chamamos de filho. Por exemplo: os filhos da View são esses, então nós podemos pegar esses elementos filhos chamando children. A palavra children é “filhos” em inglês.

[02:24] Então nós temos aqui o elemento children e nós podemos passar ele entre chaves, dentro do texto para pegarmos tudo que for passado para dentro desse componente.

[02:38] Aí nós passamos também para dentro do Text utilizando chaves. Vamos salvar e nada vai acontecer, porque não estamos chamando esse componente; mas vamos aplicar a fonte nesse componente. Para aplicarmos a fonte, nós precisamos criar os estilos.

[02:58] Então vamos criar aqui: const estilos = StyleSheet.create e aí vamos ter um objeto de estilos. Vamos chamar de texto mesmo o estilo que vai ter fontFamily: e o nome da fonte, que é MontserratRegular.

[03:25] Agora nós aplicamos esse estilo dentro do Text. Então no Text nós vamos adicionar a propriedade style = {estilo.texto}. Agora estamos aplicando esse estilo de fonte regular no nosso texto.

[03:47] Vamos importar o texto aqui dentro da "Cesta.js". Então eu vou adicionar aqui em cima o import Texto from ../ e vou voltar uma pasta, componentes/Texto. Agora nós pegamos esse texto e aplicamos em algum texto para testarmos.

[04:14] O importante é que esse texto não seja em negrito porque nós estamos utilizando a fonte regular e aí o fontWeight: "bold" não vai funcionar, como já vimos na aula que utilizamos a fonte.

[04:28] Vamos pegar aqui uma fonte que não está em negrito. Pode ser aqui a descrição. Então eu vou pegar aqui a descrição e vou colar aqui no lugar de Text. Vai ser Texto. Salvamos.

[04:44] Olhe, ela até pegou a fonte, mas ficou de uma forma diferente, mudou a cor da fonte também. Por que isso aconteceu? Porque nós estamos aplicando fontFamily: "MontserratRegular", mas estamos esquecendo de aplicar o estilo dessa descrição. A descrição aqui tem outro estilo, ela tem uma cor, um lineHeight e um tamanho de fonte também.

[05:13] Nós precisamos fazer com que esse estilo que está sendo passado para o texto não seja esquecido. Então vamos vir aqui no Texto e vamos pegar esse style.

[05:25] Como que nós fazemos isso? Damos uma vírgula aqui depois do children, nós pegamos o style como parâmetro do nosso componente também. Aí nós podemos passar um array de estilos aqui no style.

[05:39] Então eu vou adicionar aqui os colchetes para delimitar um array no Java Script. Na primeira posição eu vou passar o style que veio aqui do componente de texto, do componente superior; e aí depois eu vou passar esse estilos.texto.

[05:57] Vamos salvar. Pronto, agora nós já temos a fonte de volta certa! Se nós comentarmos isso aqui ele vai voltar a outra fonte. Então está funcionando.

[06:09] Mas agora, como nós fazemos para aplicarmos isso na fonte bold também, no negrito? Porque nós utilizamos outro nome de fontFamily. Vamos até criar aqui dentro do Texto outro estilo chamado textoNegrito: e ele vai ser um objeto, claro, com fontFamily:. Aí nós temos que botar aqui a fontFamily: "MontserratBold". A MontserratBold está aqui já.

[06:49] Agora nós podemos aplicar esse estilo. Mas de que forma vamos saber que o texto tem que ser bold? Nós poderíamos passar um outro parâmetro aqui falando que é bold, por exemplo.

[07:03] Nós poderíamos duplicar esse texto aqui, criando dois textos, o texto normal e o texto negrito. Aí o texto negrito seria em negrito, ou nós poderíamos utilizar uma coisa que já estamos fazendo, que é passando fontWeight: "bold".

[07:17] Todos os programadores de React Native vão saber que fontWeight: "bold" vai fazer com que o texto fique em negrito. Então nós poderíamos manter essa mesma estrutura. Como que fazemos isso? Simples! É só pegarmos aqui do style o fontWeight: "bold". Então vamos fazer o seguinte: vamos definir qual é o estilo padrão.

[07:39] Eu estou criando uma variável aqui: let estilo = estilos.texto. Então o padrão vai ser o texto normal. Aí podemos fazer um if aqui. Se o style.fontWeigh === 'bold', se o fontWeight for bold nos estilos desse componente, nós vamos trocar esse estilo. Então nós setamos o estilo = estilos.textoNegrito.

[08:19] Então quando não tiver o bold, nós vamos aplicar o estilo normal, a fonte MontserratRegular; quando tiver o bold, nós vamos aplicar a fonte MontserratBold. Vou salvar aqui e nada vai acontecer. Vamos ver... Até vou recarregar aqui para ter certeza.

[08:45] Nós também temos que tomar cuidado com uma coisa: quando nós não setamos o bold, caso ele tiver algum problema de achar esse style aqui, por exemplo. Vamos tirar o estilo de dentro do texto, eu vou tirar o estilo para testarmos.

[09:04] Se eu salvo aqui, nós temos um erro, porque esse componente não tem nenhum estilo - e não precisa ter mesmo. Tem componentes que não vão ter estilo, eles só querem exibir o texto e pronto.

[09:18] Aí, o que acontece? Ele bate aqui no nosso if no Texto, verificando se o style.fontWeight='bold'. Mas nós não temos nem o style, como que eu vou saber o que é fontWeight? Ele vai nos dar um erro.

[09:34] O que nós podemos fazer para corrigir esse erro é simplesmente adicionarmos uma interrogação após o style do if. Essa interrogação faz com que se houver o style nós verificamos o fontWeight. Se não, nós já sabemos que não vai dar certo.

[09:49] Vamos salvar. Pronto, agora nós já prevenimos esse erro de acontecer! Se não tiver o estilo, ele mesmo assim vai ser exibido de uma forma que não é o negrito.

[10:01] Agora nós voltamos o texto para mantermos o estilo bonito e temos o nosso componente de Texto aqui devidamente implementado. Vamos testar agora no negrito.

[10:15] Vamos pegar o negrito aqui, então, que é o texto de topo. Eu vou adicionar aqui Texto dentro da "Cesta.js", o Text que tem o título da página eu vou trocar para o Texto que acabamos de criar.

[10:34] Salvei aqui e olhe só, parece que não está sendo aplicada a fonte. Por quê? Lembra que quando nós utilizamos a fonte pela primeira vez nós vimos que quando o fontWeight é bold a fonte não funciona? Porque a fonte normal, o modo normal dela já é a fonte bold.

[10:55] Então nós precisamos fazer com que esse fontWeight seja passado como bold aqui, porém no texto, quando nós aplicamos a fonte bold queremos que ele seja regular. Então eu vou adicionar aqui fontWeight no texto negrito, no estilo do texto; fontWeight vai ser a fonte normal. Vamos salvar.

[11:20] E também tem outra coisa que nós acabamos esquecendo, que foi de usar esse estilo. Nós estamos usando sempre o estilo do texto. Então nós precisamos vir aqui no texto e alterar no array de estilos, deixar o style e o estilo que nós criamos.

[11:36] Então vamos salvar e agora sim! Se nós comentarmos aqui, nós teremos outra fonte. Se deixarmos o fontWeight: 'normal' no texto em negrito, nós teremos a fonte MontserratBold.

[11:50] Outro detalhe também é de adicionarmos esse fontWeight. Deixe-me até mudar as aspas aqui para ficar igual. Vamos adicionar o fontWeight: "normal" aqui no estilo do texto também. Por quê? Porque nós não queremos que o usuário venha aqui e digite, por exemplo, fontWeight: "600".

[12:11] Aí ele vai vir aqui, vai aplicar o texto e vai ser o MontserratRegular; só que se não tivermos o normal, não vai funcionar porque ele vai pegar o fontWeight: "600" - que não existe nessa fonte regular, apenas no normal.

[12:25] Então nós aplicamos aqui no Texto também, no estilo do texto o fontWeight: "normal". Agora nós já temos o nosso componente de Texto finalizado. Vamos aplicar ele em todos os textos aqui da nossa aplicação. Dentro da "Cesta.js" eu vou selecionar o texto aqui e aplicar em todos eles.

[12:51] Tem um macete muito legal que nós podemos utilizar aqui no VS Code que é a seleção, apertando as teclas "Ctrl + D" ou "Command + D". Então eu selecionei o Text, apertei as teclas "Command + D" e ele selecionou próximo que é igual. Fazendo isso mais uma vez, ele vai selecionando os próximos. Então o próximo eu não vou selecionar porque já está Texto.

[13:14] Selecionei quatro textos e agora eu posso editar eles ao mesmo tempo. Então eu vou apertar a seta para o lado para ele tirar a seleção e ficar só com o cursor e vou digitar a letra "O". Pronto, ele já aplicou Texto em todos eles e falta só esse último aqui, que eu vou fazer manualmente mesmo, porque nós tínhamos um no meio.

[13:33] Salvando... Agora nós já temos todas os textos customizados aqui. Só que parece que a Cesta de Verduras ainda não está negrito. Por quê? Porque nós já tínhamos aplicado a fontFamily aqui.

[13:47] Então vamos tirar a fontFamily aqui do nome e vamos trocar para dentro dos estilos da Cesta. Nós temos o nome e trocamos esse fontWeight do nome, a fontFamily do nome para adicionarmos a fontWeight: "bold", para nós utilizarmos o nosso bold lá do nosso componente de texto.

[14:11] Pronto, agora a Cesta de Verduras já é bold e tem mais um aqui - o nome da fazenda, nós podemos remover o fontFamily que nós não precisamos mais.

[14:21] Pronto, agora nós temos a nossa aplicação com todos os textos estilizados, com a nossa fonte customizada e nós estamos reutilizando esse componente!

[14:31] Então nós estamos vendo na prática as vantagens de utilizarmos componentes, que é basicamente para reutilizarmos de forma mais fácil e fazermos com que nossa aplicação fique mais fácil de desenvolver. Então quando chegar um desenvolvedor novo, ele vai simplesmente utilizar o Texto ao invés do Text e aplicar os estilos manualmente.

[14:51] Na próxima aula nós vamos reestruturar um pouco a nossa aplicação para criarmos vários componentes e organizarmos melhor essa tela de cesta. Te verei em breve!

@@03
Cesta componentizada

[00:00] Neste vídeo nós vamos melhorar a estrutura do nosso projeto, reestruturando a nossa aplicação, a nossa tela, em vários componentes.
[00:09] Lembrando que os componentes não servem só para nós reutilizarmos eles, eles servem para organizarmos a nossa aplicação também. Fazendo assim, fica mais fácil de entendermos a nossa aplicação e darmos manutenção depois, fazermos alterações.

[00:22] Então, por onde nós começamos? Nós podemos começar olhando a nossa "Cesta.js". Olhamos aqui e podemos pensar em como nós podemos dividir isso. Nós temos algumas partes.

[00:33] Nós temos a parte de topo da aplicação e a parte de detalhes. Então nós podemos fazer isso mesmo, criar um componente que vá armazenar o topo e outro componente que vai armazenar os detalhes.

[00:45] Mas onde que vamos criar esses componentes? Nós vamos adicionar na pasta "componentes"? Pode até fazer sentido porque são componentes, mas esses componentes servem para que utilizemos em toda a aplicação.

[00:59] Esse topo e o detalhe nós não vamos utilizar em toda a aplicação normalmente. Nós vamos utilizar só dentro da cesta. Então nós vamos colocar ele dentro da cesta, mas nós vamos criar uma pasta chamada "cesta" para armazenarmos todos eles - não no mesmo arquivo, senão vai ficar do mesmo tamanho que já está agora, ou maior ainda.

[01:20] Então vamos fazer o seguinte: aqui em "telas" vamos criar uma nova pasta chamada "Cesta", que é a pasta que vai ter os componentes da Cesta e outra chamada "componentes".

[01:36] Agora, a nossa Cesta tem componentes, mas a nossa Cesta, a "Cesta.js" está fora da pasta da "cesta". Ia ser legal que ela estivesse dentro lá também. Então vamos arrastar a "Cesta.js" para dentro.

[01:51] Agora ele já diz aqui que é para atualizarmos os import. Eu vou dar "No" aqui para fazermos isso manualmente.

[01:59] Nós temos aqui primeiro o erro que não temos a "Cesta", não existe "telas/Cesta" aqui onde estamos importando no "App.js". Nós importamos a nossa Cesta de src/telas/Cesta.

[02:17] Agora tem mais uma cesta aqui. /Cesta, nós poderíamos fazer isso e ia resolver, mas tem uma forma melhor de fazermos isso sem alterarmos esse import. Nós podemos simplesmente renomear a "Cesta.js" para index.js.

[02:36] O React Native reconhece que o index.js é a representação da Cesta. Então nós não precisamos alterar o nosso App.js. Quando nós colocamos src/telas/Cesta, ele já vai buscar o index.js que tem dentro dessa pasta, mas ainda está dando erro aqui.

[02:57] Agora o erro mudou de lugar, o erro está dentro do próprio “index”. Ele está falando que não existe o Texto - e de fato ele não existe nesse caminho. Então nós olhamos aqui o Texto e vemos que está usando um caminho aqui no import. Nós precisamos voltar mais uma pasta, porque nós adicionamos o “index” dentro de uma pasta.

[03:19] Então em cada um dos import aqui no Texto eu vou adicionar ../. Pronto, agora nossa aplicação está funcionando! Nós já atualizamos os import para corresponderem à pasta que criamos aqui e nós também já estamos utilizando o “index”.

[03:40] Agora eu vou fechar o "App.js" e nós vamos dar uma olhada melhor no “index” da nossa cesta. Nós temos o topo e queremos criar o componente topo.

[03:52] Vamos vir aqui no "componentes", na pasta "componentes" que nós criamos dentro dessa "Cesta" e vamos criar um arquivo chamado "Topo.js" para armazenar o componente do topo.

[04:06] Aí nós precisamos, como todo componente, dar um import no React from 'react', export default function Topo () {} e return o nosso componente. O que vamos retornar? Deixe-me ver aqui, escrevi default errado... Nós vamos retornar esses dois, a imagem e o texto do topo. Então são a imagem de topo e o título.

[04:48] Eu vou apertar as teclas "Ctrl + X" aqui do “index” e vou colar aqui no "Topo", mas repare que nós não podemos retornar dois componentes soltos assim. Nós sempre temos que fazer o retorno de um único componente.

[05:03] Esse componente pode ter vários filhos, mas nós não podemos retornar duas coisas soltas assim, então vamos utilizar aqui o fragment de novo, para retornar esses componentes sem precisarmos adicionar uma View ou qualquer outra coisa. Então ele vai só agrupar eles sem criar uma nova estrutura ali no nosso layout.

[05:24] Nós já criamos a parte do topo, mas ela ainda não vai funcionar porque nós não estamos importando o Image nem o Texto, não tem os estilos aqui, não tem nada disso nesse arquivo. Nós precisamos fazer isso!

[05:38] Vamos começar importando { Image } from react-native e nós também precisamos importar o Texto dos nossos componentes. Então, dois pontos, volta três pastas - ./componentes/Texto.

[06:04] Nós já importamos os dois, agora nós precisamos adicionar também a imagem de topo, que está no “index”. Então eu vou copiar aqui o import do topo do “index” e vou colar aqui dentro do Topo.js.

[06:18] Falta também os estilos. Aqui embaixo eu vou criar uma constante estilos: const estilos = StyleSheet.create, para criarmos os nossos estilos e aí é um método. Nós abrimos e fechamos parênteses e adicionamos um objeto aqui dentro com as chaves.

[06:40] Agora, o que nós botamos aqui dentro? O título e o topo, o que já temos aqui no “index”. Então nós copiamos o título e o topo que estão aqui no “index”, nos estilos do “index”. Na verdadem eu vou recortar eles e vou colar aqui dentro. Vamos salvar. Eu acho que não falta mais nada.

[07:00] Agora nós precisamos também importar ele aqui no “index”. Se eu salvar, ele não vai carregar aqui em cima. Então vamos adicionar. Ele está carregando... Vamos fazer um reload mais forçado porque parece que ele não está atualizando.

[07:26] É comum enquanto estamos refatorando aqui que ocorra alguns problemas, porque os arquivos estão mudando de lugar e o React Native dá uma perdida. Então vamos vir aqui no terminal, parar ele e startar novamente. Digite npm start, caso aconteceu com você alguma coisa nesse sentido.

[07:45] Vou rodar ele aqui de novo no simulador e vamos ver se ele carrega aqui. Pronto, agora ele carregou sem o título, sem o topo, porque nós removemos ele e vamos testar o componente de Topo que nós adicionamos.

[08:13] Então aqui no “index” nós digitamos Topo, <Topo /> para nós adicionarmos o nosso componente aqui. Nós podemos fechar ele aqui, porque não tem nada dentro dele. Então vamos importar ele aqui também.

[08:33] Digitamos import Topo from e aí nós podemos dar um ponto barra, porque ele está aqui dentro dos "componentes" mesmo ./componentes/Topo. Vamos salvar e ver se ele vai recarregar aqui com o topo.

[08:52] Muito bem, ele está dando erro aqui que o arquivo de Topo.png não existe. De fato, ele não existe, porque esse arquivo "Topo" está dentro de uma pasta. Então nós precisamos voltar mais uma pasta aqui no topo dentro do "Topo.js" e vamos recarregar ele aqui.

[09:08] Teclas "Command + M" ou "Ctrl + M". Tem que salvar aqui primeiro. Agora sim, agora ele está dando outro erro que fala que a variável width, a largura não está sendo encontrada porque nós não adicionamos ela aqui. Então nós temos que remover o width do “index” onde estávamos pegando a largura da tela e adicionar aqui também no "Topo".

[09:35] Então vamos adicionar e importar Dimensions do react-native que estávamos utilizando para pegar essa variável. Agora nós temos o nosso topo de volta na nossa tela! Então está funcionando o nosso topo. Agora nós fazemos a mesma coisa aqui para a parte de baixo de detalhes.

[09:54] Então, vamos lá! Aqui dentro dos "componentes" e, como um “irmão” do Topo.js vamos criar o Detalhes.js. Importamos aqui de React o react e export default function Detalhes(){}. Retornamos o que dessa vez? Vamos adicionar aqui já o nosso fragmento e nós vamos aqui e pegamos os textos.

[10:36] Mas por que vamos deixar essa View no “index”? Não seria legal nós arrastarmos ela junto? Não necessariamente, porque aqui embaixo, lembra que todo o resto da aplicação vai ter essa margem? E a cesta está aplicando essa margem? Nós podemos deixar ele aqui e adicionar o resto da aplicação aqui dentro como outros componentes.

[10:56] Então aqui para o Detalhes vamos adicionar só o Texto mesmo. Nós damos uma identada aqui. Temos que importar aqui todos os componentes, nós temos que importar from react-native. Vamos colocar aqui a View e a Image.

[11:17] Outro import, nós importamos o Texto from e nós navegamos até o nosso componente de Texto. Voltamos três pastas, entramos dentro de componentes/Texto e pronto!

[11:34] Falta ainda a imagem de logo que está no “index”. Então nós pegamos aqui a imagem de logo dentro do “index”, colamos aqui para ela aparecer e nós também temos que voltar mais uma pasta dentro do caminho dessa imagem de logo, a logo da fazenda.

[11:54] Agora nós precisamos também criar uma constante de estilos aqui, a última coisa no nosso componente de "Detalhes". Digitamos estilos = StyleSheet.create( abrimos um objeto e precisamos importar o StyleSheet aqui no react-native. Quando eu apertei a tecla "Enter" ele já importou sozinho. Então lembre-se de importar o react-native.

[12:20] Aqui dentro nós temos todos os estilos de nomeFazenda, imagemFazenda, a descrição e o preço também. Então vamos pegar tudo isso. Na verdade, é tudo menos a cesta. Então copiamos o resto aqui menos a cesta, dentro do estilos do "index" vai ficar só a cesta e aqui dentro do estilos do "Detalhes" vai todo o resto.

[12:47] Então eu vou salvar aqui. Vamos adicionar aqui no "index" o nosso componente de Detalhes, lembrando de importar ele. Como não estamos usando o Texto aqui, eu vou tirar também e vou importar aqui Detalhes from './componentes/Detalhes', o componente que acabamos de criar.

[12:18] Vamos salvar. Está recarregando aqui... Temos um erro! Não pode encontrar a View. Nós devemos ter esquecido de importar a View dentro do "Detalhes". Nós sempre temos que importar todos os componentes. Então vamos importando a View aqui.

[13:35] Recarregou a nossa aplicação corretamente! Vamos ver aqui. Nós ainda temos algumas coisas que não estamos usando, vamos tirar essa Image, Dimensions aqui do "index" e vamos também dar uma recarregada só para termos certeza que está tudo funcionando corretamente.

[13:52] Agora nós já temos aqui a nossa aplicação componetizada. Nós temos o "index" da nossa aplicação que só está chamando aqui os nossos componentes.

[14:03] Então nós chamamos o componente de Topo e nós chamamos aqui o componente de Detalhes também. Fazendo isso, nós já conseguimos entender o que tem dentro da nossa aplicação sem precisarmos entrar em cada componente.

[14:16] Então nós sabemos que vai ter uma tela de cesta. Deixe-me fechar aqui. Imagine que uma pessoa nova está chegando, ela vai olhar e vai entender: “nossa aplicação tem telas e uma das telas é a cesta, a única nesse momento. A tela de cesta, tem um "index" que vai retornar a estrutura base da cesta. E o que tem dentro dessa cesta? Tem um topo e tem detalhes”.

[14:42] Fica muito mais fácil de explicar para as pessoas que estão chegando agora o que está acontecendo dentro do nosso componente.

[14:50] Mas ainda tem um detalhe que não está legal na nossa aplicação. Um deles é que, por exemplo, aqui no "Topo" ou em "Detalhes", todos os textos estão manualmente inseridos aqui.

[15:04] Se nós quisermos fazer alguma alteração, alguma tradução ou mandarmos alguma outra coisa por parâmetro, vai ficar bem difícil porque nós vamos ter que entrar em cada componente e alterar o texto - ou se for uma pessoa que não for de programação, vai ficar ainda mais difícil!

[15:20] Então na próxima aula nós vamos fazer com que esses textos estejam todos juntos em um único arquivo de textos. Te verei na próxima aula para fazermos isso, então!

@@04
Textos generalizados

[00:00] Como já vimos no último vídeo, deixar os textos aqui fixos, por exemplo, como está nos "Detalhes", não é legal. Isso porque os textos ficam espalhados pela nossa aplicação e se alguém que não está acostumado com projeto tiver que mudar algum texto vai ser muito difícil para essa pessoa.
[00:17] Além do mais, se quisermos botar, por exemplo, uma outra língua ou fazer uma tradução também vai ser bem difícil; porque os textos estão espalhados e depois a aplicação pode se tornar muito maior. Então vamos aproveitar que estamos começando e já vamos organizar todos os textos em um único arquivo.

[00:34] Então vamos criar aqui na "src" uma pasta chamada "mocks" e aí criamos aqui dentro um arquivo chamado "cesta.js", que vai armazenar todos os mocks da nossa "cesta". Vou criar aqui uma constante chamada cesta e a cesta vai ser um objeto.

[00:57] O que nós temos aqui dentro da nossa cesta? Nós temos o "Topo", temos os "Detalhes" e dentro de cada um deles temos várias informações. Vamos começar com o "Topo". Vou pegar o "Topo". O que nós temos no "Topo" que poderíamos armazenar? Basicamente, o título.

[01:15] Essa imagem pode ser igual para todas as cestas, não tem problema, é só uma imagem representativa. Não necessariamente vai mudar para cada cesta. Então nós temos aqui no "Topo" o título.

[01:27] Vamos criar dentro da "cesta.js" o topo, que vai ser um objeto. Dentro do topo temos o titulo:. Eu vou colar aqui "Detalhe da cesta". Então a nossa cesta é essa estrutura. Tem um topo e o título.

[01:48] Já vamos aproveitar e exportar como default esse objeto de cesta. Sim, nós podemos exportar objetos - nós podemos exportar qualquer coisa, não necessariamente componentes.

[02:02] Agora nós já temos tudo que o nosso topo precisa. Vamos salvar aqui e vamos olhar o resto da aplicação. Nós vamos também os "detalhes". Então eu vou criar uma outra chave aqui, uma outra propriedade irmã do topo chamada detalhes.

[02:20] Dentro de detalhes, que é um objeto, vão ter várias informações: vai ter o nome da cesta, vai ter as informações da fazenda, vai ter também a descrição e o preço. Então vamos adicionar isso aqui.

[02:33] Ficou nome:. O nome eu vou pegar já diretamente dos "Detalhes". Fica mais fácil copiar daqui. O nome é Cesta de Verduras. Aí nós temos aqui o nome da fazenda. Vou copiar aqui nomeFazenda e o nomeFazenda é Jenny Jack Farm.

[03:04] Nós temos também a descricao. Vou copiar ela aqui também, que é mais comprida. Nós colocamos entre aspas sempre, como é um texto, o preco também. O preco é R$ 40,00. Até para mudarmos o preço ou alguma coisa assim também fica bem mais simples.

[03:38] Vou salvar aqui e nós vamos ver se temos tudo. Nós temos o nome da cesta, nós temos a fazenda, nós temos a descrição e o preço, mas e essa logo da fazenda?

[03:49] Não vão ser todas as fazendas que vão ter a mesma imagem. Essa imagem é exclusiva para essa fazenda. Então nós temos que passar ela aqui também. Ela não é uma string, mas ela é uma informação que viria para nós dessa forma.

[04:02] Então vamos tirar a logo fixa daqui. Dentro de "Detalhes" eu vou remover o import da logo, copiar ele e vou colocar aqui dentro da "cesta.js", que nós criamos dentro dos "mocks".

[04:18] Aí é bem simples, basta colocarmos aqui dentro como uma chave do detalhes, logoFazenda:. Eu vou passar a logo mesmo. Nós vamos salvar a "cesta.js" aqui e os detalhes agora eu vou deixar aqui ainda, porque se eu salvar agora vai dar erro, vai estar sem a logo.

[04:43] Agora, como nós fazemos para chamar isso, para começarmos a usar e colocar essa logo que está vindo da "cesta.js" e os outros textos também? Vamos vir aqui no "App.js" e aqui nós vamos importar esse "mock". Digitamos import mock from ./. O "mock" está dentro de "src/mocks/cesta".

[05:20] Eu vou passar esse mock para dentro da cesta que estamos retornando aqui dentro do SafeAreaView. Eu vou copiar o mock aqui e vou passar para dentro da Cesta.

[05:30] Como nós podemos fazer isso? Nós temos várias coisas aqui dentro dos detalhes da cesta, na verdade. Nós temos o topo, os detalhes - ou poderíamos simplesmente fazer o seguinte: cesta = {mock} que ia englobar toda nossa cesta.

[05:47] Mas tem uma forma melhor de fazermos isso, neste caso. Nós poderíamos desconstruir esse mock e passar todos os parâmetros como se fossem descritos aqui.

[06:00] Se nós colocarmos três pontos na frente do mock nós removeríamos a camada externa do objeto e passaríamos cada parâmetro como se fosse um parâmetro da cesta. Então fazer isso é a mesma coisa que eu tirar de dentro da cesta esses colchetes e enviar o topo e o detalhes manualmente.

[06:24] Então aqui na Cesta seria a mesma coisa que eu declarar que topo = {mock.topo} e que detalhes={mock.detalhes}. Os três pontos mock é igual a declararmos tudo isso na mão.

[06:52] Então para ser mais simples podemos fazer simplesmente abrir e fechar chaves aqui e colocar ...mock. Lembrando que nós sempre temos que usar as chaves se queremos fazer essa estrutura.

[07:07] Agora está dando erro aqui quando eu salvei, porque a logo não existe. De fato, nós mudamos a pasta, está totalmente diferente. O assets já está aqui na raiz. Então, vamos só colocar dentro da cesta ./assets e vamos ver se vai carregar.

[07:23] Na verdade, ele não está não. Ele está dentro agora dos mocks. Então nós voltaremos duas pastas. Vamos vir aqui - voltamos uma pasta, voltamos duas pastas e agora sim, está funcionando! Então a logo que está dentro da "cesta.js", nós precisamos voltar apenas duas pastas.

[07:45] Nós adicionamos o mock passando aqui para a Cesta. Agora, como nós fazemos para pegar isso? Lá na "cesta.js", no nosso aplicativo, no nosso componente de cesta, no "index.js" nós vamos pegar esses dados da mesma forma que já fizemos no Texto. Nós utilizamos as chaves aqui e vamos pegar o topo e a descricao.

[08:11] Lembra que nós desconstruímos, então nós já podemos pegar diretamente o que está aqui dentro - que é o topo e a descricao. Não é descricao, é detalhes. O topo e os detalhes.

[08:23] Agora nós fazemos a mesma coisa para o topo. Então nós viemos aqui e desconstruímos o Topo com três pontos dentro do Topo, nós abrimos como propriedade, {...topo}. Agora, vamos para o topo para testarmos primeiro o topo separado.

[08:46] Vamos abrir o "Topo.js" e aqui no Topo nós vamos pegar os valores que são correspondentes de dentro do topo, que é basicamente só o título. Então vamos pegar o título utilizando as chaves na declaração do Topo e vamos substituir o titulo aqui pelo titulo que está vindo pela variável.

[09:08] Então eu vou apagar esse Detalhe da Cesta. Lembrando que para exibir o texto que vem de uma variável, nós precisamos colocar as chaves titulo.

[09:18] Vou salvar e o título vai continua o mesmo. E se eu alterar o título no "cesta.js"? Vou colocar Detalhes da cesta. Pronto, já está atualizando aqui de Detalhes da cesta! Ele está pegando o que está aqui na nossa "cesta.js" dentro dos "mocks" mesmo. Está funcionando!

[09:38] O topo nós já terminamos. Agora vamos fazer a mesma coisa aqui dentro do "index" para os detalhes. Vamos vir aqui no componente de Detalhes e passar como parâmetro a desconstrução do detalhes. Agora nós conseguimos acessar cada um dos parâmetros de detalhes dentro do componente de Detalhes.

[10:04] Vamos abrir ele aqui. Eu vou salvar esse aqui. Na declaração da função Detalhes nós abrimos e fechamos chaves de novo e pegamos os parâmetros.

[10:18] O parâmetro vai ser o nome. Na imagemFazenda eu acho que eu coloquei logoFazenda, é logoFazenda, nomeFazenda, descricao e preco. Agora nós fazemos a mesma coisa aqui e substituímos os textos pelas variáveis que estão vindo por parâmetro.

[10:48] Vamos apagar aqui a Cesta de Verduras e adicionar o nome, passando ao redor de chaves. A logoFazenda nós substituímos na imagem, no source dela. Nós tiramos a logo e colocamos logoFazenda.

[11:05] O nomeFazenda nós tiramos Jenny Jack Farm e colocamos aqui nomeFazenda, a descricao também. Tiramos esse texto gigantesco da descricao e printamos a descricao. E por último, o preco. Vamos salvar e ver o que acontece.

[11:38] Está carregando aqui. Vamos testar! Vou alterar o preço para R$ 30,00, vou baixar o preço aqui... Já está funcionando!

[11:50] Agora nós podemos dar uma olhada aqui nos "Detalhes" e remover o import da logo que não estamos mais utilizando. Agora nós já reestruturamos a nossa aplicação para que os textos e a imagem também fiquem todos em um lugar só - mas vamos voltar um pouco e entender melhor o que nós fizemos.

[12:10] Nós criamos uma pasta chamada "mocks". O que é "mocks"? De onde que veio isso? Na programação, mocks são informações ou funções que podemos fazer para substituirmos as funções originais e para evitarmos sujar os dados originais, não utilizarmos os bancos de dados originais ou as APIs enquanto estamos testando a nossa aplicação.

[12:34] Ou no nosso caso, nós estamos utilizando mocks, que são dados fictícios para exibirmos na nossa aplicação. Porque nós não temos nenhum banco de dados e nós também não temos nenhuma API para fazermos requisições, uma API REST que vai nos retornar esses dados. Então, neste caso, nós estamos usando esse arquivo aqui para simbolizar essa API ou esse banco de dados nos retornando esses dados.

[13:01] Agora que já isolamos os textos dentro desse arquivo e também praticamos um pouco passar e receber parâmetros nos nossos componentes, nós estamos quase no fim da nossa refatoração. Então continue acompanhando que no próximo vídeo nós vamos terminar ela!

@@05
Para saber mais: Mocks

Os mocks na programação geralmente são utilizados em testes automatizados como forma de substituir as funções originais para que os dados reais não sejam afetados pelos testes.
No nosso caso usamos para representar os dados, pois não temos uma API ou um banco de dados para consultar. Caso queira o arquivo src/mocks/cesta.js, este é o seu conteúdo:

import logo from '../../assets/logo.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
  }
}

export default cesta;COPIAR CÓDIGO
Caso queira saber mais, temos na Alura um artigo sobre mocks.

https://www.alura.com.br/artigos/testes-com-mocks-e-stubs?_gl=1*zqglez*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwMDMxMTc0OS4xMDguMS4xNzAwMzE1NTc4LjAuMC4w*_fplc*NVBkNW5lJTJGOHFJWCUyRkolMkZPb09JTEdkY0VMZ3VFYXQ2YkhQRk1OQVJtNGd5Tzg0RFAwdVVEV3BwQ2hDUnBNZ0xwJTJGOW01SFFhRTZtdnJJd1h3RGJFcUVFd29qemRiUjlSVzREWDZiZ3BabndtYW1MT3Y2Y1MlMkI2OFpPRDBQZnUlMkZ3JTNEJTNE

@@06
AppLoading e revisão

[00:00] Agora vamos ao último ponto de melhoria desta aula! Lembra de quando nós adicionamos a fonte nós retornamos uma View enquanto a fonte estiver sendo carregada?
[00:11] Imagine agora que essa fonte demore para carregar, que o celular está um pouco lento e o usuário tem uma tela branca enquanto isso está acontecendo. Não é legal@ Além do mais, se nós quisermos carregar outras coisas aqui, algum dado do banco de dados ou uma API, também vai ficar lento e não vai ser muito legal.

[00:31] Para isso, nós precisamos dizer para o usuário que a aplicação está carregando ainda e não mostrar uma tela branca. O que poderíamos fazer? Nós poderíamos criar uma outra tela mostrando o loading, uma tela de loading, alguma coisa girando ali poderia também. Mas nós podemos utilizar algo que o Expo já está fazendo.

[00:51] Vou dar um reload aqui na aplicação. Nós temos essa tela inicial, a tela que aparece antes da tela da cesta, que é a splash screen. Ela não está declarada aqui no nosso projeto como uma tela mesmo porque ela vem do Expo. Então nós deveríamos poder mostrar ela carregando; não mostrar uma tela branca, e sim deixar ela carregando.

[01:14] Como nós podemos fazer isso? Vamos dar uma olhada na documentação da fonte. Abrindo a documentação da fonte nós já podemos ver que ele está usando um tal de AppLoading enquanto a fonte está sendo carregada. Nós estamos retornando a View. O que é esse AppLoading que ele está importando aqui e retornando?

[01:36] Vamos dar uma olhada aqui para baixo, ele fala um pouco mais dele de novo, se clicarmos no "Using <AppLoading>". Ele explica um pouco aqui o que é esse AppLoading. Eu vou clicar e abrir diretamente a página dele. O que está escrito aqui?

[01:51] Que o AppLoading fala para a splash screen para manter a splash screen visível enquanto AppLoading, o componente estiver montado. Então é isso que nós queremos mesmo.

[02:02] Nós queremos que a splash screen continue aparecendo antes de mostrar o aplicativo de fato. Então enquanto a fonte estiver carregando, o AppLoading vai fazer com que a splash screen continue mostrando.

[02:15] Agora, de onde que vem esse AppLoading? Ele já fala aqui do expo-app-loading. Então nós precisamos instalar ele. Vamos copiar o comando que está na biblioteca mesmo: expo install expo-app-loading.

[02:32] E nós viemos aqui no nosso Terminal. Eu vou cancelar a aplicação, vou apertar as teclas "Ctrl + C" para parar o servidor do React Native. Vou colar aqui o expo install expo-app-loading e apertar a tecla "Enter".

[02:44] Agora ele vai instalar essa extensão, esse pacote expo-app-loading e eu parei a aplicação para nós podermos instalar isso com ela fechada e startar, já que é um pacote externo, é legal pararmos e rodar de novo para não termos nenhum problema. Eu digito um npm start de novo para rodar a aplicação novamente.

[03:07] Vou rodar aqui o simulador. Abrindo aqui o simulador, vou até fazer um reload aqui para testar se está tudo certo. Está carregando aqui. Carregou a nossa aplicação normalmente.

[03:24] Agora, como fazemos para adicionar a fonte? Igual a como está na documentação. Nós só precisamos importar o App Loading from expo-app-loading, o pacote que acabamos de adicionar na nossa aplicação. Aí esse AppLoading nós vamos botar no lugar da View que está sendo retornada enquanto a fonte não está carregada. AppLoading aqui também.

[03:54] Vamos salvar! Não deu nenhum erro, está recarregando aqui. Tudo certo também.

[04:01] Então muitas vezes nós queremos carregar informações de outros lugares, informações externas - como dados de API REST ou informações internas mesmo, como banco de dados, um arquivo que está salvo na memória do seu celular - e esse processo pode demorar um pouco, mas é muito importante dizermos para o usuário o que está acontecendo.

[04:22] Se nós só retornarmos aqui uma tela branca, o usuário pode achar que tem algum problema com a aplicação e ele pode fechar o aplicativo e nunca mais abrir, se ele achar que o aplicativo tem um bug ali que não funciona.

[04:35] Então é legal sempre informar para o usuário que o aplicativo ainda está carregando - pode ser por meio da splash screen.

[04:42] Vamos dar uma revisada aqui em tudo que nós fizemos até esse momento nesta aula. Olhando aqui nas pastas - nesta aula não, no curso inteiro, na verdade. Nós criamos tudo isso, nós criamos o nosso projeto utilizando o Expo.

[04:58] Então todos esses arquivos foram gerados pelo Expo, nós criamos os nossos componentes aqui, o componente de tela, nós dividimos em vários componentes a nossa tela, nós utilizamos mocks, um dado falso, um dado fictício, para exibirmos todos os textos da nossa aplicação e até uma imagem.

[05:20] Exibimos imagens e textos aqui também e criamos um componente não só para organizarmos a nossa aplicação, mas para reutilizarmos a nossa aplicação, que foi o texto, utilizando fonte customizável, essa fonte Montserrat que veio do Google.

[05:36] Então na próxima aula nós vamos concluir o nosso layout adicionando a lista de itens da nossa aplicação. As verduras, a lista mesmo que vai ter aqui embaixo. Então te verei na próxima aula!

@@07
Parâmetros

Nesta aula, refatoramos nossa aplicação e, muitas vezes, utilizamos parâmetros para passar os textos para dentro de outros componentes.
Lembre-se dos conceitos utilizados na aula e assinale, entre os códigos abaixo, quais vão funcionar corretamente, exibindo o texto que foi passado. Falta de importações e exportações podem ser desconsiderados para esta atividade.

const objeto = {
  texto: "Alura"
};
<MeuComponente {...objeto} />

function MeuComponente({ texto }) {
  return <Text>{ texto }</Text>
}
 
Alternativa correta! Isso mesmo, quando desconstruímos o objeto ({...objeto}) removemos a camada exterior dele, passando o texto como parâmetro do componente, que equivale a: <MeuComponente texto={objeto.texto} />. Dessa forma, acessar o texto como parâmetro dentro do componente vai funcionar.
Alternativa correta
const texto = "Alura";
<MeuComponente texto={texto} />

function MeuComponente(texto) {
  return <Text>{ texto }</Text>
}
 
Alternativa correta
const texto = "Alura";
<MeuComponente {...texto} />

function MeuComponente({ texto }) {
  return <Text>{ texto }</Text>
}
 
Alternativa correta
<MeuComponente>Alura</MeuComponente>

function MeuComponente({ children }) {
  return <Text>{ children }</Text>
}
 
Alternativa correta! Exato! Para capturar o texto (ou mesmo outros componentes) que passamos dentro da chamada do componente, como “filhos” do componente, usamos a propriedade children (que quer dizer “filhos” em inglês).

@@08
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com a próxima aula.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@09
O que aprendemos?

Nesta aula, aprendemos:
Reutilizar componentes:
Aprendemos a criar um componente reutilizável que encapsula a lógica de trocar a fonte do texto automaticamente.
Usar parâmetros:
Aprendemos a passar e resgatar parâmetros nos componentes.
Desconstruir objetos:
Conseguimos remover a camada externa dos objetos para que possamos passar cada parâmetro do objeto como um parâmetro do componente, simplificando a declaração desses parâmetros.
Estender o tempo da splash screen:
Usando a biblioteca do Expo para chamar o AppLoading, podemos fazer a splash screen ser exibida por mais tempo enquanto as funções do nosso app são carregadas antes de exibir o conteúdo de fato.


#### 19/11/2023

@04-Botão e lista

@@01
Projeto da aula anterior

Caso queira começar daqui, você pode baixar o projeto da aula anterior nesse link.

https://github.com/alura-cursos/react-native-comecando-do-zero-/tree/aula3

@@02
Preparando o ambiente: Lista de itens

Nesta aula, iremos adicionar no nosso arquivo de mock (src/mocks/cesta.js) alguns outros textos e imagens da parte de lista de itens da nossa cesta. Caso prefira copiar o arquivo completo, será este:
import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }
}

export default cesta;


@@03
Botão de compra

[00:00] Depois de toda essa refatoração, vamos voltar aqui na parte dos detalhes da nossa aplicação e adicionar o botão que ficou faltando.
[00:09] Vamos vir aqui no nosso código no React Native, dentro da pasta "src>telas/Cesta>componentes/Detalhes", que é onde nós armazenamos essa parte das informações anteriormente e vamos adicionar aqui nos imports do react - native, depois da View, o Button - que é “botão” em inglês.

[00: 36] O React Native já tem um botão.Então vamos copiar aqui e colar ele, chamar ele aqui embaixo, depois dos textos, dentro ainda do fragmento.Então vamos chamar aqui o Button.Nós temos que passar um title aqui.O title vai ser o "Comprar" e nós fechamos aqui o nosso componente internamente, porque o title já vai ser o título aqui.

[01: 10] Nós adicionamos aqui o botão.Está faltando um negócio aqui, porque o comprar está como uma string solta, não é para isso acontecer, nós falamos nas últimas aulas para adicionarmos como uma string, porque se eu quiser traduzir isso, seria muito mais legal que esse texto estivesse em um único lugar.

[01: 29] Então vamos vir aqui nos nossos "mocks" - "src>mocks" e vamos entrar dentro da "Cesta.js" e adicionar aqui nos detalhes o botao.O botao vai ser uma string chamada "Comprar".

[01: 46] Vamos salvar aqui.Agora basta pegarmos aqui o "Comprar" depois do preco.Dentro de "Detalhes.js", onde nós pegamos os parâmetros, nós adicionamos aqui o comprar também.Não é comprar, é o botao que tem o comprar dentro.

[02: 12] Aí quando nós usamos o title nós aplicamos, ao invés do "Comprar" o { botao } entre chaves, ao invés de ser entre aspas, porque não estamos mais usando uma string, nós estamos chamando a referência de uma variável.

[02: 28] Vamos salvar aqui e tudo vai continuar funcionando porque agora ele está pegando aqui do botão Comprar.Vou adicionar mais um R e ele já vai atualizar.Então já está atualizando com base nos nossos "mocks".

[02: 43] Vou fechar o "mocks" aqui.Se você está no iOS, você pode ter percebido que esse botão está totalmente diferente.Ele é um link, parece que não tem essa borda, ele é só um botão, provavelmente azul.Isso acontece por quê ? Vamos dar uma olhada na documentação do botão no React Native.

[03:02] Nós podemos vir aqui no site do reactnative.dev que tem uma busca aqui, vou apertar as teclas "Ctrl +K" e vou colar aqui button para nós entrarmos na página do button, que é / docs / button.Vamos dar uma olhada aqui no button.

[03: 19] Nós já temos o código aqui e podemos ver um exemplo no iOS também, caso você não esteja no iOS.Deixe - me só diminuir um pouco aqui para poder aparecer e nós podemos dar um play para vermos como funciona no iOS.

[03: 37] Pode demorar um pouco, dependendo da quantidade de usuários que estão utilizando essa feature, mas aparentemente aqui vai ser rápido.No iOS ele tem esse link mesmo, um botão com o link.

[03: 47] Repare que nós não temos nenhuma outra estilização, um exemplo de alguma coisa muito mais complexa que isso.Isso porque aqui nas propriedades nós já podemos ver que a única coisa que podemos mudar é a cor.Por quê ?

  [04:02] Se nós subirmos no topo da página de documentação do botão, nós já podemos ver que ele é um botão básico, um componente básico que renderiza em qualquer plataforma - porém ele renderiza com o estilo do iOS ou com o estilo do Android, no Material Design ou no formato do iOS mesmo, onde os usuários já estão mais acostumados a ver esse tipo de botão.

[04: 28] Ele suporta um nível mínimo de customização.Então pode ser que esse nível mínimo, só essa cor, não seja suficiente para nós - que é o nosso caso aqui.

[04: 40] Pode ver que está faltando aqui botar uma margem, esse Comprar não deveria ser todo maiúsculo, nós queríamos mudar a cor, queríamos mudar o arredondamento.Tem várias coisas que nós poderíamos querer mudar nesse botão, que o botão simples não nos dá.

[04: 56] Mas aqui nós já temos uma explicação.No segundo parágrafo da documentação, se nós quisermos um botão que seja mais estilizável, nós podemos utilizar o TouchableOpacity ou o TouchableWithoutFeedback.Então vamos usar esse TouchablaOpacity.

[05: 14] Vamos ir na nossa aplicação.Dentro de Detalhes.js, onde nós estávamos importando antes botão, vamos importar TouchableOpacity e também, ao invés de usarmos o botão, vamos usar o TouchableOpacity tirando o title, porque ele não vai ter o title, ele vai ter um valor dentro aqui.

[05: 37] Então nós colocamos o texto do botão.Nós abrimos e fechamos a tag e colocamos o texto do botão aqui dentro entre chaves, para printar a variável.

[05: 49] Mas lembra que o texto precisa sempre estar dentro do Text ? Então, vamos usar o nosso componente de Texto, que tem um Text lá dentro e nós já fizemos ali para automaticamente utilizarmos a fonte que adicionamos à fonte customizada.

[06:04] Então estamos adicionando o Texto aqui e colocando o botão dentro.Vamos salvar e ver o que acontece aqui no nosso simulador.Nós temos só o texto.Um texto pequeno aqui, Comprar.

[06: 27] E se nós clicamos nele, ele dá uma apagada - é a opacidade de quando nós clicamos, ele faz essa opacidade.Agora basta nós estilizarmos do jeito que quisermos.O TouchableOpacity aceita o style e o Texto também aceita o Style.Nós podemos estilizar do jeito que quisermos.

[06: 46] Vamos fazer isso, então! Vamos vir aqui embaixo e criar dentro dos nossos objetos de estilo dois objetos: vai ser o botao.Nós podemos deixar ele vazio por enquanto e o textoBotao.

[07:02] Também abrimos e fechamos as chaves aqui para criarmos o botão e o textoBotao com objetos vazios.Agora nós só precisamos linkar eles aqui em cima com a tag Style, com o parâmetro Style, na verdade.

[07: 16] Então dentro da tag TouchableOpacity nós vamos adicionar a propriedade style = estilos.botao.Aí nós viemos aqui no Texto, que está dentro do TouchableOpacity e fazemos a mesma coisa: style = estilos, só que desta vez é o textoBotao, não é o botao em si.

[07: 42] Salvamos aqui e não vai acontecer nada, porque nós ainda não adicionamos nenhum estilo dentro desses nomes que criamos.

[07: 48] Vamos vir aqui no botao, no estilo do botao e vamos começar a estilizar ele.Começando pela marginTop porque ele está bem grudado no texto.

[07: 57] Vamos colocar aqui uma marginTop: 16 e aí nós podemos também colocar um backgroundColor para vermos onde que ele está dentro, qual espaço ele está ocupando na nossa aplicação.

[08: 14] Vamos colocar aqui um backgroundColor, que é a cor do fundo do botão como uma cor aqui que separamos, que é #, uma cor em hexadecimal, 2A9F85.Pronto, nós temos aqui o verde que está ocupando esse espaço todo aqui na tela, a largura por completo, e nós adicionamos a margem!

[08: 40]Agora, seria legal nós adicionarmos um padding interno, se deixássemos que o texto tenha mais espaço dentro do botão.Então nós podemos fazer um paddingVertical.

[08: 53] O paddingVertical vai dar um padding, uma margem interna em cima e embaixo do botão.O paddingVertical pode ser também de 16. Salvamos aqui e temos um espaço em cima e embaixo, dentro do botão.

[09:07] Agora vamos arredondar as bordas também, o botão que temos no nosso design tem uma borda arredondada.Para arredondar a borda é muito simples, é só aplicar um borderRadius.Nós podemos aplicar o borderRadius com o valor 6 e nós já temos uma borda arredondada bem parecida com o nosso layout.

[09: 33] Agora vamos começar a estilizar o texto que está dentro do botão.O que nós queremos ? Nós queremos que o texto venha para o centro primeiro, queremos pintar ele de branco e que ele fique em negrito e um pouco maior também.

[09: 47] Então vamos fazer isso! Digitamos textAlign: "center" para nós colocarmos o texto no centro da tela.Aí nós podemos colocar uma color de branco.O hexadecimal de branco é #ffffff.Poderia ser só três F também, não tem problema, esse é o completo.

[10:09] Aí nós também vamos aplicar uma fontSize para aumentarmos o tamanho da fonte.O fontSize pode ser 16. É legal que quando alteramos o fontSize, nós alterarmos o lineHeight também, para sabermos corretamente o quanto que a fonte está ocupando dentro do nosso layout.

[10: 30] Então vamos setar aqui 26. Salvamos! Agora nós já temos aqui o texto um pouco maior, falta só setarmos a fontWeight, colocarmos ele em negrito: fontWeight: "bold".Aí, como nós estamos usando o Text, nós vamos capturar essa propriedade lá dentro, como fizemos na última aula.

[10: 56] Agora nós temos o nosso botão aqui correto e pronto para ser utilizado.Nós já adicionamos, vamos ver aqui nos "Detalhes".Nós já chamamos ele lá de dentro dos "mocks", o texto do botão já está sendo adicionado de dentro dos "mocks".

[11: 13] Vamos dar uma olhada aqui na documentação novamente.Nós temos o TouchableOpacity e o TouchableWithoutFeedback.Qual a diferença entre eles ? O que quer dizer isso ?

  [11: 24] É só traduzirmos do inglês mesmo.O TouchableOpacity vai fazer uma opacidade, um feedback de opacidade, um retorno para o usuário.Quando ele clicar, o botão vai ficar um pouco apagado.Então vamos testar na nossa aplicação aqui! O botão dá uma apagada, então dá para vermos que nós estamos clicando no botão.

[11: 43] O TouchableWithoutFeedback faria com que nada acontecesse.Quando nós clicássemos, nada iria acontecer.Porém, o parâmetro onPress que nós não adicionamos aqui, mas que podemos adicionar o onPress, ele seria executado.

[12: 59] E aqui dentro, nós poderíamos colocar uma função do que nós queremos que execute.No nosso caso, nós não temos nada para executarmos, por enquanto.Nós até podemos deixar dessa forma, mas cada vez que nós clicamos aqui, a aplicação está chamando essa função que está aqui dentro.

[12: 15] Então na próxima aula nós vamos continuar a nossa aplicação, começando a criar a nossa lista de itens da nossa cesta.Te verei na próxima aula!

@@04
Reaproveitando o botão

Neste último vídeo, adicionamos o botão nos detalhes da nossa aplicação. E se quiséssemos adicioná-lo em outro lugar também?
Teríamos de copiar a estrutura e os estilos, replicando tudo, além de que, se quiséssemos alterar algo em todos os botões, teríamos que passar um a um. Mas isso daria muito trabalho, certo?

Uma forma de facilitar a nossa vida é reaproveitar o botão de compra que já vimos, criando um “molde” de botão para reutilizar quantas vezes você precisar no projeto. E a gente reaproveita o botão de compra, que já fizemos, isolando o botão. E como fazer isso? É o que vamos praticar!

A proposta deste desafio é que você isole o botão em um componente dentro da pasta src/componentes, e, assim, esse botão poderá ser reutilizado, seguindo os conceitos que utilizamos na “Aula 3 - Refatorando”.

Há inúmeras formas corretas de fazer o isolamento do botão. Você pode passar só o texto, como o componente Button recebe o title, ou você pode passar o children para permitir uma customização maior, assim como o touchable opacity recebe.
Neste desafio, o importante é que você consiga atingir os pontos e objetivos a seguir:

Os estilos do botão e do texto do botão foram movidos para dentro do novo componente;
O estilo de marginTop do botão foi mantido em detalhes, pois nem todos os botões irão precisar da mesma margem;
A propriedade style foi passada para o componente e aplicada junto com os estilos do botão no TouchableOpacity para permitir passar estilos de fora do novo componente;
O onPress também deve ser passado para o componente, para que possamos dizer o que acontece ao apertar o botão;
O texto do botão deve ser passado de fora do botão, seja por propriedades ou passando como filho (children).
O commit de um exemplo do resultado, você pode acessar nesse link.

A ideia desta atividade é que você possa se desafiar e construir seu conhecimento e aprendizado de forma prática! Seria muito legal se você compartilhar sua resposta a esse desafio no fórum da Alura!

https://github.com/alura-cursos/react-native-comecando-do-zero/commit/0971e37ef3cca64123b0d926afcda2b02bce0b1f

@@05
Componente de lista

[00:00] E agora neste vídeo nós vamos criar o componente para armazenarmos os itens da nossa cesta. Então vai ter um título, Itens da cesta, e vai ter os itens aqui listados com uma imagem do lado. Então: o tomate, brócolis, batata, pepino e abóbora.
[00:15] Vamos para o nosso projeto para criar o nosso componente dentro de "src>telas>Cesta>componentes". Vamos criar o componente de "Itens.js". Aí nós fazemos a mesma coisa que nós fizemos em todos os componentes.

[00:32] import React from 'react' para que possamos utilizar as tags e export default function Itens, para criarmos o nosso componente em forma de função. Aí nós retornamos o que queremos retornar dentro do nosso componente.

[00:51] Então vamos começar aqui com o fragmento, que vai ter várias coisas dentro do nosso componente. Aí nós podemos colocar aqui primeiro o texto, o título.

[01:02] Vamos adicionar o texto de título. Para isso, nós precisamos importar o Texto - import Texto, aqui em cima, no começo do arquivo; from o nosso componente de texto com a fonte customizada que nós criamos. Então nós voltamos três pastas: ../../../componentes/Texto.

[01:21] Agora nós usamos aqui dentro do fragmento do return da função o Texto e nós escrevemos alguma coisa aqui dentro, que é o Itens da cesta. É o título. Esse é o texto de título.

[01:36] Vamos salvar. Nada aconteceu porque não estamos chamando esse "Itens" no "index". Então temos que vir aqui no "index" da cesta e, logo abaixo dos Detalhes, dentro da View de cesta ainda, porque a lista também tem aquela margem, dentro da View de cesta nós chamamos os Itens.

[01:56] E aí já podemos reparar aqui que nós vamos precisar adicionar as strings dos itens lá dentro do nosso arquivo de "mocks" porque aqui ele está passando todos os outros.

[02:06] Nós também precisamos importar os itens. Então aqui em cima no "Index.js", vamos importar Itens from './componentes/Itens'. Nós importamos o nosso componente que vai ter a lista de itens.

[02:24] Vamos salvar. Nós já temos aqui o Itens da cesta, ele já está sendo exibido. Vamos, então, para os nossos "mocks" para adicionarmos as strings certas, os textos certos.

[02:35] Dentro de "src>mocks>Cesta.js" vamos começar a adicionar aqui uma nova propriedade dentro do objeto de cesta que vai ser irmã do topo e do detalhes, que vai se chamar itens:. Vai ser um objeto que vai ter o titulo, que é o texto que nós colocamos ali, Itens da cesta.

[03:02] E aí nós vamos ter os itens mesmo. Vou colocar aqui lista. Essa lista de itens vai ser uma lista, então nós temos que utilizar os colchetes neste caso e aí nós podemos utilizar as chaves para determinarmos cada item da nossa lista. Cada item da nossa lista vai ter duas coisas: o nome dele, que seja tomate, pepino; e vai ter a imagem também.

[03:24] Então eu vou adicionar o nome aqui. O primeiro pode ser o Tomate. Aí nós precisamos colocar a imagem dele também, porque essa imagem pode mudar de acordo com as nossas variáveis. Cada fruta aqui vai ter uma imagem diferente.

[03:44] Então vamos importar ela aqui, da mesma forma que importamos a logo. No topo do nosso "mock" nós vamos digitar import tomate from. Nós voltamos uma pasta, voltamos duas pastas e dentro de "assets" nós vamos ter as frutas/tomate.png, que é uma imagem.

[04:14] Nós copiamos aqui o tomate e colocamos dentro do nosso objeto da lista. Então vai ser o nome: "Tomate" e imagem: tomate. Vamos salvar aqui. Ainda não está acontecendo nada porque não estamos usando, mas não deu nenhum erro.

[04:33] Então vamos continuar com nossa lista aqui! Eu vou copiar vários aqui para irmos alterando só. O segundo item da lista vai ter o nome de Brócolis e a imagem vai ser a imagem do brócolis.

[04:50] Então nós temos que copiar o import também. O brocolis e nós temos que colocar o nome da imagem no import certo, como Brócolis - com acento também, porque o arquivo tem acento. Então, nós colocamos a imagem do Brócolis como brocolis.

[05:11] O terceiro item vai ser a batata. Adicionamos o import da imagem da batata também: batata from ../../assets/frutas/Batata. Aí nós colocamos a imagem da Batata como o import da batata.

[05:34] Falta o pepino. import do pepino também. Aqui em cima, então: import pepino from, lá na pasta de "assets", Pepino, com P maiúsculo, igual como está lá dentro da pasta. Utilizamos a imagem aqui.

[05:56] Por último, vamos criar aqui o nome Abóbora. Tem que ser entre aspas aqui e a imagem vai ser a imagem da abobora que vamos adicionar lá em cima. Importamos: import abobora from. Voltamos duas pastas, entramos dentro da pasta de "assets", dentro das frutas/Abóbora.png, com acento.

[06:35] Vamos salvar. Nada aconteceu ainda porque ainda não estamos usando nenhuma dessas coisas. Então, a primeira coisa que vamos fazer é usar o titulo.

[06:45] Vamos voltar para o "index" da nossa Cesta e começar a passar os nossos itens. Então aqui onde nós declaramos a função da Cesta, nós estamos pegando topo, detalhes e vamos pegar também os itens.

[07:00] Aí, quando nós chamamos o nosso componente de itens, nós vamos desconstruir os itens, então, adicionando três pontos itens para passarmoa aqui separadamente o título e a lista. Aí nós podemos salvar e pegar o título e a lista de dentro do nosso componente de itens, da mesma forma que fizemos no "index".

[07:25] Então: titulo, lista como parâmetros aqui dentro do objeto, da função de Itens. Copiamos aqui o título e vamos substituir pelo Texto que está fixo. Dentro do Texto, nós estamos ali Itens da cesta. Vamos apagar e adicionar o título entre chaves aqui para que o texto seja printado na tela.

[07:49] Salvamos e vemos que está funcionando. Isso quer dizer que está tudo certo. Se nós alterarmos agora lá no nosso "mock" do título da nossa cesta, dos nossos itens. Vamos salvar. Ele está alterando, então ele está pegando certo os valores.

[08:06] Agora podemos fechar aqui o "index" e também podemos fechar o "mock". Vamos começar a exibir os nossos itens da nossa lista de itens. Então, como que nós podemos fazer isso?

[08:19] A nossa lista de itens é uma lista. Se você vem do JavaScript, você pode pensar que nós podemos utilizar um map para exibirmos essa lista. Então nós fazemos o seguinte: nós abrimos e fechamos chaves, chamamos a lista.map.

[08:41] O método map de dentro dos arrays no JavaScript faz o quê? Ele percorre cada elemento da lista e nós podemos alterar ele para fazermos alguma coisa e retornarmos uma nova lista.

[08:54] Então, o que nós podemos fazer aqui? Para que nós vamos alterar isso? Nós vamos alterar para exibir o componente que nós queremos que ele exiba. Então, aqui dentro do map, nós utilizamos uma função e aqui nós podemos chamar o nosso Texto de novo. Essa função vai receber os elementos da lista.

[09:13] Então aqui dentro da lista nós vamos ter o nome, imagem da nossa fruta, da nossa verdura. Então, se nós printarmos o nome aqui, teoricamente ele teria que listar todos os nomes. Vamos salvar e ver o que acontece.

[09:29] É claro que não está aparecendo nada, porque nós estamos chamando uma função, mas nós não estamos retornando esse texto. Então temos que dar um return aqui. Retornando ele, nós temos aqui os nossos itens da nossa lista: o tomate e o brócolis. Está dando um erro aqui, um warning na verdade.

[09:48] Ele fala aqui que todo filho de uma lista tem que ter a key, a propriedade key única. Então, é isso que nós vamos fazer! Aqui dentro do Texto, nós podemos adicionar a key =, pode ser o nome porque cada fruta tem um nome diferente aqui, então ela não vai se repetir, nesse caso.

[10:07] Pronto, agora nós já resolvemos esse problema da key e nós estamos exibindo aqui os nomes das frutas! Nós também gostaríamos de exibir a imagem. Então aqui, ao invés de retornar um Texto, eu vou retornar uma View que vai ter esse Texto dentro, o Texto do nome, mas também a imagem.

[10:30] Vamos mudar essa key de dentro do Texto para a View, porque o filho agora vai ser a View e não mais o Texto.

[10:38] E agora nós adicionamos também o parâmetro, o componente imagem que vem do react-native. Então nós temos que importar a Image usando as chaves from react-native.

[10:39] Agora nós utilizamos o componente Image aqui embaixo do Texto. Digitamos Image e podemos chamar o source e dentro do source nós passamos a imagem que nós acabamos de buscar aqui da lista pelo map.

[11:18] Esquecemos de importar a View também. Nós precisamos importar a View de react-native e a imagem. Agora nós temos aqui o tomate e cadê o resto das coisas?

[11:29] Não está dando para ver. Isso é porque o React Native não faz o scroll automático. Ele não nos deixa rolar a página para baixo, a tela para baixo, automaticamente. Nós precisamos fazer isso manualmente.

[11:42] Como fazemos isso, então? Vamos voltar aqui dentro da "Cesta", no "index.js", o "index" da "Cesta", onde vai ter todos os nossos conteúdos. Aqui, ao invés de nós utilizarmos esse fragmento que estamos utilizando para botar o topo e a View, nós vamos utilizar uma ScrollView.

[12:00] Então nós precisamos importar ela aqui no react-native, ScrollView e nós utilizamos ela aqui no lugar do fragmento. Então tudo vai estar dentro dessa ScrollView. Vamos colocar aqui também no fechamento. Vamos salvar e ver o que acontece.

[12:19] Agora não mudou nada, mas nós podemos fazer o scroll. Então com o ScrollView nós podemos permitir fazer o scroll da nossa aplicação.

[12:31] Vamos continuar aqui editando os nossos itens. Vamos estilizar eles, estilizar a nossa lista agora. Então, vamos começar aqui pelo Texto. Primeiro, nós temos que criar uma constante no final do nosso arquivo de "Itens", no nosso arquivo do componente de "Itens", nós criamos uma constante chamada estilos que vai ser igual à StyleSheet, que nós precisamos importar aqui do react-native.

[13:07] StyleSheet.create, da mesma forma que fizemos os estilos em todos os outros componentes. Aí podemos colocar aqui o estilo chamado titulo. E esse estilo chamado titulo vai ter o quê?

[13:22] Aí nós podemos mudar a cor do titulo - color, vamos colocar um cinza um pouco mais claro. Então essa cor é #464646. Nós também queremos que ele fique em negrito, então: fontWeight: "bold".

[13:45] Também seria legal que ele tivesse uma marginTop de 32 para dar um espaço maior, um espaçamento maior antes do botão e não está acontecendo nada porque nós precisamos aplicar esse titulo dentro do Texto do titulo.

[14:01] Então, vamos fazer isso já! Adicionando ele style={estilos.titulo} para nós já conseguirmos ver as coisas alterando. Já temos a margem, a cor e ele já está em negrito.

[14:14] Nós precisamos botar uma margem para baixo, então marginBottom. Mas porque nós não usamos vertical? Porque a margem de baixo vai ser diferente da margem de cima. A margem de baixo nós vamos colocar só 8.

[14:29] Aí nós colocamos aqui a fontSize: pode ser 20 e o lineHeight pode ser 32. Pronto, nós temos aqui os itens da lista já mais parecidos com o que temos no nosso layout! Vamos continuar editando o nosso elemento de item aqui, que é essa nossa View aqui.

[15:00] Então nós podemos chamar ela de item mesmo. Nós criamos aqui um novo estilo chamado item, pode ser um objeto vazio por enquanto. Vamos aplicar o style aqui na nossa View dentro do map, style={estilos.item}.

[15:21] Agora nós temos que fazer com que a imagem fique do lado do texto. Primeiro, vamos reordenar aqui porque colocamos a imagem como segundo. Vamos colocar a imagem antes do Texto. Então, dentro da View vem primeiro a imagem e depois o Texto e aí nós pegamos e fazemos os estilos do item.

[15:43] Podemos colocar aqui o flexDirection mudando de coluna, que está um abaixo do outro, para row para que fique um do lado do outro. Fazendo isso, nós temos a imagem e do lado o texto.

[15:57] O que mais nós podemos fazer? Definir que os elementos vão estar aqui, primeiro com uma borderBottomWidth para definirmos a largura da borda. Nós podemos ver que temos um divisor entre os elementos. Tem essa linha que é uma borda, nada mais que uma borda mesmo.

[16:27] Nós precisamos definir cada elemento da borda. Então primeiro, nós definimos Width dela a largura dela, que vai ser 1. Nós definimos a cor, borderBottomColor, e a cor vai ser #ECECEC.

[16:53] Vamos salvar e ver como está ficando. Ali já tem uma borda e aí nós queremos também um paddingVertical dentro do nosso item, paddingVertical: vai ser 16 para dar um espaçamento legal.

[17:07] E aí nós queremos que o Brócolis fique no centro, alinhado com a imagem que ainda vamos ajustar. Nós podemos fazer com que o Brócolis fique no centro, setando alignItems como center. Vamos salvar. Pronto, agora todos os nomes estão centralizados aqui no eixo vertical!

[17:31] Agora começar a estilizar essa imagem! Primeiro, vamos vir aqui na imagem, na tag de Image e vamos adicionar o style nela para já vermos o que está acontecendo - estilos. imagem, pode ser, estilos.imagem e criamos esse nosso estilo de imagem aqui embaixo dentro dos nossos estilos.

[17:58] Basicamente, nós só precisamos definir o tamanho dela, que vai ser 46 por 46. Então, width (a largura) vai ser 46 e o height (a altura), vai ser 46. Vamos salvar e pronto, já temos a imagem menor.

[18:18] Agora vamos partir para estilizar o Texto aqui. Então eu vou colocar aqui o style dentro do Texto que nós temos do nome: style=estilos.nome.

[18:33] Agora nós viemos aqui nos estilos novamente e criamos esse estilo nome como um objeto. O que vamos ter dentro do estilo nome? Vamos aumentar um pouco a fonte primeiro.

[18:44] Então, fontSize: vai ser 16. Nós alteramos o fontSize, vamos alterar o lineHeighttambém. O lineHeight vai ser 26. Salvamos aqui e já aumentou a fonte do nosso nome.

[19:02] Vamos colocar uma marginLeft também, porque está grudado aqui na imagem, então: marginLeft:, pode ser 11. Aí nós também precisamos mudar a cor, para que ela fique naquele tom de cinza. Digitamos color, que vai ser "#e a cor vai ser 464646.

[19:26] Salvamos e ela já está no tom de cinza. Pronto, nós terminamos a nossa lista de itens! Nós fizemos esse scroll na tela, mas porque colocamos o scroll lá no "index" se nós queríamos que desse scroll só a lista de itens, por exemplo?

[19:48] Por que nós colocamos ele aqui dentro da cesta, ao invés de colocarmos na lista de itens? Porque se nós colocássemos dentro da lista de itens, somente essa parte de baixo ia fazer o scroll.

[19:59] Aí, aqui nesse telefone, que teoricamente é grande, já ia ter bem pouco espaço para scrollar. Então só essa área aqui ia scrollar. Imagine um celular pequeno, não ia nem aparecer! É legal ter o scroll aqui ao redor de tudo e é importante pensarmos sempre nisso.

[20:18] Mesmo que sua aplicação tenha uma tela que no seu celular nem esteja chegando perto do fim. Você pode pensar, o que vai acontecer se a pessoa rodar em um celular menor, com uma tela menor?

[20:31] Então é importante que você sempre coloque o ScrollView, se você ficou na dúvida, se você acha que pode dar algum problema. Então, fica aí a dica de colocar a ScrollView.

[20:43] Nós terminamos a nossa lista de itens utilizando o map, mas o map não é a melhor forma de fazermos uma lista no react-native. Então na próxima aula, no próximo vídeo, nós vamos utilizar o componente do próprio React Native que é mais otimizada para exibir as listas. Te verei na próxima aula!

@@06
FlatList

[00:00] Agora nós já estilizamos aqui e criamos a nossa lista, mas nós estamos utilizando o map e essa forma não é a mais otimizada para exibirmos listas. Isso porque o map simplesmente está replicando o mesmo componente para baixo. É como se nós estivéssemos copiando e colando componentes lá no fundo para o React Native é como se estivesse fazendo isso.
[00:21] Mas imagine agora se nós tivéssemos uma lista muito grande que veio de uma API, de um banco de dados. Agora nós estamos utilizando o "mock", mas futuramente nós não sabemos o que pode acontecer. Então, pode ser que venha uma lista grande.

[00:35] Imagine o celular que já está processando alguma outra coisa em background e ele não é tão potente assim, tão atual e ele tem que carregar todos esses itens, texto e imagem na tela tudo de uma vez.

[00:48] O celular vai travar com certeza! Então, para isso, para otimizarmos a nossa lista, existe um componente do próprio React Native que faz essa otimização, que é o FlarList.

[00:59] Vamos dar uma olhada aqui na documentação do FlatList, então eu vou abrir aqui o reactnative.dev, o site deles, e digitar FlatList. A FlatList aqui. Então, basicamente, vou rolar aqui para o exemplo, o que podemos fazer.

[01:18] Nós utilizamos ela passando data, que vai ser o nosso array de itens. Nós já temos esse array salvo, nós vamos passar o que está dentro do map, dentro do renderItem para renderizar cada item, cada elemento da nossa lista e o keyExtractor já vai adicionar as keys que nós podemos definir qual o campo da key que nós queremos.

[01:41] Vamos voltar aqui no nosso código. Vou minimizar o navegador, dentro de "src>telas>Cesta>componentes>Itens" e vamos importar a FlatList. Eu vou adicionar ela aqui em cima e deixar o map ali embaixo por enquanto. Nós adicionamos ela em cima do map, embaixo do Texto.

[02:10] Então: FlatList e nós vamos ter que passar o data, que vai ser o quê? A nossa lista. Nós temos que passar também o renderItem, que vai ser o quê? Nós não temos ainda. Seria lega nós termos um método que renderize essa coisa para dentro do nosso map.

[02:35] Então antes de retornarmos alguma coisa, nós vamos criar aqui uma constante que vai ser o renderItem. Ele é uma função que retorna isso tudo. Nós vamos sempre utilizar as chaves para que ele já retorne de vez e não precise utilizar a palavra return para retornar.

[03:04] Então, o que é isso? É uma função que retorna outra coisa. É um componente. O renderItem também é um componente. Vamos utilizar aqui o renderItem e nós vamos precisar também definir aqui os parâmetros que vão ser o nome e a imagem.

[03:23] Para nós pegarmos isso, o renderItem quando nós chamamos do FlatList vai ter um elemento dentro chamado item. Então nós precisamos pegar primeiro o item, como nós podemos ver aqui na documentação. Vamos dar uma olhada aqui.

[03:39] Primeiro, nós pegamos o item e depois o .title. Então temos sempre que chamar o item primeiro e depois para chamarmos o title é só botarmos :title.

[03:53] Na verdade, nós temos que chamar como um objeto dois pontos, abre e fecha chaves com o title dentro e a imagem dentro também. Na verdade, aqui, ao invés de title é nome. O title era no exemplo da documentação. É isso! Nós temos a imagem e o nome da nossa fruta, da nossa verdura.

[04:14] Agora vamos continuar aqui na FlatList. Nós setamos aqui a data como sendo a lista, o renderItem como sendo o renderItem, a função. Falta o quê? Falta o keyExtractor, que vai ser igual a uma função também aqui, onde nós vamos extrair.

[04:36] Qual que é a key? A key é o nome, o parâmetro da função vai ser cada elemento da nossa lista. Então cada elemento da nossa lista tem um nome, basta retornarmos o nome e fecharmos o objeto aqui que não estamos fechando. Ele não abre e fecha, nós podemos fechar ele nele mesmo.

[04:58] Vamos salvar aqui e ver o que acontece. Quando nós carregamos a aplicação, nós vemos que funciona aqui. Nós temos duas listas, mas nós temos um erro aqui, um warning, na verdade.

[05:14] Então se você estiver rodando em uma versão mais recente do React Native, você vai receber o seu warning aqui. Virtualized list should never be inside plain ScrollViews. O que quer dizer? Que listas virtualizadas não devem estar dentro de ScrollViews.

[05:31] Isso acontece. Esse warning acontece porque nós estamos exibindo a FlatList, que só vai carregar os itens que estiverem na tela e nós também criamos aqui a ScrollView, que faz com que nós passamos fazer o scroll.

[05:50] Só que todos os itens do scroll são carregados, porque eles teoricamente estão ali na tela. Então, o que nós temos que fazer? Nós temos que transferir essa lista para fora do Itens.

[06:07] Se dermos uma olhada aqui na documentação do FlatList mesmo, nós podemos utilizar o ListHeaderComponent e o ListFooterComponent para adicionar coisas antes e depois da nossa lista.

[06:22] Então nós precisamos adicionar tudo que vem antes no ListHeaderComponent e tudo que vem depois no ListFooterComponent. Como nós não temos nada depois, é só o Header mesmo. Então vamos fazer isso!

[06:32] Primeiro, nós transferimos. Vamos apagar aqui o map de dentro dos itens, nós já apagamos ele e aqui nós vamos ter só a lista normal. Não vai ter duas listas, vai ter só a FlatList mesmo. Vamos copiar essa FlatList aqui e passar ela para dentro da Cesta. Então vamos colocar ela como primeiro elemento aqui, dentro do "index.js" da "Cesta".

[07:07] Eu vou tirar o ScrollView para que ele fique só um fragmento mesmo e aí nós vamos primeiro mudar aqui a lista que vai estar dentro dos itens. Então, itens.lista e aí vamos passar o renderItem. O renderItem vai ser lá dentro do Itens e ele pode ser o próprio item. Nós podemos renomear ele aqui.

[07:37] Então, ao invés de nós importarmos no "index" da "Cesta" o itens, nós vamos importar o item e vamos renomear ele aqui. Vai dar um erro porque estamos mexendo nele, vai renomear ele para "Item" e aqui no "Item" nós vamos retornar apenas esse renderItem que nós utilizamos anteriormente.

[08:02] Então nós copiamos os parâmetros aqui. Vai ter o item, o nome e a imagem, e nós copiamos eles para retornarmos return apenas à View. A key não precisamos mais, porque nós já estamos utilizando o keyExtractor e o return de baixo também podemos apagar.

[08:25] Os estilos nós deixamos aqui, tirando o titulo que nós temos que passar para o outro arquivo. Então, vamos lá! O que nós fizemos aqui? Nós renomeamos o nosso arquivo de "Itens" para "Item", nós alteramos o nome da função de itens para item, nós alteramos os parâmetros da função para que eles fossem os mesmos parâmetros do renderItem.

[08:48] Então vai ser item: {nome, imagem}. Nós colocamos o return como o return exatamente igual do renderItem. Aí nós deixamos os estilos aqui, só pegando o titulo. Então eu vou apertar as teclas "Ctrl + X" no título dentro do "Item.js" e vou colar aqui no nosso estilos do "index" da nossa "cesta".

[09:18] Nós ainda estamos recebendo o erro aqui, porque não importamos a FlatList dentro da Cesta, então vamos importar a FlatList e remover o scroll, o ScrollView. Aí nós precisamos utilizar qual é o renderItem. Então o renderItem vai ser o Item mesmo, o componente que acabamos de criar.

[09:42] Ele não consegue achar a variável Itens, porque essa variável que estávamos usando antes. Então eu vou apagar ela aqui para nós testarmos. Nós temos aqui a lista em cima que não está fazendo muito sentido, porque ela está sendo listada por primeiro. Nós temos o topo e depois os detalhes que não estão dando para scrollar ainda.

[10:02] Vamos ajustar primeiro colocando o Header aqui em cima. Então nós utilizamos o ListHeader, dentro da FlatList, ListHeaderComponent; e o LisHeaderComponent vai ser igual a um componente. Então nós podemos chamar uma função aqui mesmo. Essa função vai ter o quê?

[10:25] Vamos utilizar um fragmento aqui para retornar várias coisas. Então nós vamos retornar primeiro o Topo e mover aqui o Topo para dentro desse fragmento.

[10:36] Lembrando de retornar ele também, senão não vai funcionar. Aí nós vamos copiar aqui também. Movemos tudo que está dentro da View da Cesta e os Detalhes aqui para dentro também.

[10:49] Vamos salvar! Nós já temos as coisas mais organizadas e pronto, agora o scroll já está funcionando. Uma coisa importante para lembrarmos também é de declarar aqui, a nossa tela não vai passar para baixo.

[11:05] Então nós precisamos vir aqui em "App.js" e a nossa View da nossa tela é a SafeAreaView. Nós precisamos vir aqui na SafeAreaView do "App.js", que está na raiz do projeto, e definir o style. Aqui pode ser inline mesmo. Nós definimos aqui flex: 1.

[11:23] O que isso quer dizer? Quer dizer que o tamanho do flex vai ser sempre o tamanho da tela inteira. Agora nós já definimos aqui para que ele carregue só o que está visível na tela e a nossa tela vai ser somente do tamanho da nossa tela mesmo. A nossa View vai ser do tamanho da nossa tela.

[11:47] Agora falta adicionarmos a margem. Nós adicionamos essa margem dentro dos estilos, nós precisamos adicionar essa margem dentro de cada um dos elementos aqui. Senão eles vão ficar colados ao redor dos nossos itens da lista.

[12:05] Então nós podemos copiar esse paddingHorizontal dentro do "Item.js", nos nossos elementos da lista. Nós vamos aplicar no item um paddingHorizontal de 16.

[12:21] Se nós estamos aplicando um paddingVertical: 16 e paddingHorizontal: 16, vamos simplesmente aplicar um padding: 16. Vamos apagar o paddingHorizontal. Nós salvamos e aí depois de darmos um refresh nós já teremos aqui a nossa lista sendo carregada com o padding em cada um dos itens.

[12:42] Agora nós excluímos o título que estava aqui em cima. Então vamos voltar aqui no "index" e adicionar o título. Nós já temos o estilo aqui, então é só adicionarmos aqui no Header, embaixo dos Detalhes, um Text, um Texto, na verdade; com itens.titulo, o título dos itens.

[13:10] Aí nós precisamos importar o Texto dos nossos componentes, então: import Texto from. Voltamos uma pasta, duas pastas: componentes/texto e nós também precisamos definir o estilo do Texto. Quando nós chamamos o texto, vamos chamar aqui o style={estilos.titulo}. Vamos salvar isso aqui. Nós já temos o título da cesta carregado também.

[13:45] Aqui nós podemos ver que a linha divisória entre cada um dos itens não está exatamente igual ao nosso layout. Ela está fora a fora aqui da esquerda para a direita, nós queríamos que ficasse uma margem aqui na linha também.

[13:59] Por que não está ficando uma margem na linha também? Porque aqui no "Item" nós estamos definindo padding: 16, se definirmos margin:16. Vamos salvar e recarregar aqui. Damos reload, aí nós vamos ter o espaçamento ao redor de 16, e não mais o espaçamento interno.

[14:22] Mas aí nós temos um problema: aqui vai ficar colada à lista. Então vamos voltar aqui para padding e vamos adicionar só o paddingVertical. Voltamos o paddingVertical aqui nos estilos do item para que a linha fique descolada da imagem e aí nós adicionamos o paddingHorizontal. Agora ele está colado de volta, nós adicionamos o paddingHorizontal somente aqui na nossa FlatList.

[14:56] Para isso, vamos criar aqui dentro do "index" mais um estilo, chamado lista. Essa lista vai ter um paddingHorizontal: 16. Aí nós aplicamos essa lista como estilo da nossa lista. Então basta virmos aqui na nossa FlatList e adicionar o style={estilos.lista}.

[15:25] Pronto! E aí nós temos um problema: todos os itens estão com a boarder, o divisor fora a fora aqui da esquerda para a direita e não está fazendo aquela margem igual estávamos vendo anteriormente - que nós queríamos deixar a margem aqui, não queríamos que ficasse a linha fora a fora no componente.

[15:45] Como nós podemos fazer isso? Vamos voltar aqui no "Item.js" e dar uma olhada aqui. Nós aplicamos o padding: 16 em todos os componentes. Então quer dizer que ele tem aqui o padding interno, mas nós podemos voltar aqui para o paddingVertical. Aí nó aplicamos aqui a marginHorizontal: 16.

[16:08] Aplicando a marginHorizontal: 16 nós vamos ter margem nas laterais e padding em cima e embaixo. Agora nós temos que forçar o recarregamento aqui, vamos dar um reload. Apertei as teclas "Ctrl + M", mas pode ser "Command + M" também... E pronto! Agora nós já temos a nossa lista estilizada aqui, bonita e também otimizada.

[16:32] Lembrando que adicionamos aqui no "App.js" O style={{flex:1}para que a nossa SafeAreaView, a nossa View principal ocupe 100% da tela, não 200%, para que ela não continue invisível e para que a nossa FlatList fique como componente principal da nossa aplicação e ela renderize somente os itens que estão visíveis.

[16:58] Aí nós adicionamos também foi ListHeaderComponent para adicionar todos os outros componentes que tinha na nossa tela.

[17:05] Na próxima aula nós vamos fazer uma revisão, uma conclusão sobre o nosso curso. Te verei no próximo vídeo!

@@07
Lista

Nessa aula, criamos a lista de itens da nossa aplicação. Nosso percurso foi o seguinte: primeiro, percorremos a lista por completo e, depois, usamos o componente do próprio React Native para listas.
Assinale, abaixo, qual é a opção verdadeira em relação aos conceitos que aprendemos sobre listas e otimização de listas.

Precisamos refatorar nossa tela para que o componente principal seja a FlatList, adicionando como Header e Footer da FlatList, o restante dos componentes e definindo a view superior para ocupar 100% da tela. Dessa forma, a FlatList carrega apenas os componentes que estão visíveis na tela.
 
Alternativa correta! Isso mesmo, a FlatList como principal componente já faz o scroll da tela. E, definindo a view principal para ocupar 100% da tela com flex: 1 nos estilos, faz com que apenas os itens visíveis sejam carregados, otimizando assim a nossa aplicação.
Alternativa correta
Utilizar a FlatList é a melhor forma de exibir a lista, pois ela já otimiza a lista automaticamente, carregando apenas os itens que estiverem visíveis na tela. Mas, para que o usuário possa fazer a rolagem (scroll) da tela, precisamos adicionar o ScrollView.
 
Quando usamos ScrollView, todo o conteúdo da tela é carregado de uma vez só, fazendo com que a otimização da FlatList não seja totalmente aplicada, o que pode causar problemas de performance.
Alternativa correta
Podemos exibir listas utilizando tanto o conceito de percorrer a lista, como o map, quanto o componente FlatList. Ambos parecem retornar o mesmo resultado, porém, quando se tratam de listas muito grandes, devemos usar o map ao invés do FlatList, aplicando o parâmetro key para otimização.
 
Na realidade, usar o map é quase a mesma coisa que copiar e colar os elementos manualmente na questão do primeiro carregamento, e, mesmo usando key, todos os elementos serão exibidos na tela de uma vez, o que pode causar travamentos.

@@08
Para saber mais: Eject

Com o Expo, podemos criar uma aplicação utilizando React Native, executá-la sem a necessidade de instalar um ambiente complexo e até publicar nas lojas. Porém, como já vimos anteriormente, o Expo tem suas limitações e pode chegar o momento em que você tenha que usar recursos que não estão disponíveis no Expo.
E nessa hora, você pode se perguntar: e agora, terei de desenvolver tudo novamente com React Native CLI fora do Expo? Na verdade, o Expo permite gerar os arquivos nativos que faltavam para executar no react native puro.

Esse processo é chamado de eject, e você pode acessar a documentação oficial clicando aqui. É importante que você leia a documentação para entender se você realmente precisa fazer isso.

Uma observação importante é que, neste curso, não vamos ver como executar os arquivos que o eject gera, pois precisamos instalar o ambiente Android e o iOS nativo. Porém, é interessante que você saiba da existência do eject para ajudar a tomar a decisão de qual CLI usar (Expo ou React Native). Sabendo que é possível ejetar do Expo, você pode começar uma aplicação simples, sem medo de que possíveis novas features não possam ser implementadas.

https://docs.expo.dev/expokit/eject/

@@09
Desafio: Aplicando o Eject

Se você ficou curioso sobre o eject e quer testar essa funcionalidade (mesmo que não precise), esse desafio é para você! Tente ejetar a aplicação e executá-la com React Native puro!
Saiba que fazer esse desafio vai ajudar muito em seus estudos, e mesmo em cursos futuros da Alura. Vamos lá?

Para fazer isso, você irá precisar instalar o ambiente Android e/ou iOS nativo. Lembramos que, se você quer executar o iOS nativo, é indispensável que esteja no macOS. Mas, no caso do Android, é possível executá-lo na maioria das plataformas. Siga os passos desse artigo para configurar o ambiente desejado na sua máquina (e reforçamos, mais uma vez, que esse desafio pode ser útil inclusive para prosseguir com os outros cursos da Alura).

Agora, basta seguir os passos da documentação. Caso tenha dúvidas, seja na tradução ou em algum passo, você pode conferir o passo a passo traduzido e com dicas abaixo, em “Opinião do Instrutor”.

E claro, depois de cumprir o desafio, compartilhe os seus resultados com a gente, no fórum da Alura! Isso é muito importante, também, para ajudar pessoas em seus estudos.

https://www.alura.com.br/artigos/configurando-o-ambiente-react-native?utm_source=gnarus&utm_medium=timeline&_gl=1*m7cphx*_ga*MTgwMzIzMjk2Ni4xNjg4ODE5OTcz*_ga_1EPWSW3PCS*MTcwMDQwNjEyNi4xMDkuMS4xNzAwNDA4ODg0LjAuMC4w*_fplc*WEdIbkY1bG5kQlRFQlVJbCUyRjM3bVgycyUyRmVIeDhDRVZmb3M0Z1BuV3E2cXZNNk5sM00xdXl1Z0xmWDA0U1UycEN6Q3hpMjg3MjZ0TnZ5ZCUyQmRHUnVJc3ltU3BGR2oxdFJ3Z3BmdGdncGhaUWZ0d0FVMEdxdzJSTGNJSGgzQkJBJTNEJTNE

https://docs.expo.dev/expokit/eject/#instructions

Neste desafio, nosso objetivo é fazer um teste com a funcionalidade Eject.
Para usar o eject, basta seguir o passo a passo que a documentação nos fornece:

1) Instale o expo (se você chegou até aqui por meio deste curso, já tem o expo instalado e pode pular para o passo 2).

npm install -g expo-cliCOPIAR CÓDIGO
2) Verifique as configurações do app.json. Ele deve ter todos as propriedades, abaixo, preenchidas:

{
   "expo": {
    "name": "Nome do Seu Aplicativo",
    "icon": "./caminho/do/icone.png",
    "version": "1.0.0",
    "slug": "nome-sem-formatacao",
    "ios": {
      "bundleIdentifier": "com.suaempresa.nomedoaplicativosemtraco",
      "buildNumber": "1.0.0"
    },
    "android": {
      "package": "com.suaempresa.nomedoaplicativosemtraco",
      "versionCode": 1
    }
   }
 }COPIAR CÓDIGO
3) Execute o comando expo eject dentro do projeto e siga o passo a passo no terminal, se houver.

4) Instale o ambiente nativo de Android ou iOS (que você já fez seguindo o artigo acima).

5) Rode o projeto.

Pronto! Instalamos o ambiente nativo de Android ou iOs e rodamos o eject! Muito bem!

Agora, vamos rodar a aplicação com o React Native CLI! Mas antes, precisamos baixar todas as bibliotecas do projeto, então, digite o código no seu terminal (dentro da pasta do projeto):

npm installCOPIAR CÓDIGO
Para iniciar o bundle do React Native (esse terminal irá se manter aberto rodando até ser cancelado com Ctrl+C):

npx react-native startCOPIAR CÓDIGO
Para rodar a aplicação na plataforma desejada:

npx react-native run-android
npx react-native run-iosCOPIAR CÓDIGO
Agora você deve ter o projeto rodando de forma ejetada, sem o expo. Sucesso!

@@10
Faça como eu fiz

Chegou a hora de você seguir todos os passos realizados por mim durante esta aula. Caso já tenha feito, excelente. Se ainda não, é importante que você execute o que foi visto nos vídeos para poder continuar com os próximos cursos que tenham este como pré-requisito.

Continue com os seus estudos, e se houver dúvidas, não hesite em recorrer ao nosso fórum!

@@11
Projeto final do curso

Caso queira acessar todos os códigos, você pode baixar o projeto completo a partir desse link.

@@12
O que aprendemos?

Nesta aula, aprendemos:
Button:
Aprendemos a usar o Button, que é um botão simples e com pouca customização.
Botão Customizado:
Com os componentes TouchableOpacity, TouchableWithoutFeesback, criamos botões muito mais customizados.
ScrollView:
Aprendemos a usar a ScrollView para permitir rolagem na tela, desde que não usando FlatList, pois há incompatibilidades entre esses dois componentes.
FlatList:
Aprendemos a otimizar listas e fazer a rolagem da tela exclusivamente com o FlatList.

@@13
Conclusão

[00:00] Parabéns a você que chegou até o fim deste curso de React Native! Aqui nós aprendemos a utilizar o npm, que é o gerenciador de pacotes do Node para baixar e instalar o Expo CLI, que é o Command Line Interface, interface de linha de comando do Expo para criar o nosso projeto.
[00:19] Então ele gerou para nós todas essas pastas e nós começamos a modificar o nosso projeto. Criamos alguns componentes reutilizáveis, como Texto; criamos e utilizamos componentes do próprio React Native, como FlatList, StyleSheet e View.

[00:32] Nós utilizamos Text também no nosso Texto. Nós utilizamos Image para exibirmos imagens. Nós utilizamos o SafeAreaView para criarmos aquela área segura, para que possamos rodar tanto no Android quanto no iOS, nós estilizamos para que todas as coisas ficassem dentro da tela bonitas.

[01:04] Nós também trabalhamos com bibliotecas externas, como por exemplo, as fontes. Nós utilizamos o @expo-google-fonts, nós utilizamos o expo-app-loading para fazermos com que o aplicativo esperasse e ficasse na tela de loading enquanto essa fonte carregava.

[01:21] Nós aprendemos a fazer uma lista - e não só uma lista, uma lista otimizada para que ela carregue apenas os itens que estão aparecendo na tela e não travem o nosso dispositivo.

[01:34] E utilizando o Expo nós também não precisamos instalar nenhum SDK de Android, de iOS, nem o Android Studio e nem X Code, que normalmente precisaríamos instalar se fossemos trabalhar com o React Native CLI, com a linha de comando do React Native puro mesmo.

[01:51] Agora, o que eu farei depois se eu querer implementar alguma coisa? Eu não sei como que eu farei isso. É simples, faça como fizemos aqui nas aulas. Olhe a documentação dessa ferramenta, dessa feature que você quer implementar porque lá vai estar escrito.

[02:08] Mesmo que em inglês, você consegue olhar os exemplos, os códigos, e tentar entender utilizando os conceitos que aprendemos aqui de parâmetros e dos componentes. Você consegue, com certeza, acompanhar alguma outra biblioteca e adicionar alguma outra biblioteca, alguma outra feature na sua aplicação.

[02:26] Além de revisar o que aprendemos neste curso, eu também queria incentivar você a compartilhar o seu projeto em alguma das redes sociais como LinkedIn. Coloque o seu projeto em um repositório, como GitHub, faz um portifólio para você apresentar os seus projetos para as outras pessoas.

[02:44] Espero que você tenha uma boa jornada aqui com o React Native e bons estudos!