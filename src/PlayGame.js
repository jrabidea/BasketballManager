var team : GameObject;
private var num : float;
private var teamPossession : String;
private var x : int = 0;
private var homeTeamScore : int;
private var awayTeamScore : int;
private var homeTurnovers : int;
private var awayTurnovers : int;
private var homeTwoPointMade : int;
private var homeThreePointMade : int;
private var awayTwoPointMade : int;
private var awayThreePointMade : int;
private var homeTwoPointMissed : int;
private var homeThreePointMissed : int;
private var awayTwoPointMissed : int;
private var awayThreePointMissed : int;
private var homeOffRebound : int;
private var awayOffRebound: int;
private var homeDefRebound : int;
private var awayDefRebound : int;
private var homeTwoPointPercentage : float;
private var awayTwoPointPercentage : float;
private var homeThreePointPercentage : float;
private var awayThreePointPercentage : float;


function shootingPercentages(homeOffOverall : int, awayOffOverall: int){
	
	switch(homeOffOverall){
		case 76:
			homeThreePointPercentage = .25;
			homeTwoPointPercentage = .36;
			break;
		case 77:
			homeThreePointPercentage = .26;
			homeTwoPointPercentage = .37;
			break;
		case 78:
			homeThreePointPercentage = .27;
			homeTwoPointPercentage = .38;
			break;
		case 79:
			homeThreePointPercentage = .29;
			homeTwoPointPercentage = .39;
			break;
		case 80:
			homeThreePointPercentage = .30;
			homeTwoPointPercentage = .41;
			break;
		case 81:
			homeThreePointPercentage = .31;
			homeTwoPointPercentage = .42;
			break;
		case 82:
			homeThreePointPercentage = .32;
			homeTwoPointPercentage = .43;
			break;
		case 83:
			homeThreePointPercentage = .33;
			homeTwoPointPercentage = .44;
			break;
		case 84:
			homeThreePointPercentage = .34;
			homeTwoPointPercentage = .44;
			break;
		case 85:
			homeThreePointPercentage = .35;
			homeTwoPointPercentage = .45;
			break;
		case 86:
			homeThreePointPercentage = .35;
			homeTwoPointPercentage = .45;
			break;
		case 87:
			homeThreePointPercentage = .35;
			homeTwoPointPercentage = .46;
			break;
		case 88:
			homeThreePointPercentage = .35;
			homeTwoPointPercentage = .47;
			break;
		case 89:
			homeThreePointPercentage = .36;
			homeTwoPointPercentage = .48;
			break;
		case 90:
			homeThreePointPercentage = .38;
			homeTwoPointPercentage = .46;
			break;
		case 91:
			homeThreePointPercentage = .36;
			homeTwoPointPercentage = .49;	
			break;
		case 92:
			homeThreePointPercentage = .40;
			homeTwoPointPercentage = .49;
			break;
		case 93:
			homeThreePointPercentage = .40;
			homeTwoPointPercentage = .52;
			break;
		case 94:
			homeThreePointPercentage = .41;
			homeTwoPointPercentage = .53;
			break;
		case 95:
			homeThreePointPercentage = .45;
			homeTwoPointPercentage = .46;
			break;
	}

	switch(awayOffOverall){
		case 76:
			awayThreePointPercentage = .25;
			awayTwoPointPercentage = .36;
			break;
		case 77:
			awayThreePointPercentage = .26;
			awayTwoPointPercentage = .37;
			break;
		case 78:
			awayThreePointPercentage = .27;
			awayTwoPointPercentage = .38;
			break;
		case 79:
			awayThreePointPercentage = .29;
			awayTwoPointPercentage = .40;
			break;
		case 80:
			awayThreePointPercentage = .30;
			awayTwoPointPercentage = .41;
			break;
		case 81:
			awayThreePointPercentage = .31;
			awayTwoPointPercentage = .42;
			break;
		case 82:
			awayThreePointPercentage = .32;
			awayTwoPointPercentage = .43;
			break;
		case 83:
			awayThreePointPercentage = .32;
			awayTwoPointPercentage = .43;
			break;
		case 84:
			awayThreePointPercentage = .33;
			awayTwoPointPercentage = .44;
			break;
		case 85:
			awayThreePointPercentage = .34;
			awayTwoPointPercentage = .44;
			break;
		case 86:
			awayThreePointPercentage = .35;
			awayTwoPointPercentage = .45;
			break;
		case 87:
			awayThreePointPercentage = .35;
			awayTwoPointPercentage = .45;
			break;
		case 88:
			awayThreePointPercentage = .35;
			awayTwoPointPercentage = .46;
			break;
		case 89:
			awayThreePointPercentage = .35;
			awayTwoPointPercentage = .47;
			break;
		case 90:
			awayThreePointPercentage = .36;
			awayTwoPointPercentage = .48;
			break;
		case 91:
			awayThreePointPercentage = .38;
			awayTwoPointPercentage = .46;
			break;
		case 92:
			awayThreePointPercentage = .36;
			awayTwoPointPercentage = .49;
			break;
		case 93:
			awayThreePointPercentage = .40;
			awayTwoPointPercentage = .49;
			break;
		case 94:
			awayThreePointPercentage = .40;
			awayTwoPointPercentage = .52;
			break;
		case 95:
			awayThreePointPercentage = .41;
			awayTwoPointPercentage = .53;
			break;
	}


}


