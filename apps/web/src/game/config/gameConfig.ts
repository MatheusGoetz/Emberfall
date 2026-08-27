import Phaser from 'phaser';

import { BootScene } from '../scenes/BootScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  parent: 'game-container',

  backgroundColor: '#111827',

  scene: [BootScene],
};