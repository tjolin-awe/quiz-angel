import { EPT, Button } from './utils'
export default class Game extends Phaser.Scene {
	constructor() {
		super('Game');
	}

	preload() {

		
	}

	shuffle(array) {
		var currentIndex = array.length,  randomIndex;
	  
		// While there remain elements to shuffle...
		while (currentIndex != 0) {
	  
		  // Pick a remaining element...
		  randomIndex = Math.floor(Math.random() * currentIndex);
		  currentIndex--;
	  
		  // And swap it with the current element.
		  [array[currentIndex], array[randomIndex]] = [
			array[randomIndex], array[currentIndex]];
		}
	  
		return array;
	  }

	
	selectSprite(sprite){

		if (this.itemClicked)
			return;
		else 
			this.itemClicked = true;
		
		if (this.scrollemitter)
					this.scrollemitter.explode();

				this.scrollTextTitle.setVisible(false);
				this.scrollText.setVisible(false);
				this.scroll.play('close');
			

				var correct = this.level.quiz[this.currentQuestion].correct_picture === sprite.frame.name;
				console.log('correct picture picked');

				this.selectedCharacter = sprite;
				this.selectedFrame = this.persons[sprite.index].frame;
				sprite.setDepth(999);
				this.buttonRestart.setDepth(999);
				this.zoomName.setDepth(999);
				EPT.Sfx.play('click');
				var self = this;

				var index = sprite.index;

				var label = this.persons[index].label;
				var frame = this.persons[index].frame;

				var othersprites = [];

				this.persons.forEach((person) => {

					person.sprite.input = false;
					if (person.sprite.index != index) {

						person.label.setVisible(false);
						othersprites.push(person.sprite);
						othersprites.push(person.label);
						othersprites.push(person.frame);
					}
				});


				var runOnce = false;
				var runOnce2 = false;
				this.tweens.add({
					targets: [frame, label, sprite],
					y: '-=10',
					duration: 300,
					yoyo: true,
					oncomplete: function () {



						if (!runOnce) {

							self.tweens.add({
								targets: [self.levelText, self.buttonPause],
								alpha: {start:1, from:1, to:0},
								duration:500,

							})

/*
							othersprites.forEach((element)=>{
								if (element.index == 0 || element.index == 1){
									self.tweens.add({
										targets: element,
										y: -100,
										duration:1000,

									})
								} else {
									if (element.index == 2){
										self.tweens.add({
											targets: element,
											x: -100,
											duration:1000,
	
										})
									} 
									else 
									{
										self.tweens.add({
											targets: element,
											x: EPT.world.width + 100,
											duration:1000,
	
										})
									}
								}
							});
*/
						   
	
							self.tweens.add({
								targets: othersprites,
								scale: 0,
								ease: 'power2',
								duration: 600,
								//delay: self.tweens.stagger(100, { grid: [4, 4], from: 'center' }),
								onComplete: function () {


									if (!runOnce2) {

										
										if (correct){
									

											self.emitter = self.particles.createEmitter({
											x: EPT.world.centerX,
											y: EPT.world.centerY,
					
											speed: { min: -100, max: 500 },
											gravityY: 200,
											scale: { start: 2, end: 1 },
											lifespan: 800,
											blendMode: 'SCREEN'
										});
									}
									label.setVisible(false);
									self.zoomName.setText(label.text);

									self.tweens.add({
										targets: self.zoomName,
										alpha: 1,
										duration: 100,
										y: EPT.world.height - (self.zoomName.height + 30)

									})
									self.tweens.add({
										targets: [frame],
										x: EPT.world.centerX,
										y: EPT.world.height - 140,
										duration: 1000,
										scale: 1.1,
										ease: 'Back'
									});

									self.tweens.add({
										targets: [sprite],
										x: EPT.world.centerX,
										y: EPT.world.height - 330,
										duration: 1000,
										scale: sprite.scale - 0.2 + 1,
										ease: 'Back',
										onComplete: function () {


										
										


										}
									});


									if (correct) {
										self.msg.setText('Correct!');
										EPT.Sfx.play('correct');

									}
									else {
										EPT.Sfx.play('incorrect');
										self.msg.setText('Oops!');
										sprite.setTint(0xff0000);

										var correctImage = self.persons[self.correctIndex].sprite;
										correctImage.alpha = 0;

										correctImage.scale = self.level.quiz[self.currentQuestion].characters[self.correctIndex].scale - 0.2 + 1;
										correctImage.setDepth(999);
										correctImage.y = EPT.world.height - 330;
										correctImage.x = EPT.world.centerX;
										self.gameOver = true;

									}

									self.msg.y = -self.msg.height - 200;

									self.tweens.add({
										targets: self.msg,
										y: 150,
										ease: 'Bounce',
										duration: 1000,
										onComplete: function () {

											if (!correct) {


												self.tweens.add({
													targets: correctImage,
													alpha: 1,
													duration: 3000,
												})
												self.tweens.add({
													targets: sprite,
													alpha: 0,
													duration: 3000,

													onComplete: function () {

														self.zoomName.setColor('#ff0000');
														self.zoomName.setText("Correct Answer is\n " + self.persons[self.correctIndex].label.text).setAlign('center');
													}
												})
											} 

												self.tweens.add({
													targets: self.msg,
													y: -(self.msg.height + 20),
													duration: 1000,
												});
												self.tweens.add({
													targets: self.infoText,
													alpha: {start:0, from:0, to:1},
													duration: 500,
													oncomplete: function() {

														self.tweens.add({
															targets: self.infoText,
															scale: 1.1,
															duration: 1000,
															yoyo:true,
															oncomplete: function(){

																self.buttonRestart.y = self.infoText.getBottomCenter().y + 40,
																self.buttonRestart.setVisible(true);
																self.tweens.add({
																	targets: self.buttonRestart,
																	scale: { start: 0.5, from: 0.5, to: 0.6 },
																	yoyo: true,
																	duration: 1000,
																	repeat: -1,
																	})
																}
														
																
														})
														
													}
												});
												console.log(self.infoText.text);
											

										
											

											othersprites.forEach((sprite) => {
												//sprite.destroy();
											});
										}
									});
									runOnce2 = true;
								}


								}

							});
							runOnce = true;
						}
					}

				});

	}

