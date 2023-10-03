//TARGETING MOVIE HTML CONTAINER
const movieContainer = document.querySelector("#movies");

//AUTHENTICATION WITH TMDB
const url = "https://api.themoviedb.org/3/authentication";

// GENERAL MOVIES URL
const movie_url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

//DRAMA URL
const drama_url =
  "https://api.themoviedb.org/3/discover/movie?api_key=0f0eb657aee65f5d179bddba1284e1ab&with_genres=18";

// COMEDY URL
const comedy_url =
  "https://api.themoviedb.org/3/discover/movie?api_key=0f0eb657aee65f5d179bddba1284e1ab&with_genres=35";

//ADVENTURE URL
const adventure_url =
  "https://api.themoviedb.org/3/discover/movie?api_key=0f0eb657aee65f5d179bddba1284e1ab&with_genres=12";

//&page=2";

//DOCUMENTARY URL
const documentary_url =
  "https://api.themoviedb.org/3/discover/movie?api_key=0f0eb657aee65f5d179bddba1284e1ab&with_genres=99";

// PART OF AUTHENTICATION WITH TMDB
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjBlYjY1N2FlZTY1ZjVkMTc5YmRkYmExMjg0ZTFhYiIsInN1YiI6IjY1MDBhN2QzZDdkY2QyMDBhY2IwNjAwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4dfVWavZcYFgvDAn8FB1wE3EDAGBwGb5ZHQ8ziQP6ho",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));

/*
//===============================TESTING PLEASE DELETE LATER=====================================================//

//THRILLER URL
const thriller_url =
  "https://api.themoviedb.org/3/discover/movie?api_key=0f0eb657aee65f5d179bddba1284e1ab&with_genres=37";

//GET THRILLER

function getThriller() {
  //fetch drama genre on the TMDB url provided
  fetch(thriller_url, options)
    //convert the fetched drama code to json
    .then((res) => res.json())
    // log the code in json format as converted
    //.then((json) => console.log(json))//change to the line below to call the render movie function
    .then((json) => renderMovies(json.results)) //results is the array name of the 20 received movies.
    //if there is error, catch and log it
    .catch((err) => console.log("error:" + err));
}

//===============================END OF TESTING PLEASE DELETE LATER=====================================================//
*/

//GET ALL MOVIES
function getMovies() {
  //fetch movies on the TMDB url provided
  fetch(movie_url, options)
    //convert the fetched movies code to json
    .then((res) => res.json())
    // log the code in json format as converted
    //.then((json) => console.log(json))//change to the line below to call the render movie function
    .then((json) => renderMovies(json.results)) //results is the array name of the 20 received movies.
    //if there is error, catch and log it
    .catch((err) => console.log("error:" + err));
}

// PLAY POPULAR MOVIES
function playPopular() {
  window.location.assign("https://www.themoviedb.org/tv/3151-popular");
}

//GET DRAMA

function getDrama() {
  //fetch drama genre on the TMDB url provided
  fetch(drama_url, options)
    //convert the fetched drama code to json
    .then((res) => res.json())
    // log the code in json format as converted
    //.then((json) => console.log(json))//change to the line below to call the render movie function
    .then((json) => renderMovies(json.results)) //results is the array name of the 20 received movies.
    //if there is error, catch and log it
    .catch((err) => console.log("error:" + err));
}

// PLAY DRAMA MOVIES
function playDrama() {
  window.location.assign("https://www.themoviedb.org/genre/18-drama/movie");
}

//GET COMEDY

function getComedy() {
  //fetch drama genre on the TMDB url provided
  fetch(comedy_url, options)
    //convert the fetched drama code to json
    .then((res) => res.json())
    // log the code in json format as converted
    //.then((json) => console.log(json))//change to the line below to call the render movie function
    .then((json) => renderMovies(json.results)) //results is the array name of the 20 received movies.
    //if there is error, catch and log it
    .catch((err) => console.log("error:" + err));
}

//PLAY COMEDY MOVIES
function playComedy() {
  window.location.assign("https://www.themoviedb.org/genre/35-drama/movie");
}

//GET ADVENTURE

function getAdventure() {
  //fetch drama genre on the TMDB url provided
  fetch(adventure_url, options)
    //convert the fetched drama code to json
    .then((res) => res.json())
    // log the code in json format as converted
    //.then((json) => console.log(json))//change to the line below to call the render movie function
    .then((json) => renderMovies(json.results)) //results is the array name of the 20 received movies.
    //if there is error, catch and log it
    .catch((err) => console.log("error:" + err));
}

//PLAY ADVENTURE MOVIES
function playAdventure() {
  window.location.assign("https://www.themoviedb.org/genre/12-drama/movie");
}

//GET DOCUMENTARY

function getDocumentary() {
  //fetch drama genre on the TMDB url provided
  fetch(documentary_url, options)
    //convert the fetched drama code to json
    .then((res) => res.json())
    // log the code in json format as converted
    //.then((json) => console.log(json))//change to the line below to call the render movie function
    .then((json) => renderMovies(json.results)) //results is the array name of the 20 received movies.
    //if there is error, catch and log it
    .catch((err) => console.log("error:" + err));
}

// PLAY DOCUMENTARY MOVIES
function playDocumentary() {
  window.location.assign("https://www.themoviedb.org/genre/99-drama/movie");
}

//RENDER MOVIES, DRAMA ETC
function renderMovies(movielist) {
  console.log(movielist);
  //logout list of movie titles
  movielist.forEach((movie) => {
    //console.log(movie.title); // we want this on the movie the page.
    // movie cards
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    /*
    // movie button
    const movieButton = document.createElement("button");
    movieButton.classList.add("movie-button");
    movieButton.innerText = "Play";

    movieButton.addEventListener("click", playMovie());
*/
    //movie rating
    const movieRating = document.createElement("div");
    movieRating.classList.add("movie-rating");

    //movie poster
    const moviePoster = document.createElement("img");
    moviePoster.classList.add("movie-poster");

    // movie title
    const movieTitle = document.createElement("h3");
    movieTitle.classList.add("movie-title");

    /*
    //movie
    const movieOverview = document.createElement("p");
    movieOverview.classList.add("movie-overview");
*/
    //movie release date
    const movieReleaseDate = document.createElement("p");
    movieReleaseDate.classList.add("movie-release-date");

    // build card
    moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    // above is from https://developer.themoviedb.org/docs/image-basics

    movieRating.innerHTML = 6.5;
    movieTitle.innerText = movie.title;
    //movieOverview.innerText = movie.overview;
    movieReleaseDate.innerText = movie.release_date;

    //append to the card

    movieCard.appendChild(movieRating);
    movieCard.appendChild(moviePoster);
    movieCard.appendChild(movieTitle);
    // movieCard.appendChild(movieOverview);
    movieCard.appendChild(movieReleaseDate);

    //movieCard.appendChild(movieButton);

    // append the movie card to the  moviecontainer
    movieContainer.appendChild(movieCard);
    //save and click the get movie button and it will load the 20 movies in page 1 as styled.
  });
}

//COPYRIGHT DATE
// select span
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// NAVBAR TOGGLE FOR MOBILE SCREEN
function showNavLinks() {
  const e = document.getElementById("nav-links");
  e.classList.toggle("show-links");
}
