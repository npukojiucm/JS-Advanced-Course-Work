/**
 * @todo
 * @param index - индекс поля
 * @param boardSize - размер квадратного поля (в длину или ширину)
 * @returns строка - тип ячейки на поле:
 *
 * top-left
 * top-right
 * top
 * bottom-left
 * bottom-right
 * bottom
 * right
 * left
 * center
 *
 * @example
 * ```js
 * calcTileType(0, 8); // 'top-left'
 * calcTileType(1, 8); // 'top'
 * calcTileType(63, 8); // 'bottom-right'
 * calcTileType(7, 7); // 'left'
 * ```
 * */
export function calcTileType(index, boardSize) {
  const positions = {};

  const topLeft = 0;
  const topRight = boardSize - 1;
  const bottomLeft = boardSize * (boardSize - 1);
  const bottomRight = boardSize * boardSize - 1;

  positions[topLeft] = 'top-left';
  positions[topRight] = 'top-right';
  positions[bottomLeft] = 'bottom-left';
  positions[bottomRight] = 'bottom-right';

  for (let i = boardSize; i < bottomLeft; i += boardSize) {
    positions[i] = 'left';
  }

  for (let i = boardSize * 2 - 1; i < bottomRight; i += boardSize) {
    positions[i] = 'right';
  }

  for (let i = 1; i < topRight; i += 1) {
    positions[i] = 'top';
  }

  for (let i = bottomLeft + 1; i < bottomRight; i += 1) {
    positions[i] = 'bottom';
  }

  return positions[index] || 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
