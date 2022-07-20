var openModal = document.querySelector("#openModal");
var closeModal = document.querySelector("#closeModal");

openModal.addEventListener("click", () => {
    document.querySelector("#myModal").style.display = "flex";
});

closeModal.addEventListener("click", () => {
    document.querySelector("#myModal").style.display = "none";
});