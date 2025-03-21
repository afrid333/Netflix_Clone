document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar");
    const movies = document.querySelectorAll(".movie");

    searchBar.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        movies.forEach(movie => {
            const title = movie.textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
    });
});
