export function clearList(renderFavs) {
    if (confirm(`Are you sure you want to remove all your favourites?`)) {
        localStorage.clear();
        renderFavs();
    }
}