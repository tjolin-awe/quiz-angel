var cacheName = 'EPT-v3-OCS';
var filesToCache= [
  './',
  './index.html',
  './favicon.ico',
  './assets/fonts/BRLNSDB.css',
  './assets/fonts/BRLNSDB.eot',
  './assets/fonts/BRLNSDB.otf',
  './assets/fonts/BRLNSDB.svg',
  './assets/fonts/BRLNSDB.ttf',
  './assets/fonts/BRLNSDB.woff',
  './assets/sfx/audio-button.m4a',
  './assets/sfx/audio-button.mp3',
  './assets/sfx/audio-button.ogg',
  './assets/sfx/music-bitsnbites-liver.m4a',
  './assets/sfx/music-bitsnbites-liver.mp3',
  './assets/sfx/music-bitsnbites-liver.ogg',
  './assets/img/icons/icon-32.png',
  './assets/img/icons/icon-64.png',
  './assets/img/icons/icon-96.png',
  './assets/img/icons/icon-128.png',
  './assets/img/icons/icon-168.png',
  './assets/img/icons/icon-192.png',
  './assets/img/icons/icon-256.png',
  './assets/img/icons/icon-512.png',
  './src/phaser.3.55.0.min.js',
  './src/plugins/webfont.js',
  './src/start.js',
  './src/Boot.js',
  './src/Preloader.js',
  './src/MainMenu.js',
  './src/Settings.js',
  './src/Story.js',
  './src/Game.js',
  './src/Award.js',
  './src/Difficulty.js',
  './src/EndScene.js',
  './src/Rank.js',
  './sw.js',
  './src/utils',
  './src/Character.js',
  './src/LevelEnd.js',
  './assets/img/background.png',
  './assets/img/banner-beer.png',
  './assets/img/button-achievements.png',
  './assets/img/button-back.png',
  './assets/img/button-beer.png',
  './assets/img/button-continue.png',
  './assets/img/button-credits.png',
  './assets/img/button-home.png',
  './assets/img/button-mainmenu.png',
  './assets/img/button-music-off.png',
  './assets/img/button-music-on.png',
  './assets/img/button-pause.png',
  './assets/img/button-settings.png',
  './assets/img/button-sound-off.png',
  './assets/img/button-sound-on.png',
  './assets/img/button-start.png',
  './assets/img/button-tryagain.png',
  './assets/img/clickme.png',
  './assets/img/enclave-phaser-template.png',
  './assets/img/fork.png',
  './assets/img/loading-background.png',
  './assets/img/logo-enclave.png',
  './assets/img/overlay.png',
  './assets/img/particle.png',
  './assets/img/pattern.png',
  './assets/img/title.png',
  './assets/title.png',
  './assets/images/heaven_castle.png',
	'./assets/images/quiz_background.png',
	'./assets/overlay.png',
  './assets/rank.jpg',
  './assets/game.jpg',
  './assets/levelend.jpg',
  './assets/images/girl.png',
  './assets/textbox.png',
  './assets/textbox_edit.png',
  './assets/next.png',
  './assets/images/helmet.png',
  './assets/images/boots.png',
  './assets/images/belt.png',
  './assets/images/sword.png',
  './assets/images/shield.png',
  './assets/images/wings.png',
  './assets/images/halo.png',
  './assets/images/breastplate.png',
  './assets/images/silhouette_girl.png',
  './assets/images/girl_helmet.png',
  './assets/images/girl_boots.png',
  './assets/images/girl_breastplate.png',
  './assets/images/girl_belt.png',
  './assets/images/girl_sword.png',
  './assets/images/girl_shield.png',
  './assets/images/girl_wings.png',
  './assets/images/girl_halo.png',
  './assets/blue.png',
  './assets/images/heaven.png',
	'./assets/images/rainbow.png',
	'./assets/images/intro_background.png',
  './assets/shine.png',
	'./assets/images/Logos.png',
	'./assets/images/angel_harp.png',
	'./assets/images/armour_intro1.png',
	'./assets/images/armour_wings.png',
	'./assets/images/girl_intro.png',
  './assets/button-start.png',
	'./assets/button-settings.png',
	'./assets/loader.png',
	'./assets/button-continue.png',
  './assets/button-mainmenu.png',
  './assets/button-tryagain.png',
  './assets/button-achievements.png',
  './assets/button-pause.png',
  './assets/button-credits.png',
  './assets/button-sound-on.png',
  './assets/button-sound-off.png',
  './assets/button-music-on.png',
  './assets/button-music-off.png',
  './assets/button-back.png',
  './assets/columneffect.png',
  './assets/images/heavensparkle.png',
	'./assets/fullscreen.png',
  './assets/flares.png',
  './assets/space.png',
	'./assets/images/frames.png',
  './assets/images/level1.png',
	'./assets/images/scroll.png',
  './assets/sfx/correct.mp3',
  './assets/sfx/correct.ogg', 
  './assets/sfx/correct.m4a',
  './assets/sfx/incorrect.mp3',
  './assets/sfx/incorrect.ogg', 
  './assets/sfx/incorrect.m4a',
  './assets/sfx/audio-button.m4a',
  './assets/sfx/audio-button.mp3',
  './assets/sfx/audio-button.ogg',
  './assets/sfx/for-the-king.m4a',
  './assets/sfx/for-the-king.mp3',
  './assets/sfx/for-the-king.ogg',
  './assets/sfx/award.m4a',
  './assets/sfx/award.mp3',
  './assets/sfx/award.ogg',
  './assets/sfx/quiz.ogg', 
  './assets/sfx/quiz.m4a', 
  './assets/sfx/addaward.m4a',
  './assets/sfx/addaward.mp3',
  './assets/sfx/addaward.ogg',
  './assets/purplebutton_shiney.png',
  './assets/purplebutton.png',
  './assets/space.json',
  './assets/images/level1.json',
  './assets/flares.json',
  './assets/images/frames.json',
  './assets/flares.json',
  './assets/images/scroll.json'
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

/*
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      console.log('fetching');
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});*/
