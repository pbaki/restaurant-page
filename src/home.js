
const home = () => {
    const element = document.getElementById("content");
    

    //container for content
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");

    const restaurantDescriptionContainer = document.createElement("div");
    restaurantDescriptionContainer.classList.add("restaurantDescriptionContainer");
    
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerHTML = "Lorem ipsum dolor sit amet. Est perspiciatis nesciunt id accusantium veniam sit sint dolorum 33 commodi commodi hic magni maxime quo consequuntur quas. Cum dolorum quibusdam est voluptas atque ut assumenda eaque. Sed accusamus voluptas id expedita corporis qui labore ipsam qui architecto fugiat. Aut cumque incidunt ut libero voluptatem aut maiores quia et voluptas voluptatem in quaerat quis qui Quis quia.";
    restaurantDescriptionContainer.appendChild(descriptionParagraph);

    const restaurantHoursContainer = document.createElement("div");
    restaurantHoursContainer.classList.add("restaurantHoursContainer");

    const hoursH3 = document.createElement("h3");
    hoursH3.innerHTML = "Hours";

    const hoursTable = document.createElement("ul");

    const monday = document.createElement("li");
    monday.innerHTML = "Monday: 8am - 8pm"
    hoursTable.appendChild(monday);

    const Tuesday = document.createElement("li");
    Tuesday.innerHTML = "Tuesday: 8am - 8pm"
    hoursTable.appendChild(Tuesday);

    const Wednesday = document.createElement("li");
    Wednesday.innerHTML = "Wednesday: 8am - 8pm"
    hoursTable.appendChild(Wednesday);

    const Thursday = document.createElement("li");
    Thursday.innerHTML = "Thursday: 8am - 8pm"
    hoursTable.appendChild(Thursday);

    const Friday = document.createElement("li");
    Friday.innerHTML = "Friday: 8am - 8pm"
    hoursTable.appendChild(Friday);

    const Saturday = document.createElement("li");
    Saturday.innerHTML = "Saturday: 8am - 8pm"
    hoursTable.appendChild(Saturday);

    const Sunday = document.createElement("li");
    Sunday.innerHTML = "Sunday: 8am - 8pm"
    hoursTable.appendChild(Sunday);
    restaurantHoursContainer.appendChild(hoursH3);
    restaurantHoursContainer.appendChild(hoursTable);

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurantName");
    const restaurantNameH1 = document.createElement("h1");
    restaurantNameH1.innerHTML = "Restaurant name";
    restaurantName.appendChild(restaurantNameH1);

    contentContainer.appendChild(restaurantName);
    contentContainer.appendChild(restaurantDescriptionContainer);
    contentContainer.appendChild(restaurantHoursContainer);



    element.appendChild(contentContainer);


    
    return element;
}

export default home;