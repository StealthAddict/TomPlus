var msgList = ["Home of Big Men", "The Average TommyInnit Enjoyer", "Just killed a woman, feeling good",
                 "pog champ", "Jump in the cadillac", "Subscribe and Prime", "AAAAAAAAAAAAAAAAAA",
                "poggers", "The Goggy fanclub", "- .... .. ... / .. ... / .- / - . ... -", "I am massive"]

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

window.onload = function() {
    var r = getRandomInt(msgList.length);
	document.getElementById("home-message").innerHTML=msgList[r];    

}