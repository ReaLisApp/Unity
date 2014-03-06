#pragma strict

@HideInInspector
var score : int;

var skin : GUISkin;


function OnGUI(){

	GUI.skin = skin;
	var sw : int = Screen.width; 
	var sh : int = Screen.height;
	var scoreTxt : String = "SCORE : " + score.ToString();
	//(Rext( x, y , widht, height), 文字 , skinの名前)	
	GUI.Label(Rect(0, 0, sw /2,  sh / 4), scoreTxt,"score");
}