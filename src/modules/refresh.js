import display from "./display";
import leaderArr from "./leader";

const container = document.querySelector('.scoreContainer');
const refresh = document.querySelector('.refresh');
const refreshing = () => {
refresh.addEventListener('click', (event) =>{
    container.innerHTML = ``;
    display(leaderArr);
})
}

export default refreshing;