/* Q1 (*)
  Return the number of movies in the "movies" collection without using array.length
*/
const getMoviesCount = async (db) => {
  const movieCollection = await db.collection('movies');
  const countOfMovie = await movieCollection.count();
  return countOfMovie;
};

/* Q2 (*)
  Return the first movie with imdb rating = 9.2 and year = 1974.
  Also, use mongodb projections to only get title from mongodb as opposed
  to accessing title property from the object
*/
const movieRating = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const firstMovie = await movieCollection.findOne({ 'imdb.rating': 9, year: 1974 }, { projection: { title: 1, _id: 0 } });
  return firstMovie;
};

/* Q3 (*)
  Return the number of movies written by all these people (exactly these people in this order):
  Roberto Orci
  Alex Kurtzman
  Damon Lindelof
  Gene Roddenberry
*/
const writersIntersection = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const moviesWithAuthor = await movieCollection.find({ writers: ['Roberto Orci', 'Alex Kurtzman', 'Damon Lindelof', 'Gene Roddenberry'] }).count();
  return moviesWithAuthor;
};

/* Q4 (*)
  Return the number of movies written by any of the writers in Q3
*/
const writersUnion = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const moviesWithAuthor = await movieCollection.find({ writers: { $in: ['Roberto Orci', 'Alex Kurtzman', 'Damon Lindelof', 'Gene Roddenberry'] } }).count();
  return moviesWithAuthor;
};

/* Q5 (*)
  Return the number of movies in which actor is "Jackie Chan"
*/
const actor = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const jackieChanMovieCount = await movieCollection.find({ actors: 'Jackie Chan' }).count();
  return jackieChanMovieCount;
};

/* Q6 (*)
  Return the number of movies in which actor "Jackie Chan" is second
  in the array "actors"
*/
const positionalActor = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const jackieChanMovieCount = await movieCollection.find({ 'actors.1': 'Jackie Chan' }).count();
  return jackieChanMovieCount;
};

/* Q7 (*)
  Return the first movie with imdb rating greater than or equal to 9.0
  and less than or equal to 9.2
*/
const comparisonOperator = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const numberOfMovies = await movieCollection.find({ 'imdb.rating': { $gte: 9.0, $lte: 9.2 } }).count();
  return numberOfMovies;
};

/* Q8 (*)
  Return the number of movies which have an actual rating opposed to
  being "UNRATED" or having no "rated" field at all
*/
const trimUnrated = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const numberOfMovies = await movieCollection.find({ $or: [{ rated: { $exists: false } }, { rated: 'UNRATED' }] }).count();
  return numberOfMovies;
};

/* Q9 (*)
  Return number of movies in which "tomato" field exists but "tomato.rating" does not
*/
const unratedByTomato = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const numberOfMovies = await movieCollection.find({ $and: [{ tomato: { $exists: true } }, { 'tomato.rating': { $exists: false } }] }).count();
  return numberOfMovies;
};

/* Q10 (*)
  Return number of movies with higher imdb rating >= 9.0 OR
  metacritic >= 90
*/
const goodMovies = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const numberOfMovies = await movieCollection.find({ $or: [{ 'imdb.rating': { $gte: 9 } }, { metacritic: { $gte: 90 } }] }).count();
  return numberOfMovies;
};

/* Q11 (*)
  Return number of movies where tomato field exists AND
  is equal to null
*/
const regexSearch = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const foundMovie = await movieCollection.findOne({
    title: 'Star Wars: Episode V - The Empire Strikes Back',
  }, { projection: { title: 1, _id: 0 } });
  return foundMovie;
};

/* Q12 (*)
  Return number of movies where 'Adventure' and 'Action'
  as genres in any order
*/
const arrayAll = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const numberOfMovies = await movieCollection.find({ genres: { $all: ['Adventure', 'Action'] } }).count();
  return numberOfMovies;
};

/* Q13 (*)
  Return number of movies that were filmed in exactly 4 countries
*/
const fieldArraySize = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const numberOfMovies = await movieCollection.find({ countries: { $size: 4 } }).count();
  return numberOfMovies;
};

/* Q14 (*)
  Add a field called "myRating" = 90 to the movie "Iron Man 3" in movieDetails collection
*/
const addField = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const updatedMovie = await movieCollection.updateOne({ title: 'Iron Man 3' }, { $set: { myRating: 88 } });
  return updatedMovie;
};

/* Q15 (*)
  Increment the metacritic rating by 5 for the movie "Gone Girl" with a single query.
  Note: Do not use find() or findOne() to look for the current metacritic rating for "Gone Girl"
*/
const incrementalUpdate = async (db) => {
  const movieCollection = await db.collection('movieDetails');
  const updatedMovie = await movieCollection.updateOne({ title: 'Gone Girl' }, { $inc: { metacritic: 5 } });
  return updatedMovie;
};

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
  arrayAll,
  fieldArraySize,
  addField,
  incrementalUpdate,
};
