let checkButton = document.querySelector('.check');
let guess = document.querySelector('.guess');
let message = document.querySelector('.message');
let randomNum = Math.floor(Math.random() * 25) + 1;
let point = 10;
const ranGenNum = () => {
 return randomNum;
}
console.log(ranGenNum());
checkButton.onclick = () => {
console.log(randomNum, guess.value *1)
if(randomNum === Number(guess.value)){
  message.innerHTML = `You won!`;
  document.querySelector('body').style.backgroundColor = 'green';
document.querySelector('.number').innerHTML = guess.value *1;
}else if(point>0 && randomNum < guess.value*1){
  document.querySelector('.score').innerHTML = point;
  point--;
  message.innerHTML = `it's high`;
}else if(point>0 && randomNum > guess.value*1){
  document.querySelector('.score').innerHTML = point;
  point--;
  message.innerHTML = `it's low`;
}else if(point === 0){
    document.querySelector('.score').innerHTML = point;
    point--;
    message.innerHTML = `You are loser`;
}
}
console.log((document.querySelector('.score').innerHTML) * 1)
console.log(checkButton);
