angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $cordovaPush, $cordovaDialogs, $cordovaMedia, $cordovaToast, ionPlatform, $http) {
    $scope.notifications = [];

    // call to register automatically upon device ready
    ionPlatform.ready.then(function (device) {
        $scope.register();
    });


    // Register
    $scope.register = function () {
        var config = null;

        if (ionic.Platform.isAndroid()) {
            config = {
                "senderID": "YOUR_GCM_PROJECT_ID" // REPLACE THIS WITH YOURS FROM GCM CONSOLE - also in the project URL like: https://console.developers.google.com/project/434205989073
            };
        }
        else if (ionic.Platform.isIOS()) {
            config = {
                "badge": "true",
                "sound": "true",
                "alert": "true"


            }
        }

        $cordovaPush.register(config).then(function (result) {
            console.log("Register success " + result);

            $cordovaToast.showShortCenter('Registered for push notifications');
            $scope.registerDisabled=true;
            // ** NOTE: Android regid result comes back in the pushNotificationReceived, only iOS returned here
            if (ionic.Platform.isIOS()) {
                $scope.regId = result;
                storeDeviceToken("ios");
            }
        }, function (err) {
            console.log("Register error " + err)
        });
    }

    // Notification Received
    $scope.$on('$cordovaPush:notificationReceived', function (event, notification) {
        console.log(JSON.stringify([notification]));
        if (ionic.Platform.isAndroid()) {
            handleAndroid(notification);
        }
        else if (ionic.Platform.isIOS()) {
            handleIOS(notification);
            $scope.$apply(function () {
                $scope.notifications.push(JSON.stringify(notification.alert));
            })
        }
    });

    // Android Notification Received Handler
    function handleAndroid(notification) {
        // ** NOTE: ** You could add code for when app is in foreground or not, or coming from coldstart here too
        //             via the console fields as shown.
        console.log("In foreground " + notification.foreground  + " Coldstart " + notification.coldstart);
        if (notification.event == "registered") {
            $scope.regId = notification.regid;
            storeDeviceToken("android");
        }
        else if (notification.event == "message") {
            $cordovaDialogs.alert(notification.message, "Push Notification Received");
            $scope.$apply(function () {
                $scope.notifications.push(JSON.stringify(notification.message));
            })
        }
        else if (notification.event == "error")
            $cordovaDialogs.alert(notification.msg, "Push notification error event");
        else $cordovaDialogs.alert(notification.event, "Push notification handler - Unprocessed Event");
    }

    // IOS Notification Received Handler
    function handleIOS(notification) {
        // The app was already open but we'll still show the alert and sound the tone received this way. If you didn't check
        // for foreground here it would make a sound twice, once when received in background and upon opening it from clicking
        // the notification when this code runs (weird).
        if (notification.foreground == "1") {
            // Play custom audio if a sound specified.
            if (notification.sound) {
                var mediaSrc = $cordovaMedia.newMedia(notification.sound);
                mediaSrc.promise.then($cordovaMedia.play(mediaSrc.media));
            }

            if (notification.body && notification.messageFrom) {
                $cordovaDialogs.alert(notification.body, notification.messageFrom);
            }
            else $cordovaDialogs.alert(notification.alert, "Push Notification Received");

            if (notification.badge) {
                $cordovaPush.setBadgeNumber(notification.badge).then(function (result) {
                    console.log("Set badge success " + result)
                }, function (err) {
                    console.log("Set badge error " + err)
                });
            }
        }
        // Otherwise it was received in the background and reopened from the push notification. Badge is automatically cleared
        // in this case. You probably wouldn't be displaying anything at this point, this is here to show that you can process
        // the data in this situation.
        else {
            if (notification.body && notification.messageFrom) {
                $cordovaDialogs.alert(notification.body, "(RECEIVED WHEN APP IN BACKGROUND) " + notification.messageFrom);
            }
            else $cordovaDialogs.alert(notification.alert, "(RECEIVED WHEN APP IN BACKGROUND) Push Notification Received");
        }
    }

    // Stores the device token in a db using node-pushserver (running locally in this case)
    //
    // type:  Platform type (ios, android etc)
    function storeDeviceToken(type) {
        // Create a random userid to store with it
        var user = { user: 'user' + Math.floor((Math.random() * 10000000) + 1), type: type, token: $scope.regId };
        console.log("Post token for registered device with data " + JSON.stringify(user));

        $http.post('http://192.168.1.16:8000/subscribe', JSON.stringify(user))
            .success(function (data, status) {
                console.log("Token stored, device is successfully subscribed to receive push notifications.");
            })
            .error(function (data, status) {
                console.log("Error storing device token." + data + " " + status)
            }
        );
    }

    // Removes the device token from the db via node-pushserver API unsubscribe (running locally in this case).
    // If you registered the same device with different userids, *ALL* will be removed. (It's recommended to register each
    // time the app opens which this currently does. However in many cases you will always receive the same device token as
    // previously so multiple userids will be created with the same token unless you add code to check).
    function removeDeviceToken() {
        var tkn = {"token": $scope.regId};
        $http.post('http://192.168.1.16:8000/unsubscribe', JSON.stringify(tkn))
            .success(function (data, status) {
                console.log("Token removed, device is successfully unsubscribed and will not receive push notifications.");
            })
            .error(function (data, status) {
                console.log("Error removing device token." + data + " " + status)
            }
        );
    }

    // Unregister - Unregister your device token from APNS or GCM
    // Not recommended:  See http://developer.android.com/google/gcm/adv.html#unreg-why
    //                   and https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html#//apple_ref/occ/instm/UIApplication/unregisterForRemoteNotifications
    //
    // ** Instead, just remove the device token from your db and stop sending notifications **
    $scope.unregister = function () {
        console.log("Unregister called");
        removeDeviceToken();
        $scope.registerDisabled=false;
        //need to define options here, not sure what that needs to be but this is not recommended anyway
//        $cordovaPush.unregister(options).then(function(result) {
//            console.log("Unregister success " + result);//
//        }, function(err) {
//            console.log("Unregister error " + err)
//        });
    }


})



