/**
 * Класс "Доска" позволяет создать квадратное поле
 * @param {Number} boardSize - ширина доски в клетках
 */
export default class Board {
  constructor(boardSize) {
    this.boardSize = boardSize;
  }

  /**
   * Создание доски для игры в виде HTML-таблицы
   * @returns {HTMLElement} вёрстка table
   */
  generateBoard() {
    const board = document.createElement('table');
    board.classList.add('board');
    for (let i = 0; i < this.boardSize; i += 1) {
      const boardRow = document.createElement('tr');
      boardRow.classList.add('board__row');
      for (let j = 0; j < this.boardSize; j += 1) {
        const boardCol = document.createElement('td');
        boardCol.classList.add('board__col');
        boardRow.appendChild(boardCol);
      }
      board.appendChild(boardRow);
    }
    return board;
  }

  /**
   * Вставка доски в виде HTML-таблицы на страницу
   * @param {HTMLElement} board доска в виде таблицы, которую необходимо вставить на страницу
   */
  insertBoardOnPage(board) {
    this.boards = document.querySelector('#game-board');
    this.boards.append(board);
  }
}
