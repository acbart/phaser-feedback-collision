export default class DraggableImage extends Phaser.Physics.Arcade.Image {

    constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setInteractive();
        scene.input.setDraggable(this);

        this.on('pointerover', () => {
            this.setTint(0xdddddd);
        });

        this.on('pointerout', () => {
            this.clearTint();
        });

        scene.input.on('drag', this.handleDrag, this);
    }

    handleDrag(mouse: Phaser.Input.Pointer, gameObject: DraggableImage, dragX: number, dragY: number) {
        gameObject.x = dragX;
        gameObject.y = dragY;
    }
}
