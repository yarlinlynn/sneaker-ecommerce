
import { Header } from "../header";

export function openProductModalPage(sneaker) {
    return `
        <div class="modal fixed inset-0 z-50 flex h-screen w-screen bg-[#f4efef] opacity-0">

            <div class="container">
                
                <div class="modal-header">
                    ${Header()}
                    <button type="button" data-modal-close aria-label="Close product"
                        class="absolute top-8 right-[15rem] z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white cursor-pointer"
                    >
                        <span class="text-xl pb-[3px]">&times;</span>
                    </button>
                </div>

                <!-- Modal content below slideshow images and sneaker data eg; name, collection etc -->
                <div class="">
                    <div class="flex h-full w-[50%] gap-4">
                        ${sneaker.images.map((image, index) => `
                            <img id="${image.id}"
                                src="${image}"
                                alt="${sneaker.name} - image ${index + 1}"
                                loading="lazy"
                            />
                        `).join("")}
                    </div>
                    <div class="modal-content px-8 grid grid-cols-2 gap-2">
                        <h1 class="text-[4rem] font-medium">${sneaker.name}</h1>
                        <p class="text-[1rem] w-[40rem] col-start-1 col-end-2">${sneaker.description || ""}</p>
                        <h3 class="text-[1.5rem] uppercase text-[#7a7a7a] ml-auto">${sneaker.color}</h3>
                        <p class="mt-2 text-[3rem] font-medium col-start-2 row-start-1 ml-auto">R${sneaker.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>

            <div class="related-sneaker bg-[#f4efef] border-l border-l-gray-500 ml-4">
                <div class="box w-[200px] bg-white cursor-pointer">
                    <img src="https://images.ctfassets.net/hnk2vsx53n6l/3R7XxtWYepzfp59mncflPM/872d5d3beb6e35bd6411d2ec9e3c0990/411e207ef06741c81d79ca0298bae221e2981a4a.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80" alt="" loading="lazy" />
                </div>
                <div class="box w-[200px] cursor-pointer">
                    <img src="https://images.ctfassets.net/hnk2vsx53n6l/3R7XxtWYepzfp59mncflPM/872d5d3beb6e35bd6411d2ec9e3c0990/411e207ef06741c81d79ca0298bae221e2981a4a.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80" alt="" loading="lazy" />
                </div>
                <div class="box w-[200px] cursor-pointer">
                    <img src="https://images.ctfassets.net/hnk2vsx53n6l/3R7XxtWYepzfp59mncflPM/872d5d3beb6e35bd6411d2ec9e3c0990/411e207ef06741c81d79ca0298bae221e2981a4a.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80" alt="" loading="lazy" />
                </div>
                <div class="box w-[200px] cursor-pointer">
                    <img src="https://images.ctfassets.net/hnk2vsx53n6l/3R7XxtWYepzfp59mncflPM/872d5d3beb6e35bd6411d2ec9e3c0990/411e207ef06741c81d79ca0298bae221e2981a4a.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80" alt="" loading="lazy" />
                </div>
                <div class="box w-[200px] cursor-pointer">
                    <img src="https://images.ctfassets.net/hnk2vsx53n6l/3R7XxtWYepzfp59mncflPM/872d5d3beb6e35bd6411d2ec9e3c0990/411e207ef06741c81d79ca0298bae221e2981a4a.png?w=1200&h=1200&fm=avif&f=center&fit=fill&q=80" alt="" loading="lazy" />
                </div>

            </div>

        </div>
    `;
}