	loadInitialQuestion() {


		this.persons = [];

		this.frames = [];
		this.frames.push({ x: 180, y: 190, labelx: 180, labely: 305 });
		this.frames.push({ x: 465, y: 190, labelx: 465, labely: 305 });
		this.frames.push({ x: 180, y: 480, labelx: 180, labely: 580 });
		this.frames.push({ x: 465, y: 480, labelx: 465, labely: 580 });

		this.scrollTextTitle.setText(`QUESTION ${this.currentQuestion + 1} of 10`);

		this.infoText.setFontSize(this.level.quiz[this.currentQuestion].info_fontsize);
		this.infoText.setText(this.level.quiz[this.currentQuestion].additional_info);
		this.infoText.setAlpha(0);
		console.log(this.level.quiz[this.currentQuestion]);

		
		console.log(`Current Question ${this.currentQuestion}`);
		let i = 0;

		
	    this.quiz[this.currentQuestion].characters = this.shuffle(this.quiz[this.currentQuestion].characters);
		
		this.quiz[this.currentQuestion].characters.forEach(character => {


		
			var frame = this.add.sprite(this.frames[i].x, this.frames[i].y, 'frames', `${i.toString()}.png`).setOrigin(0.5).setScale(0.29);
			frame.setAlpha(0);
			this.particles = this.add.particles('flare0');
			var sprite;


			if (this.level.quiz[this.currentQuestion].correct_picture === character.picture)
				this.correctIndex = i;

			//if (i == 1)
		
			sprite = this.add.sprite(this.frames[i].x, this.frames[i].y - 15, this.level.character_spritesheet, character.picture).setScale(character.scale).setOrigin(0.5);
			sprite.setAlpha(0);
			//else
			//	sprite = this.add.sprite(this.frames[i].x, this.frames[i].y - 15, this.level.character_spritesheet, character.picture).setScale(0.5).setOrigin(0.5);

			var label = this.add.text(this.frames[i].labelx, this.frames[i].labely, character.name, this.fontName).setOrigin(0.5).setAlign('center').setAlpha(0);
			label.setFontSize(character.fontSize);
			sprite.index = i;
			frame.index =i;
			label.index =i;
			sprite.x += character.xoffset;
			sprite.y += character.yoffset;
			label.x += character.labelxoffset;
			label.y += character.labelyoffset;

			sprite.setInteractive({useHandCursor:true});
			label.setInteractive({useHandCursor:true});
			frame.setInteractive({useHandCursor:true});

			sprite.once('pointerdown', () => {

				this.selectSprite(sprite);
				
			});

			frame.once('pointerdown', () => {

				
				this.selectSprite(this.persons[frame.index].sprite);
				
			});
			label.once('pointerdown', () => {

				this.selectSprite(this.persons[label.index].sprite);
				
			});


			this.persons.push({ sprite: sprite, label: label, frame: frame, index: i });
			i++;
		});


		var allsprites = [];
		var alllabels = [];

		this.persons.forEach((person) => {
			alllabels.push(person.label);
		
			allsprites.push(person.frame);
			allsprites.push(person.sprite);
		});


		var self = this;

		console.log('tweens starting');
		
		//  Stagger tween them all in
		this.tweens.add({
			targets: allsprites,
			alpha: { start: 0, from: 0, to: 1 },
			duration: 600,
			onComplete: function () {

				console.log('finished allsprites fade in');
				self.tweens.add({
					targets: alllabels,
					alpha: { start: 0, from: 0, to: 1 },
					duration: 600,

					onComplete: function () {
						console.log('finished label fade in');
					}
				});
			}
		});


	
		

	    
        this.scroll.play('open');
		var self = this;
		this.scroll.once('animationcomplete', function(){ ///this refers to an arcade sprite.

			self.scrollTextTitle.setVisible(true);
			self.scrollText.setText('');
			self.scrollText.setVisible(true);
			self.scrollemitter = self.particlesscroll.createEmitter({
				x: EPT.world.centerX,
				y: 700,

				speed: { min: -100, max: 500 },
				gravityY: 200,
				scale: { start: 2, end: 1 },
				lifespan: 800,
				blendMode: 'SCREEN'
			});
			
			self.typeWriterText(self.quiz[self.currentQuestion].question);


		}, this);


	}

