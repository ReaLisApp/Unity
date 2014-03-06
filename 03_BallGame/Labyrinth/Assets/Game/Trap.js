#pragma strict

function Start () {

}

function Update () {

} 

function OnTriggerEnter(other : Collider) {

	if (other.gameObject.tag == "Ball"){
		var respawn : GameObject = GameObject.FindWithTag("Respawn");
		other.transform.position = respawn.transform.position;
	}
}