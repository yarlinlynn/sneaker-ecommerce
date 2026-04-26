
// fetch sneakers from json file

export async function fetchSneakers() {
  try {
    const response = await fetch('../data/sneakers.json');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;


  } catch (error) {
    console.error('Error fetching data:', error);
  }
}