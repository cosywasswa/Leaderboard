import { saveScores } from './refresh.js';
import displayScores from './display.js';

const names = document.querySelector('#name');
const scores = document.querySelector('#scores');
const refresh = document.querySelector('.refresh');
const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = names.value;
  const score = scores.value;
  if (names.value.length > 0 && scores.value.length > 0) {
    await saveScores(name, score);
    form.reset();
  }
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  displayScores();
});