#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter (collisionInfo : Collision) {

 	// Debug.Log(collisionInfo.gameObject.tag);
	if (collisionInfo.gameObject.tag == "BOX"){
	 	 // not used
		 // Destroy(collisionInfo .gameObject);
		 
		 collisionInfo.gameObject.SendMessage("ApplyDamage");
		 //	or
		 //collisionInfo.gameObject.SendMessage("ApplyDamage",SendMessageOptions.DontRequireReceiver); 
		 
	}
	// self dstroy
	Destroy(gameObject);
}