import Board from './Board';

import Goblins from './Goblins';

import GameController from './gameController';

/**
 * Класс "Игра" инициализирует игру, запускает и останавливает её
 * @param {Number} boardSize - ширина доски в клетках
 */
export default class Game {
  constructor(boardSize) {
    this.board = new Board(boardSize);
    this.goblins = new Goblins();
    this.gameController = new GameController();
    this.start = this.start.bind(this);
  }

  /**
   * Генерирует доску, вставляет на страницу и вешает события "Клик"
   *  по кнопкам "Начать" и "Закончить"
   */
  init() {
    const generatedBoard = this.board.generateBoard();
    this.board.insertBoardOnPage(generatedBoard);
    this.gameController.startButton.addEventListener('click', this.start);
    this.gameController.stopButton.addEventListener('click', (e) => {
      this.gameController.endGame(e);
      clearInterval(this.goblins.intervalShowGoblins);
      this.gameController.startButton.addEventListener('click', this.start);
    });
  }

  /**
   * Запуск игры
   */
  start() {
    clearInterval(this.goblins.intervalShowGoblins);
    // При нажатии на кнопку "Начать" при уже запущенной игре надо очищать интервал
    this.goblins.showRandomGoblins(); // показываем гоблинов с интервалом 1 сек
    this.gameController.hangEventClickByCells(); // вешаем обработчик кликов на ячейки доски
    this.gameController.hitPoints.textContent = 0;
    this.gameController.missPoints.textContent = 0;
    this.gameController.informer(false); // Скрываем активное сообщение
  }
}
