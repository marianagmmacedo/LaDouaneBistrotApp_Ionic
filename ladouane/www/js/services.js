angular.module('starter.services', [])
.factory(("ionPlatform"), function( $q ){
    var ready = $q.defer();

    ionic.Platform.ready(function( device ){
        ready.resolve( device );
    });

    return {
        ready: ready.promise
    }
})
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  
  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Extra Cardápio',
    lastText: 'Extra Menu',
    face: 'img/extracardapio.png'
  }, {
    id: 1,
    name: 'Couvert',
    face: 'img/entrada.png'
  }, {
    id: 2,
    name: 'Tapas & Entradas',
    lastText: 'Appetizers',
    face: 'img/entrada.png'
  }, {
    id: 3,
    name: 'Saladas',
    lastText: 'Salads',
    face: 'img/salad.png'
  }, {
    id: 4,
    name: 'Especialidades',
    lastText: 'Specialties',
    face: 'img/especialidade.png'
  }, {
    id: 5,
    name: 'Sanduíches',
    lastText: 'Sandwiches',
    face: 'img/salad.png'
  }, {
    id: 6,
    name: 'Massas',
    lastText: 'Pasta',
    face: 'img/salad.png'
  }, {
    id: 7,
    name: 'Sobremesas',
    lastText: 'Desserts',
    face: 'img/sobremesa.png'
  }, {
    id: 8,
    name: 'Bebidas',
    lastText: 'Drinks',
    face: 'img/sobremesa.png'
  }];

  

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