.controller('MediaCtrl', function($scope, $ionicModal) {
 $scope.ambienteImages = [{
 'src' : 'img/logo.png'
 }, {
 'src' : 'img/paco.png'
 }, {
 'src' : 'img/rsz_1ambiente.png'
 }, {
 'src' : 'img/rsz_2ambiente.png'
 }];
 $scope.pratosImages = [{
 'src' : 'img/rsz_entrada.png'
 }, {
 'src' : 'img/salmao.png'
 }, {
 'src' : 'img/sobremesa.png'
 }];
 $scope.showImages1 = function(index) {
   $scope.activeSlide = index;
   $scope.showModal('templates/image-popover1.html');
 }
 $scope.showImages2 = function(index) {
   $scope.activeSlide = index;
   $scope.showModal('templates/image-popover2.html');
 }
 
 $scope.showModal = function(templateUrl) {
   $ionicModal.fromTemplateUrl(templateUrl, {
   scope: $scope,
   animation: 'slide-in-up'
   }).then(function(modal) {
   $scope.modal = modal;
   $scope.modal.show();
 });
 }
 
 // Close the modal
 $scope.closeModal = function() {
 $scope.modal.hide();
 $scope.modal.remove()
 };


$scope.clipSrc = 'img/coffee.MOV';
 
$scope.playVideo = function() {
 $scope.showModal('templates/video-popover.html');
}
})

