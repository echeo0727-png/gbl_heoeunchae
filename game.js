new Phaser.Game({
  type: Phaser.AUTO,
  width: 390,
  height: 640,
  parent: "game",
  scene: { create },
});

function create() {
  this.gameState = createInitialGameState();

  this.add.text(20, 24, `예산 ${this.gameState.budget.toLocaleString("ko-KR")}원`, {
    color: "#17324d",
    fontSize: "20px",
  });

  drawWorldMap(this);
}

function drawWorldMap(scene) {
  const map = scene.add.graphics();

  map.fillStyle(0xa9dff4, 1);
  map.fillRect(0, 70, 390, 570);
  map.lineStyle(1, 0x78b8d0, 0.55);

  for (let x = 0; x <= 390; x += 65) {
    map.lineBetween(x, 70, x, 640);
  }

  for (let y = 120; y <= 620; y += 75) {
    map.lineBetween(0, y, 390, y);
  }

  const continents = [
    [[0, 170], [30, 142], [74, 134], [105, 154], [96, 185], [64, 198], [45, 224], [9, 213]],
    [[90, 245], [120, 253], [138, 291], [126, 340], [106, 375], [88, 342], [96, 304], [77, 278]],
    [[170, 160], [202, 144], [236, 154], [225, 180], [199, 183], [182, 173]],
    [[228, 151], [299, 129], [364, 152], [390, 191], [347, 215], [308, 199], [275, 220], [244, 192]],
    [[202, 205], [237, 214], [251, 257], [235, 309], [207, 289], [191, 244]],
    [[304, 321], [348, 313], [375, 341], [363, 375], [320, 369], [294, 344]],
  ];

  map.fillStyle(0x71a96f, 1);
  map.lineStyle(2, 0x39724b, 1);

  continents.forEach((points) => {
    map.beginPath();
    points.forEach(([x, y], index) => {
      if (index === 0) {
        map.moveTo(x, y);
      } else {
        map.lineTo(x, y);
      }
    });
    map.closePath();
    map.fillPath();
    map.strokePath();
  });

  scene.add.text(20, 88, "세계지도", {
    color: "#17324d",
    fontSize: "18px",
    fontStyle: "bold",
  });
}
