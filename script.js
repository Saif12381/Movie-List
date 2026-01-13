console.log("js console");

let data;
let grid=document.querySelector(".grid-container");

var xttp = new XMLHttpRequest();

XMLHttpRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200) {

        data = JSON.parse(XMLHttpRequest.responseText);
        console.log(data);

        data.forEach(function(game){
        let card = document.createElement("div");
        card.classList.add("card");
    
        let textData = 
        "<div class='game-title'>" + game.title + "</div>" + 
        "<span>" + "Publisher: " + game.publisher + "<br>" + 
        " Release Date: " + game.releaseData + "<br>" + 
        "Needs Research: " + 
        "</span>";
        
        card.innerHTML = textData;
    
        if(game.imgSrc){
            card.style.backgroundImage = "url('" + game.imgSrc + "')";
        }

        grid.appendChild(card); 
        });
    
}
};

xhttp.open("GET", "gamedata.json", true);
xhttp.send();