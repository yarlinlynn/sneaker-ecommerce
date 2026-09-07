
import { collections } from "../../data/sneakers.js";

// Flatten the data 
const sneakers = collections.flatMap(collection => 
    collection.collection.flatMap(productCollection => 
        productCollection.sneaker.map(sneaker => ({
            ...sneaker,

            collection: collection.id,
            description: productCollection.description,
            productCollection: productCollection.name
        }))
    )
);

// render sneaker data to DOM
export function Canvas() {

    const rows = 12; 
    const columns = 12; 
    const boxSize = 240; 
    const boxCount = rows * columns;

    // const canvasWidth = columns * boxSize; 
    // const canvasHeight = rows * boxSize;

    return `
        ${Array.from( {length: boxCount}, (_, i) => {
            const sneaker = sneakers[i % sneakers.length];

            return `
                <section class="float-left w-[240px] h-[240px] p-[10px] bg-[#f4efef] border border-[#dadada]"
                >
                    <img class="w-full h-[80%] object-contain transition-opacity duration-400 ease-in-out"
                        src="${sneaker.images[0]}"  
                        data-default="${sneaker.images[0]}"
                        data-hover="${sneaker.images[1] || sneaker.images[0]}"
                        alt="${sneaker.name}" 
                        loading="lazy" 
                    />

                    <div class="content">
                        <p class="mt-[-15px] text-[10px] uppercase font-medium text-gray-500">
                            ${sneaker.name}
                        </p>
                        <h1 class="my-[5px] text-[26px] font-medium">
                            ${sneaker.color}
                        </h1>
                    </div>

                </section>
            `;
        }).join("")}}
    `;
}

// attach event lisenters to canvas component
export function initCanvas() {
    const canvas = document.querySelector("#canvas");
    if (!canvas) return;

    const rows = 12; 
    const columns = 12; 
    const boxSize = 240; 

    const canvasWidth = columns * boxSize; 
    const canvasHeight = rows * boxSize;

    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    // image hover
    const images = canvas.querySelectorAll("img");
    images.forEach((img) => { 
        img.addEventListener("mouseenter", () => { 
            img.src = img.dataset.hover; 
        }); 
        img.addEventListener("mouseleave", () => { 
            img.src = img.dataset.default; 
        }); 
    });

    // dragging effect to canvas component
    let isDragging = false;
    let startCoords = { x: 0, y: 0, };
    let startTranslate = { x: 0, y: 0, };

    canvas.addEventListener("mousedown", onDragStart); 
    window.addEventListener("mouseup", onDragEnd); 
    window.addEventListener("mousemove", onDrag);

    function onDragStart(e) {
        isDragging = true;

        startCoords.x = e.clientX; 
        startCoords.y = e.clientY; 

        startTranslate.x = gsap.getProperty(canvas, "x") || 0; 
        startTranslate.y = gsap.getProperty(canvas, "y") || 0; 

        gsap.set(canvas, { 
            cursor: "grabbing", 
            userSelect: "none", 
        });
    }

    function onDragEnd() {
        if (!isDragging) return; 
        isDragging = false; 
        gsap.set(canvas, { 
            cursor: "grab", 
            userSelect: "auto", 
        });
    }

    function onDrag(e) {
        if (!isDragging) return; 
        e.preventDefault(); 
        
        const deltaX = e.clientX - startCoords.x; 
        const deltaY = e.clientY - startCoords.y; 
        
        let newX = startTranslate.x + deltaX; 
        let newY = startTranslate.y + deltaY; 

        const maxX = Math.max( 0, (canvasWidth - window.innerWidth) / 2 ); 
        const maxY = Math.max( 0, (canvasHeight - window.innerHeight) / 2 ); 
        newX = Math.max( -maxX, Math.min(maxX, newX) ); 
        newY = Math.max( -maxY, Math.min(maxY, newY) ); 
        
        gsap.set(canvas, { 
            x: newX, 
            y: newY, 
        }); 
    }

}