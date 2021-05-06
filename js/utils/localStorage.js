export function getFromStorage() {
    const favourites = localStorage.getItem("favourite-articles");

    if (!favourites) {
        return [];
    } else {
        return JSON.parse(favourites);
    }
}

export function saveToStorage(favourites) {
    localStorage.setItem("favourite-articles", JSON.stringify(favourites));
}