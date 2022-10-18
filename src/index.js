import './styles.css';
import { addScoreEntry, getScoreEntry } from './modules/app.js';

const nameInput = document.querySelector('.nameInput');
const scoreInput = document.querySelector('.scoreInput');
const form = document.querySelector('.entryContainer');
const refresh = document.querySelector('.refreshBtn');

form.addEventListener('submit', (e) => { 
  e.preventDefault();
  const payloadInput = {user : nameInput.value, score: scoreInput.value};
  addScoreEntry(payloadInput);
});

refresh.addEventListener('click', () => {
  getScoreEntry();
});

