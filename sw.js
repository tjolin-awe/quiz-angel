var cacheName = 'EPT-v3-OCS';
var filesToCache= [
  '/ocs/',
  '/ocs/index.html',
  '/ocs/favicon.ico',
  '/ocs/assets/fonts/BRLNSDB.css',
  '/ocs/assets/fonts/BRLNSDB.eot',
  '/ocs/assets/fonts/BRLNSDB.otf',
  '/ocs/assets/fonts/BRLNSDB.svg',
  '/ocs/assets/fonts/BRLNSDB.ttf',
  '/ocs/assets/fonts/BRLNSDB.woff',
  '/ocs/assets/sfx/audio-button.m4a',
  '/ocs/assets/sfx/audio-button.mp3',
  '/ocs/assets/sfx/audio-button.ogg',
  '/ocs/assets/sfx/music-bitsnbites-liver.m4a',
  '/ocs/assets/sfx/music-bitsnbites-liver.mp3',
  '/ocs/assets/sfx/music-bitsnbites-liver.ogg',
  '/ocs/assets/img/icons/icon-32.png',
  '/ocs/assets/img/icons/icon-64.png',
  '/ocs/assets/img/icons/icon-96.png',
  '/ocs/assets/img/icons/icon-128.png',
  '/ocs/assets/img/icons/icon-168.png',
  '/ocs/assets/img/icons/icon-192.png',
  '/ocs/assets/img/icons/icon-256.png',
  '/ocs/assets/img/icons/icon-512.png',
  '/ocs/src/phaser.3.55.0.min.js',
  '/ocs/src/plugins/webfont.js',
  '/ocs/src/start.js',
  '/ocs/src/Boot.js',
  '/ocs/src/Preloader.js',
  '/ocs/src/MainMenu.js',
  '/ocs/src/Settings.js',
  '/ocs/src/Story.js',
  '/ocs/src/Game.js',
  '/ocs/src/Award.js',
  '/ocs/src/Difficulty.js',
  '/ocs/src/EndScene.js',
  '/ocs/src/Rank.js',
  '/ocs/sw.js',
  '/ocs/src/utils',
  '/ocs/src/Character.js',
  '/ocs/src/LevelEnd.js',
  '/ocs/assets/img/background.png',
  '/ocs/assets/img/banner-beer.png',
  '/ocs/assets/img/button-achievements.png',
  '/ocs/assets/img/button-back.png',
  '/ocs/assets/img/button-beer.png',
  '/ocs/assets/img/button-continue.png',
  '/ocs/assets/img/button-credits.png',
  '/ocs/assets/img/button-home.png',
  '/ocs/assets/img/button-mainmenu.png',
  '/ocs/assets/img/button-music-off.png',
  '/ocs/assets/img/button-music-on.png',
  '/ocs/assets/img/button-pause.png',
  '/ocs/assets/img/button-settings.png',
  '/ocs/assets/img/button-sound-off.png',
  '/ocs/assets/img/button-sound-on.png',
  '/ocs/assets/img/button-start.png',
  '/ocs/assets/img/button-tryagain.png',
  '/ocs/assets/img/clickme.png',
  '/ocs/assets/img/enclave-phaser-template.png',
  '/ocs/assets/img/fork.png',
  '/ocs/assets/img/loading-background.png',
  '/ocs/assets/img/logo-enclave.png',
  '/ocs/assets/img/overlay.png',
  '/ocs/assets/img/particle.png',
  '/ocs/assets/img/pattern.png',
  '/ocs/assets/img/title.png',
  '/ocs/assets/title.png',
  '/ocs/assets/images/heaven_castle.png',
	'/ocs/assets/images/quiz_background.png',
	'/ocs/assets/overlay.png',
  '/ocs/assets/rank.jpg',
  '/ocs/assets/game.jpg',
  '/ocs/assets/levelend.jpg',
  '/ocs/assets/images/girl.png',
  '/ocs/assets/textbox.png',
  '/ocs/assets/textbox_edit.png',
  '/ocs/assets/next.png',
  '/ocs/assets/images/helmet.png',
  '/ocs/assets/images/boots.png',
  '/ocs/assets/images/belt.png',
  '/ocs/assets/images/sword.png',
  '/ocs/assets/images/shield.png',
  '/ocs/assets/images/wings.png',
  '/ocs/assets/images/halo.png',
  '/ocs/assets/images/breastplate.png',
  '/ocs/assets/images/silhouette_girl.png',
  '/ocs/assets/images/girl_helmet.png',
  '/ocs/assets/images/girl_boots.png',
  '/ocs/assets/images/girl_breastplate.png',
  '/ocs/assets/images/girl_belt.png',
  '/ocs/assets/images/girl_sword.png',
  '/ocs/assets/images/girl_shield.png',
  '/ocs/assets/images/girl_wings.png',
  '/ocs/assets/images/girl_halo.png',
  '/ocs/assets/blue.png',
  '/ocs/assets/images/heaven.png',
	'/ocs/assets/images/rainbow.png',
	'/ocs/assets/images/intro_background.png',
  '/ocs/assets/shine.png',
	'/ocs/assets/images/Logos.png',
	'/ocs/assets/images/angel_harp.png',
	'/ocs/assets/images/armour_intro1.png',
	'/ocs/assets/images/armour_wings.png',
	'/ocs/assets/images/girl_intro.png',
  '/ocs/assets/button-start.png',
	'/ocs/assets/button-settings.png',
	'/ocs/assets/loader.png',
	'/ocs/assets/button-continue.png',
  '/ocs/assets/button-mainmenu.png',
  '/ocs/assets/button-tryagain.png',
  '/ocs/assets/button-achievements.png',
  '/ocs/assets/button-pause.png',
  '/ocs/assets/button-credits.png',
  '/ocs/assets/button-sound-on.png',
  '/ocs/assets/button-sound-off.png',
  '/ocs/assets/button-music-on.png',
  '/ocs/assets/button-music-off.png',
  '/ocs/assets/button-back.png',
  '/ocs/assets/columneffect.png',
  '/ocs/assets/images/heavensparkle.png',
	'/ocs/assets/fullscreen.png',
  '/ocs/assets/flares.png',
  '/ocs/assets/space.png',
	'/ocs/assets/images/frames.png',
  '/ocs/assets/images/level1.png',
	'/ocs/assets/images/scroll.png',
  '/ocs/assets/sfx/correct.mp3',
  '/ocs/assets/sfx/correct.ogg', 
  '/ocs/assets/sfx/correct.m4a',
  '/ocs/assets/sfx/incorrect.mp3',
  '/ocs/assets/sfx/incorrect.ogg', 
  '/ocs/assets/sfx/incorrect.m4a',
  '/ocs/assets/sfx/audio-button.m4a',
  '/ocs/assets/sfx/audio-button.mp3',
  '/ocs/assets/sfx/audio-button.ogg',
  '/ocs/assets/sfx/for-the-king.m4a',
  '/ocs/assets/sfx/for-the-king.mp3',
  '/ocs/assets/sfx/for-the-king.ogg',
  '/ocs/assets/sfx/award.m4a',
  '/ocs/assets/sfx/award.mp3',
  '/ocs/assets/sfx/award.ogg',
  '/ocs/assets/sfx/quiz.ogg', 
  '/ocs/assets/sfx/quiz.m4a', 
  '/ocs/assets/sfx/addaward.m4a',
  '/ocs/assets/sfx/addaward.mp3',
  '/ocs/assets/sfx/addaward.ogg',
  '/ocs/assets/purplebutton_shiney.png',
  '/ocs/assets/purplebutton.png',
  '/ocs/assets/space.json',
  '/ocs/assets/images/level1.json',
  '/ocs/assets/flares.json',
  '/ocs/assets/images/frames.json',
  '/ocs/assets/flares.json',
  '/ocs/assets/images/scroll.json'
];

self.addEventListener('install', function(event) {
  console.log('sw install');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw caching files');
      return cache.addAll(filesToCache);
    }).catch(function(err) {
      console.log(err);
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('sw fetch');
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      
      if (!response){
        console.log('No response found in cache.');

      }
      return response || fetch(event.request);
    }).catch(function (error) {

      
      console.log(error);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('sw activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('sw removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});






