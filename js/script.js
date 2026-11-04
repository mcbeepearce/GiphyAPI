const apiKey = "ColfTFNW0NuGxP13MSJ6yHutm7BU2HYO";


const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");
function fetchGifs() {}
  function fetchGifs() {
  const searchTerm = searchInput.value;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=5`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const images = data.data.map((gif) => gif.images.original.url);

      gifContainer.innerHTML = "";

      images.forEach((image) => {
        const img = document.createElement("img");

        img.src = image;
        img.classList.add("col-3", "mb-3");

        gifContainer.appendChild(img);
      });
    });
}

fetchButton.addEventListener("click", fetchGifs);