function Update(){
	temp = team.GetComponent(GenerateTeams);
	teamPossession = temp.teams[0].name;
	shootingPercentages(temp.teams[0].offOverall, temp.teams[1].offOverall);
	possessionResult(temp.teams[0], temp.teams[1], 5.0);
}


function possessionResult(team1, team2){


	temp = team.GetComponent(GenerateTeams);
		
		num = Random.value;
		
		if(teamPossession == team1.name){
			if(num <= .15){
				Debug.Log(team1.name + " turnover...");
				teamPossession = team2.name;
				homeTurnovers++;
			}
			else if(num > .15 && num <= .65){
				Debug.Log(team1.name + " shoots a two pointer...");
				num = Random.value;
				if(num <= homeTwoPointPercentage){
					Debug.Log(team1.name + " scores two points!");
					homeTeamScore = homeTeamScore + 2; 
					homeTwoPointMade++;
					teamPossession = team2.name;
				}
				else{
					Debug.Log(team1.name + " missed the two point shot...");
					homeTwoPointMissed++;
					num = Random.value;
					if(num < .50){
						Debug.Log(team1.name + " offensive rebound...");
						teamPosssesion = team1.name;
						homeOffRebound++;
					}
					else{
						Debug.Log(team2.name + " defensive rebound...");
						teamPosssesion = team2.name;
						awayDefRebound++;
					}
				}
			}
			else{
				Debug.Log(team1.name + " shoots a three pointer...");
				num = Random.value;
				if(num <= homeThreePointPercentage){
					Debug.Log(team1.name + " scores three points!");
					homeTeamScore = homeTeamScore + 3;
					homeThreePointMade++;
					teamPossession = team2.name;
				}
				else{
					Debug.Log(team1.name + " missed the three point shot...");
					homeThreePointMissed++;
					num = Random.value;
					if(num < .50){
						Debug.Log(team1.name + " offensive rebound.");
						teamPossession = team1.name;
						homeOffRebound++;
					}
					else{
						Debug.Log(team2.name + " defensive rebound.");
						teamPossession = team2.name;
						awayDefRebound++;
					}
				}
			}
		}

		if(teamPossession == team2.name){
			if(num <= .15){
				Debug.Log(team2.name + " turnover...");
				teamPossession = team2.name;
				awayTurnovers++;
			}
			else if(num > .15 && num <= .65){
				Debug.Log(team2.name + " shoots a two pointer...");
				num = Random.value;
				if(num <= homeTwoPointPercentage){
					Debug.Log(team2.name + " scores two points!");
					awayTeamScore = awayTeamScore + 2; 
					awayTwoPointMade++;
					teamPossession = team2.name;
				}
				else{
					Debug.Log(team2.name + " missed the two point shot...");
					awayTwoPointMissed++;
					num = Random.value;
					if(num < .50){
						Debug.Log(team2.name + " offensive rebound...");
						teamPosssesion = team2.name;
						awayOffRebound++;
					}
					else{
						Debug.Log(team1.name + " defensive rebound...");
						teamPosssesion = team1.name;
						homeDefRebound++;
					}
				}
			}
			else{
				Debug.Log(team2.name + " shoots a three pointer...");
				num = Random.value;
				if(num <= homeThreePointPercentage){
					Debug.Log(team2.name + " scores three points!");
					awayTeamScore = awayTeamScore + 3;
					awayThreePointMade++;
					teamPossession = team2.name;
				}
				else{
					Debug.Log(team2.name + " missed the three point shot...");
					homeThreePointMissed++;
					num = Random.value;
					if(num < .50){
						Debug.Log(team2.name + " offensive rebound.");
						teamPossession = team2.name;
						awayOffRebound++;
					}
					else{
						Debug.Log(team1.name + " defensive rebound.");
						teamPossession = team1.name;
						homeDefRebound++;
					}
				}
			}
		}
		
		Debug.Log(team1.name + ": " + homeTeamScore + " "  + team2.name + ": " + awayTeamScore); 	
}		
	
