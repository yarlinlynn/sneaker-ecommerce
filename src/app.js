
// import tailwind css
import './css/style.css';

// import components:
import { Header } from './components/header.js';

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#app").innerHTML = `
        ${Header()}

        <main>
        
        </main>
    `;
});