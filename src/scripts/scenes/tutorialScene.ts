import { TransitionButton } from '../objects/transitionButton';
import DraggableImage from '../objects/draggableImage';

export default class TutorialScene extends Phaser.Scene {
    importantImage: DraggableImage;
    startX: number;
    startY: number;

    constructor() {
        super({ key: 'TutorialScene' });
    }

    init(data) {
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "tutorial");
        this.add.existing(this.importantImage);

        this.add.text(0, this.scale.height, "The image is draggable.\nThe position is remembered between scenes.").setOrigin(0, 1);

        this.add.existing(new TransitionButton(this, this.scale.height / 2, "Begin Level 1", () => {
            let data = this.getLastXY();
            data['levelNumber'] = 1;
            this.scene.start("LevelScene", data);
        }))
    }

    update() {
    }

    getLastXY() {
        return { lastX: this.importantImage.x, lastY: this.importantImage.y };
    }
}
