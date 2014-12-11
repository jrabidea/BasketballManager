var teams = new Array();
var states : String[] = ["Minnesota", "Michigan", "New York", "California", "Ohio", "Tennessee"];

class Team{

	var name : String;
	var overall : int;
	var offOverall : int;
	var defOverall : int;
	var twoPointRating: int;
	var threePointRating: int;
	var offReboundRating : int;
	var defReboundRating : int;
	var stealsRating : int;
	var blocksRating : int;


}



function Start(){

	var name : String;
	var overall : int;
	var offOverall : int;
	var defOverall : int;
	var combinedOverall : float;
	var finalNum : int;
	var num : float;
	var rawNum;
	var findTwoPointOverall : boolean = true;
	var findThreePointOverall : boolean = false;
	var findOffReboundRating : boolean = false;
	var findDefReboundRating : boolean = false;
	var findStealsRating : boolean = false;
	var findBlocksRating : boolean = false;

	for(var i : int = 0; i < states.Length; i++){
	
		teams[i] = Team();
		teams[i].name = states[i];
		
		
		while(findTwoPointOverall){
			num = Random.value * 100; 
			finalNum = Mathf.round(num);
			if(finalNum >= 75 && finalNum <= 95){
				twoPointRating = finalNum;
				findTwoPointOverall = false;
				findThreePointOverall = true;
			}
			else{
				findTwoPointOverall = true;
			}
		}

		while(findThreePointOverall){
			num = Random.value * 100; 
			finalNum = Mathf.round(num);
			if(finalNum >= 75 && finalNum <= 95){
				threePointRating = finalNum;
				findThreePointOverall = false;
				findOffReboundRating = true;
			}
			else{
				findThreePointOverall = true;
			}
		}

		while(findOffReboundRating){
			num = Random.value * 100; 
			finalNum = Mathf.round(num);
			if(finalNum >= 75 && finalNum <= 95){
				offReboundRating = finalNum;
				findOffReboundRating = false;
				findDefReboundRating = true;
			}
			else{
				findOffReboundRating = true;
			}
		}

		while(findDefReboundRating){
			num = Random.value * 100; 
			finalNum = Mathf.round(num);
			if(finalNum >= 75 && finalNum <= 95){
				defReboundRating = finalNum;
				findDefReboundRating = false;
				findStealsRating = true;
			}
			else{
				findDefReboundRating = true;
			}
		}

		while(findStealsRating){
			num = Random.value * 100; 
			finalNum = Mathf.round(num);
			if(finalNum >= 75 && finalNum <= 95){
				stealsRating = finalNum;
				findStealsRating = false;
				findBlocksRating = true;
			}
			else{
				findStealsRating = true;
			}
		}

		while(findBlocksRating){
			num = Random.value * 100; 
			finalNum = Mathf.round(num);
			if(finalNum >= 75 && finalNum <= 95){
				stealsRating = finalNum;
				findBlocksRating = false;
			}
			else{
				findBlocksRating = true;
			}
		}

		rawNum = (twoPointRating + threePointRating + offReboundRating)/3; 
		offOverall = Mathf.round(rawNum);
		rawNum = (blocksRating + stealsRating + defReboundRating)/3;
		defOverall = Mathf.round(rawNum);
		rawNum = (offOverall + defOverall)/2;
		overall = Mathf.round(rawNum);

	}
	
}	



