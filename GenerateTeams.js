var teams = new Array();
var states : String[] = ["Minnesota", "Michigan", "New York", "California", "Ohio", "Tennessee"];

class Team{

	var name : String;
	var overall : int;
	var offOverall : int;
	var defOverall : int;

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
	var rawOverall : float;
	var findOffOverall: boolean =  true;
	var findDefOverall : boolean = false;

	for(var i : int = 0; i < states.Length; i++){
	
		teams[i] = Team();
		teams[i].name = states[i];
		
		
		while(findOffOverall){
		num = Random.value * 100;
		rawNum = Mathf.Round(num);
		finalNum = rawNum;
			if(finalNum > 75 && finalNum < 96){
				teams[i].offOverall = finalNum;
				findOffOverall = false;
				findDefOverall = true;
			}
			else{
				findOffOverall = true;
			}
		}
		while(findDefOverall){
			num = Random.value * 100;
			finalNum = Mathf.Round(num);
			if(finalNum > 75 && finalNum < 96){
				teams[i].defOverall = finalNum;
				findDefOverall = false;
				findOffOverall = true;
			}
			else{
				findDefOverall = true;
			}
		}

	combinedOverall = teams[i].offOverall + teams[i].defOverall;
	rawOverall = combinedOverall/2;
	teams[i].overall = Mathf.Round(rawOverall);
		
	}
	
}	



