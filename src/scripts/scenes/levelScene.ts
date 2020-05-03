import { TransitionButton } from '../objects/transitionButton';
import DraggableImage from '../objects/draggableImage';

export default class LevelScene extends Phaser.Scene {
    levelNumber: number;

    importantImage: DraggableImage;
    startX: number;
    startY: number;

    constructor() {
        super({ key: 'LevelScene' });
    }

    init(data) {
        this.levelNumber = data.levelNumber;
        this.startX = data.lastX;
        this.startY = data.lastY;
    }

    create() {
        this.importantImage = new DraggableImage(this, this.startX, this.startY, "level" + this.levelNumber);
        this.add.existing(this.importantImage);

        this.add.existing(new TransitionButton(this, this.scale.height * 2 / 3, "Level " + this.levelNumber, () => {
            let next = this.levelNumber + 1;
            let data = this.getLastXY();
            if (next > 3) {
                this.scene.start("GameOver", data);
            } else {
                data['levelNumber'] = next;
                this.scene.start("LevelScene", data);
            }
        }))

        this.add.existing(new TransitionButton(this, this.scale.height * 3 / 4, "Pause", () => {
            this.scene.launch("PauseScene", { previousScene: this.scene.key });
            this.scene.switch("PauseScene");
        }));
    }

    update() {
    }

    getLastXY() {
        return { lastX: this.importantImage.x, lastY: this.importantImage.y };
    }
}
