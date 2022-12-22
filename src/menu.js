

const menu = () => {
    //buttons in container
    const element = document.getElementById("content");
    const buttonContainer = document.createElement("div");
    const homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    const menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";
    const contactButton = document.createElement("button");
    contactButton.innerHTML = "HContact";
    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);

    //content in container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menuTitle");
    const menuTitleH = document.createElement("h1");
    menuTitleH.innerHTML = "Menu";
    menuTitle.appendChild(menuTitleH);
    contentContainer.appendChild(menuTitle);

    //Pizza section
    const sectionPizza = document.createElement("div");
    sectionPizza.classList.add("sectionPizza");
    const sectionPizzaH = document.createElement("h2");
    sectionPizzaH.innerHTML = "Pizza";
    sectionPizza.appendChild(sectionPizzaH);
    contentContainer.appendChild(sectionPizza);

    //pizza 1
    const pizza1 = document.createElement("div");
    pizza1.classList.add("pizza1");

    const pizza1H = document.createElement("h2");
    pizza1H.innerHTML = "Pizza number 1";

    const pizza1p = document.createElement("p");
    pizza1p.innerHTML = "Lorem ipsum dolor sit amet. Est perspiciatis nesciunt id accusantium veniam sit sint dolorum 33 commodi commodi hic magni maxime quo consequuntur quas. Cum dolorum quibusdam est voluptas atque ut assumenda eaque. Sed accusamus voluptas id expedita corporis qui labore ipsam qui architecto fugiat. Aut cumque incidunt ut libero voluptatem aut maiores quia et voluptas voluptatem in quaerat quis qui Quis quia.";
    
    const pizza1p2 = document.createElement("p");
    pizza1p2.innerHTML = "$10";
    pizza1p2.style.fontWeight = "bold";

    pizza1.appendChild(pizza1H);
    pizza1.appendChild(pizza1p);
    pizza1.appendChild(pizza1p2);

    //pizza 2
    const pizza2 = document.createElement("div");
    pizza2.classList.add("pizza2");

    const pizza2H = document.createElement("h2");
    pizza2H.innerHTML = "Pizza number 2";

    const pizza2p = document.createElement("p");
    pizza2p.innerHTML = "Lorem ipsum dolor sit amet. Est perspiciatis nesciunt id accusantium veniam sit sint dolorum 33 commodi commodi hic magni maxime quo consequuntur quas. Cum dolorum quibusdam est voluptas atque ut assumenda eaque. Sed accusamus voluptas id expedita corporis qui labore ipsam qui architecto fugiat. Aut cumque incidunt ut libero voluptatem aut maiores quia et voluptas voluptatem in quaerat quis qui Quis quia.";
    
    const pizza2p2 = document.createElement("p");
    pizza2p2.innerHTML = "$14";
    pizza2p2.style.fontWeight = "bold";

    pizza2.appendChild(pizza2H);
    pizza2.appendChild(pizza2p);
    pizza2.appendChild(pizza2p2);

    //Drinks section
    const sectionDrinks = document.createElement("div");
    sectionPizza.classList.add("sectionDrinks");
    const sectionDrinksH = document.createElement("h2");
    sectionDrinksH.innerHTML = "Drinks";
    sectionDrinks.appendChild(sectionDrinksH);

    //Drink 1
    const drink1 = document.createElement("div");
    drink1.classList.add("drink");

    const drink1H = document.createElement("h2");
    drink1H.innerHTML = "Drink number 1";

    const drink1p = document.createElement("p");
    drink1p.innerHTML = "Lorem ipsum dolor sit amet. Est perspiciatis nesciunt id accusantium veniam sit sint dolorum 33 commodi commodi hic magni maxime quo consequuntur quas. Cum dolorum quibusdam est voluptas atque ut assumenda eaque. Sed accusamus voluptas id expedita corporis qui labore ipsam qui architecto fugiat. Aut cumque incidunt ut libero voluptatem aut maiores quia et voluptas voluptatem in quaerat quis qui Quis quia.";
    
    const drink1p2 = document.createElement("p");
    drink1p2.innerHTML = "$2";
    drink1p2.style.fontWeight = "bold";

    drink1.appendChild(drink1H);
    drink1.appendChild(drink1p);
    drink1.appendChild(drink1p2);

    //Drink 2
    const drink2 = document.createElement("div");
    drink2.classList.add("drink");

    const drink2H = document.createElement("h2");
    drink2H.innerHTML = "Drink number 2";

    const drink2p = document.createElement("p");
    drink2p.innerHTML = "Lorem ipsum dolor sit amet. Est perspiciatis nesciunt id accusantium veniam sit sint dolorum 33 commodi commodi hic magni maxime quo consequuntur quas. Cum dolorum quibusdam est voluptas atque ut assumenda eaque. Sed accusamus voluptas id expedita corporis qui labore ipsam qui architecto fugiat. Aut cumque incidunt ut libero voluptatem aut maiores quia et voluptas voluptatem in quaerat quis qui Quis quia.";
    
    const drink2p2 = document.createElement("p");
    drink2p2.innerHTML = "$4";
    drink2p2.style.fontWeight = "bold";

    drink2.appendChild(drink2H);
    drink2.appendChild(drink2p);
    drink2.appendChild(drink2p2);



    contentContainer.appendChild(pizza1);
    contentContainer.appendChild(pizza2);

    contentContainer.appendChild(sectionDrinks);
    contentContainer.appendChild(drink1);
    contentContainer.appendChild(drink2);

    element.appendChild(buttonContainer);
    element.appendChild(contentContainer)

    return element;
}



export default menu;