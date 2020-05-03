
type TextStyle = Phaser.Types.GameObjects.Text.TextStyle;

/**
 * Button class heavily based on
 * https://snowbillr.github.io/blog//2018-07-03-buttons-in-phaser-3/
 */
export class TransitionButton extends Phaser.GameObjects.Text {
    constructor(scene: Phaser.Scene, y: number, text: string, callback) {
        super(scene, scene.scale.width / 2, y, text, {});

        this.setInteractive({ useHandCursor: true })
            .on('pointerover', () => this.enterButtonHoverState())
            .on('pointerout', () => this.enterButtonRestState())
            .on('pointerdown', () => this.enterButtonActiveState())
            .on('pointerup', () => {
                this.enterButtonHoverState();
                callback();
            });
    }

    enterButtonHoverState() {
        this.setStyle({ fill: '#ff0' });
    }

    enterButtonRestState() {
        this.setStyle({ fill: '#0f0' });
    }

    enterButtonActiveState() {
        this.setStyle({ fill: '#0ff' });
    }
}