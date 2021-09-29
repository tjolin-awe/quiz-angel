import {EPT, Button} from './utils'
export default class MainMenu extends Phaser.Scene {
    constructor() {
        super('MainMenu');
        this.bgFilesLoaded = false;
    }
    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);


		EPT.Storage.initUnset('EPT-highscore', 0);
		var highscore = EPT.Storage.get('EPT-highscore');

        this.sparkles = this.add.sprite(EPT.world.centerX,EPT.world.centerY).setScale(2);
        this.anims.create({
            key: 'sparkle',
            frames: this.anims.generateFrameNumbers('heavensparkle', { frames: [ 0, 1, 2, 3, 2, 1, 0] }),
            frameRate: 3,
            repeat:-1,
            
        });
        
        this.sparkles.play('sparkle');
      
        this.add.image(EPT.world.centerX, EPT.world.centerY - 300,'title').setOrigin(0.5).setPipeline('Light2D');
        EPT.Storage.initUnset('EPT-player','');
        EPT.Storage.initUnset('EPT-level',1);
        EPT.Storage.initUnset('EPT-rank','private');
        var spotlight = this.lights.addLight(EPT.world.centerX, EPT.world.centerY -350, 2000).setIntensity(2);
       
        //var spotlight = this.lights.addLight(EPT.world.centerX, EPT.world.centerY, 2000).setIntensity(1);
        this.angel = this.add.image(EPT.world.centerX, EPT.world.centerY + 50,'angel-cover').setOrigin(0.5);
        
   
        this.tweens.add({
                    targets: this.angel,
                    y: EPT.world.centerY + 40,
                    yoyo: true,
                    duration: 1000,
                    repeat: -1,

            });
        


 
    this.lights.enable();
    this.lights.setAmbientColor(0x808080);

    

   
  
        this.waitingForSettings = false;

        //var title = this.add.sprite(EPT.world.centerX, EPT.world.centerY-50, 'title');
        //title.setOrigin(0.5);
        var fontHighscore = { font: '38px '+EPT.text['FONT'], fill: '#ffde00', stroke: '#000', strokeThickness: 5 };
	
       
        
        this.input.keyboard.on('keydown', this.handleKey, this);

        
        this.buttonSettings = new Button(20, 20, 'button-settings', this.clickSettings, this);
        this.buttonSettings.setOrigin(0, 0);

        this.buttonStart = new Button(EPT.world.width-20, EPT.world.height-20, 'button-start', this.clickStart, this);
        this.buttonStart.setOrigin(1, 1);

		
		this.buttonStart.x = EPT.world.width+this.buttonStart.width+20;
        this.tweens.add({targets: this.buttonStart, x: EPT.world.width-20, duration: 500, ease: 'Back'});

		
        this.buttonSettings.y = -this.buttonSettings.height-20;
        this.tweens.add({targets: this.buttonSettings, y: 20, duration: 500, ease: 'Back'});

        var button = this.add.image(EPT.world.width-16, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();

        button.on('pointerup', function () {

            if (this.scale.isFullscreen)
            {
                button.setFrame(0);

                this.scale.stopFullscreen();
            }
            else
            {
                button.setFrame(1);

                this.scale.startFullscreen();
            }

        }, this);
        this.cameras.main.fadeIn(250);

        if(!this.bgFilesLoaded) {
            this.time.addEvent({
                delay: 500,
                callback: function() {
                    this.startPreloadInTheBackground();
                },
                callbackScope: this
            }, this);
        }
    }
    handleKey(e) {
        switch(e.code) {
            case 'KeyS': {
                this.clickSettings();
                break;
            }
            case 'Enter': {
                this.clickStart();
                break;
            }
            default: {}
        }
    }
    clickEnclave() {
        EPT.Sfx.play('click');
        window.top.location.href = 'http://savingus.org/';
    }
    clickSettings() {
        if(this.bgFilesLoaded) {
            EPT.Sfx.play('click');
            if(this.loadImage) {
                this.loadImage.destroy();
            }
            EPT.fadeOutScene('Settings', this);
        }
        else {
            var animationFrames = this.anims.generateFrameNumbers('loader');
            animationFrames.pop();
            this.waitingForSettings = true;
            this.buttonSettings.setAlpha(0.1);
            var loadAnimation = this.anims.create({
                key: 'loading',
                frames: animationFrames,
                frameRate: 12,
                repeat: -1
            });
            this.loadImage = this.add.sprite(30, 30, 'loader').setOrigin(0,0).setScale(1.25);
            this.loadImage.play('loading');
        }
    }
    clickStart() {
        if(this.bgFilesLoaded) {
            EPT.Sfx.play('click');
            if(this.loadImage) {
                this.loadImage.destroy();
            }

            EPT.fadeOutScene('Character', this);
            
        }
        else {
            var animationFrames = this.anims.generateFrameNumbers('loader');
            animationFrames.pop();
            this.waitingForStart = true;
            this.buttonStart.setAlpha(0.1);
            var loadAnimation = this.anims.create({
                key: 'loading',
                frames: animationFrames,
                frameRate: 12,
                repeat: -1
            });
            this.loadImage = this.add.sprite(EPT.world.width-85, EPT.world.height-85, 'loader').setOrigin(1,1).setScale(1.25);
            this.loadImage.play('loading');
        }
    }
    startPreloadInTheBackground() {
        console.log('[EPT] Starting background loading...');
        this.load.image('assets/ui/clickme');
        this.load.once('filecomplete', this.addFiles, this);
       
        this.load.start();
    }
    addFiles() {
       
        var resources = {
			'image': [
				
				['heaven-castle','assets/images/heaven_castle.png'],
				['quiz-background','assets/backgrounds/quiz.png'],
				['overlay', 'assets/backgrounds/overlay.png'],
                ['girl','assets/images/girl.png'],
                ['textbox','assets/ui/textbox.png'],
                ['textbox_edit','assets/ui/textbox_edit.png'],
                ['helmet','assets/images/helmet.png'],
                ['boots','assets/images/boots.png'],
                ['belt','assets/images/belt.png'],
                ['sword','assets/images/sword.png'],
                ['shield','assets/images/shield.png'],
                ['wings','assets/images/wings.png'],
                ['halo','assets/images/halo.png'],
                ['breastplate','assets/images/breastplate.png'],
                ['silhouette_girl','assets/images/silhouette_girl.png'],
                ['girl_helmet','assets/images/girl_helmet.png'],
                ['girl_boots','assets/images/girl_boots.png'],
                ['girl_breastplate','assets/images/girl_breastplate.png'],
                ['girl_belt','assets/images/girl_belt.png'],
                ['girl_sword','assets/images/girl_sword.png'],
                ['girl_shield','assets/images/girl_shield.png'],
                ['girl_wings','assets/images/girl_wings.png'],
                ['girl_halo','assets/images/girl_halo.png'],
                ['spark','assets/effects/blue.png'],
                ['heaven','assets/backgrounds/heaven.png'],
				['rainbow','assets/images/rainbow.png'],
				['intro_bg','assets/backgrounds/intro.png'],
				['shine','assets/effects/shine.png'],
				['logos','assets/images/Logos.png'],
				['angel_harp','assets/images/angel_harp.png'],
				['armour_intro1', 'assets/images/armour_intro1.png'],
				['armour_wings','assets/images/armour_wings.png'],
				['girl_intro', 'assets/images/girl_intro.png'],
				['glass-panel', 'assets/ui/purplebutton.png'],
				['glass-panel-active', 'assets/ui/purplebutton_shiney.png'],
                ['flare0','assets/effects/flare_0.png'],
               
				
				
			],
			'spritesheet': [
				['button-continue', 'assets/ui/button-continue.png', {frameWidth:180,frameHeight:180}],
                ['button-mainmenu', 'assets/ui/button-mainmenu.png', {frameWidth:180,frameHeight:180}],
                ['button-restart', 'assets/ui/button-tryagain.png', {frameWidth:180,frameHeight:180}],
                ['button-achievements', 'assets/ui/button-achievements.png', {frameWidth:110,frameHeight:110}],
                ['button-pause', 'assets/ui/button-pause.png', {frameWidth:80,frameHeight:80}],
                ['button-credits', 'assets/ui/button-credits.png', {frameWidth:80,frameHeight:80}],
                ['button-sound-on', 'assets/ui/button-sound-on.png', {frameWidth:80,frameHeight:80}],
                ['button-sound-off', 'assets/ui/button-sound-off.png', {frameWidth:80,frameHeight:80}],
                ['button-music-on', 'assets/ui/button-music-on.png', {frameWidth:80,frameHeight:80}],
                ['button-music-off', 'assets/ui/button-music-off.png', {frameWidth:80,frameHeight:80}],
                ['button-back', 'assets/ui/button-back.png', {frameWidth:70,frameHeight:70}],
                ['column-effect', 'assets/effects/columneffect.png', {frameWidth:192, frameHeight: 192}],
				
				
				['fullscreen', 'assets/ui/fullscreen.png', { frameWidth: 64, frameHeight: 64 }]
		
			
			],
            'atlas': [
				['frames', 'assets/images/frames.png','assets/images/frames.json'],
				['flares', 'assets/effects/flares.png', 'assets/effects/flares.json'],
				['scroll', 'assets/images/scroll.png', 'assets/images/scroll.json'],
              
				
			],
			'json':[
				['levels', 'assets/levels/levels.json'],
			],
			
			'audio':[
				['correct-sound', ['assets/sfx/correct.mp3','assets/sfx/correct.ogg', 'assets/sfx/correct.m4a']],
				['incorrect-sound', ['assets/sfx/incorrect.mp3','assets/sfx/incorrect.ogg', 'assets/sfx/incorrect.m4a']],
				['sound-click', ['assets/sfx/audio-button.m4a','assets/sfx/audio-button.mp3','assets/sfx/audio-button.ogg']],
                ['music-theme', ['assets/music/for-the-king.m4a','assets/music/for-the-king.mp3','assets/music/for-the-king.ogg']],
                ['music-award', ['assets/music/award.m4a','assets/music/award.mp3','assets/music/award.ogg']],
                ['music-quiz', ['assets/music/quiz.ogg', 'assets/music/quiz.m4a', 'assets/music/quiz.mp3']],
                ['addaward', ['assets/music/addaward.m4a','assets/music/addaward.mp3','assets/music/addaward.ogg']]
			
               
			],
		};   
     
        for(var method in resources) {
            
            resources[method].forEach(function(args) {
                
               
                var loader = this.load[method];
                loader && loader.apply(this.load, args);
            }, this);
        };
        this.load.on('complete', function(){
            console.log('[EPT] All files loaded in the background.');
            this.bgFilesLoaded = true;
                EPT.Sfx.manage('music', 'init', this);
              EPT.Sfx.manage('sound', 'init', this);
            if(this.waitingForSettings) {
                this.clickSettings();
            }
            if(this.waitingForStart) {
               
                this.clickStart();
            }            
        }, this);
    }
}