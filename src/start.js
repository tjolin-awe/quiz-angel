
var enablePWA = true;
if(enablePWA) {
	// SERVICE WORKER
	if('serviceWorker' in navigator) {
		navigator.serviceWorker.register('/sw.js',{scope:'/'});
	};
	
	
	// NOTIFICATIONS TEMPLATE
	Notification.requestPermission().then(function(result) {
		if(result === 'granted') {
			//exampleNotification();
		}
	});
	function exampleNotification() {
		var notifTitle = 'Quiz Angel';
		var notifBody = 'Created by Spirit Filled Games & Christian Illustrations.';
		var notifImg = 'img/icons/icon-512.png';
		var options = {
			body: notifBody,
			icon: notifImg
		}
		var notif = new Notification(notifTitle, options);
		setTimeout(exampleNotification, 30000);
	}
}

import Phaser from 'phaser'
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