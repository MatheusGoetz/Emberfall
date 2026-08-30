import Phaser from "phaser";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const { width, height } = this.scale;

    const centerX = width / 2;
    const centerY = height / 2;

    this.add
      .text(centerX, centerY - 100, 'EMBERFALL', {
        fontFamily: 'monospace',
        fontSize: '48px',
        color: '#ffffff',
      })
      .setOrigin(0.5);

    const startButton = this.add
      .text(centerX, centerY + 50, 'START', {
        fontFamily: 'monospace',
        fontSize: '28px',
        color: '#ffffff',
      })
      .setOrigin(0.5);

      startButton.setInteractive();

      startButton.on('pointerdown', () => {
      this.scene.start('WorldScene');
      });
    }
}