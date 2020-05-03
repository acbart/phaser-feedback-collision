import { TransitionButton } from '../objects/transitionButton';
import DraggableImage from '../objects/draggableImage';

export default class PauseScene extends Phaser.Scene {
    previousScene: string;
    importantImage: DraggableImage;
    startX: number;
    startY: number;

    constructor() {
        super({ key: 'PauseScene' });
    }

    init(data) {
        this.previousScene = data.previousScene;
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "pause");
        this.add.existing(this.importantImage);

        this.add.text(0, this.scale.height, "The pause screen's image is not saved!").setOrigin(0, 1);
    }

    update() {
        this.add.existing(new TransitionButton(this, this.scale.height * 3 / 4, "Resume", () => {
            this.scene.stop();
            this.scene.wake(this.previousScene);
        }));
    }

    getLastXY() {
        return { lastX: this.importantImage.x, lastY: this.importantImage.y };
    }
}
