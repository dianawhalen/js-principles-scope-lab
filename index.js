// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBest) {
  bestCustomer = newBest;
}

const leastFavoriteCustomer = 'lucy';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'tom';
}
