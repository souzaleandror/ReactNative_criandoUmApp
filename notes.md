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