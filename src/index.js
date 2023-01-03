import './style.css';

const scores = [
  {
    name: 'Abdifah',
    score: 20,
  },
  {
    name: 'Cabdiqani',
    score: 22,
  },
  {
    name: 'Sahra',
    score: 33,
  },
  {
    name: 'ismaaciil',
    score: 90,
  },
  {
    name: 'Hana',
    score: 99,
  },
  {
    name: 'Yaasiin',
    score: 33,
  },

];

const element = document.createElement('li');

const render = () => {
  scores.forEach((item, index) => {
    element.innerHTML += `
      <li class='litem ${index % 2 !== 0 ? 'item' : 'item1'}' >
    <label class='lname'> ${item.name} : </label> 
    <label class='lscore'> ${item.score} </label>
  </li>
      
      `;
  });
};
window.onload = () => {
  render();
  document.querySelector('#score').appendChild(element);
};