import DraggableImage from "../objects/draggableImage";

export default class GameOver extends Phaser.Scene {
    importantImage: DraggableImage;
    startX: number;
    startY: number;
    constructor() {
        super({ key: 'GameOver' });
    }

    init(data) {
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "gameOver");
        this.add.existing(this.importantImage);

        this.add.text(this.scale.width / 2, this.scale.height * 2 / 3, "No more game!");
    }

    update() {
    }
}
