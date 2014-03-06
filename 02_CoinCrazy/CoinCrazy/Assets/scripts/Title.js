#pragma strict

/*
	タイトル画面制御スクリプト
*/

function Start () {

}

function Update () {
	
	// スペースキーを押されたらゲームスタート
	if (Input.GetButtonDown("Jump")) {
		Application.LoadLevel("02_Main");
	}
}