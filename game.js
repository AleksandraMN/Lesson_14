'use strict';

(() => {
  const getRandom = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  };

  const getAnswer = () => {
    const num = getRandom(0, 1);
    if (num === 0) {
      console.log('num:', num);
      return 'четное';
    } else {
      console.log('num:', num);
      return 'не четное';
    }
  };

  const getNumber = (n) =>
    Number(prompt(`Загадайте и введите число от 1 ` +
    `до количества имеющихся у Вас шариков?`, ''));

  const game = () => {
    const result = {
      countBollPlayer: 5,
      countBollBot: 5,
    };
    alert(`Старт игры!`);
    return function start() {
      while (result.countBollPlayer > 0 && result.countBollBot > 0) {
        alert(`Количество шариков: \nИгрок:` +
        ` ${result.countBollPlayer} \nБот: ${result.countBollBot}`);
        console.log('result.countBollPlayer', result.countBollPlayer);
        console.log('result.countBollBot', result.countBollBot);
        let n = 0;
        while (n <= 0 || n > result.countBollPlayer ||
          Number.isNaN(n) === true) {
          n = getNumber();
        }
        const numBot = getAnswer();
        alert(`Бот рамдомно загадал, что количество ` +
        `шариков, загаданное вами ${numBot}!`);

        if (numBot === 'четное' && (n % 2) === 0 ||
        numBot === 'не четное' && (n % 2) !== 0) {
          alert(`Бот угадал! Ваши шарики в` +
          `количестве ${n} штук переходят боту!`);
          result.countBollBot += n;
          result.countBollPlayer -= n;
        }
        if (numBot === 'четное' && (n % 2) !== 0 ||
        numBot === 'не четное' && (n % 2) === 0) {
          alert(`Бот не угадал! Шарики в количестве ${n} ` +
          `штук переходят от бота Вам!`);
          result.countBollBot -= n;
          result.countBollPlayer += n;
        }
      }
      if (result.countBollPlayer <= 0) {
        return alert(`Вы проиграли! Ваш счет равен ${result.countBollPlayer}!`);
      }
      if (result.countBollBot <= 0) {
        return alert(`Бот проиграл! Его счет равен ${result.countBollBot}!`);
      }
    };
  };
  window.RPS = game();
})();
