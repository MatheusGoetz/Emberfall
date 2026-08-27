import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

import { gameConfig } from '../../game/config/gameConfig'

export function Game() {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    if (gameRef.current){
      return;
    }

    gameRef.current = new Phaser.Game(gameConfig)

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null
    };
  }, []);

  return <div id="game-container"/>;
}