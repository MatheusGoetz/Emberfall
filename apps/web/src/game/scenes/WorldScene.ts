import Phaser from 'phaser';

export class WorldScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;

  private readonly playerSpeed = 200;
  private readonly playerSize = 32;

  private keys!: Record<'up' | 'down' | 'left' | 'right', Phaser.Input.Keyboard.Key>
  constructor() {
    super('WorldScene');
  }

  create() {
    const { width, height } = this.scale;

    const centerX = width / 2;
    const centerY = height / 2;

    this.player = this.add.rectangle(
      centerX,
      centerY,
      this.playerSize,
      this.playerSize,
      0xffffff
    );

    this.keys = this.input.keyboard!.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    }) as Record<'up' | 'down' | 'left' | 'right', Phaser.Input.Keyboard.Key>
  }

  update(_time: number, delta: number){
    const direction = new Phaser.Math.Vector2(0, 0);

    if(this.keys.left.isDown){
      direction.x -= 1;
    }

    if(this.keys.right.isDown){
      direction.x += 1;
    }

    if(this.keys.up.isDown){
      direction.y -= 1;
    }

    if(this.keys.down.isDown){
      direction.y += 1;
    }

    if(direction.lengthSq() > 0){
      direction.normalize();
    }

    const distance = this.playerSpeed * (delta / 1000);

    this.player.x += direction.x * distance;
    this.player.y += direction.y * distance;

    const halfPlayerSize = this.playerSize / 2;

    this.player.x = Phaser.Math.Clamp(
      this.player.x,
      halfPlayerSize,
      this.scale.width - halfPlayerSize
    );

    this.player.y = Phaser.Math.Clamp(
      this.player.y,
      halfPlayerSize,
      this.scale.height - halfPlayerSize
    );
  }
}