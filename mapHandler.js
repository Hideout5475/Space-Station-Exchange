const game = document.createElement("div");
game.id = "game";
document.body.appendChild(game);

const TILE = 32;

const map = [
  "###########";
  "##.......##";
  "##.......##";
  "###########";
];

map.forEach((row, y) => {
  row.split("").forEach((cell, x) => {
    if (cell === "#") {
      const tile = document.createElement("div");
      tile.className = "wall";
      tile.style.left = x * TILE + "px";
      tile.style.top = y * TILE + "px";
      game.appendChild(tile);
    }
  });
});
