import { returnScores } from './refresh.js';

const name = document.querySelector('#name');
const score = document.querySelector('#scores');
const container = document.querySelector('.scoreContainer');

const displayScores = async () => {
  const scores = await returnScores();

  container.innerHTML = '';

  scores.result.forEach((score) => {
    const wrapper = document.createElement('p');
    wrapper.classList.add('scoreData');
    wrapper.innerHTML = `<i class="fas fa-clock"></i> ${score.user}: ${score.score}`;
    container.appendChild(wrapper);
  });

  name.value = '';
  score.value = '';
};

export default displayScores;