	create() {

		if (this.emitter)
			this.emitter.stop();

		

		this.itemClicked = false;
   
		this.currentQuestion = 0;
		this.gameOver = false;
		this.fontMessage = { font: '150px ' + EPT.text['FONT'], fill: 'purple', stroke: '#fff', strokeThickness: 16 };

		this.fontZoomName = { font: '72px ' + EPT.text['FONT'], fill: 'black', stroke: '#fff', strokeThickness: 16 };

		this.fontInfo = { font: '36px ' + EPT.text['FONT'], fill: 'white', stroke: '#000', strokeThickness: 6 };

		EPT.Sfx.stopMusic('music-theme');
		EPT.Sfx.playMusic('music-quiz');
		this.currentlevel = EPT.Storage.get('EPT-level');
		this.level = this.cache.json.get('levels').levels[this.currentlevel - 1];
		this.quiz = this.level.quiz;


		this.gamebg = this.add.image(0, 0, 'quiz-background').setOrigin(0);

		
		this.anims.create({
			key: 'open',
			frames: this.anims.generateFrameNames('scroll',{ 
					prefix: "scroll",
					suffix: ".png",
					start: 1,				
					end: 5,
					zeroPad: 0,
					frameRate:10,
				}),
				
			});

			this.anims.create({
				key: 'close',
				frames: this.anims.generateFrameNames('scroll',{ 
						prefix: "scroll",
						suffix: ".png",
						start: 5,				
						end: 1,
						zeroPad: 0,
						frameRate:10,
					}),
					
				});

	this.particlesscroll = this.add.particles('flare0');
	this.scroll = this.add.sprite(EPT.world.centerX,780).setOrigin(0.5,0.5);
		this.allcharacters = this.cache.json.get('characters');



		this._gamePaused = false;


		this.fontScore = { font: '52px ' + EPT.text['FONT'], fill: '#ffde00', stroke: '#000', strokeThickness: 5 };
		this.fontName = { font: '32px ' + EPT.text['FONT'], fill: '#fff', stroke: '#000', strokeThickness: 5 };
		this.fontTitle = { font: '52px ' + EPT.text['FONT'], fill: '#3E2016', stroke: '#fff', strokeThickness: 10 };
		this.fontScroll = { font: '32px ' + EPT.text['FONT'], fill: '#3E2016', stroke: '#fff', strokeThickness: 5 };

		this.fontScrollTitle = { font: '48px ' + EPT.text['FONT'], fill: '#6A2D1B' };
		this.fontRank = { font: '42px ' + EPT.text['FONT'], fill: '#3E2016', stroke: '#fff', strokeThickness: 10 };




		this.levelText = this.add.text(160, 30, this.level.name, this.fontTitle).setOrigin(0.5).setVisible(true);
		//this.levelText.setStroke('#ddd', 3);
		//this.levelText.setShadow(5, 5, 'rgba(1,1,1,0.5)', 30,true,false);

		//this.rankText = this.add.text(EPT.world.width + 200, 30, `Rank: ${this.level.rank}`, this.fontRank).setOrigin(0.5);
		//this.rankText.setShadow(5, 5, 'rgba(1,1,1,0.5)', 30,true,false);

		//this.tweens.add({ targets: this.rankText, x: 500, duration: 500, delay: 100, ease: 'Back' });


		this.scrollTextTitle = this.add.text(EPT.world.centerX, 650, 'QUESTION 1 OF 10', this.fontScrollTitle).setAlign('center').setVisible(false).setOrigin(0.5,0);
		this.tweens.add({
			targets: this.scrollTextTitle,
			scale: '+=0.1',
			repeat: -1,
			yoyo:true,
		})
		this.scrollText = this.add.text(EPT.world.centerX, 710, '',
			this.fontScroll).setWordWrapWidth(400).setAlign('center').setOrigin(0.5,0).setVisible(false);
		this.cameras.main.fadeIn(250);


		this.cameras.main.once('camerafadeincomplete', () => {

			this.infoText = this.add.text(EPT.world.centerX, 150, '', this.fontInfo);
			this.infoText.setOrigin(0.5);
			this.infoText.setWordWrapWidth(550).setAlign('center');

			
	
			this.loadInitialQuestion();
			this.initUI();
			
	
			this.msg = this.add.text(EPT.world.centerX, 0, 'Correct!', this.fontMessage).setOrigin(0.5);
			this.msg.y = -this.msg.height - 20;
			this.msg.setAlpha(999);

			this.zoomName = this.add.text(EPT.world.centerX, EPT.world.height - 80, '', this.fontZoomName).setOrigin(0.5).setAlpha(0);
			this.particles = this.add.particles('flare0');

		});



	}


