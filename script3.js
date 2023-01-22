{
    const welcome = () => {
        console.log("Witam Wszystkich!");

    }
    const init = () => {

        const button = document.querySelector(".button");
        button.addEventListener("click", ToggleBackground);
    }
    init()

    const ToggleBackground = () => {
        const themeName = document.querySelector(".themeName");
        const body = document.querySelector(".body");
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            themeName.innerText = "Jasne";
        }
        else {
            themeName.innerText = "Ciemne";

        }



    };

    welcome();
}


