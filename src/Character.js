import {EPT, Button} from './utils'
export default class Character extends Phaser.Scene {
    constructor() {
        super('Character');
    }
    create() {

        EPT.Storage.set('EPT-returning',false);
        
		this.add.sprite(0, 0, 'intro_bg').setOrigin(0,0);
        this.shine = this.add.sprite(0, 0, 'shine').setOrigin(0, 0);

        
        this.tweens.add({
                    targets: this.shine,
                    alpha: 0.9,
                    repeat: -1,
                    yoyo: true,
                    duration: 1000,
        });
      


		var fontTitle= { font: '48px '+EPT.text['FONT'], fill: '#F9FBA7', stroke: '#000', strokeThickness: 7, align: 'center' };
		
        var fontTextBox= { font: '48px '+EPT.text['FONT'], fill: '#FFFFFF', stroke: '#000', strokeThickness: 7, align: 'center', fixedWidth:400 };
		
   

        this.add.text(EPT.world.centerX, 30, EPT.text['character_quiz_angel_name'],fontTitle).setOrigin(0.5,0);


        this.girl = this.add.image(EPT.world.centerX, EPT.world.centerY + 200,'girl_intro').setOrigin(0.5)
       
        var origin = this.girl.getTopLeft();

        var self = this;
        var textures = this.textures;
        var logoSource = {
            getRandomPoint: function (vec)
            {
                do
                {
                    var x = Phaser.Math.Between(0, self.girl.width - 1);
                    var y = Phaser.Math.Between(0, self.girl.height - 1);
                    var pixel = textures.getPixel(x, y, 'girl_intro');
                } while (pixel.alpha < 255);
    
                return vec.setTo(x + origin.x, y + origin.y);
            }
        };
    
        var particles = this.add.particles('flares');
    
        this.emitter = particles.createEmitter({
            x: 0,
            y: 0,
            lifespan: 1000,
            gravityY: 10,
            scale: { start: 0, end: 0.25, ease: 'Quad.easeOut' },
            alpha: { start: 1, end: 0, ease: 'Quad.easeIn' },
            blendMode: 'ADD',
            emitZone: { type: 'random', source: logoSource }
        });

		var buttonContinue = new Button(EPT.world.width-20, EPT.world.height-20, 'button-continue', this.clickContinue, this);
		buttonContinue.setOrigin(1,1);

		buttonContinue.x = EPT.world.width+buttonContinue.width+20;
		this.tweens.add({targets: buttonContinue, x: EPT.world.width-20, duration: 500, ease: 'Back'});

		this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
		this.keyEnter.on('down', function(key, event) { this.clickContinue(); }, this);

		this.cameras.main.fadeIn(250, 0, 0, 0);

        self = this
        this.girlselected = true;
        this.cameras.main.once('camerafadeincomplete', function (camera) {
			

        
                
        
			
          
           
        }, this);

 
        this.textbox = this.add.image(EPT.world.centerX, EPT.world.centerY - 150,'textbox_edit').setOrigin(0.5).setAlpha(0.2)
        
        this.text = this.add.text(EPT.world.centerX, EPT.world.centerY - 150, "Enter name...",fontTextBox);
        this.text.setOrigin(0.5);

        this.text.setInteractive().on('pointerdown', () => {

           if (this.text.text === "Enter name...")
                this.text.setText('');

            var s = this.rexUI.edit(this.text);
        
            

            console.log(s);
        });
      

       

	}
	clickContinue() {

        var name = this.text.text;
     
        if (name === '') {
            name = "Enter name...";
            this.text.setText(name);
        }

        if (name === "Enter name...") {
            this.tweens.add({
                    targets: this.text,
                    duration: 200,
                    scale: { start:1, from:1, to:1.3, ease: 'Quad.easeOut' },
                    yoyo: true,
                    repeat: 0
                });
            
            return;
        }

        

        EPT.Storage.set('EPT-player',name);
		EPT.Sfx.play('click');
		EPT.fadeOutScene('Difficulty', this);
	}
};