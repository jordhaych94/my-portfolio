let result = document.getElementById('display');

function number(num) {
  result.value += num;
}

function clearResult() {
  result.value = '';
}

function operator(operator) {
  result.value += operator;
}

function calculate() {
  result.value = eval(result.value);
}
