function Visualiser(){
    this.findPosition = function(index){
        return document.getElementsByClassName("position")[index];
    }
};

Visualiser.prototype.revealCard = function(cardName, index) {
    var position = this.findPosition(index);
    position.getElementsByTagName("img")[0].src = 'images/' + cardName + ".jpg";
}

Visualiser.prototype.hideCard = function(index) {
    var position = this.findPosition(index);
    position.getElementsByTagName("img")[0].src = "images/achterkant.jpg";
}

Visualiser.prototype.emptyPositions = function(index1, index2){
    var position = this.findPosition(index1);
    position.getElementsByTagName("img")[0].src = "";
    var position = this.findPosition(index2);
    position.getElementsByTagName("img")[0].src = "";
}
Visualiser.prototype.createScoreboard = function(players){
    var scoreboard = document.createElement("table");
    scoreboard.class = "scoreboard";
    var body = document.getElementsByTagName("body")[0];
    for(var i = 0; i<players.length;i++){
        var row = scoreboard.insertRow(-1);
        var cellForName = row.insertCell();
        cellForName.innerHTML = players[i].getName();
        cellForName.class = "name";
        var cellForScore = row.insertCell();
        cellForScore.innerHTML = players[i].getScore();
        cellForScore.id = "playerscore" + i;
        cellForScore.class = "score";
    };
    body.insertBefore(scoreboard,body.firstChild);
};
Visualiser.prototype.updateScoreOfActivePlayer = function (playerIndex,score) {
    document.getElementById("playerscore" + playerIndex).innerHTML = score;
}
Visualiser.prototype.createPlayingField = function(numberOfCards){
    var playingField = document.createElement("div");
    playingField.className = "board container-fluid";
    var body = document.getElementsByTagName("body")[0];
    for(var i = 0; i < numberOfCards / 6; i++){
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
        this.createCardPositions(i, row);
        playingField.appendChild(row);
    };
    body.appendChild(playingField)
}
Visualiser.prototype.createCardPositions = function(i, row){
    for (var j = 0; j<6; j++){
        var position = document.createElement("div");
        position.className = "position col-md-2";
        position.id = "row " + i + " position" + j;
        row.appendChild(position)
//        position.addEventListener("click", memoryGame.position(i*6 + j, false))
    };
};

// show score