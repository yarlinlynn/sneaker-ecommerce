
import { openProductModalPage } from "./productModalPage";

export function openProductModal(sneaker) {
    const modalContainer = document.querySelector("#modal");
    if (!modalContainer) {
        console.error("#modal not found");
        return;
    }

    // Inject modal component DOM
    modalContainer.innerHTML = openProductModalPage(sneaker);

    const modal = modalContainer.querySelector(".modal");
    if (!modal) {
        console.error(".modal not found");
        return;
    }

    // Show container
    gsap.set(modalContainer, {
        display: "block"
    });

    // Initial modal state
    gsap.set(modal, {
        opacity: 0
    });

    // Fade in
    gsap.to(modal, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
    });


    // CLOSE BUTTON
    const closeButton = modal.querySelector("[data-modal-close]");
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            closeProductModal(modal);
        });
    }
}

export function closeProductModal(modal) {
    if (!modal) return;
    gsap.to(modal, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
            const modalContainer = document.querySelector("#modal");
            if (!modalContainer) return;
            modalContainer.innerHTML = "";
            gsap.set(modalContainer, {
                display: "none"
            });
        }
    });
}