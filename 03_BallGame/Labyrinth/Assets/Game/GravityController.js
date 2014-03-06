#pragma strict

function Start () {

}

function Update () {
	 //  Gravity Controll
 	 Physics.gravity  =
 	  Quaternion.AngleAxis(Input.GetAxis("Horizontal") * 60.0, Vector3.forward) *
 	  Quaternion.AngleAxis(Input.GetAxis("Vertical") *  -60.0, Vector3.right) *
 	  (Vector3.up * -20.0); 
}