	update() {


	}

	handleKey(e) {
		switch (e.code) {

			case 'KeyP': {
				this.managePause();
				break;
			}
			case 'KeyB': {
				this.stateBack();
				break;
			}
			case 'KeyT': {
				this.stateRestart();
				break;
			}
			default: { }
		}
	}
	managePause() {

		this.screenPausedGroup.setDepth(1004);
		console.log(this._gamePaused);
		this._gamePaused = !this._gamePaused;
		EPT.Sfx.play('click');
		console.log(this._gamePaused);
		self = this;
		if (this._gamePaused) {
			EPT.fadeOutIn(function (self) {
				self.screenPausedGroup.setVisible(true);
				self.buttonPause.input.enabled = false;
				self.stateStatus = 'paused';
				self._runOnce = false;
				console.log('pausing');
			}, this);
			this.screenPausedBack.x = -this.screenPausedBack.width - 20;
			this.tweens.add({ targets: this.screenPausedBack, x: 100, duration: 500, delay: 250, ease: 'Back' });
			this.screenPausedContinue.x = EPT.world.width + this.screenPausedContinue.width + 20;
			this.tweens.add({ targets: this.screenPausedContinue, x: EPT.world.width - 100, duration: 500, delay: 250, ease: 'Back' });
		}
		else {
			EPT.fadeOutIn(function (self) {
				console.log('unpausing');
				self.screenPausedGroup.setVisible(false);
				self.buttonPause.input.enabled = true;
				self._stateStatus = 'playing';
				self._runOnce = false;
			}, this);
			this.screenPausedBack.x = 100;
			this.tweens.add({ targets: this.screenPausedBack, x: -this.screenPausedBack.width - 20, duration: 500, ease: 'Back' });
			this.screenPausedContinue.x = EPT.world.width - 100;
			this.tweens.add({ targets: this.screenPausedContinue, x: EPT.world.width + this.screenPausedContinue.width + 20, duration: 500, ease: 'Back' });
		}
	}

