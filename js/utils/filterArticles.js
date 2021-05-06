import { search } from "../components/targetElements.js";
import { renderArticles } from "./renderArticles.js";
import { displayMessage } from "./displayMessage.js";
import { noResults } from "../components/messages.js";

export function filterArticles(data) {
    search.onkeyup = (event) => {

        const searchValue = event.target.value.replace(/\s/g, "").toLowerCase();

        const filteredValues = data.filter((article) => {
            if (article.author.replace(/\s/g, "").toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });

        renderArticles(filteredValues);

        if (filteredValues.length === 0) {
            displayMessage("", noResults, ".articles-container");
        }
    }

    renderArticles(data);
}

