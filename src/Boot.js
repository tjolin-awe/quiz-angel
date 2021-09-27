import WebFont from 'webfontloader'
import {EPT} from './utils.js'

export default class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }
    preload() {
        this.load.image('background2', 'assets/background.png');
        this.load.image('background', 'assets/images/title_background.png');
        this.load.image('logo-enclave', 'assets/logo-savingus.png');
        this.load.image('angel-cover', 'assets/images/quiz_angel_cover.png');
        this.load.image('loading-background', 'assets/loading-background.png');
        this.load.image('flare0', 'assets/flare_0.png');
        WebFont.load({ custom: { families: ['Berlin'], urls: ['assets/fonts/BRLNSDB.css'] } });
    }
    create() {
         EPT.world = {
            width: this.cameras.main.width,
            height: this.cameras.main.height,
            centerX: this.cameras.main.centerX,
            centerY: this.cameras.main.centerY
        };

        console.log(EPT.world);
        EPT.Lang.updateLanguage('en');
        EPT.text = EPT.Lang.text[EPT.Lang.current];

        EPT.Storage.set('EPT-returning',true);
       
        console.log('started preloader');
        this.scene.start('Preloader');
    }
}