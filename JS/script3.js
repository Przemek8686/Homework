console.log("Witam Wszystkich!");

let body = document.querySelector(".body");
let button = document.querySelector(".button");
let themeName = document.querySelector(".themeName");


button.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeName.innerText = "Jasne";
    }
    else {
        themeName.innerText = "Ciemne";

    }



}
);
