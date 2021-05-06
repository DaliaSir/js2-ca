//import { renderFavs } from "../favourites.js";
//import { getFavArticles } from "./storage.js";

export function clearButton() {
    const clearAllButton = document.querySelector(".clearButton");
    clearAllButton.addEventListener("click", clearList);

    function clearList() {
        if (confirm(`Are you sure you want to remove all your favourites?`)) {
            localStorage.clear();

        }
    }
}