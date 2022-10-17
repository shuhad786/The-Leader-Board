const data = [
  {
    name: 'first',
    score: '1',
  },
  {
    name: 'second',
    score: '3',
  },
  {
    name: 'bye',
    score: '10',
  },
  {
    name: 'winner',
    score: '4',
  },
  {
    name: 'oh yes',
    score: '2',
  },
];

const displayList = () => {
  const sortedData = data.sort((a, b) => a.score - b.score);
  const scoreBoardContainer = document.getElementById('scoreBoardContainer');
  scoreBoardContainer.innerHTML = '';
  sortedData.forEach((item, id) => {
    scoreBoardContainer.innerHTML
      += `
        <div id='scoreBoardItem' class='scoreBoardItem' ${id}>
          <p>${item.name}</p>
          <p>${item.score}</p>
        </div>
      `;
  });
  return sortedData;
};

export default displayList;
