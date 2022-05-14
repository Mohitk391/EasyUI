const toast = document.querySelector("#toast");
const btnToast = document.querySelector("#btnToast");
const btnHideToast = document.querySelector("#hideToast");


btnToast.addEventListener("click", ()=>{
    toast.className="show";
    setTimeout(()=>{toast.classList.remove("show");},3000)
});
btnHideToast.addEventListener("click",()=>{
    toast.classList.remove("show");
});