export function getFavArticles() {
    const favourites = localStorage.getItem("favList");

    if (!favourites) {
        return [];
    } else {
        return JSON.parse(favourites);
    }
}

export function saveFavArticles(favourites) {
    localStorage.setItem("favList", JSON.stringify(favourites));
}