var openModal = document.querySelector("#openModal");
var closeModal = document.querySelector("#closeModal");

console.log(openModal);

openModal.addEventListener("click", () => {
    document.querySelector("#myModal").style.display = "block";
});

closeModal.addEventListener("click", () => {
    document.querySelector("#myModal").style.display = "none";
});