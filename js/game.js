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

	if (arrBoard[spot] === "0") {
		arrBoard[spot] = this.generateTile();
		this.board=  arrBoard.join("");
		console.log(this.board);
	}
	else {
		this.newNum();
	}
}

Game.prototype.generateTile = function(){
	//internet consensus seems to be that 4-tile is generated 10% of the time
	return Math.random() < 0.9 ? "2" : "4";
}

Game.prototype.toString = function(){
	console.log(this.board);
}