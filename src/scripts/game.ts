import 'phaser';
import GameConfig = Phaser.Types.Core.GameConfig;
import PreloadScene from './scenes/preloadScene';
import TutorialScene from './scenes/tutorialScene';
import LevelScene from './scenes/levelScene';
import GameOver from './scenes/gameOver';
import MainMenu from './scenes/mainMenu';
import PauseScene from './scenes/pauseScene';

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
    scene: [PreloadScene, MainMenu, TutorialScene, LevelScene, GameOver, PauseScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
