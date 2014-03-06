#pragma strict

@HideInInspector
var explostionPrehab : GameObject;	//  エフェクトのプレハブ
@HideInInspector
var damaged : boolean;				//  ダメージを受けたかどうか
@HideInInspector
var killTimer : float;				//  消すまでの時間

var colorName : String;				//  箱の色の名前

function Start () {

}

function Update () {

	 if (!damaged) return;
	 //  ダメージを受けたら消す時間を減少させる
	 killTimer -= Time.deltaTime;
	 
	 if (killTimer <= 0.0) {
	 	// エフェクトをインスタンス化し、 箱を削除
	 	Instantiate(explostionPrehab, transform.position, transform.rotation);
		Destroy(gameObject);
		// ゲームコントローラーに対し、消したオブジェクトのメッセージを直接送信する
		var gameController = GameObject.FindWithTag("GameController");
		gameController.SendMessage("OnDestroyBox", colorName);
	 }
}

function ApplyDamage() {
	
	if (!damaged) {
		damaged = true;
		killTimer = 0.4;
		
		// 上に上げる
		gameObject.rigidbody.AddForce(Vector3.up * 15, ForceMode.Impulse);
	}
}
