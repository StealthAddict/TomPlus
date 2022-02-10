// some api shit lesgo

const yt_api_url = "https://www.googleapis.com/youtube/v3/channels"


function getVideos(){
    const response = await fetch(api_url);
    // Parsing it to JSON format
    const data = await response.json();
    console.log(data.results);
 
    // Retrieving data from JSON
    const videos = data.results[0];
}

// end the api shit

var vidList = ["https://www.youtube.com/embed/cdDvHaOTdjI", "https://www.youtube.com/embed/1Z1bvTYKNUw", "https://www.youtube.com/embed/nNavV-FTBeA"];

var prev = 0;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

window.onload = function() {
    var r = getRandomInt(vidList.length);
    document.getElementById("home-video").src = vidList[r];    
}

function surpriseVid() {
    var r = getRandomInt(vidList.length);
    while (r == prev){
        r = getRandomInt(vidList.length);
    }
    document.getElementById("home-video").src = vidList[r];   
    prev = r; 
}
function mainVid() {
    var r = getRandomInt(vidList.length);
    while (r == prev){
        r = getRandomInt(vidList.length);
    }
    document.getElementById("home-video").src = vidList[r];  
    prev = r;  
}
function vlogVid() {
    var r = getRandomInt(vidList.length);
    while (r == prev){
        r = getRandomInt(vidList.length);
    }
    document.getElementById("home-video").src = vidList[r];   
    prev = r; 
}
function twitchVid() {
    var r = getRandomInt(vidList.length);
    while (r == prev){
        r = getRandomInt(vidList.length);
    }
    document.getElementById("home-video").src = vidList[r];    
    prev = r;
}