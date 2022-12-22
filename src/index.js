import './style.css';
import home from "./home";
import buttons from "./buttons";


 function render() {
    const element = document.getElementById("content");
    buttons()
    home();
    

   return element;
 }
 render();





