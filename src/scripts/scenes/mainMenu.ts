import { TransitionButton } from '../objects/transitionButton';
import DraggableImage from '../objects/draggableImage';

export default class MainMenu extends Phaser.Scene {
    importantImage: DraggableImage;
    startX: number;
    startY: number;

    constructor() {
        super({ key: 'MainMenu' });
    }

    init(data) {
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "main");
        this.add.existing(this.importantImage);

        this.add.existing(new TransitionButton(this, this.scale.height / 2, "Start Tutorial", () => {
            this.scene.start("TutorialScene", this.getLastXY());
        }))
    }

    getLastXY() {
        return { lastX: this.importantImage.x, lastY: this.importantImage.y };
    }

    update() {
    }
}
