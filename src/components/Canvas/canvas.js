
import { canvasItems } from "./canvasData.js";

// render sneaker data to DOM
export function Canvas() {
    return `
        ${canvasItems.map((item) => {

            if (item.type === "collection") {
                return `
                   <section 
                        class="float-left w-[240px] h-[240px] p-[10px] bg-[#f4efef] border border-[#dadada] flex items-center justify-center text-center hover:bg-white hover:text-[#111]">
                        <h1 data-type="collection" id="collection-${item.id}" class="text-[26px] font-medium uppercase hover:cursor-pointer">
                            ${item.name}
                        </h1>
                   </section> 
                `;
            }

            return `
                <section data-collection-id="${item.collection}"
                    class="float-left w-[240px] h-[240px] p-[10px] bg-[#f4efef] border border-[#dadada]">
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
            `;
        }).join("")}
    `;
}
