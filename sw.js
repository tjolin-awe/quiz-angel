var cacheName = 'SFG-QA-29';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        'http://localhost:1234/',
        'http://localhost:1234/index.html',
        'http://localhost:1234/assets/images/levelchars.png',
        'http://localhost:1234/assets/images/levelchars.json',
        'http://localhost:1234/assets/fonts/BRLNSDB.css',
        'http://localhost:1234/assets/fonts/BRLNSDB.eot',
        'http://localhost:1234/assets/fonts/BRLNSDB.otf',
        'http://localhost:1234/assets/fonts/BRLNSDB.svg',
        'http://localhost:1234/assets/fonts/BRLNSDB.ttf',
        'http://localhost:1234/assets/fonts/BRLNSDB.woff',
        'http://localhost:1234/assets/ui/button-achievements.png',
        'http://localhost:1234/assets/ui/button-back.png',
        'http://localhost:1234/assets/ui/button-continue.png',
        'http://localhost:1234/assets/ui/button-credits.png',
        'http://localhost:1234/assets/ui/button-home.png',
        'http://localhost:1234/assets/ui/button-mainmenu.png',
        'http://localhost:1234/assets/ui/button-music-off.png',
        'http://localhost:1234/assets/ui/button-music-on.png',
        'http://localhost:1234/assets/ui/button-pause.png',
        'http://localhost:1234/assets/ui/button-settings.png',
        'http://localhost:1234/assets/ui/button-sound-off.png',
        'http://localhost:1234/assets/ui/button-sound-on.png',
        'http://localhost:1234/assets/ui/button-start.png',
        'http://localhost:1234/assets/ui/button-tryagain.png',
        'http://localhost:1234/assets/ui/loading-background.png',
        'http://localhost:1234/assets/ui/overlay.png',
        'http://localhost:1234/assets/effects/particle.png',
        'http://localhost:1234/assets/backgrounds/pattern.png',
        'http://localhost:1234/assets/backgrounds/title.png',
        'http://localhost:1234/assets/images/heaven_castle.png',
        'http://localhost:1234/assets/backgrounds/quiz.png',
        'http://localhost:1234/assets/backgrounds/overlay.png',
        'http://localhost:1234/assets/images/girl.png',
        'http://localhost:1234/assets/ui/textbox.png',
        'http://localhost:1234/assets/ui/textbox_edit.png',
        'http://localhost:1234/assets/images/helmet.png',
        'http://localhost:1234/assets/images/boots.png',
        'http://localhost:1234/assets/images/belt.png',
        'http://localhost:1234/assets/images/sword.png',
        'http://localhost:1234/assets/images/shield.png',
        'http://localhost:1234/assets/images/wings.png',
        'http://localhost:1234/assets/images/halo.png',
        'http://localhost:1234/assets/images/breastplate.png',
        'http://localhost:1234/assets/images/silhouette_girl.png',
        'http://localhost:1234/assets/images/girl_helmet.png',
        'http://localhost:1234/assets/images/girl_boots.png',
        'http://localhost:1234/assets/images/girl_breastplate.png',
        'http://localhost:1234/assets/images/girl_belt.png',
        'http://localhost:1234/assets/images/girl_sword.png',
        'http://localhost:1234/assets/images/girl_shield.png',
        'http://localhost:1234/assets/images/girl_wings.png',
        'http://localhost:1234/assets/images/girl_halo.png',
        'http://localhost:1234/assets/effects/blue.png',
        'http://localhost:1234/assets/images/heaven.png',
        'http://localhost:1234/assets/images/rainbow.png',
        'http://localhost:1234/assets/images/intro_background.png',
        'http://localhost:1234/assets/effects/shine.png',
        'http://localhost:1234/assets/images/Logos.png',
        'http://localhost:1234/assets/images/angel_harp.png',
        'http://localhost:1234/assets/images/armour_intro1.png',
        'http://localhost:1234/assets/images/armour_wings.png',
        'http://localhost:1234/assets/images/girl_intro.png',
        'http://localhost:1234/assets/ui/loader.png',
        'http://localhost:1234/assets/effects/columneffect.png',
        'http://localhost:1234/assets/effects/heavensparkle.png',
        'http://localhost:1234/assets/ui/fullscreen.png',
        'http://localhost:1234/assets/effects/flares.png',
        'http://localhost:1234/assets/effects/space.png',
        'http://localhost:1234/assets/images/frames.png',
        'http://localhost:1234/assets/images/scroll.png',
        'http://localhost:1234/assets/sfx/correct.mp3',
        'http://localhost:1234/assets/sfx/correct.ogg',
        'http://localhost:1234/assets/sfx/correct.m4a',
        'http://localhost:1234/assets/sfx/incorrect.mp3',
        'http://localhost:1234/assets/sfx/incorrect.ogg',
        'http://localhost:1234/assets/sfx/incorrect.m4a',
        'http://localhost:1234/assets/sfx/audio-button.m4a',
        'http://localhost:1234/assets/sfx/audio-button.mp3',
        'http://localhost:1234/assets/sfx/audio-button.ogg',
        'http://localhost:1234/assets/music/for-the-king.m4a',
        'http://localhost:1234/assets/music/for-the-king.mp3',
        'http://localhost:1234/assets/music/for-the-king.ogg',
        'http://localhost:1234/assets/music/award.m4a',
        'http://localhost:1234/assets/music/award.mp3',
        'http://localhost:1234/assets/music/award.ogg',
        'http://localhost:1234/assets/music/quiz.ogg',
        'http://localhost:1234/assets/music/quiz.m4a',
        'http://localhost:1234/assets/music/addaward.m4a',
        'http://localhost:1234/assets/music/addaward.mp3',
        'http://localhost:1234/assets/music/addaward.ogg',
        'http://localhost:1234/assets/ui/purplebutton_shiney.png',
        'http://localhost:1234/assets/ui/purplebutton.png',
        'http://localhost:1234/assets/effects/space.json',
        'http://localhost:1234/assets/effects/flares.json',
        'http://localhost:1234/assets/images/frames.json',
        'http://localhost:1234/assets/images/scroll.json',
        'http://localhost:1234/assets/ui/logo-spirit-filled-games.png',
        'http://localhost:1234/assets/images/quiz_angel_cover.png',
        'http://localhost:1234/assets/images/title.png',
        'http://localhost:1234/assets/backgrounds/heaven.png',
        'http://localhost:1234/assets/backgrounds/intro.png',
        'http://localhost:1234/assets/ui/clickme.png',
        'http://localhost:1234/assets/levels/levels.json',
        'http://localhost:1234/assets/flare_0.png',

      ]);
    })
  );
});


self.addEventListener('fetch', function(e) {
  console.log('request:');
  console.log(e.request.url);

  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request).then(function(response) {
        return caches.open(cacheName).then(function(cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('sw activate');
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('sw removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

/*
self.addEventListener('fetch', (event) => {
  console.log('sw fetch');
  
  event.respondWith(
    caches.match(event.request).then(function(response) {
      
      if (!response){
        console.log('No response found in cache.');
        console.log(event.request.url);

      }
      return response || fetch(event.request);
    }).catch(function (error) {

      
      console.log(error);
    })
  );
});

self.addEventListener('fetch', function (e) {

  e.respondWith(
    caches.match(e.request).then(function (r) {
      if (!r) {
        console.log('No response found in cache. Fetching from network');
        console.log(e.request.url);
        return fetch(e.request)
      }
      return r || fetch(e.request).then(function (response) {
        return caches.open(cacheName).then(function (cache) {
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});






*/





