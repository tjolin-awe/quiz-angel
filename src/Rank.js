import {EPT, Button} from './utils'
export default class Rank extends Phaser.Scene {
    constructor() {
        super('Rank');
    }
    create() {

		this.currentlevel = EPT.Storage.get('EPT-level');

		console.log(this.currentlevel);
		if (this.currentlevel >= 9){
			EPT.Storage.set('EPT-level',1);
			this.currentlevel = 1;
		}
		
		this.level = this.cache.json.get('levels').levels[this.currentlevel - 1]; 

		
		
		this.add.image(0, 0, 'background').setOrigin(0,0);

		this.add.image(EPT.world.centerX, EPT.world.centerY, 'silhouette_girl').setOrigin(0.5);

		this.add.image(EPT.world.centerX,EPT.world.centerY, this.level.rank_texture).setOrigin(0.5);
		var fontName = { font: '62px '+EPT.text['FONT'], fill: '#ffffff', stroke: '#000', strokeThickness: 10, align: 'center', fixedWidth:400 };


		this.fontTitle = { font: '52px ' + EPT.text['FONT'], fill: '#3E2016',stroke:'#fff', strokeThickness: 10 };
	
		this.fontScroll = { font: '42px ' + EPT.text['FONT'], fill: '#3E2016',stroke:'#fff', strokeThickness: 5 };
		
		this.fontScrollTitle = { font: '48px ' + EPT.text['FONT'], fill: '#6A2D1B'};
		this.fontRank = { font: '42px ' + EPT.text['FONT'], fill: '#3E2016',stroke:'#fff', strokeThickness: 10 };
	
		
		var player = EPT.Storage.get('EPT-player');


		this.add.text(EPT.world.centerX, EPT.world.centerY - 300,player,fontName).setOrigin(0.5); 
		this.buttonContinue = new Button(EPT.world.centerX, EPT.world.height -155, 'button-continue', this.clickContinue, this);
		this.buttonContinue.setOrigin(0.5).setInteractive().setScale(0.7);

		//this.buttonContinue.x = EPT.world.width+this.buttonContinue.width+20;
		
	//	this.tweens.add({targets: this.buttonContinue, alpha: {start:255, from:255, to:128}, x: EPT.world.width-80, duration: 500, ease: 'Back'});
		this.buttonContinue.on('pointerover',()=> {
			this.tweens.add({targets: this.buttonContinue, scale: {start:0.7, from:0.7, to: 1}, duration: 500, ease: 'Back'});

		});
		this.buttonContinue.on('pointerout',()=> {
			this.tweens.add({targets: this.buttonContinue, scale: {start:1, from:1, to: 0.7}, duration: 500, ease: 'Back'});
		});
		
	

		this.levelText = this.add.text(30,30,this.level.name, this.fontTitle).setOrigin(0);
		//this.levelText.setStroke('#ddd', 3);
		//this.levelText.setShadow(5, 5, 'rgba(1,1,1,0.5)', 30,true,false);

		this.rankText = this.add.text(EPT.world.width+250, 82, `Rank: ${this.level.rank}`, this.fontRank).setOrigin(0);
		//this.rankText.setShadow(5, 5, 'rgba(1,1,1,0.5)', 30,true,false);

		this.tweens.add({targets: this.rankText, x:30, duration:500, delay:100, ease: 'Back'});
      


		this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		this.keyEnter.on('down', function(key, event) { this.clickContinue(); }, this);

		this.cameras.main.fadeIn(250, 0, 0, 0);
	}
	clickContinue() {
		EPT.Sfx.play('click');
		EPT.fadeOutScene('Game', this);
	}
};