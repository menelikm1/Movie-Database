var movies =[
  {
    title : "Lord of the rings",
    rating: "5 stars",
    hasWatched: true,
  },
  {
    title : "The Dark Knight",
    rating: "4 stars",
    hasWatched: true,
  },
  {
    title : "The Emoji Movie",
    rating: "-5 stars",
    hasWatched: true,
  },
  {
    title : "Rampage",
    rating: "3.5 stars",
    hasWatched: false,
  }
];

for (var i = 0; i < movies.length; i++) {
  if (movies[i].hasWatched === true) {
    console.log("You have watched " + movies[i].title + " - " + movies[i].rating);
  }
  else
  console.log("You have not watched " + movies[i].title + " - " + movies[i].rating);
}
