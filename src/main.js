async function getTrendingMoviesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APY_KEY}`);
  const data = await res.json();

  const movies = data.results;
  
  movies.forEach(movie => {
    const sectionTrendingMovies = document.querySelector('#trendingPreview .trendingPreview-movieList');

    const movieContainer = document.createElement('div')
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);

    movieContainer.appendChild(movieImg);
    sectionTrendingMovies.appendChild(movieContainer);
  });
}

async function getCategoriesMoviesPreview() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APY_KEY}`);
  const data = await res.json();

  const categories = data.genres;
  
  categories.forEach(category => {
    const sectionCategoriesMovies = document.querySelector('#categoriesPreview .categoriesPreview-list');

    const categoryContainer = document.createElement('div')
    categoryContainer.classList.add('category-container');

    const categoryTitle = document.createElement('h3');
    categoryTitle.classList.add('category-title');
    categoryTitle.setAttribute('id', `id${category.id}`);
    const categoryTittleText = document.createTextNode(category.name);

    categoryTitle.appendChild(categoryTittleText);
    categoryContainer.appendChild(categoryTitle);
    sectionCategoriesMovies.appendChild(categoryContainer);
  });
}

getTrendingMoviesPreview();
getCategoriesMoviesPreview();