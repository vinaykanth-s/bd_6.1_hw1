let movies = [
  { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
  { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' },
  { id: 4, title: 'Pulp Fiction', director: 'Quentin Tarantino' },
];

const getMovies = () => {
  return movies;
};

const getMovieById = (id) => {
  return movies.find((movie) => movie.id === id);
};

const addMovie = (movie) => {
  let newMovie = { id: movies.length + 1, ...movie };
  books.push(newMovie);
  return newMovie;
};

module.exports = { getMovies, getMovieById, addMovie };
