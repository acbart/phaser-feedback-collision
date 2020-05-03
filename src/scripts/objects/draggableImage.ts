export default class DraggableImage extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.setInteractive();
        scene.input.setDraggable(this);

        this.on('pointerover', () => {
            this.setTint(0x44ff44);
        });

        this.on('pointerout', () => {
            this.clearTint();
        });

        scene.input.on('drag', this.handleDrag, this);

    }

    handleDrag(mouse: Phaser.Input.Pointer, gameObject: DraggableImage, dragX: number, dragY: number) {
        this.x = dragX;
        this.y = dragY;
    }
}
