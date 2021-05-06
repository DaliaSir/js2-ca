import iconClickEvent from "./iconClickEvent.js";
import { getFavArticles } from "./storage.js";

export function renderArticles(data) {
    const articlesContainer = document.querySelector(".articles-container");
    articlesContainer.innerHTML = "";

    const favArticles = getFavArticles();

    data.forEach((article) => {

        let cssClass = "far";

        const isFavourite = favArticles.find((fav) => {
            return parseInt(fav.id) === article.id;
        });

        if (isFavourite) {
            cssClass = "fa";
        }

        let articleTitle = "Unknown title";
        let articleSummary = "No summary";
        let articleAuthor = "Unknown author";

        if (article.title) {
            articleTitle = article.title;
        }
        if (article.summary) {
            articleSummary = article.summary;
        }
        if (article.author) {
            articleAuthor = article.author;
        }

        articlesContainer.innerHTML += `
            <div class="col p-4">
                <div class="card">
                    <div class="card-body article">
                        <h5 class="card-title">${articleTitle}</h5>
                        <p class="card-text">${articleSummary}</p>
                        <p class="card-footer bg-transparent fst-italic m-0">${articleAuthor}</p>
                        <i class="${cssClass} fa-heart" data-id="${article.id}" data-title="${articleTitle}" data-summary="${articleSummary}" data-author="${articleAuthor}"></i>
                    </div>
                </div>
            </div>
            `;
        iconClickEvent();
    });

}

