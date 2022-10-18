import { postRequest, getResponse } from './useHTTP.js';

const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameGUID = 'vHdsDqru3uoRKhyKuX4T';
const gameEndPoint = `/games/${gameGUID}/scores/`;

const addScoreEntry = async (scoreEntry) => {
  return await postRequest(baseUrl+gameEndPoint, scoreEntry);
}

const getScoreEntry = async () => {
  return await getResponse(baseUrl+gameEndPoint);
}

const displayList = (data) => {
  const sortedData = data.result.sort((a,b) => a.score - b.score);
  const scoreBoardContainer = document.getElementById('scoreBoardContainer');
  scoreBoardContainer.innerHTML = '';
  sortedData.forEach((item) => {
    scoreBoardContainer.innerHTML
      += `
        <div id='scoreBoardItem' class='scoreBoardItem'>
          <p>${item.user}</p>
          <p>${item.score}</p>
        </div>
      `;
  });
};

export { displayList, addScoreEntry, getScoreEntry };
