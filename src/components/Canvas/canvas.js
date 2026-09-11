
import { sneakers } from "./canvasData.js";

// render sneaker data to DOM
export function Canvas() {
    return `
        ${sneakers.map( (sneaker) => {
            return `
                <section class="float-left w-[240px] h-[240px] p-[10px] bg-[#f4efef] border border-[#dadada]">

                    <img class="w-full h-[80%] object-contain transition-opacity duration-400 ease-in-out cursor-pointer"
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
                        <h1 class="my-[5px] text-[26px] font-medium cursor-pointer">
                            ${sneaker.color}
                        </h1>
                    </div>
                </section>
            `;
        }).join("")}
    `;
}
