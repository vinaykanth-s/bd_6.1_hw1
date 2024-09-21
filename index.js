const express = require('express');
const { resolve } = require('path');
const { getMovies, getMovieById, addMovie } = require('./movie');

const app = express();
const port = 3010;

app.use(express.json());

app.get('/movies', (req, res) => {
  res.json(getMovies());
});

app.get('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = getMovieById(id);
  if (!movie) return res.status(404).send('Movie not found');
  res.json(movie);
});

app.post('/movies', (req, res) => {
  const newMovie = addMovie(req.body);
  res.status(201).json(newMovie);
});

app.get('/', (req, res) => {
  res.send('BD6.1 HW1');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
