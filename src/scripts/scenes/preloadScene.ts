export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {

    this.load.image("ada", "assets/ada.png");
    this.load.image("potato", "assets/potato.png");
    this.load.image("cat", "assets/soon.png");
    this.load.image("corgi", "assets/whiteboard_corgi.png");
    this.load.image("campus", "assets/campus.png");
    this.load.image("east_campus", "assets/east_campus.png");
    this.load.image("trabant", "assets/trabant.png");

    this.load.audio("boom", "assets/boom.wav");
    this.load.audio("bounce", "assets/bounce.wav");
  }

  create() {
    this.scene.start('MainMenu');
  }
}
