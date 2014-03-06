#pragma strict

var coinChachBounus : int = 10;

function Start () {

}

function Update () {

}

// 衝突メソッド
function OnTriggerEnter (other : Collider) {

	// メッセージ送信
	other.gameObject.SendMessage("coinChach", coinChachBounus);

	// 削除
    Destroy(gameObject);
}