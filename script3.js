{
    const welcome = () => {
        console.log("Witam Wszystkich!");

    }
    const onChangeBackgroundCilck = () => {
        const themeName = document.querySelector(".themeName");
        const body = document.querySelector(".body");
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "Jasny" : "Ciemne";
    };

    const init = () => {

        const button = document.querySelector(".button");
        button.addEventListener("click", onChangeBackgroundCilck);
    }
    init()
    welcome();
}