	statePaused() {
		this.screenPausedGroup.setVisible(true);
	}

	stateGameover() {

		this.screenGameoverGroup.setDepth(1000);
		//EPT.Storage.setHighscore('EPT-highscore',this._score);
		EPT.fadeOutIn(function (self) {
			self.screenGameoverGroup.setVisible(true);
			self.buttonPause.input.enabled = false;
			self.screenGameoverScore.setText(EPT.text['gameplay-incorrect']);

		}, this);
		this.screenGameoverBack.x = -this.screenGameoverBack.width - 20;
		this.tweens.add({ targets: this.screenGameoverBack, x: 100, duration: 500, delay: 250, ease: 'Back' });
		this.screenGameoverRestart.x = EPT.world.width + this.screenGameoverRestart.width + 20;
		this.tweens.add({ targets: this.screenGameoverRestart, x: EPT.world.width - 100, duration: 500, delay: 250, ease: 'Back' });
	}

	initUI() {


		this.buttonPause = new Button(EPT.world.width, 40, 'button-pause', this.managePause, this);
		this.buttonPause.x -= 40;
		this.buttonPause.setOrigin(0.5).setScale(0.9).setVisible(true).setDepth(1001);

		this.buttonRestart = new Button(EPT.world.centerX, EPT.world.centerY - 260, 'button-continue', this.stateNext, this);
		this.buttonRestart.setOrigin(0.5, 0).setScale(0.5).setVisible(false);



		var fontScoreWhite = { font: '38px ' + EPT.text['FONT'], fill: '#000', stroke: '#ffde00', strokeThickness: 5 };


		///var fontTitle = { font: '48px ' + EPT.text['FONT'], fill: '#000', stroke: '#ffde00', strokeThickness: 10 };
		var fontTitle = { font: '48px ' + EPT.text['FONT'], fill: '#3E2016', stroke: '#fff', strokeThickness: 10 };

		this.screenPausedGroup = this.add.group();
		this.screenPausedBg = this.add.sprite(0, 0, 'overlay');
		this.screenPausedBg.setAlpha(0.95);
		this.screenPausedBg.setOrigin(0, 0);
		this.screenPausedText = this.add.text(EPT.world.centerX, 100, EPT.text['gameplay-paused'], fontTitle);
		this.screenPausedText.setOrigin(0.5, 0);
		this.screenPausedBack = new Button(100, EPT.world.height - 100, 'button-mainmenu', this.stateBack, this);
		this.screenPausedBack.setOrigin(0, 1);
		this.screenPausedContinue = new Button(EPT.world.width - 100, EPT.world.height - 100, 'button-continue', this.managePause, this);
		this.screenPausedContinue.setOrigin(1, 1);
		this.screenPausedGroup.add(this.screenPausedBg);
		this.screenPausedGroup.add(this.screenPausedText);
		this.screenPausedGroup.add(this.screenPausedBack);
		this.screenPausedGroup.add(this.screenPausedContinue);
		this.screenPausedGroup.setVisible(false);

		this.screenGameoverGroup = this.add.group();
		this.screenGameoverBg = this.add.sprite(0, 0, 'quiz-background');
		this.screenGameoverBg.setAlpha(0.95);
		this.screenGameoverBg.setOrigin(0, 0);
		this.screenGameoverText = this.add.text(EPT.world.centerX, 100, EPT.text['gameplay-gameover'], this.fontTitle);
		this.screenGameoverText.setOrigin(0.5, 0);
		this.screenGameoverBack = new Button(100, EPT.world.height - 100, 'button-mainmenu', this.stateBack, this);
		this.screenGameoverBack.setOrigin(0, 1);
		this.screenGameoverRestart = new Button(EPT.world.width - 100, EPT.world.height - 100, 'button-restart', this.stateRestart, this);
		this.screenGameoverRestart.setOrigin(1, 1);
		this.screenGameoverScore = this.add.text(EPT.world.centerX, EPT.world.centerY -100, EPT.text['gameplay-incorrect'], this.fontTitle).setFontSize(42);
		this.screenGameoverScore.setWordWrapWidth(600, false).setAlign('center');
		this.screenGameoverScore.setOrigin(0.5);

		this.screenGameoverGroup.add(this.screenGameoverBg);
		this.screenGameoverGroup.add(this.screenGameoverText);
		this.screenGameoverGroup.add(this.screenGameoverBack);
		this.screenGameoverGroup.add(this.screenGameoverRestart);
		this.screenGameoverGroup.add(this.screenGameoverScore);
		this.screenGameoverGroup.setVisible(false);
	}
	stateNext() {

		EPT.Sfx.play('click');




		if (this.gameOver) {
			this.stateGameover();
			return;
		}


		this.itemClicked = false;

		if (this.emitter) {
			console.log('exploding');
			this.emitter.explode();
		}


		
	

		var self = this;
		this.tweens.add({
			targets: [this.selectedCharacter],
			y: EPT.world.height * 2,
			duration: 500,
			oncomplete: function () {

	



				self.zoomName.setAlpha(0);

				self.buttonRestart.setVisible(false);
				self.scrollText.setText('');
				self.infoText.setAlpha(0);
			}
		});
		this.tweens.add({
			targets: [this.selectedFrame],
			y: EPT.world.height + this.selectedFrame.height,
			duration: 500,
			oncomplete: function () {

				console.log('on complete called');


				self.time.delayedCall(1000, () => {
					self.selectedFrame.destroy();
					self.selectedCharacter.destroy();
					self.currentQuestion++;

				
					if (self.currentQuestion < 10){
						self.tweens.add({
							targets: [self.levelText, self.buttonPause],
							alpha: {start:0, from:0, to:1},
							duration:500,
						})
				
					

						self.loadInitialQuestion();
					}
					else {
						console.log('calling next level');
						self.nextLevel();
					}
				});
			}

		});

	}
	nextLevel(){
		EPT.Sfx.play('click');
		EPT.fadeOutScene('Award', this);;
	}

	stateRestart() {
		this.currentQuestion = 0;
		
		
		EPT.Sfx.play('click');
		this.typewriterevent.remove(false);
		EPT.fadeOutScene('Game', this);

	}

	stateBack() {
		EPT.Sfx.play('click');
		EPT.Sfx.stopMusic('music-quiz');
		EPT.Sfx.playMusic('music-theme');

		EPT.fadeOutScene('MainMenu', this);
	}

	typeWriterText(text) {

		
		var length = text.length
		var i = 0
		this.typewriterevent = this.time.addEvent({
			callback: () => {

				if (text == this.quiz[this.currentQuestion].question) {
					this.scrollText.text += text[i]
					++i
				}
			},
			repeat: length - 1,
			delay: 50,			
		})
	}

}