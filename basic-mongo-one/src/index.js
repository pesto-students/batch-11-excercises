/* eslint-disable no-unused-vars */
const { getDb } = require('./database');
/* Q1 (*)
  Return the number of movies in the "movies" collection without using array.length
*/
const getMoviesCount = async (db) => {
  const count = await db.collection('movies').countDocuments();
  return count;
};

/* Q2 (*)
  Return the first movie with imdb rating = 6.2 and year = 2014.
  Also, use mongodb projections to only get title from mongodb as opposed
  to accessing title property from the object
*/
const movieRating = async (db) => {
  const movie = await db.collection('movieDetails').findOne({ 'imdb.rating': 6.1, year: 2014 }, { projection: { _id: 0, title: 1 } });
  return movie;
};

/* Q3 (*)
  Return the number of movies written by all these people (exactly these people in this order):
  Roberto Orci
  Alex Kurtzman
  Damon Lindelof
  Gene Roddenberry
*/
const writersIntersection = async (db) => {
  const count = await db
    .collection('movieDetails')
    .find({ writers: ['Roberto Orci', 'Alex Kurtzman', 'Damon Lindelof', 'Gene Roddenberry'] }).count();
  // const count = await movieRating.count();
  return count;
};

/* Q4 (*)
  Return the number of movies written by any of the writers in Q3
*/
const writersUnion = async (db) => {
  const writers = ['Roberto Orci', 'Alex Kurtzman', 'Damon Lindelof', 'Gene Roddenberry'];
  const moviesUnion = writers.reduce(async (acc, writer) => {
    const movies = await db
      .collection('movieDetails')
      .find({ writers: writer }, { projection: { _id: 1 } }).toArray();
    return acc.then((result) => [...movies, ...result]);
  }, Promise.resolve([]));
  const moviesObj = await moviesUnion.then((items) => items.reduce((acc, item) => {
    // eslint-disable-next-line no-underscore-dangle
    acc[item._id] = 1;
    return acc;
  }, {}));
  return Object.keys(moviesObj).length;
};

/* Q5 (*)
  Return the number of movies in which actor is "Jackie Chan"
*/
const actor = async (db) => db.collection('movieDetails').find({ actors: 'Jackie Chan' }).count();

/* Q6 (*)
  Return the number of movies in which actor "Jackie Chan" is second
  in the array "actors"
*/
const positionalActor = async (db) => db.collection('movieDetails').find({ 'actors.1': 'Jackie Chan' }).count();

/* Q7 (*)
  Return the first movie with imdb rating greater than or equal to 9.0
  and less than or equal to 9.2
*/
const comparisonOperator = async () => {};

/* Q8 (*)
  Return the number of movies which have an actual rating opposed to
  being "UNRATED" or having no "rated" field at all
*/
const trimUnrated = async () => {};

/* Q9 (*)
  Return number of movies in which "tomato" field exists but "tomato.rating" does not
*/
const unratedByTomato = async () => {};

/* Q10 (*)
  Return number of movies with higher imdb rating >= 9.0 OR
  metacritic >= 90
*/
const goodMovies = async () => {};

/* Q11 (*)
  Return number of movies where tomato field exists AND
  is equal to null
*/
const regexSearch = async () => {};

/* Q12 (*)
  Return number of movies where 'Adventure' and 'Action'
  as genres in any order
*/
const arrayAll = async () => {};

/* Q13 (*)
  Return number of movies that were filmed in exactly 4 countries
*/
const fieldArraySize = async () => {};

/* Q14 (*)
  Add a field called "myRating" = 90 to the movie "Iron Man 3" in movieDetails collection
*/
const addField = async () => {};

/* Q15 (*)
  Increment the metacritic rating by 5 for the movie "Gone Girl" with a single query.
  Note: Do not use find() or findOne() to look for the current metacritic rating for "Gone Girl"
*/
const incrementalUpdate = async () => {};

module.exports = {
  getMoviesCount,
  movieRating,
  writersIntersection,
  writersUnion,
  actor,
  positionalActor,
  comparisonOperator,
  trimUnrated,
  unratedByTomato,
  goodMovies,
  regexSearch,
};
