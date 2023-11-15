#### 15/11/2023

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