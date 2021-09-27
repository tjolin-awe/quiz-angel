import {EPT, Button} from './utils'
export default class LevelEnd extends Phaser.Scene {
    constructor() {
        super('LevelEnd');
    }
    create() {
		EPT.Sfx.stopMusic('music-award');
		EPT.Sfx.playMusic('music-theme');
		this.add.image(0, 0, 'background').setOrigin(0,0);
		this.silohette = this.add.image(EPT.world.centerX, EPT.world.centerY, 'silhouette_girl').setOrigin(0.5);
		var particles = this.add.particles('spark');

		this.currentlevel = EPT.Storage.get('EPT-level');
		this.levels = this.cache.json.get('levels').levels; 	
		this.oldlevel = this.levels[this.currentlevel - 1];
		this.oldimage = this.add.image(EPT.world.centerX,EPT.world.centerY, this.oldlevel.rank_texture).setOrigin(0.5);

		this.currentlevel = this.currentlevel + 1;
		EPT.Storage.set('EPT-level', this.currentlevel);

		this.newlevel = this.levels[this.currentlevel - 1]; 	
	
		
		this.newimage = this.add.image(EPT.world.centerX,EPT.world.centerY, this.newlevel.rank_texture).setOrigin(0.5).setAlpha(0);
		EPT.Sfx.play('addaward');
		this.tweens.add({
            targets: this.newimage,
            alpha: { start: 0, from:0, to:1, ease:'Linear', duration:2000},
        });

		var fontName = { font: '62px '+EPT.text['FONT'], fill: '#ffffff', stroke: '#000', strokeThickness: 10, align: 'center', fixedWidth:400 };

		this.fontTitle = { font: '52px ' + EPT.text['FONT'], fill: '#3E2016',stroke:'#fff', strokeThickness: 10 };
		this.fontScroll = { font: '42px ' + EPT.text['FONT'], fill: '#3E2016',stroke:'#fff', strokeThickness: 5 };
		
		this.fontScrollTitle = { font: '48px ' + EPT.text['FONT'], fill: '#6A2D1B'};
		this.fontRank = { font: '42px ' + EPT.text['FONT'], fill: '#3E2016',stroke:'#fff', strokeThickness: 10 };
	
		this.fontMessage = { font: '100px ' + EPT.text['FONT'], fill: 'purple',stroke:'#fff', strokeThickness: 16 };
		this.fontNextLevel = { font: '72px ' + EPT.text['FONT'], fill: 'green',stroke:'#fff', strokeThickness: 10 };
	
		
		var player = EPT.Storage.get('EPT-player');


		this.textName = this.add.text(EPT.world.centerX, EPT.world.centerY - 300,player,fontName).setOrigin(0.5).setAlpha(0);
		
		if (this.newlevel.number < 9) {
		this.buttonContinue = new Button(EPT.world.centerX, EPT.world.height -100, 'button-continue', this.clickContinue, this);
		this.buttonContinue.setOrigin(0.5).setInteractive().setScale(0.7);
		

		//this.buttonContinue.x = EPT.world.width+this.buttonContinue.width+20;
		
	//	this.tweens.add({targets: this.buttonContinue, alpha: {start:255, from:255, to:128}, x: EPT.world.width-80, duration: 500, ease: 'Back'});
		this.buttonContinue.on('pointerover',()=> {
			this.tweens.add({targets: this.buttonContinue, scale: {start:0.7, from:0.7, to: 0.9}, duration: 500, ease: 'Back'});

		});
		this.buttonContinue.on('pointerout',()=> {
			this.tweens.add({targets: this.buttonContinue, scale: {start:0.9, from:0.9, to: 0.7}, duration: 500, ease: 'Back'});
		});
	}
		
		var strLevel = this.currentlevel > 9 ? this.currentlevel.toString() : '0'+this.currentlevel.toString();

		this.levelText = this.add.text(30,30,this.newlevel.name, this.fontTitle).setOrigin(0);
		//this.levelText.setStroke('#ddd', 3);
		//this.levelText.setShadow(5, 5, 'rgba(1,1,1,0.5)', 30,true,false);

		this.rankLabel = this.add.text(30,82,'Rank: ',this.fontRank).setOrigin(0);
		this.oldRank = this.add.text(this.rankLabel.x + this.rankLabel.width,82,this.oldlevel.rank,this.fontRank).setOrigin(0);

		this.rankText = this.add.text(this.rankLabel.x + this.rankLabel.width, 82, this.newlevel.rank, this.fontRank).setOrigin(0).setColor('green').setAlpha(0);		//this.rankText.setShadow(5, 5, 'rgba(1,1,1,0.5)', 30,true,false);

		var self = this;
		this.tweens.add({targets: this.oldRank, alpha:0, duration:1500, delay:100});
		this.tweens.add({targets: this.rankText, alpha:1, duration:1500, delay:100,
	onComplete: function() {
		self.tweens.add({
			targets: self.rankText,
			scaleX: 1.1,
			duration: 1500,
			ease: "Linear",
			yoyo: true,
			repeat:-1,
		})
	}});
       

		this.message = this.add.text(EPT.world.centerX, EPT.world.centerY - 300,this.oldlevel.level_message,this.fontMessage).setOrigin(0.5);

		var self =this;
		this.tweens.add({targets: this.message, scale: 1.2, yoyo:true, ease: 'Linear', duration:1000, 
		onComplete: function(){
			

				self.tweens.add({targets: self.message, x: EPT.world.width+self.message.width+20, ease:'Linear',duration:500,
			onComplete: function() {

			
				self.tweens.add({
					targets:self.message,
					scale: {start:1, from:1, to:1.3},
					yoyo: true,
					repeat: -1,
					duration:1000,
				});
			
		

				if (self.newlevel.number ===9) {

					self.message = self.add.text(EPT.world.centerX, EPT.world.centerY,'You\nearned\nyour\nwings!',self.fontMessage).setOrigin(0.5);
					self.message.setWordWrapWidth(600).setAlign('center').setAlpha(0).setColor('green');
			
					
					self.tweens.add({
						targets: self.message,
						alpha: {start:0, from:0, to:1},
						duration:500,
					});
					
					self.tweens.add({
						targets: [self.rankText, self.levelText],
						alpha: {start:1, from:1, to:0},
						duration: 1000,

					})
					self.silohette.destroy();
					self.oldimage.destroy();
					self.newimage.setDepth(999);
					self.tweens.add({
						targets: self.newimage,
						y: -self.newimage.height * 2,
						duration:4000,
						onComplete: function(){
							EPT.fadeOutScene('EndScene', self);				
						}

					});
				} else {
					self.tweens.add({targets: self.textName, alpha:{ start:0, from:0, to:1, ease:'Linear'}});
					var keepgoingText = self.add.text(EPT.world.centerX, EPT.world.height-220, 'Keep Going!',self.fontNextLevel).setOrigin(0.5);
					self.tweens.add({targets:keepgoingText, scale:1.1, yoyo:true, ease:'bounce.out',repeat:-1,duration:1000});
	
				}
			}});
				
			

		}});




		this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		this.keyEnter.on('down', function(key, event) { this.clickContinue(); }, this);

		this.cameras.main.fadeIn(250, 0, 0, 0);

		
		var emitter = particles.createEmitter();
	
		emitter.setPosition(EPT.world.centerX, EPT.world.centerY);
		emitter.setSpeed(600);
		emitter.setBlendMode(Phaser.BlendModes.ADD);

		if (this.newlevel.number < 9) {
		this.time.delayedCall(2000,()=>{
			emitter.explode();
		});
		} else {
			emitter.startFollow(this.newimage);
		}
	}
	clickContinue() {
		EPT.Sfx.play('click');
		EPT.fadeOutScene('Game', this);
	}
	stateBack() {
		EPT.Sfx.play('click');
		EPT.fadeOutScene('MainMenu', this);
	}
};