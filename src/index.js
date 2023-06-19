import './style.css';
import Score from './modules/scrores.js';
import leaderArr from './modules/leader.js';
import display from './modules/display.js';
import refreshing from './modules/refresh.js';

const form = document.getElementById('form');
const name = document.getElementById('name');
const scored = document.getElementById('scores');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const myscore = new Score(name.value, scored.value);
  if (name && scored) {
    leaderArr.push(myscore);
    form.reset();
  }
});
refreshing();
display(leaderArr);
