import DraggableImage from '../objects/draggableImage';

export default class MainMenu extends Phaser.Scene {
    potato: DraggableImage;
    ada: DraggableImage;
    startX: number;
    startY: number;
    campus: Phaser.Physics.Arcade.Image;
    potatoEmitter: Phaser.GameObjects.Particles.ParticleEmitter;

    constructor() {
        super({ key: 'MainMenu' });
    }

    create() {
        this.campus = this.physics.add.image(this.scale.width/2, this.scale.height, "campus");
        this.campus.setOrigin(.5, 1);

        this.ada = new DraggableImage(this, 80, 50, "ada");
        this.potato = new DraggableImage(this, 160, 50, "potato");

        this.physics.add.overlap(this.ada, this.campus, this.adaOnCampus as ArcadePhysicsCallback,
            () => true, this);

        this.physics.add.overlap(this.potato, this.campus, this.potatoOnCampus as ArcadePhysicsCallback,
                undefined, this);

        this.potatoEmitter = this.add.particles('potato').createEmitter({
            on: false,
            speed: {min: 50, max: 200},
            scale: .25,
            lifespan: 1000,
            alpha: {start: 1, end: 0},
            gravityY: 400,
            blendMode: Phaser.BlendModes.SCREEN
        });
    }

    adaOnCampus(ada: DraggableImage, campus: Phaser.Physics.Arcade.Image) {
        // Prevent collisions till we're done.
        ada.disableBody();
        ada.setInteractive(false);
        // You can use tweens to add simple animations
        this.tweens.add({
            targets: ada,
            ease: 'Linear',
            duration: 200,
            repeat: 0,
            // Make her spin
            angle: {start: 0, to: 360},
            // Make her go back to her starting position
            x: 80,
            y: 50,
            // Reenable collisions
            onComplete: ()=> {
                ada.body.enable = true;
                ada.setInteractive(true);
            }
        });
        // Also flash some text!
        let textMessage = this.add.text(0, 0, "No dogs on campus!");
        this.time.delayedCall(1000, () => {
            // And then fade it out :)
            this.tweens.add({
                targets: textMessage,
                duration: 500,
                alpha: 0,
                onComplete: () => textMessage.destroy()
            });
        })
        // And make some noise!
        this.sound.play("bounce");
    }

    potatoOnCampus(potato: DraggableImage, campus: Phaser.Physics.Arcade.Image) {
        // Destroy the potato
        potato.destroy();
        // And create some potato particles to celebrate
        this.potatoEmitter.setPosition(potato.x, potato.y);
        this.potatoEmitter.emitParticle(50);
        // And make some noise!
        this.sound.play("boom");
    }

    update() {
    }
}
