
import { collections } from "../../data/sneakers.js";

// Flattens the data from collections array, removing info needed for canvas component
export const canvasItems = collections.flatMap(collection => {
    // extract info for collection box
    const collectionBox = {
        type: "collection",
        id: collection.id,
        name: collection.id
    }

    // extract info for sneaker box: sneaker image, name, color to render to canvas component only
    const sneakerBoxes = collection.collection.flatMap(productCollection => 
        productCollection.sneaker.map(sneaker => ({
            type: "sneaker",
            id: sneaker.id,
            name: sneaker.name,
            color: sneaker.color,
            images: sneaker.images,
            price: sneaker.price,
            collection: collection.id,
            productCollection: productCollection.name,
            description: productCollection.description
        }))
    );

    return [
        collectionBox,
        ...sneakerBoxes
    ];
})