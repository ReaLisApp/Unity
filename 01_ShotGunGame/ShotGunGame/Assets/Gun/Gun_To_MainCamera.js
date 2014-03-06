#pragma strict

var gunPrehab : GameObject;
var initialVelocity : float; 

function Start () {

}

function Update () {

	// クリックイベント
	if (Input.GetButtonDown("Fire1")){
		
		// 銃弾オブジェクトを作成
		var gun : GameObject = 
		Instantiate(gunPrehab ,transform.position ,transform.rotation);
		 
		var screenPoint = Input.mousePosition;
		screenPoint.z = 10.0; 
		 
		var worldPoint = camera. ScreenToWorldPoint(screenPoint);
		var direction = (worldPoint - transform.position).normalized;
		gun.rigidbody.velocity = direction * initialVelocity;
	}
} 


//  TimeKeeper.JSからのゲーム終了通知
function Timeup(){
	
	// スクリプト停止
	enabled = false;
}