var Game = function(b) {
	this.board = b || this.newBoard();
	this.complete = false;
}

Game.prototype.toString = function(){
	console.log(this.board);
}

Game.prototype.newNum = function(){
	this.board = this.board.concat("2");
}

Game.prototype.newBoard = function(){
	this.board = "0000000000000000";
	this.newNum();
	this.newNum();
	return this.board;
}

Game.prototype.newNum = function(){
	var spot = Math.floor((Math.random()))
	var arrBoard = this.board.split("")

	if (arrBoard[spot] === "0") {
		arrBoard[spot] = "2"
		this.board=  arrBoard.join("")
		console.log(this.board)
	}
}

Game.prototype.loop = function(){
	console.log(game.toString());
}