import {EPT, Button} from './utils'
export default class Difficulty extends Phaser.Scene {


    constructor() {
        super('Difficulty');
    }

	init()
	{
		this.cursors = this.input.keyboard.createCursorKeys()

		this.difficulty_buttons= [];
	}

	
    create() {
		this.add.sprite(0, 0, 'background').setOrigin(0,0);

		var fontButton = { font: '52px ' + EPT.text['FONT'], fill: '#3E2016',stroke:'#fff', strokeThickness: 10 };
	
		//var fontStory = { font: '48px '+EPT.text['FONT'], fill: '#ffde00', stroke: '#000', strokeThickness: 7, align: 'center' };
		
		var fontStory = { font: '42px ' + EPT.text['FONT'], fill: '#F9FBA7', stroke: '#000', strokeThickness: 7, align: 'center' };


		this.add.text(EPT.world.centerX, 60, EPT.text['choose_difficulty'],fontStory).setOrigin(0.5,0);
        
		
		// Play button
	const basicButton = this.add.image(EPT.world.centerX, EPT.world.centerY, 'glass-panel')
		basicButton.y = EPT.world.centerY - (basicButton.height + 20)

	const basicText = this.add.text(basicButton.x, basicButton.y, 'Basic', fontButton)
		.setOrigin(0.5)
	basicButton.setInteractive().on('pointerover',()=> {
		basicButton.setTexture('glass-panel-active')
	}).on('pointerout', () => {
		basicButton.setTexture('glass-panel')
	}).on('pointerup',()=> {
		this.selectedButton = basicButton;
		this.selectedText = basicText;
		this.selectDifficulty();

	})

	

	

	// Settings button
	const advancedButton = this.add.image(basicButton.x, basicButton.y + basicButton.displayHeight + 10, 'glass-panel')
	const advancedText = this.add.text(advancedButton.x, advancedButton.y, 'Advanced', fontButton)
		.setOrigin(0.5)
	advancedButton.setInteractive().on('pointerover',()=> {
		advancedButton.setTexture('glass-panel-active')
	}).on('pointerout', () => {
		advancedButton.setTexture('glass-panel')
	}).on('pointerup',()=> {
		this.selectedButton = advancedButton;
		this.selectedText = advancedText;
		this.selectDifficulty();

	})

	

	// Credits button
	const masterButton = this.add.image(advancedButton.x, advancedButton.y + advancedButton.displayHeight + 10, 'glass-panel')
	const masterText  = this.add.text(masterButton.x, masterButton.y, 'Master', fontButton)
	.setOrigin(0.5)

	masterButton.setInteractive().on('pointerover',()=> {
		masterButton.setTexture('glass-panel-active')
	}).on('pointerout', () => {
		masterButton.setTexture('glass-panel')
	
	}).on('pointerup',()=> {
		this.selectedButton = masterButton;
		this.selectedText = masterText;
		this.selectDifficulty();
	})

	this.difficulty_buttons.push(basicButton);
	this.difficulty_buttons.push(advancedButton);
	

	this.difficulty_buttons.push(masterButton);
	this.difficulty_buttons.push(basicText);
	this.difficulty_buttons.push(advancedText);
	this.difficulty_buttons.push(masterText);



	
		



	
		//this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		//this.keyEnter.on('down', function(key, event) { this.clickContinue(); }, this);

		
		
	
		
	
		
	}
	clickContinue() {
		EPT.Sfx.play('click');
		EPT.fadeOutScene('Rank', this);
	}

	selectDifficulty() {
	
		this.selectedButton.setDepth(1000);
		this.selectedText.setDepth(1001);
		this.difficulty_buttons.forEach((button)=> {
			if (button != this.selectedButton && button != this.selectedText){
				this.physics.world.enable(button);
				
			}
		});

		var self = this;
		this.tweens.add({
			targets: [this.selectedButton, this.selectedText],
			x: EPT.world.centerX,
			y: EPT.world.centerY,
			scale: 1.2,
			duration: 500,
			
			onComplete: function(){
				self.tweens.add({
					targets: [self.selectedButton, self.selectedText],
					scale: 1.3,
					repeat: 2,
					yoyo: true,
					duration: 500,
					onComplete: function(){
						self.clickContinue();
					}
				
				})

			}


		})
	}

	update()
	{
		const upJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.up)
		const downJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.down)
		const spaceJustPressed = Phaser.Input.Keyboard.JustDown(this.cursors.space)
		
		if (upJustPressed)
		{
			this.selectNextButton(-1)
		}
		else if (downJustPressed)
		{
			this.selectNextButton(1)
		}
		else if (spaceJustPressed)
		{
			this.confirmSelection()
		}
	}
	
};