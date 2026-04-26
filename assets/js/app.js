
import { fetchSneakers } from './fetchSneaker.js';
import { renderSneakers } from './renderSneaker.js';

document.addEventListener('DOMContentLoaded', async () => {
  await fetchSneakers();
  const data = await fetchSneakers();

  console.log(data); 

  if (data) {
    renderSneakers(data);
  }
});



