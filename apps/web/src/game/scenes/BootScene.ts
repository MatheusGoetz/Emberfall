import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  create() {
    console.log('BootScene criada!');

    const { width, height } = this.scale;

    this.add
      .text(width / 2, height / 2, 'EMBERFALL', {
        fontFamily: 'monospace',
        fontSize: '48px',
        color: '#ffffff',
      })
      .setOrigin(0.5);
  }
}