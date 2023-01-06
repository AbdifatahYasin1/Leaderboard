import './style.css';
import { renderScore } from './modules/renderData';

const username = document.querySelector('.name');
const userscore = document.querySelector('.score');
const refresh = document.querySelector('.refresh');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/w28XV0XABslGGmmHyseU/scores/';

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();

  renderScore(data);
};

refresh.addEventListener('click', getData);

// data to be submitted

const submitData = async () => {
  const dataInfo = {
    user: username.value,
    score: userscore.value,
  };

  const dataFormart = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataInfo),
  };
  const response = fetch(url, dataFormart);
  const data = await (await response).json();
  username.value = '';
  userscore.value = '';
  return data;
};

const gameForm = document.querySelector('.formcontent');
gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submitData();
});