import {EPT} from './utils'
export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
		console.log('Preloader constructor');
    }
    preload() {
		console.log('Preloader preload START');
		this.add.sprite(0, 0, 'background').setOrigin(0, 0);
        var logoEnclave = this.add.sprite(EPT.world.centerX, EPT.world.centerY-100, 'logo-enclave');
        logoEnclave.setOrigin(0.5, 0.5);
		var loadingBg = this.add.sprite(EPT.world.centerX, EPT.world.centerY+100, 'loading-background');
		loadingBg.setOrigin(0.5, 0.5);

		var progress = this.add.graphics();
		this.load.on('progress', function (value) {
			progress.clear();
			progress.fillStyle(0xffde00, 1);
			progress.fillRect(loadingBg.x-(loadingBg.width*0.5)+20, loadingBg.y-(loadingBg.height*0.5)+10, 540 * value, 25);
		});

		var resources = {
			'image': [
				['title', 'assets/title.png'],
				['heaven-castle','assets/images/heaven_castle.png'],
				['quiz-background','assets/images/quiz_background.png'],
				['overlay', 'assets/overlay.png'],
                ['rank','assets/rank.jpg'],
                ['game','assets/game.jpg'],
                ['levelend','assets/levelend.jpg'],
                ['girl','assets/images/girl.png'],
                ['textbox','assets/textbox.png'],
                ['textbox_edit','assets/textbox_edit.png'],
                ['charnextbtn', 'assets/next.png'],
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
                ['spark','assets/blue.png'],
                ['heaven','assets/images/heaven.png'],
				['rainbow','assets/images/rainbow.png'],
				['intro_bg','assets/images/intro_background.png'],
				['shine','assets/shine.png'],
				['logos','assets/images/Logos.png'],
				['angel_harp','assets/images/angel_harp.png'],
				['armour_intro1', 'assets/images/armour_intro1.png'],
				['armour_wings','assets/images/armour_wings.png'],
				['girl_intro', 'assets/images/girl_intro.png'],
				['glass-panel', 'assets/purplebutton.png'],
				['glass-panel-active', 'assets/purplebutton_shiney.png']
				
				
			],
			'spritesheet': [
				['button-start', 'assets/button-start.png', {frameWidth:180,frameHeight:180}],
				['button-settings', 'assets/button-settings.png', {frameWidth:80,frameHeight:80}],
				['loader', 'assets/loader.png', {frameWidth:45,frameHeight:45}],
				['button-continue', 'assets/button-continue.png', {frameWidth:180,frameHeight:180}],
                ['button-mainmenu', 'assets/button-mainmenu.png', {frameWidth:180,frameHeight:180}],
                ['button-restart', 'assets/button-tryagain.png', {frameWidth:180,frameHeight:180}],
                ['button-achievements', 'assets/button-achievements.png', {frameWidth:110,frameHeight:110}],
                ['button-pause', 'assets/button-pause.png', {frameWidth:80,frameHeight:80}],
                ['button-credits', 'assets/button-credits.png', {frameWidth:80,frameHeight:80}],
                ['button-sound-on', 'assets/button-sound-on.png', {frameWidth:80,frameHeight:80}],
                ['button-sound-off', 'assets/button-sound-off.png', {frameWidth:80,frameHeight:80}],
                ['button-music-on', 'assets/button-music-on.png', {frameWidth:80,frameHeight:80}],
                ['button-music-off', 'assets/button-music-off.png', {frameWidth:80,frameHeight:80}],
                ['button-back', 'assets/button-back.png', {frameWidth:70,frameHeight:70}],
                ['column-effect', 'assets/columneffect.png', {frameWidth:192, frameHeight: 192}],
				
				['heavensparkle', 'assets/images/heavensparkle.png', {frameWidth:640, frameHeight: 371}],
				['fullscreen', 'assets/fullscreen.png', { frameWidth: 64, frameHeight: 64 }],
		
			
			],
			'atlas': [
				['flares', 'assets/flares.png', 'assets/flares.json'],
				['frames', 'assets/images/frames.png','assets/images/frames.json'],
				['flares', 'assets/flares.png', 'assets/flares.json'],
                ['space', 'assets/space.png', 'assets/space.json'],
				['level1', 'assets/images/level1.png', 'assets/images/level1.json'],
				['scroll', 'assets/images/scroll.png', 'assets/images/scroll.json'],
				
			],
			'json':[
				['levels', 'assets/levels.json'],
			],
			'audio':[
				['correct-sound', ['assets/sfx/correct.mp3','assets/sfx/correct.ogg', 'assets/sfx/correct.m4a']],
				['incorrect-sound', ['assets/sfx/incorrect.mp3','assets/sfx/incorrect.ogg', 'assets/sfx/incorrect.m4a']],
				['sound-click', ['assets/sfx/audio-button.m4a','assets/sfx/audio-button.mp3','assets/sfx/audio-button.ogg']],
                ['music-theme', ['assets/sfx/for-the-king.m4a','assets/sfx/for-the-king.mp3','assets/sfx/for-the-king.ogg']],
                ['music-award', ['assets/sfx/award.m4a','assets/sfx/award.mp3','assets/sfx/award.ogg']],
                ['music-quiz', ['assets/sfx/quiz.ogg', 'assets/sfx/quiz.m4a', 'assets/sfx/for-the-king.mp3']],
                ['addaward', ['assets/sfx/addaward.m4a','assets/sfx/addaward.mp3','assets/sfx/addaward.ogg']],
			
               
			],
		};
		for(var method in resources) {
			resources[method].forEach(function(args) {
				var loader = this.load[method];
				loader && loader.apply(this.load, args);
			}, this);
		};

		this.load.atlas('bible_spritesheet','assets/bible_spritesheet.png', 'assets/bible_spritesheet.json');
		this.load.json('characters', 'assets/bible_spritesheet.json');
		
				console.log('Preloader preload END');
    }
    create() {

		console.log('going to main menu')
		EPT.fadeOutScene('MainMenu', this);
	}
}