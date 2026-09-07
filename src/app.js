
// import tailwind css
import './css/style.css';

// import components:
import { Header } from './components/header.js';
import { Canvas, initCanvas } from './components/Canvas/canvas.js';

document.addEventListener("DOMContentLoaded", async () => {

    const app = document.querySelector("#app");

    app.innerHTML = `
        ${Header()}

        <main id="canvas"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ccc] cursor-grab select-none"
        >
            ${Canvas()}
        </main>
    `;

    initCanvas();
});
