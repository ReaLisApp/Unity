#pragma strict

var splikeDamage : int = 10;

function Start () {

}

function Update () {

}

// 衝突メソッド
function OnTriggerEnter (other : Collider) {

	// メッセージ送信 
	other.gameObject.SendMessage("damage", splikeDamage);

	// 削除
    Destroy(gameObject);
}