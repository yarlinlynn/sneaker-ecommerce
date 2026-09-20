
import { canvasItems } from "./canvasData.js";

// attach event lisenters to canvas component
export function initCanvas() {
    const canvas = document.querySelector("#canvas");
    if (!canvas) return;

    // canvas sizing
    const { canvasWidth, canvasHeight } = setUpCanvasSize(canvas);

    // image hover
    initImageHover(canvas);

    // click events
    initCollectionBox(canvas);
    initSneakerClickEvents(canvas);
    

    // dragging effect to canvas component
    initDragging(canvas, canvasWidth, canvasHeight);
}

// set up canvas sizing
function setUpCanvasSize(canvas) {
    const columns = 12;
    const boxSize = 240;

    const sneakerData = canvasItems.filter(item => item.type === "sneaker");

    // Number of rows is determined by the sneaker collection
    // const rows = Math.ceil(canvasItems.length / columns);
    const rows = Math.ceil(sneakerData.length / columns);

    const canvasWidth = columns * boxSize;
    const canvasHeight = rows * boxSize;

    canvas.style.width = `${canvasWidth}px`;
    canvas.style.height = `${canvasHeight}px`;

    return { 
        canvasWidth, 
        canvasHeight, 
    };
}

// click events for collection box
function initCollectionBox(canvas) {
    const collectionBox = canvas.querySelectorAll('[data-type="collection"]');
    collectionBox.forEach((title) => {
        title.addEventListener("click", () => {
            console.log("Collection clicked:", { 
                id: title.id, 
                name: title.textContent.trim(), 
            });
        });
    });
}

// click events for sneaker box to open product modal page
function initSneakerClickEvents(canvas) {
    const sneakerBox = canvas.querySelectorAll('[data-click="sneaker"]');
    sneakerBox.forEach((element) => {
        element.addEventListener("click", () => { 
            console.log("Sneaker clicked:", { 
                id: element.dataset.sneakerId, 
            }); 
        });
    });
}

// image hover
function initImageHover(canvas) {
    const images = canvas.querySelectorAll("img");
    images.forEach((img) => { 
        img.addEventListener("mouseenter", () => { 
            img.src = img.dataset.hover; 
        }); 
        img.addEventListener("mouseleave", () => { 
            img.src = img.dataset.default; 
        }); 
    });
}

// initialize canvas dragging functionality
function initDragging(canvas, canvasWidth, canvasHeight) {

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