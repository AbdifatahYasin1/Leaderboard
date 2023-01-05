const scoredisplay = document.querySelector('#score');

export const renderScore = (allusers) => {
  // dot result is from the api result
  const allUsers = (allusers.result);
  let items = '';
  allUsers.forEach((allUsers) => {
    items += `<li class="listItem">${allUsers.user}:<span> ${allUsers.score}</span></li>`;
    scoredisplay.innerHTML = items;
  });
};

export default renderScore;