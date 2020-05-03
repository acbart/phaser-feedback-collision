import 'phaser';
import GameConfig = Phaser.Types.Core.GameConfig;
import PreloadScene from './scenes/preloadScene';
import MainMenu from './scenes/mainMenu';

const DEFAULT_WIDTH = 400;
const DEFAULT_HEIGHT = 400;
const NUMBER_OF_LEVELS = 3;

const config: GameConfig = {
    backgroundColor: '#000',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, MainMenu],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
