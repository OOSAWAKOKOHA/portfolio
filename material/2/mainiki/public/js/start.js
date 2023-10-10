const startButton = document.querySelector('.startButton');
const startWrap = document.querySelector('.start');
const questionWrap = document.querySelector('.questionWrap');

startButton.addEventListener( 'click', () => {
  console.log('click');
  startWrap.style.display = 'none';
  questionWrap.style.display = 'flex';

} )