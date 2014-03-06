#pragma strict

var interval : float;
var redBoxPrehab : GameObject;
var blueBoxPrehab : GameObject;

private var nextIsRed : boolean;
private var timer : float;

function Start () {

	timer = 0;
	nextIsRed = true;
}

function Update () {
	
	timer -= Time.deltaTime;
	if (timer < 0.0) {
		
		var offsX : float = Random.Range(-8.0, 8.0); 
		var offsZ : float = Random.Range(-4.0, 4.0); 
		var position : Vector3 = transform.position + Vector3(offsX ,0 ,offsZ);
		
		var prehab : GameObject = ((nextIsRed)? redBoxPrehab: blueBoxPrehab);
		Instantiate(prehab,position ,Random.rotation);
		nextIsRed = !nextIsRed;
		timer = interval;
	}
}

//  TimeKeeper.JSからのゲーム終了通知
function Timeup(){

	enabled = false;
}