// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova','starter.controllers', 'starter.services','pascalprecht.translate'])

// var exampleApp = angular.module('example', ['ionic', 'pascalprecht.translate'])
//     .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
//         $translateProvider.translations('en', {
//             hello_message: "Howdy",
//             goodbye_message: "Goodbye"
//         });
//         $translateProvider.translations('es', {
//             hello_message: "Hola",
//             goodbye_message: "Adios"
//         });
//         $translateProvider.preferredLanguage("en");
//         $translateProvider.fallbackLanguage("en");
//     });
.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  
  // for(lang in translations){
  //   $translateProvider.translations(lang, translations[lang]);
  // }
  
  // $translateProvider.preferredLanguage('en');

 .state('map', {
      url: '/map',
      views: {
        'map': {
          templateUrl: 'map.html',
          controller: 'MapCtrl'
        }
      }
    })
 .state('pushNotification', {
      url: '/pushNotification',
      views: {
        'pushNotification': {
          templateUrl: 'templates/pushNotification.html',
          controller: 'AppCtrl'
        }
      }
    })


  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('facebookPage', {
    url: '/facebookPage',
    views: {
      'facebookPage': {
        templateUrl: 'templates/facebookPage.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'MediaCtrl'
        }
      }
    })
  .state('tab.menu', {
      url: '/menu',
      views: {
        'tab-menu': {
          templateUrl: 'templates/tab-menu.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

.state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
;






  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');


  $translateProvider.translations("pt-br",{
      menu: "Cardápio",
      extracardapio : "Extra Cardápio",
      extracardapio1 : "Lombo de Bacalhau",
      extracardapio1_def : "Confitado e empanado em milanesa de flocos de batata com Mousseline de Mandioquinha e Gorgonzola.",
      extracardapio2_def : "Ao azeite de ervas e pimenta biquinho com batata recheada ",
      extracardapio3_def : "Em azeite de ervas e pimenta biquinho com couscouz marroquino em tomate semi-sechi e rúcula.",
      couvert : "Couvert",
      couvert1: "Casablanca",
      couvert2: "Novo Da Casa" ,
      couvert1_def : "Casablanca - Dois pães sírios ao forno, temperados com azeite virgem, alecrim e sal grosso. Acompanha tomate seccbi com mussarela de búffalo.",
      couvert2_def : "Novo Da Casa - Cesta de torradinhas ciabatta, legumes grelhados, homus e azeitonas azzapa.",
      appetizer : "Tapas & Entradas",
      a1 : "Croquetinhas de Jamon",
      a1_def : "Tradicional tapa dos bares espanhóis elaborado com jamon serrano.",
      a2 : "Coquile St. Jacques ",
      a2_def : "Nossa leitura para uma típica receita dos bistrô da França, aqui à base de frutos do mar (lula, camarão vieira) puxados ao azeite virgem, especiarias, molho bisque (lagosta) com cebolinha, champignon, creme de leite. Sobreposto de catupiry e parmessão gratinados.",
      a3 : "Pasterma",
      a3_def : "Mix de salsichas e linguiças artesanais com duo de mostarda.",
      a4 : "Buerrecks ",
      a4_def : "Pastéis de queijo de cabra da região.",
      a5 : "Jamon Ibérico",
      a5_def : "Presunto crú finamente fatiado.",
      a6 : "Souté de Mignon à Tropical",
      a6_def : "Lascas de mignon-flambadas na cachaçe com cebolas. Acompanha batatas fritas e molho demi glacê à parte.",
      a7 : "Tábua do Comandante ",
      a7_def : "Queijo vartados (ementhal, gorgonzola, parmesão), lâminas de jamon e azeitonas pretas. Regados na mesa ao azeite extra virgem.",
      a8 : "Formaggio Brie a Dubeux",
      a8_def : "Queijo brie gratinado, entremeado de geléia de pimenta e frutas, com rolinhos de berinjela e olivas negras. Acompanha torradinhas de pão sírio ao gergelim. Para 2 pessoas.",
      Saladas : "Saladas",
      s1 : "Tropical ",
      s1_def : "Alface americano, cebola, azeitonas, mussarela de búfalo, maçã, abacaxi, manga, laranja, passas e molho de iogurte.",
      s2 : "Poire Roquefort",
      s2_def : "Alface americano, fatias de pera na manteiga com roquefort gratinado em balsâmico agridoce de mel.",
      s3 : "Salada Ronda ",
      s3_def : "Rúcula, jamon, lascar de parmesão, azeitonas pretas e tomate seco ao molto balsâming.",
      s4 : "Minhas Três Filhas",
      s4_def : "Escalopes de lagosta grelhada em azeite e ervas servida em ninho de verdes, tomate, cebola, palmito, champignon, hortelã e abacaxi. Molho baby.",
      specialities : "Especialidades",
      sp1 : "Poulet du Potager",
      sp1_def:  "Peito de frango desossado grelhado no azeite de oliva e alecrim acompanhado de brócolis e batatas coradas.",
      sp2 : "Pato ao Poivre Vert ",
      sp2_def:  "Confit de coxa e sobrecoxa de matriz francesa Saint Germain ao molho demi glacé com pimentas verdes, batatas coradas e arroz de brócolis para companhar.",
      sp3 : "Pato a La Douane",
      sp3_def:  "Confit de coxa e sobrecoxa de matriz francesa Saint Germain ao molho de maracujá com manga flambada ao Cognac, acompanha arroz com crocante de amêndoas.",
      sp4 : "Filé Navegante Francês",
      sp4_def:  "Mignon grelhado em manteiga de ervas com mangas flambadas, batatas coradas e arroz.",
      sp5 : "Mignon ao Poivre",
      sp5_def:  "Mignon grelhado, regado ao molho poivre vert, acompanhado de gratin de batatas e arroz.",
      sp6 : "Filé da Diretoria",
      sp6_def:  "Mignon grelhado e recoberto de crocantes de alho ao azeite extra virgem. Montado sobre fettucine puxado na manteiga de limão e ervas.",
      sp7 : "File Moutarde Dijon Ancienne ",
      sp7_def:  "Mignon ao molho preparado com mostarda original da região de Dijon. Acompanha gratin de batatas.",
      sp8 : "File Gorgonzola ao Funghi Secchi",
      sp8_def:  "Molho a base de manteiga de ervas, alho poró, gorgonzola e funghi secchi flambados ao cognac. Puxado no próprio suco do filé. Acompanha penne ao olive extra virgem.",
      sp9 : "Mignon Sauce Brie",
      sp9_def:  "Tournedo de filé recheado com queijo brie ao molho demi-glacê perfumado com Porto Tawny. Acompanha risoto de funghi secchi com pedaços de morango fresco.",
      sp10 : "Cordeiro Andaluz",
      sp10_def: "Roti de pernil de cordeiro assado em molho de vinho, com couscouz marroquino puxado na ratatouille de legumes.",
      sp11 : "Tilapia Export Netuno a Moda do Spa",
      sp11_def: "Filé de tilapia export (150/200) no papilotte com azeite extra virgem, ervas, tomate cereja e manjericão. Acompanha brócolis ao alho poró.",
      sp12 : "Pescada a Casquet Arias",
      sp12_def: "File de pescada amarela na grelha de ferro aromatizado por nacos generosos de pimentões coloridos, cebolas, tomates e batatas no azeite virgem.",
      sp13 : "Pescada Florença ",
      sp13_def: "Um delicioso molho de camarões ao pomodoro envolve o lombo da Pescada Amarela grelhada ao azeite. Com linguinni salteado na manteiga de manjericão fresco.",
      sp14 : "Salmão Al Raçif ",
      sp14_def: "Lombo de salmão grelhado com vinagrete de alcaparrones e olivas negras servido com couscouz marroquino puxado em mini-ratatouille de legumes e frutas secas.",
      sp15 : "Salmão ao Crocante de Amêndoas",
      sp15_def: "Lombo de salmão grelhado com cobertura de farofa crocante de amêndoas. Com molho de laranja e gengibre. Acompanha risoto piamontês.",
      sp16 : "Camarões Serra do Mar",
      sp16_def: "Vaporizados ao Brut, os camarões são salteados no azeite extra virgem com alho e ervas de Provence. Servido com batatas soutée e medalhões de palmito tipo extra, salpicados no próprio molho do camarão.",
      sp17 : "Camarões a Toulouse",
      sp17_def: "Camarões salteados na manteiga de ervas e alho servidos com batata palha, crocantes de améndoas e arroz cremoso.",
      sp18 : "Camarão Dom Emilio",
      sp18_def: "Camarões flambados no champagne com noissetes de maçã e creme de leite fresco com ervas finas. Acompanha arroz de passas com améndoas.",
      sp19 : "Camarões ao Risotinho Piamontês",
      sp19_def: "Camarões flambados ao vinho branco são a base deste prato composto com arroz feito à moda do Piemonte, com sutil inovações.Principais ingredientes: champignon, pimenta calabresa, açafrão, parmesão e manteiga de ervas finas.",
      sp20 : "Camarão Flôr do Mediterrâneo",
      sp20_def: "Camarões ao azeite virgem, alho poró, alcachofra e brócolis. Servido com arroz de passas e améndoas.",
      sp21 : "Risoto Sapore Al Mare ",
      sp21_def: "Lagosta, lula, camarão e vieira salteados ao oliva, alho, ervas e limão enriquecem o sabor deste arbório preparado ao molho básico de frango e parmeggiano.",
      sp22 : "Lagosta ao Gratin de Catupiry",
      sp22_def: "Puxados no alho e azeite virgem, os escalopes de lagosta são flambados no Congnac e recobertos com o genuíno requeijão Catupiry para gratinar com uma leve cobertura de queijo parmesão. Prato montado com purê de batata.",
      sp23 : "Bacalhau da Alfândega",
      sp23_def: " Lombo de bacalhau (270 gramas) grelhado no azeite virgem e no alho, legumes (tomate, cebola e pimentões coloridos) flambados, batatas coradas e azeitonas. Acompanha arroz branco.",
      sandwich : "Sanduíches",
      san1 : "Caponatta no Ciabatta",
      san1_def: "O pao ciabatta vai ao forno com uma leve camada de homus, legumes grelhados e marinados ao azeite e alho, com fatia de tomate semi secchi.",
      san2 : "Ciabatta Aperitivo",
      san2_def : "Ciabatta crocante com mignon, queijo emental e molho ingles.",
      san3 : "Bauru de Poulet",
      san3_def : "Peito de frango grelhado, queijo emental, alface e tomate secchi. Servido no ciabatta ao forno.",
      san4 : "Cordeiro no Ciabatta ",
      san4_def : "Ciabatta no forno recheado de escalopinhos de pernil de cordeiro em seu molho.",
      pasta : "Massas - Fettuccine, Penne e Linguinni ",
      pasta1 : "Pasta Vegetariana",
      pasta1_def : "Alcachofra, tomate cereja, palmito e brócolis ao azeite extra-virgem e alho poró.",
      pasta2 : "Vereda",
      pasta2_def : "Camarões ao creme de leite fresco, champignon e molho de laranja.",
      pasta3 : "Al Mare",
      pasta3_def : "Lagosta, lula, vieira e camarão ao pomodoro fresco.",
      dessert : "Sobremesas",  
      d1 : "Cheese Cake",
      d1_def : "morangos e chocolate meio amargo nas passas ao Porto Tawni.",
      d2  : "Sorbet das Nações",
      d2_def : "Sorvete de especiarias com pistache e frutas secas.",
      d3 : "Carpaccio de Frutas ",
      d3_def : "Fatias de manga, kiwi e abacaxi regadas com calda de frutas vermelhas e sorbet de papaya.",
      d4  : "Mousse Sublime ",
      d4_def : "Mousse de quejos com pedaços de frutas (morango, kiwi e manga) e calda de frutas vermelhas.",
      d5  : "Petit Gateau Tropical",
      d5_def : "Bolo quente de chocolate, com abacaxi caramelado e calda de maracujá.",
      d6  : "Creme Papaya Gelato",
      d6_def : "Delicioso creme feito com sorvete de papaya Della Santa, creme de leite fresco e licor de Cassis.",
      d7  : "Banana Brulée",
      d7_def : "Creme catalana, à base de baunilha, com banana flambé.",
      d8  : "Chocolate Chocolate Chocolate",
      d8_def : "Mousse de chocolate, sorvete de chocolate e calda de chocolate com améndoas e chantilly.",
      drinks  : "Bebidas",
      dr1 : "Água de Coco",
      
      dr2 : "Refrigerantes e Águas",
      
      dr3 : "Sucos ",
      dr1_def: "Abacaxi, Acerola, Cajá, Graviola, Laranja, Maracujá, Manga, Morango",
      dr4 : "Chopp & Cervejas",
      dr1_def: "Chopp Brahma, Bohemia Long Neck, Bohemia Weisser (550 ml), Bohemia Escura (550 ml), Confraria (550 ml)",
      dr5 : "Caipirinhas & Caipiroscas",
      dr1_def: "Kiwi, Limão Lima da Pérsia, Lima/Limão, C/ Vodka Smirnoff, Frutas (Kiwi, Manga, Abacaxi), C/ Cachaça Envelhecida/Sagatiba, C/ Vodka Absolut, C/ Vodka Wyborowa",
      dr6 : "Whiskies",
      dr1_def: "White Horse (8 anos), Red Label (8 anos), Black Label (12 anos), Chivas (12 anos), Ballantines (12 anos), Gold Label (18 anos)",
      dr7 : "Coquetéis ",
      dr1_def: "Alexander , Brandy (creme de leite, licor de cacau, canela e açucar), Daiquiri (Rum branco, suco de limão, groselha e açucar), Margueritta (Tequila branca, suco de limão, cointreau, Taça crustada com sal), Bloody Mary (Vodka e suco de tomate temperado), Whisky Souer (Whisky, suco de limão e açucar), Manhattan (Bourbon, Vermoutb tinto, angostura e cerveja)",
      dr8 : "Drinks Especiais",
      dr1_def: "Tinto di Verano, Kir Royal, Sangria Málaga, Sangria Barcelona",
      dr9 : "Aperitivos ",
      dr1_def: "Cachaça Pitú Tradicional, Conhaque Domecq, Cachaça Pitú Gold, Campari, Cachaça Germana (envelhecida), Cachaça Vale Verde, Vodka Smirnoff, Vodka Absolut, Vodka Wyborowa, Conhaque Remy Martin",
      dr10 : "Cafés ",
      dr1_def: " Deltaexpresso Platinum, Deltaexpresso Descafeinado, Espumone Deltaexpresso, Chocolate Quente, Deltaexpresso Aromas (Caramelo, Baunilha, Amaretto,Irish Cream), Capuccino Deltaexpresso",
      dr11 : "Chás",
      dr11_def: "Camomila, Chá Preto, Erva Doce , Flores e Frutas, Hortelã, Maçã e Canela",
      dr12 : "Licores",
      dr12_def: "Cointreau, Frangélico, Amarula, Peach Tree, Cuarenta y três, Drambuie",
    });
       
    
    $translateProvider.translations("en",{
      menu: "Menu",
      extracardapio : "Extra Menu",
      extracardapio1 : "Cod Loin",
      extracardapio1_def : "Confitado e empanado em milanesa de flocos de batata com Mousseline de Mandioquinha e Gorgonzola.",
      extracardapio2_def : "Ao azeite de ervas e pimenta biquinho com batata recheada ",
      extracardapio3_def : "Em azeite de ervas e pimenta biquinho com couscouz marroquino em tomate semi-sechi e rúcula.",
      couvert : "Couvert",
      couvert1: "WhiteHouse",
      couvert2: "House Couvert" ,
      couvert1_def : "Casablanca - Dois pães sírios ao forno, temperados com azeite virgem, alecrim e sal grosso. Acompanha tomate seccbi com mussarela de búffalo.",
      couvert2_def : "Novo Da Casa - Cesta de torradinhas ciabatta, legumes grelhados, homus e azeitonas azzapa.",
      appetizer : "Appetizer",
      a1 : "Jamon's croquets",
      a1_def : "Tradicional tapa dos bares espanhóis elaborado com jamon serrano.",
      a2 : "Coquile St. Jacques ",
      a2_def : "Nossa leitura para uma típica receita dos bistrô da França, aqui à base de frutos do mar (lula, camarão vieira) puxados ao azeite virgem, especiarias, molho bisque (lagosta) com cebolinha, champignon, creme de leite. Sobreposto de catupiry e parmessão gratinados.",
      a3 : "Pasterma",
      a3_def : "Mix de salsichas e linguiças artesanais com duo de mostarda.",
      a4 : "Buerrecks ",
      a4_def : "Pastéis de queijo de cabra da região.",
      a5 : "Jamon Ibérico",
      a5_def : "Presunto crú finamente fatiado.",
      a6 : "Souté de Mignon à Tropical",
      a6_def : "Lascas de mignon-flambadas na cachaçe com cebolas. Acompanha batatas fritas e molho demi glacê à parte.",
      a7 : "Tábua do Comandante ",
      a7_def : "Queijo vartados (ementhal, gorgonzola, parmesão), lâminas de jamon e azeitonas pretas. Regados na mesa ao azeite extra virgem.",
      a8 : "Formaggio Brie a Dubeux",
      a8_def : "Queijo brie gratinado, entremeado de geléia de pimenta e frutas, com rolinhos de berinjela e olivas negras. Acompanha torradinhas de pão sírio ao gergelim. Para 2 pessoas.",
      Saladas : "Salads",
      s1 : "Tropical ",
      s1_def : "Alface americano, cebola, azeitonas, mussarela de búfalo, maçã, abacaxi, manga, laranja, passas e molho de iogurte.",
      s2 : "Poire Roquefort",
      s2_def : "Alface americano, fatias de pera na manteiga com roquefort gratinado em balsâmico agridoce de mel.",
      s3 : "Salada Ronda ",
      s3_def : "Rúcula, jamon, lascar de parmesão, azeitonas pretas e tomate seco ao molto balsâming.",
      s4 : "Minhas Três Filhas",
      s4_def : "Escalopes de lagosta grelhada em azeite e ervas servida em ninho de verdes, tomate, cebola, palmito, champignon, hortelã e abacaxi. Molho baby.",
      specialities : "Specialities",
      sp1 : "Poulet du Potager",
      sp1_def:  "Peito de frango desossado grelhado no azeite de oliva e alecrim acompanhado de brócolis e batatas coradas.",
      sp2 : "Pato ao Poivre Vert ",
      sp2_def:  "Confit de coxa e sobrecoxa de matriz francesa Saint Germain ao molho demi glacé com pimentas verdes, batatas coradas e arroz de brócolis para companhar.",
      sp3 : "Pato a La Douane",
      sp3_def:  "Confit de coxa e sobrecoxa de matriz francesa Saint Germain ao molho de maracujá com manga flambada ao Cognac, acompanha arroz com crocante de amêndoas.",
      sp4 : "Filé Navegante Francês",
      sp4_def:  "Mignon grelhado em manteiga de ervas com mangas flambadas, batatas coradas e arroz.",
      sp5 : "Mignon ao Poivre",
      sp5_def:  "Mignon grelhado, regado ao molho poivre vert, acompanhado de gratin de batatas e arroz.",
      sp6 : "Filé da Diretoria",
      sp6_def:  "Mignon grelhado e recoberto de crocantes de alho ao azeite extra virgem. Montado sobre fettucine puxado na manteiga de limão e ervas.",
      sp7 : "File Moutarde Dijon Ancienne ",
      sp7_def:  "Mignon ao molho preparado com mostarda original da região de Dijon. Acompanha gratin de batatas.",
      sp8 : "File Gorgonzola ao Funghi Secchi",
      sp8_def:  "Molho a base de manteiga de ervas, alho poró, gorgonzola e funghi secchi flambados ao cognac. Puxado no próprio suco do filé. Acompanha penne ao olive extra virgem.",
      sp9 : "Mignon Sauce Brie",
      sp9_def:  "Tournedo de filé recheado com queijo brie ao molho demi-glacê perfumado com Porto Tawny. Acompanha risoto de funghi secchi com pedaços de morango fresco.",
      sp10 : "Cordeiro Andaluz",
      sp10_def: "Roti de pernil de cordeiro assado em molho de vinho, com couscouz marroquino puxado na ratatouille de legumes.",
      sp11 : "Tilapia Export Netuno a Moda do Spa",
      sp11_def: "Filé de tilapia export (150/200) no papilotte com azeite extra virgem, ervas, tomate cereja e manjericão. Acompanha brócolis ao alho poró.",
      sp12 : "Pescada a Casquet Arias",
      sp12_def: "File de pescada amarela na grelha de ferro aromatizado por nacos generosos de pimentões coloridos, cebolas, tomates e batatas no azeite virgem.",
      sp13 : "Pescada Florença ",
      sp13_def: "Um delicioso molho de camarões ao pomodoro envolve o lombo da Pescada Amarela grelhada ao azeite. Com linguinni salteado na manteiga de manjericão fresco.",
      sp14 : "Salmão Al Raçif ",
      sp14_def: "Lombo de salmão grelhado com vinagrete de alcaparrones e olivas negras servido com couscouz marroquino puxado em mini-ratatouille de legumes e frutas secas.",
      sp15 : "Salmão ao Crocante de Amêndoas",
      sp15_def: "Lombo de salmão grelhado com cobertura de farofa crocante de amêndoas. Com molho de laranja e gengibre. Acompanha risoto piamontês.",
      sp16 : "Camarões Serra do Mar",
      sp16_def: "Vaporizados ao Brut, os camarões são salteados no azeite extra virgem com alho e ervas de Provence. Servido com batatas soutée e medalhões de palmito tipo extra, salpicados no próprio molho do camarão.",
      sp17 : "Camarões a Toulouse",
      sp17_def: "Camarões salteados na manteiga de ervas e alho servidos com batata palha, crocantes de améndoas e arroz cremoso.",
      sp18 : "Camarão Dom Emilio",
      sp18_def: "Camarões flambados no champagne com noissetes de maçã e creme de leite fresco com ervas finas. Acompanha arroz de passas com améndoas.",
      sp19 : "Camarões ao Risotinho Piamontês",
      sp19_def: "Camarões flambados ao vinho branco são a base deste prato composto com arroz feito à moda do Piemonte, com sutil inovações.Principais ingredientes: champignon, pimenta calabresa, açafrão, parmesão e manteiga de ervas finas.",
      sp20 : "Camarão Flôr do Mediterrâneo",
      sp20_def: "Camarões ao azeite virgem, alho poró, alcachofra e brócolis. Servido com arroz de passas e améndoas.",
      sp21 : "Risoto Sapore Al Mare ",
      sp21_def: "Lagosta, lula, camarão e vieira salteados ao oliva, alho, ervas e limão enriquecem o sabor deste arbório preparado ao molho básico de frango e parmeggiano.",
      sp22 : "Lagosta ao Gratin de Catupiry",
      sp22_def: "Puxados no alho e azeite virgem, os escalopes de lagosta são flambados no Congnac e recobertos com o genuíno requeijão Catupiry para gratinar com uma leve cobertura de queijo parmesão. Prato montado com purê de batata.",
      sp23 : "Bacalhau da Alfândega",
      sp23_def: " Lombo de bacalhau (270 gramas) grelhado no azeite virgem e no alho, legumes (tomate, cebola e pimentões coloridos) flambados, batatas coradas e azeitonas. Acompanha arroz branco.",
      sandwich : "Sanduíches",
      san1 : "Caponatta no Ciabatta",
      san1_def: "O pao ciabatta vai ao forno com uma leve camada de homus, legumes grelhados e marinados ao azeite e alho, com fatia de tomate semi secchi.",
      san2 : "Ciabatta Aperitivo",
      san2_def : "Ciabatta crocante com mignon, queijo emental e molho ingles.",
      san3 : "Bauru de Poulet",
      san3_def : "Peito de frango grelhado, queijo emental, alface e tomate secchi. Servido no ciabatta ao forno.",
      san4 : "Cordeiro no Ciabatta ",
      san4_def : "Ciabatta no forno recheado de escalopinhos de pernil de cordeiro em seu molho.",
      pasta : "Pasta - Fettuccine, Penne e Linguinni ",
      pasta1 : "Pasta Vegetariana",
      pasta1_def : "Alcachofra, tomate cereja, palmito e brócolis ao azeite extra-virgem e alho poró.",
      pasta2 : "Vereda",
      pasta2_def : "Camarões ao creme de leite fresco, champignon e molho de laranja.",
      pasta3 : "Al Mare",
      pasta3_def : "Lagosta, lula, vieira e camarão ao pomodoro fresco.",
      dessert : "Dessert",  
      d1 : "Cheese Cake",
      d1_def : "morangos e chocolate meio amargo nas passas ao Porto Tawni.",
      d2  : "Sorbet das Nações",
      d2_def : "Sorvete de especiarias com pistache e frutas secas.",
      d3 : "Carpaccio de Frutas ",
      d3_def : "Fatias de manga, kiwi e abacaxi regadas com calda de frutas vermelhas e sorbet de papaya.",
      d4  : "Mousse Sublime ",
      d4_def : "Mousse de quejos com pedaços de frutas (morango, kiwi e manga) e calda de frutas vermelhas.",
      d5  : "Petit Gateau Tropical",
      d5_def : "Bolo quente de chocolate, com abacaxi caramelado e calda de maracujá.",
      d6  : "Creme Papaya Gelato",
      d6_def : "Delicioso creme feito com sorvete de papaya Della Santa, creme de leite fresco e licor de Cassis.",
      d7  : "Banana Brulée",
      d7_def : "Creme catalana, à base de baunilha, com banana flambé.",
      d8  : "Chocolate Chocolate Chocolate",
      d8_def : "Mousse de chocolate, sorvete de chocolate e calda de chocolate com améndoas e chantilly.",
      drinks  : "Drinks",
      dr1 : "Coconut Water",
      
      dr2 : "Soda and Water",
      
      dr3 : "Juices ",
      dr1_def: "Abacaxi, Acerola, Cajá, Graviola, Laranja, Maracujá, Manga, Morango",
      dr4 : "Chopp & Beers",
      dr1_def: "Chopp Brahma, Bohemia Long Neck, Bohemia Weisser (550 ml), Bohemia Escura (550 ml), Confraria (550 ml)",
      dr5 : "Caipirinhas & Caipiroscas",
      dr1_def: "Kiwi, Limão Lima da Pérsia, Lima/Limão, C/ Vodka Smirnoff, Frutas (Kiwi, Manga, Abacaxi), C/ Cachaça Envelhecida/Sagatiba, C/ Vodka Absolut, C/ Vodka Wyborowa",
      dr6 : "Whisky",
      dr1_def: "White Horse (8 anos), Red Label (8 anos), Black Label (12 anos), Chivas (12 anos), Ballantines (12 anos), Gold Label (18 anos)",
      dr7 : "Drinks ",
      dr1_def: "Alexander , Brandy (creme de leite, licor de cacau, canela e açucar), Daiquiri (Rum branco, suco de limão, groselha e açucar), Margueritta (Tequila branca, suco de limão, cointreau, Taça crustada com sal), Bloody Mary (Vodka e suco de tomate temperado), Whisky Souer (Whisky, suco de limão e açucar), Manhattan (Bourbon, Vermoutb tinto, angostura e cerveja)",
      dr8 : " Specials Drinks",
      dr1_def: "Tinto di Verano, Kir Royal, Sangria Málaga, Sangria Barcelona",
      dr9 : "Hard Drinks ",
      dr1_def: "Cachaça Pitú Tradicional, Conhaque Domecq, Cachaça Pitú Gold, Campari, Cachaça Germana (envelhecida), Cachaça Vale Verde, Vodka Smirnoff, Vodka Absolut, Vodka Wyborowa, Conhaque Remy Martin",
      dr10 : "Coffee ",
      dr1_def: " Deltaexpresso Platinum, Deltaexpresso Descafeinado, Espumone Deltaexpresso, Chocolate Quente, Deltaexpresso Aromas (Caramelo, Baunilha, Amaretto,Irish Cream), Capuccino Deltaexpresso",
      dr11 : "Tea",
      dr11_def: "Camomila, Chá Preto, Erva Doce , Flores e Frutas, Hortelã, Maçã e Canela",
      dr12 : "Liquor",
      dr12_def: "Cointreau, Frangélico, Amarula, Peach Tree, Cuarenta y três, Drambuie",
   
    });
    $translateProvider.preferredLanguage("en");
    $translateProvider.fallbackLanguage("en");

})




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
});


