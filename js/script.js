import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";
import { renderArticles } from "./utils/renderArticles.js";
import { filterArticles } from "./utils/filterArticles.js";

const url = baseUrl + "articles/";
const articlesContainer = document.querySelector(".articles-container");

(async function () {
    try {
        const response = await fetch(url);
        const data = await response.json();


        renderArticles(data);
        filterArticles(data);

    } catch (error) {
        console.log(error);
        displayMessage("error", error, articlesContainer);
    }
})();


