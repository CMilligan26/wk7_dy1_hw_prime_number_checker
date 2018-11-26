const PubSub = require('../helpers/pubsub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeNumberChecker:prime-result-checked', (event) => {
    const numberIsPrime = event.detail;
    this.displayResult(numberIsPrime);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
  resultElement.textContent = `Yes! It's a prime number.`;
  }
  else {
  resultElement.textContent = `No! It's not a prime number.`;
  }
};

module.exports = ResultView;
