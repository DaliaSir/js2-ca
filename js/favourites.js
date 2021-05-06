import { articlesContainer } from "./components/targetElements.js";
import { getFavArticles } from "./utils/storage.js";
// import { displayMessage } from "./utils/displayMessage.js";
// import { noFavs } from "./components/messages.js";
import { clearButton } from "./utils/clearAll.js";

const clearAllButton = document.querySelector(".clearButton");
const favArticles = getFavArticles();
clearButton(favArticles);

export function renderFavs() {
    articlesContainer.innerHTML = "";

    // if (favArticles.length === 0) {
    //     displayMessage("", noFavs, ".articles-container");
    //     clearAllButton.style.display = 'none';
    // }

    favArticles.forEach((article) => {
        articlesContainer.innerHTML += `
            <div class="col p-4">
                <div class="card">
                    <div class="card-body article">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.summary}</p>
                        <p class="card-footer bg-transparent fst-italic m-0">${article.author}</p>
                        <i class="fa fa-heart"></i>
                    </div>
                </div>
            </div>
            `;
    });

}

renderFavs();