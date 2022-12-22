

const contact = () => {
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

    //container for content
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");

    const contactTitle = document.createElement("div");
    contactTitle.classList.add("contactTitle");
    const contactTitleH = document.createElement("h1");
    contactTitleH.innerHTML = "Contact";
    contactTitle.appendChild(contactTitleH);
    contentContainer.appendChild(contactTitle);

    //contact elements
    const contact1 = document.createElement("div");
    contact1.classList.add("contact");
    const contact1H = document.createElement("h2");
    contact1H.innerHTML = "Contact 1";
    contact1.appendChild(contact1H);

    const contactp1 = document.createElement("p");
    contactp1.innerHTML = "First <br> 555-555-555 <br> qwe@Fakemail.com";
    contact1.appendChild(contactp1);

    //contact 2
    const contact2 = document.createElement("div");
    contact2.classList.add("contact");
    const contact2H = document.createElement("h2");
    contact2H.innerHTML = "Contact 2";
    contact2.appendChild(contact2H);

    const contactp2 = document.createElement("p");
    contactp2.innerHTML = "Second <br> 555-555-555 <br> qwe@Fakemail.com";
    contact2.appendChild(contactp2);


    //contact 3
    const contact3 = document.createElement("div");
    contact3.classList.add("contact");
    const contact3H = document.createElement("h2");
    contact3H.innerHTML = "Contact 3";
    contact3.appendChild(contact3H);

    const contactp3 = document.createElement("p");
    contactp3.innerHTML = "Third <br> 555-555-555 <br> qwe@Fakemail.com";
    contact3.appendChild(contactp3);


    contentContainer.appendChild(contact1);
    contentContainer.appendChild(contact2);
    contentContainer.appendChild(contact3);

    element.appendChild(buttonContainer);
    element.appendChild(contentContainer);

    return element;
}

export default contact;