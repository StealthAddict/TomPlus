var msgList = ["Home of Big Men", "Exclusive to TommyInnit Enjoyers", "Just killed a woman, feeling good",
                 "pog champ", "Jump in the cadillac", "Subscribe and Prime", "AAAAAAAAAAAAAAAAAA",
                "poggers", "The Goggy fanclub"]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

window.onload = function() {
    var r = getRandomInt(msgList.length);
	document.getElementById("home-message").innerHTML=msgList[r];
    

}