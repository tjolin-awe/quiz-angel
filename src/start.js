


import Phaser from './phaser.3.55.0.min'
import Boot from './Boot'
import Preloader from './Preloader'
import MainMenu from './MainMenu'
import Game from './Game'
import Settings from './Settings'
import Story from './Story'
import Rank from './Rank'
import LevelEnd from './LevelEnd'
import Character from './Character'
import Award from './Award'
import EndScene from './EndScene'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin'
import Difficulty from './Difficulty'

var gameConfig = {
	scale: {
		
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 640,
		height: 960
	},
	type: Phaser.AUTO,
	parent: 'phaser-container',
	physics: {
		default: 'arcade',
		arcade: {
            gravity: { y: 400 },
        }
	},
	dom: {
        createContainer: true
    },
	plugins: {
		scene: [
			{
				key: 'rexUI',
				plugin: RexUIPlugin,
				mapping: 'rexUI'
			}
		]
    },
	scene: [Boot, Preloader, MainMenu, Settings, Story, Character, Difficulty, Rank, Game, LevelEnd, Award, EndScene]
}
export default new Phaser.Game(gameConfig);
window.focus();

// Usage tracking

/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-30485283-26')*/