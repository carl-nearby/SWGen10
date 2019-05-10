function dice(){
	return Math.floor(Math.random()*6)+1;
}

function showTable(){
	var x = document.getElementById('results');
	var y = document.getElementById('again');

	if (document.getElementById('bet').value < 1){
		//do nothing
	} else {
		if (x.style.display === "none"){
			x.style.display = "inline-block";
		}

		if (y.style.display === 'none'){
		y.style.display = 'inline-block';
		}
	}
}

function diceRoll(){
	var startingBet = document.getElementById('bet').value;
	var highestTotal = 0;
	var rolls = 0;
	var topRoll = 0;
	var failRolls = 0;
	var currentTotal = startingBet;	
	

	var x = document.getElementById('play');

	if (startingBet < 1){
		alert("ERROR: Bet must be 1 or greater!");
	} else {

		if (x.style.display === 'inline-block'){
			x.style.display = 'none';
		}	

		document.getElementById('startingBet').innerHTML = "$" + parseFloat(Math.round(startingBet * 100) / 100).toFixed(2);;
		while (currentTotal > 0) {
			
			failRolls = rolls + 1;

			if (currentTotal>highestTotal){
				highestTotal=currentTotal;
				topRoll=rolls;
			}

			var diceValue= dice() + dice();
			if(diceValue==7){
				/*currentTotal+=4;
				* glitch: concatenates 4 to currentTotal on first loop randomly*/
				currentTotal++;
				currentTotal++;
				currentTotal++;
				currentTotal++;
			} else {
				currentTotal--;	
			}



			document.getElementById('highestTotal').innerHTML = "$" + parseFloat(Math.round(highestTotal * 100) / 100).toFixed(2);
			document.getElementById('failRolls').innerHTML = failRolls;
			document.getElementById('highRolls').innerHTML = topRoll;

			rolls++;
			console.log('dice:' + diceValue);
			console.log('total:' + currentTotal);
		} 
	}
}
	
function playAgain(){
	/*document.getElementById('highestTotal').innerHTML = 0;
	document.getElementById('failRolls').innerHTML = 0;
	document.getElementById('highRolls').innerHTML = 0;
	
	var x = document.getElementById('results');
	var y = document.getElementById('again');
	var a = document.getElementById('play');
	document.getElementById('bet').value = '';

	if (x.style.display === 'block'){
		x.style.display = 'none';
	}

	if (y.style.display === 'block'){
		y.style.display = 'none';
	}

	if (a.style.display === 'none'){
		a.style.display = 'block';
	}*/

	location.reload();

}

	

