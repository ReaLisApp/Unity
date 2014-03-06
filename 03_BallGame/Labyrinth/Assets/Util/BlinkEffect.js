#pragma strict

private var defColor : Color;


function Start () {

	 // set deffaukt color
	 defColor = renderer.material.color;
}

function Update () {
	 
	  var lebel : float = Mathf.Abs(Mathf.Sin(Time.time *  5));
	  renderer.material.color = defColor * lebel;
}