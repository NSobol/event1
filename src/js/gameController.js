/**
 * Класс "GameController" обрабатывает события клика по доске,
 * подсчитывает очки, останавливает игру и выводит сообщения
 */
export default class GameController {
  constructor() {
    this.stopButton = document.querySelector('.button__end');
    this.startButton = document.querySelector('.button__start');
    this.informerText = document.getElementById('informer');
    this.hitPoints = document.getElementById('hit');
    this.missPoints = document.getElementById('miss');
    this.endGame = this.endGame.bind(this);
  }

  /**
   * Вешает обработчик события клика по доске
   */
  hangEventClickByCells() {
    const board = document.querySelector('#game-board');
    board.addEventListener('click', (e) => {
      if (e.target.classList.contains('board__col')) this.beatHammer();
      if (e.target.classList.contains('_active')) this.addHitPoint(e.target);
    });
  }

  /**
   * Анимация удара молотка
   */
  beatHammer() {
    this.board = document.querySelector('.board');
    this.board.classList.add('_click');
    setTimeout(() => {
      this.board.classList.remove('_click');
    }, 150);
  }

  /**
   * Выводит сообщение об окончании игры и убирает гоблинов с доски
   */
  endGame(stopButtonClick) {
    const activeGoblin = document.querySelector('._active');
    if (activeGoblin) activeGoblin.classList.remove('_active');
    if (stopButtonClick) {
      this.informer('Игра закончена. Отдохните и возвращайтесь в игру!');
      return;
    }
    this.informer('Гоблины ускользнули от вас. Попробуйте ещё раз!');
  }

  /**
   * Выводит сообщение под доской
   * @param {String} text - текст выводимого сообщения. Если false - скрывает сообщение
   */
  informer(text) {
    if (text) {
      this.informerText.textContent = text;
      return;
    }
    this.informerText.textContent = '';
  }

  /**
   * Добавляет очко попадания по гоблину и убирает гоблина
   * @param {HTMLElement} cell - Клетка, по которой был клик
   */
  addHitPoint(cell) {
    this.hitPoints.textContent = Number(this.hitPoints.textContent) + 1;
    cell.classList.remove('_active');
  }

  /**
   * Добавляет очко упущенного гоблина
   */
  addMissPoint() {
    this.missPoints.textContent = Number(this.missPoints.textContent) + 1;
  }
}
