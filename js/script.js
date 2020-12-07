'use strict';
const wrap = document.querySelector('.wrapper'),
      text = document.querySelector('.title'),
      btn = document.querySelector('.button');

wrap.style.backgroundColor = `#333333`;
text.textContent = `#333333`;
btn.style.color = `#333333`;

function getRandom() {
  return Math.random(7);
}
function convertToHex(num) { 
  return Number(num).toString(16); 
}
 let getColor = function(num) {
  return num.slice(2,8);
};

btn.addEventListener('click', function() {
  let randomNum = getRandom();
  let hexNum = convertToHex(randomNum);
  let color = getColor(hexNum);
  wrap.style.backgroundColor = `#${color}`;
  text.textContent = `#${color}`;
  btn.style.color = `#${color}`;
});