.controller('DashCtrl', function($scope) {
  $scope.message = "Hi";
  //console.log($scope.sampleData);
})
.controller('LaDouaneCtrl', function($scope) {})
.controller('ChatsCtrl', function($scope, $ionicPopup, Chats) {
  $scope.chats = Chats.all();

  $scope.remove = function(chat) {
    Chats.remove(chat);
  }

  $scope.showAlert = function () {
  	alert("popup-template.html");
  }
  

  $scope.showDetailPage = function () {


   // An elaborate, custom popup
   var myPopup = $ionicPopup.show({
     templateUrl : 'templates/detailPage.html',
     scope: $scope,
     buttons: [
       {
         text: '<b>Ok</b>',
         type: 'button-positive',
         onTap: function(e) {
           //alert($scope.contactMessage);
           return 'ok button'
         }
       }
     ]
   });




  }

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('AccountCtrl', function($scope,$cordovaOauth,$cordovaSocialSharing) {
  
  

    $scope.settings = {
    enableFriends: true
    };

    
    // $scope.facebook= function() {
    //     $cordovaOauth.facebook("1667249886831540", ["mgmm@ecomp.poli.br"]).then(function(result) {
    //         // results
    //         console.log("success");
    //     }, function(error) {
    //       console.log(error);
    //         // error
    //     });


    // }

   

    // $scope.facebook1=function(){
    // $cordovaSocialSharing
    // .share("hello", null, null, null) // Share via native share sheet
    // .then(function(result) {
    //   // Success!
    // }, function(err) {
    //   // An error occured. Show a message to the user
    // });
    // }

 })










.controller('MenuCtrl', function($scope) {
  $scope.showAlert() = function () {
  	alert("hello");
  };

 })



.controller('MapCtrl', function($scope, $ionicLoading, $compile) {

      function initialize() {
        var myLatlng = new google.maps.LatLng(-8.065752, -34.873039);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>La Douane</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }

      //  function route(pos.coords.latitude, pos.coords.longitude) {
      //   var site = new google.maps.LatLng(-8.065752, -34.873039);
      //   var hospital = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

      //   var mapOptions = {
      //     streetViewControl:true,
      //     center: site,
      //     zoom: 18,
      //     mapTypeId: google.maps.MapTypeId.TERRAIN
      //   };
      //   var map = new google.maps.Map(document.getElementById("map"),
      //       mapOptions);
        
      //   //Marker + infowindow + angularjs compiled ng-click
      //   var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
      //   var compiled = $compile(contentString)($scope);

      //   var infowindow = new google.maps.InfoWindow({
      //     content: compiled[0]
      //   });

      //   var marker = new google.maps.Marker({
      //     position: site,
      //     map: map,
      //     title: 'Strathblane (Job Location)'
      //   });
        
      //   var hospitalRoute = new google.maps.Marker({
      //     position: hospital,
      //     map: map,
      //     title: 'Hospital (Stobhill)'
      //   });
        
      //   var infowindow = new google.maps.InfoWindow({
      //        content:"Project Location"
      //   });

      //   infowindow.open(map,marker);
        
      //   var hospitalwindow = new google.maps.InfoWindow({
      //        content:"Nearest Hospital"
      //   });

      //   hospitalwindow.open(map,hospitalRoute);
       
      //   google.maps.event.addListener(marker, 'click', function() {
      //     infowindow.open(map,marker);
      //   });

      //   $scope.map = map;
        
      //   var directionsService = new google.maps.DirectionsService();
      //   var directionsDisplay = new google.maps.DirectionsRenderer();

      //   var request = {
      //       origin : site,
      //       destination : hospital,
      //       travelMode : google.maps.TravelMode.DRIVING
      //   };
      //   directionsService.route(request, function(response, status) {
      //       if (status == google.maps.DirectionsStatus.OK) {
      //           directionsDisplay.setDirections(response);
      //       }
      //   });

      //   directionsDisplay.setMap(map); 
       
      // }
  
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
          // $scope.route = route;
          // var contentString = "<div><a ng-click='clickTest()'>Me</a></div>";
          // var compiled = $compile(contentString)($scope);
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click');
      };
      
});




 // .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
 //      function initialize() {
 //        var myLatlng = new google.maps.LatLng(-8.0578381,-34.88289689999999);
        
 //        var mapOptions = {
 //          center: myLatlng,
 //          zoom: 16,
 //          mapTypeId: google.maps.MapTypeId.ROADMAP
 //        };
 //        var map = new google.maps.Map(document.getElementById("map"),
 //            mapOptions);
        
 //        //Marker + infowindow + angularjs compiled ng-click
 //        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
 //        var compiled = $compile(contentString)($scope);

 //        var infowindow = new google.maps.InfoWindow({
 //          content: compiled[0]
 //        });

 //        var marker = new google.maps.Marker({
 //          position: myLatlng,
 //          map: map,
 //          title: 'Uluru (Ayers Rock)'
 //        });

 //        google.maps.event.addListener(marker, 'click', function() {
 //          infowindow.open(map,marker);
 //        });

 //        $scope.map = map;
 //      }
 //      google.maps.event.addDomListener(window, 'load', initialize);
      
 //      $scope.centerOnMe = function() {
 //        if(!$scope.map) {
 //          return;
 //        }

 //        $scope.loading = $ionicLoading.show({
 //          content: 'Getting current location...',
 //          showBackdrop: false
 //        });

 //        navigator.geolocation.getCurrentPosition(function(pos) {
 //          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
 //          $scope.loading.hide();
 //        }, function(error) {
 //          alert('Unable to get location: ' + error.message);
 //        });
 //      };
      
 //      $scope.clickTest = function() {
 //        alert('Example of infowindow with ng-click')
 //      };
      
 //    });
// .controller('MarkerRemoveCtrl', function($scope, $ionicLoading) {

//   $scope.positions = [{
//     lat: -8.0578381,
//     lng: -34.88289689999999
//   }];

//   $scope.$on('mapInitialized', function(event, map) {
//     $scope.map = map;
//   });

//   $scope.centerOnMe= function(){
//   $scope.positions = [];
    
    
//     $ionicLoading.show({
//       template: 'Loading...'
//     });


//     navigator.geolocation.getCurrentPosition(function(position) {
//       var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//       $scope.positions.push({lat: pos.k,lng: pos.B});
//       console.log(pos);
//       $scope.map.setCenter(pos);
//       $ionicLoading.hide();
//     });
// });


// .controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

// 	// Triggered on a button click, or some other target
// 	$scope.showPopup = function() {
// 	  $scope.data = {}

// 	  // An elaborate, custom popup
// 	  var myPopup = $ionicPopup.show({
// 	    title: 'Details',
// 	    subTitle: 'each detail',
// 	    scope: $scope,
// 	    buttons: [
// 	      {
// 	        text: '<b>OK</b>',
// 	        type: 'button-positive',
// 	        onTap: function(e) {
	          
// 	        }
// 	      }
// 	    ]
// 	   });
// 	  myPopup.then(function(res) {
// 	    console.log('Tapped!', res);
// 	  });
// 	  $timeout(function() {
// 	     myPopup.close(); //close the popup after 3 seconds for some reason
// 	  }, 3000);
// 	 };


