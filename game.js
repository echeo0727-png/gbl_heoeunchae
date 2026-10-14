const boardPath = [
  [45, 155], [130, 155], [215, 155], [300, 155],
  [340, 240], [340, 325], [340, 410], [340, 495],
  [300, 555], [215, 555], [130, 555], [45, 555],
  [45, 495], [45, 410], [45, 325], [45, 240],
];

new Phaser.Game({
  type: Phaser.AUTO,
  width: 390,
  height: 640,
  parent: "game",
  scene: { create },
});

function create() {
  const board = this.add.graphics();

  boardPath.forEach(([x, y]) => {
    board.fillStyle(0xf8fbff, 1);
    board.lineStyle(2, 0x356b8c, 1);
    board.fillRoundedRect(x - 35, y - 35, 70, 70, 10);
    board.strokeRoundedRect(x - 35, y - 35, 70, 70, 10);
  });
}
