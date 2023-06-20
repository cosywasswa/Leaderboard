import display from './display.js';
import leaderArr from './leader.js';

const container = document.querySelector('.scoreContainer');
const refresh = document.querySelector('.refresh');
const refreshing = () => {
  refresh.addEventListener('click', (event) => {
    event.preventDefault();
    container.innerHTML = '';
    display(leaderArr);
  });
};

export default refreshing;