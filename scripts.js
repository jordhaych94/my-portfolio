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

function submit() {
 let text = document.getElementById('textbox').value;
 if (text.length >= 1 && text.length <= 20) {
  alert('Submitted, thank you!');
 } else if (text.length > 20) {
  alert('Alot on your mind, i see...')
 }
  else { alert('no text'); }
}
