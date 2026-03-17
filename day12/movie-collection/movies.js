const prepareMovies = () => {
  const movies = [];
  let movie1 = {
    title: "The Matrix",
    director: "Wachowskis",
    year: 1999,
    genre: "Sci-Fi",
  };
  let movie2 = {
    title: "Inception",
    // director: "Nolan",
    year: 2010,
    genre: "Sci-Fi",
  };
  let movie3 = {
    title: "Parasite",
    // director: "Bong",
    year: 2019,
    genre: "Drama",
  };

  movies.push(movie3);
  movies.push(movie1);
  movies.push(movie2);
  movies.push({
    title: "어벤져스: 엔드게임",
    director: "안소니 루소, 조 루소",
    year: 2019,
    genre: "액션, 어드벤처, SF",
  });
  return movies;
};

const printMovie = (title, director = "Unknown", year, genre) => {
  console.log(
    `Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genre}`,
  );
};

const printMovies = (movies) => {
  console.log("Movie Collection:");
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    printMovie(movie.title, movie.director, movie.year, movie.genre);
  }
  //   movies.forEach(printMovie);
  //   movies.map(printMovie);
  console.log(`Total Movies: ${movies.length}`);
};

const movies = prepareMovies();
printMovies(movies);