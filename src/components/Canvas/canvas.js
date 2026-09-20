
import { canvasItems } from "./canvasData.js";

// render sneaker boxes to DOM
export function Canvas() {
    return `
        ${canvasItems.filter(item => item.type === "sneaker").map(item => `
            <section class="float-left w-[240px] h-[240px] p-[10px] bg-[#f4efef] border border-[#dadada]">

                <img class="w-full h-[80%] object-contain transition-opacity duration-400 ease-in-out cursor-pointer" 
                    src="${item.images[0]}" 
                    data-default="${item.images[0]}" 
                    data-hover="${item.images[1] || item.images[0]}" 
                    data-sneaker-id="${item.id}"
                    data-click="sneaker"
                    alt="${item.name}" loading="lazy"
                />

                <div class="content">
                    <p class="mt-[-15px] text-[10px] uppercase font-medium text-gray-500"> 
                        ${item.name} 
                    </p> 
                    <h1 data-click="sneaker" data-sneaker-id="${item.id}" class="my-[5px] text-[26px] font-medium cursor-pointer"> 
                        ${item.color} 
                    </h1>
                </div>
            </section>
        `).join("")}
    `;
}
