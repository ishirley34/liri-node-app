var Spotify =require("spotify");
// Runs the song search function
function SongSearch() {
	// This checks to make sure that the new user is a instance of SongSearch
    if (!(this instanceof SongSearch)) {
        return new SongSearch();
    }
	var song = SongName;
// This runs the spotify query
	this.getSong = function() {

		console.log("this");
		spotify.search({type: "track", query: song}, function(err, data) {
			if (err) {
				console.log(err);
			}else {
				var songInfo = data.tracks.items[0];
				var info = "\nArtist: " + songInfo.artist[0].name + 
				"\nSong Name: " + songInfo +
				"\nAlbum Name: " + songInfo.album.name +
				"\nPreview URL: " +songInfo.preview_url + "\n";
				console.log(info);
				logInfo(info);
			}
		}); //closes spotify.search
	};
} // Closes SongSearch
module.exports = SongSearch;