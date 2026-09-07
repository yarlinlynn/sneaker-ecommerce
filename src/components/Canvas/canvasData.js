
import { collections } from "../../data/sneakers.js";

// Flattens the data from collections array, removing infor neede for canvas component
export const sneakers = collections.flatMap(collection => 
    collection.collection.flatMap(productCollection => 
        productCollection.sneaker.map(sneaker => ({
            ...sneaker,

            collection: collection.id,
            description: productCollection.description,
            productCollection: productCollection.name
        }))
    )
);