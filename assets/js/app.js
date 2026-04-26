
// Fetch the JSON file
fetch('../data/sneakers.json')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json(); 
  })
  .then(data => {

    renderSneakers(data);
    console.log(data);
  })
  .catch(error => console.error('Error fetching data:', error));

function renderSneakers(data) {

    const container = document.getElementById("container");
    container.innerHTML = '';

    data.forEach( (sneaker) => {
        const mainImage = sneaker.image[0];

        const card = document.createElement("div");
        card.classList = "card";

        const image = document.createElement("img");
        image.src = mainImage;
        image.alt = sneaker.name;
        image.classList = "sneaker-image";

        const name = document.createElement("h3");
        // name.textContent = sneaker.name;
        name.classList = "sneaker-name";

        container.appendChild(card);
        card.appendChild(image);
        card.appendChild(name);

        // add event listers for hover
        image.addEventListener('mouseenter', () => {
            gsap.to( name.querySelector(".sneaker-name"), {
                opacity: 1,
                y: 0,
                duration: 0.3
            })
        });
        image.addEventListener('mouseleave', () => {
            gsap.to( name.querySelector(".sneaker-name"), {
                opacity: 0,
                y: 10,
                duration: 0.3
            })
        });

        // add click event to open a modal

    });

}



