
export function renderSneakers(data) {
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

        // add click event to open a modal

    });
}