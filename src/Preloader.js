import {EPT} from './utils'
export default class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
	
    }
    preload() {
	
		this.add.image(0, 0, 'background').setOrigin(0, 0);
        var logoEnclave = this.add.sprite(EPT.world.centerX, EPT.world.centerY-100, 'logo');
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
				['title', 'assets/images/title.png'],
				['angel-cover', 'assets/images/quiz_angel_cover.png']
			],
			'spritesheet': [
				['button-start', 'assets/ui/button-start.png', {frameWidth:180,frameHeight:180}],
				['button-settings', 'assets/ui/button-settings.png', {frameWidth:80,frameHeight:80}],
				['loader', 'assets/ui/loader.png', {frameWidth:45,frameHeight:45}],
				['fullscreen', 'assets/ui/fullscreen.png', { frameWidth: 64, frameHeight: 64 }],
				['heavensparkle', 'assets/effects/heavensparkle.png', {frameWidth:640, frameHeight: 371}]
			]
			
		};
		for(var method in resources) {
			resources[method].forEach(function(args) {
				var loader = this.load[method];
				loader && loader.apply(this.load, args);
			}, this);
		};

		//this.load.atlas('bible_spritesheet','assets/bible_spritesheet.png', 'assets/bible_spritesheet.json');
		//this.load.json('characters', 'assets/bible_spritesheet.json');
		
				console.log('Preloader preload END');
    }
    create() {

		console.log('going to main menu')
		EPT.fadeOutScene('MainMenu', this);
	}
}