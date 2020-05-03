import LevelScene from "./levelScene";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {

    this.load.image("main", "assets/ada.png");
    this.load.image("pause", "assets/potato.png");
    this.load.image("gameOver", "assets/soon.png");
    this.load.image("tutorial", "assets/whiteboard_corgi.png");
    this.load.image("level1", "assets/campus.png");
    this.load.image("level2", "assets/east_campus.png");
    this.load.image("level3", "assets/trabant.png");
  }

  create() {
    this.scene.start('MainMenu');
  }
}
