let isOpen = null;

const overlay = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModalBtn");
const modal = document.querySelector(".modal");
const signupBtn = document.getElementById("signupBtn");
const dialog = document.getElementById("modalDialog");

function toggleModal() {
    overlay.classList.remove("open", "closed");
    modal.classList.remove("open", "closed");

    void overlay.offsetWidth;

    if (!isOpen) {
        overlay.classList.add("open");
        modal.classList.add("open");
    } else {
        overlay.classList.add("closed");
        modal.classList.add("closed");
    }

    isOpen = !isOpen;
}

openBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

signupBtn.addEventListener("click", toggleModal);

dialog.addEventListener("click", (e) => {
    e.stopPropagation();
});