import { renderArticles } from "./renderArticles.js";

export function filterArticles(data) {
    const search = document.querySelector("#search");

    search.onkeyup = (event) => {

        const searchValue = event.target.value.trim().toLowerCase();
        console.log(searchValue);

        if (searchValue.length === 0) {
            location.reload();
        }

        const filteredValues = data.filter((article) => {
            if (article.title.toLowerCase().startsWith(searchValue)) {
                return true;
            }
        });
        data = filteredValues;
        renderArticles(filteredValues);
    }

    renderArticles(data);
}

