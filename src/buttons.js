import home from "./home";
import menu from "./menu";
import contact from "./contact";

const buttons = () => {
    const element = document.getElementById("content");
    const buttonContainer = document.createElement("div");
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";
    const contactButton = document.createElement("button");
    contactButton.innerHTML = "HContact";
    homeButton.addEventListener("click", () => {
        element.replaceChildren("");
        element.appendChild(buttonContainer)
        home();
    });
    menuButton.addEventListener("click", () => {
        element.replaceChildren("");
        element.appendChild(buttonContainer)
        menu();
    });
    contactButton.addEventListener("click", () => {
        element.replaceChildren("");
        element.appendChild(buttonContainer)
        contact();
    });


    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);
    element.appendChild(buttonContainer);
    return element;
}

export default buttons;