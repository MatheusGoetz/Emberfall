import Phaser from 'phaser';

type MovementKeys = Record<
  'up' | 'down' | 'left' | 'right',
  Phaser.Input.Keyboard.Key
>;

export class PlayerController {
  private player: Phaser.GameObjects.Rectangle;
  private keys: MovementKeys;

  private readonly playerSize = 32;
  private readonly playerSpeed = 200;

  constructor(
    private readonly scene: Phaser.Scene,
    x: number,
    y: number
  ) {
    this.player = scene.add.rectangle(
      x,
      y,
      this.playerSize,
      this.playerSize,
      0xffffff
    );

    this.keys = scene.input.keyboard!.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }) as MovementKeys;
  }

  update(delta: number): void {
    const direction = new Phaser.Math.Vector2(0, 0);

    if (this.keys.left.isDown) {
      direction.x -= 1;
    }

    if (this.keys.right.isDown) {
      direction.x += 1;
    }

    if (this.keys.up.isDown) {
      direction.y -= 1;
    }

    if (this.keys.down.isDown) {
      direction.y += 1;
    }

    if (direction.lengthSq() > 0) {
      direction.normalize();
    }

    const distance = this.playerSpeed * (delta / 1000);

    this.player.x += direction.x * distance;
    this.player.y += direction.y * distance;

    this.applyWorldBounds();
  }
  private applyWorldBounds(): void {
    const halfPlayerSize = this.playerSize / 2;

    this.player.x = Phaser.Math.Clamp(
      this.player.x,
      halfPlayerSize,
      this.scene.scale.width - halfPlayerSize
    );

    this.player.y = Phaser.Math.Clamp(
      this.player.y,
      halfPlayerSize,
      this.scene.scale.height - halfPlayerSize
    );
  }
}