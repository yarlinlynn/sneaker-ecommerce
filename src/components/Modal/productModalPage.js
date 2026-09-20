
export function openProductModalPage(sneaker) {
    return `
        <div class="modal fixed inset-0 z-50 flex h-screen w-screen bg-[#f4efef] opacity-0">

            <div class="relative flex h-full p-8">
                <button type="button" data-modal-close aria-label="Close product"
                    class="absolute right-8 top-8 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white cursor-pointer"
                >
                    <span class="text-xl pb-[3px]">
                        &times;
                    </span>
                </button>

                <div class="flex flex-5 h-full w-full gap-4">
                    ${sneaker.images.map((image, index) => `
                        <div class="flex items-center justify-center">
                            <img
                                src="${image}"
                                alt="${sneaker.name} - image ${index + 1}"
                                loading="lazy"
                                class="h-full w-full"
                            />
                        </div>
                    `).join("")}
                </div>

                <div class="flex flex-2 h-full flex-col justify-center p-8 z-10 hidden">
                    <h1 class="text-[40px] font-medium">
                        ${sneaker.name}
                    </h1>
                    <p class="text-sm">
                        ${sneaker.description || ""}
                    </p>
                    <p class="text-sm uppercase text-[#7a7a7a]">
                        ${sneaker.color}
                    </p>
                    <p class="mt-2 text-sm font-medium">
                        ${sneaker.price}
                    </p>

                    <div class="suggestion_sneakers"></div>
                </div>
            </div>
        </div>
    `;
}