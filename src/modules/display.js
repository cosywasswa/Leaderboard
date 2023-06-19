const container = document.querySelector('.scoreContainer');

const display = (leaderArr) => {
  if (leaderArr.length === 0) {
    container.innerHTML = '<p class="msg">No player</p>';
  }
  leaderArr.forEach((data) => {
    const wrapper = document.createElement('p');
    wrapper.classList.add('scoreData');
    wrapper.innerHTML = `${data.name}:${data.score}`;
    container.appendChild(wrapper);
  });
};

export default display;