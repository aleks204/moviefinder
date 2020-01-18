const API_KEY = "065e652623b0d53d789d3e5cd508a265";

let searchBox = document.getElementById("searchbox");
searchBox.addEventListener("keyup", onSearch);

function onSearch(event) {
  if (event.keyCode === 13) {
    console.log(searchBox.value);
  }
}

function fetchMovies(query)