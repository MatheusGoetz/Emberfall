import Phaser from 'phaser';

import { BootScene } from '../scenes/BootScene';
import { MenuScene } from '../scenes/MenuScene';
import { WorldScene } from '../scenes/WorldScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  parent: 'game-container',

  backgroundColor: '#111827',

  scene: [BootScene, MenuScene, WorldScene],
};