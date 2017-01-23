var spotify =require("spotify");
// Runs the song search function
function SongSearch(songName) {
	// This checks to make sure that the new user is a instance of SongSearch
    if (!(this instanceof SongSearch)) {
        return new SongSearch();
    }

// This runs the spotify query
	this.getSong = function(songName) {
		spotify.search({type: "track", query: songName}, function(err, data) {
			if (err) {
				console.log(err);
			}else {
				var songInfo = data.tracks.items[0];
				var info = "\nArtist: " + songInfo.artists[0].name + 
				"\nSong Name: " + songInfo.name +
				"\nAlbum Name: " + songInfo.album.name +
				"\nPreview URL: " +songInfo.preview_url + "\n";
				console.log(info);
			}
		}); //closes spotify.search
	};
} // Closes SongSearch
module.exports = SongSearch;