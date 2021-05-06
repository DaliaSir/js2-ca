import { getFavArticles } from "./storage.js";
import { displayMessage } from "./displayMessage.js";
import { noFavs } from "../components/messages.js";

export function clearButton() {
    const clearAllButton = document.querySelector(".clearButton");
    clearAllButton.addEventListener("click", clearList);

    function clearList() {
        if (confirm(`Are you sure you want to remove all your favourites?`)) {
            localStorage.clear();
        }
        const favArticles = getFavArticles();
        console.log(favArticles);
        if (favArticles.length === 0) {
            displayMessage("", noFavs, ".articles-container");
            clearAllButton.style.display = 'none';
        }
    }

}