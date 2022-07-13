import GameController from './gameController';

/**
 * Класс "Гоблины" показывает гоблинов на доске в случайном порядке
 * @param {Number} boardSize - ширина доски в клетках
 */
export default class Goblins {
  constructor() {
    this.gameController = new GameController();
  }

  /**
   * Показывает гоблинов в таблице в случайном порядке
   */
  showRandomGoblins() {
    const cells = document.getElementsByClassName('board__col');
    this.intervalShowGoblins = setInterval(() => {
      const randomCell = this.generateRandomCell(this.boardSize);
      const activeCell = document.querySelector('._active');
      if (activeCell) {
        activeCell.classList.remove('_active');
        this.gameController.addMissPoint();
        if (this.gameController.missPoints.textContent === '5') {
          this.gameController.endGame();
          clearInterval(this.intervalShowGoblins);
        }
      }
      cells[randomCell].classList.add('_active');
    }, 1000);
  }

  /**
   * Генерирует случайное число в зависимости от количества клеток в доске
   * @param {number} boardSize Количество клеток доски по одной из сторон
   * @returns {number} случайное число в диапазоне от 0 до количества
   * клеток доски (последнее число не включается для использования
   * в качестве индекса)
   */
  generateRandomCell() {
    this.boardSize = document.querySelectorAll('.board__row').length;
    this.mini = 0;
    this.maxi = Math.floor(this.boardSize ** 2);
    return Math.floor(Math.random() * (this.maxi - this.mini)) + this.mini;
    // Максимум не включается, минимум включается
  }
}
