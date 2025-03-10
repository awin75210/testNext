import * as Phaser from "phaser";
export default class Game extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image('bird', '/bird.png'); // Thay thế bằng hình ảnh của bạn
  }

  create() {
    this.add.image(400, 300, 'bird');
  }
}

// Cấu hình game Phaser
export const GameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [Game],
  parent: 'game-container',
};