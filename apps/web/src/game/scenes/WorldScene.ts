import Phaser from 'phaser';

import { PlayerController } from '../controllers/PlayerController';

export class WorldScene extends Phaser.Scene {
  private playerController!: PlayerController;

  constructor() {
    super('WorldScene');
  }

  create(): void {
    const { width, height } = this.scale;

    const centerX = width / 2;
    const centerY = height / 2;

    this.playerController = new PlayerController(
      this,
      centerX,
      centerY
    );
  }

  update(_time: number, delta: number): void {
    this.playerController.update(delta);
  }
}