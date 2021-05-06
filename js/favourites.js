import { articlesContainer, clearAllButton } from "./components/elements.js";
import { getFromStorage } from "./utils/localStorage.js";
import { displayMessage } from "./utils/displayMessage.js";
import { noFavs } from "./components/messages.js";
import { clearList } from "./utils/clearFavourites.js";


(function renderFavs() {
    articlesContainer.innerHTML = "";

    clearAllButton.addEventListener("click", () => clearList(renderFavs));

    const favArticles = getFromStorage();

    if (favArticles.length === 0) {
        displayMessage("", noFavs, ".articles-container");
        clearAllButton.style.display = 'none';
    } else {
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
})();