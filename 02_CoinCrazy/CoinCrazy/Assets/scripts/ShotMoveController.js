#pragma strict

var velocity : float =  0.3;		    // 移動速度
var moveDelay : float = 1.0;	// 移動までの猶予時間
var deletaTime : float = 3.0;	// 消滅までの時間

function Start () {
	
	// 表示してから移動までに若干の猶予を与える
	 yield WaitForSeconds(moveDelay);
	  
	 // プレイヤーの確認
	 var player : GameObject = GameObject.FindWithTag("Player");
	   
	 // プレイヤーの方向に加速させる
	 if (player != null) {
	 
	 	var direction :Vector3 = (player.transform.position - transform.position).normalized;
	 	rigidbody.AddForce(direction * velocity, ForceMode.VelocityChange);
	 	
	 }
	 
	 // 消滅までの余力
	  yield WaitForSeconds(deletaTime);
	  
	  // 消滅
	  Destroy(gameObject);
}


function Update () {

}