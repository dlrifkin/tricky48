var Game = function(b) {
	this.board = b || this.newBoard();
	this.complete = false;
}

Game.prototype.newBoard = function(){
	this.board = "0000000000000000";
	this.newNum();
	this.newNum();
	return this.board;
}

Game.prototype.newNum = function(){
	var spot = Math.floor(16 * Math.random())
	var arrBoard = this.board.split("")

Game.prototype.move = function(){

}

Game.prototype.newNum = function(){
	if (this.board.match(/0/g) != null) {
		var arrBoard = this.board.split("")
		var spot = Math.floor(16 * Math.random())
		
		if (arrBoard[spot] === "0"){ 
		arrBoard[spot] = this.generateTile();
		this.board=  arrBoard.join("");
		console.log(this.board);
		}
		else {
			this.newNum();
		}
	}
	else {
		console.log("lose");
	}
}

Game.prototype.generateTile = function(){
	//internet consensus seems to be that 4-tile is generated 10% of the time
	return Math.random() < 0.9 ? "2" : "4";
}

Game.prototype.toString = function(){
	var splitBoard = this.board.match(/.{4}/g);
	for (var i = 0; i < splitBoard.length; i++){
		console.log(splitBoard[i]);
	}
}