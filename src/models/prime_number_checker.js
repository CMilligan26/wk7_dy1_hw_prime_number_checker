const PubSub = require('../helpers/pubsub.js');

const PrimeNumberChecker = function () {

}

PrimeNumberChecker.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:number-submitted', (event) => {
    const inputtedNumber = event.detail;
    const result = this.numberIsPrime(inputtedNumber);
    PubSub.publish('PrimeNumberChecker:prime-result-checked', result);
  });
};

PrimeNumberChecker.prototype.numberIsPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return true;
};

module.exports = PrimeNumberChecker;
