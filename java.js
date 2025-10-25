// Get DOM elements
const popupOverlay = document.querySelector(".popup-overlay");
const popupBox = document.querySelector(".popup-box");
const addPopup = document.getElementById("popup");
const cancelButton = document.getElementById("cancel");
const movieList = document.querySelector(".movie-list");
const addMovie = document.getElementById("add-movie");
const movieTitle = document.getElementById("movie-title");
const director = document.getElementById("director");
const short = document.getElementById("short");

// Show popup form
addPopup.addEventListener("click", function () {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

// Hide popup form
cancelButton.addEventListener("click", function (event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// Add movie to list
addMovie.addEventListener("click", function (event) {
    event.preventDefault();

    // Create movie card
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-container"); // Use the same style as existing movie

    movieCard.innerHTML = `
        <h2>${movieTitle.value}</h2>
        <h3>${director.value}</h3>
        <p>${short.value}</p>
        <button class="delete-btn">Delete</button>
    `;

    // Append to the list
    movieList.appendChild(movieCard);

    // Hide popup and clear inputs
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
    movieTitle.value = "";
    director.value = "";
    short.value = "";

    // Delete button functionality
    movieCard.querySelector(".delete-btn").addEventListener("click", function () {
        movieCard.remove();
    });
});

// Delete button for existing movie (static content)
document.querySelectorAll(".delete-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        btn.parentElement.remove();
    });
});
