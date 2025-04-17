let input1 = document.getElementById('mitexto');
let result1 = document.getElementById('result');

input1.oninput = function() {
  result1.textContent = input1.value;
};