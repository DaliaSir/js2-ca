import { getFavArticles } from "./utils/storage.js";
import { displayMessage } from "./utils/displayMessage.js";

const favArticles = getFavArticles();
const articlesContainer = document.querySelector(".articles-container");
//console.log(favArticles);

if (favArticles.length === 0) {
    articlesContainer.innerHTML = `<div class="message">No favourites yet</div>`;
}

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
