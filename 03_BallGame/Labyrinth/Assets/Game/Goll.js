#pragma strict

private var bollCount : int;
private var counter : int;
private var cleared : boolean;
var labelStyle : GUIStyle;

function Start () {

	bollCount = GameObject.FindGameObjectsWithTag("Ball").length;
}

function Update () {

}

function OnTriggerEnter(other : Collider){
	
	if (other.gameObject.tag == "Ball"){
	 	counter++;
	 	Debug.Log("in Boll");
	 	
	 	if (!cleared && counter == bollCount){
	 		//  Cler
	 		cleared = true;
	 		Debug.Log("Cleared!!!");
	 		
	 		// sleep 3m
	 		yield WaitForSeconds(3.0);
 			Application.LoadLevel("Title");
	 	}
	}
}


function OnTriggerExit(other : Collider){
	
	if (other.gameObject.tag == "Ball"){	 
		counter--;
	}
}


function OnGUI(){
 	
 	if (cleared == true){
 		var sw : int = Screen.width;
 		var sh : int = Screen.height;
 		GUI.Label(Rect(sw / 6, sh / 3, sw * 2 / 3, sh /3),"Cleard!!" ,labelStyle); 

 	}
}