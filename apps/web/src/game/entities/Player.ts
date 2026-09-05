import Phaser from "phaser";

export class Player {
  private readonly body: Phaser.GameObjects.Rectangle;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    size: number
  ) {
    this.body = scene.add.rectangle(
      x,
      y,
      size,
      size,
      0xffffff
    );
  }

  move(deltaX: number, deltaY:number): void {
    this.body.x += deltaX;
    this.body.y += deltaY;
  }

  setPosition(x: number, y: number): void{
    this.body.setPosition(x,y);
  }

  get x(): number {
    return this.body.x;
  }

  get y(): number {
    return this.body.y;
  }
}