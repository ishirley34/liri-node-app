var request =require("request");

function MovieSearch(movieName) {
	// This checks to make sure that the new user is a instance of MovieSearch
    if (!(this instanceof MovieSearch)) {
        return new MovieSearch();
    }
	this.movieName = movieName;
	// This sends te query to OMDB then takes that parts of the response that we want
	this.getMovie = function(movieName) {
		var queryURL = 'http://www.omdbapi.com/?t=' + movieName + "&r=json&tomatoes=true";
		request(queryURL, function(err, response, body) {
			if (!err && response.statusCode === 200) {
			body = JSON.parse(body);
			var movieInfo = "";
			var title = body.Title;
			movieInfo += "Title: " + title + "\n";

			var year = body.Year;
			movieInfo += "Year: " + year + "\n";

			var imdbRating = body.imdbRating;
			movieInfo += "IMDB Rating: " + imdbRating + "\n";

			var country = body.Country;
			movieInfo += "Country: " + country + "\n";

			var language = body.Language;
			movieInfo += "Language: " + language + "\n";

			var plot = body.Plot;
			movieInfo += "Plot: " + plot + "\n";

			var actors = body.Actors;
			movieInfo += "Actors: " + actors + "\n";

			var rottenTomRating = body.tomatoRating;
			movieInfo += "Rotten Tomato Rating: " + rottenTomRating + "\n";

			var rottenTomURL = body.tomatoURL;
			movieInfo += "Rotten Tomato URL: " + rottenTomURL + "\n";
			console.log(movieInfo);
			}; // end of if (!err && status code === 200)
		});
		console.log(movieName);
	} //Closes getmovie
}; // Closes MovieName
module.exports = MovieSearch