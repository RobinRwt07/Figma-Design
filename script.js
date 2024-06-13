const sideBar = document.querySelector("#sidebar");
const btn = document.querySelector("#menuopen");
const closebtn = document.querySelector("#menu-close");

btn.addEventListener("click", () => {
    sideBar.style.left = "0px";
});

closebtn.addEventListener("click", () => {
    sideBar.style.left = "-300px";
})
