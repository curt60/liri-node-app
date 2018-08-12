//load config file
require("dotenv").config();

//import API keys
var keys = require("./keys");

//import modules
var request = require("request");
var fs = require("fs");

//set API keys
// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

//store command arguments
var operator = process.argv[2];
var operand = process.argv[3];

//execute correct function

switch (operator) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifyThisSong(operand);
        break;
    case "movie-this":
        movieThis(operand);
        break;
    case "do-what-it-says":
        doWhatItSays(operand);
        break;
    default:
    //some error handling
}

var myTweets = function () {
    //This will show your last 20 tweets and when they were created at in your terminal/bash window.

}

var spotifyThisSong = function (song) {
    // - This will show the following information about the song in your terminal/bash window
    //     - Artist(s)
    //     - The song's name
    //     - A preview link of the song from Spotify
    //     - The album that the song is from
    //     - If no song is provided then your program will default to "The Sign" by Ace of Base.
    //
}

function movieThis(movie) {
    //trim and encode movie name or set to default value if not defined
    if (movie) {
        movie.trim().replace(" ", "+");
    }
    else {
        movie = "mr+nobody";
    }

    //construct API URL
    var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    // Then run a request to the OMDB API with the movie specified
    request(queryURL, function (error, response, body) {
        console.log(JSON.parse(body));
        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {
            //output movie details
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).Ratings);
            console.log("Rotten Tomatoes: " + JSON.parse(body).Ratings);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
        }
    });

}

function doWhatItSays() {
    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

}