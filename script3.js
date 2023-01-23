{
    const welcome = () => {
        console.log("Witam Wszystkich!");

    }
    function onChangeBackgroundCilck() {
        const themeName = document.querySelector(".themeName");
        const body = document.querySelector(".body");
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            themeName.innerText = "Jasne";
        }
        else {
            themeName.innerText = "Ciemne";

        }



    }
    const init = () => {

        const button = document.querySelector(".button");
        button.addEventListener("click", onChangeBackgroundCilck);
    }
    init()
    welcome();
}


