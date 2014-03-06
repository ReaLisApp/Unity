#pragma strict

var gameTime : float;				// ゲームの時間
private var nowPlayTime : float;	// 経過時間

function Update () {

	// フレーム数を加算
	nowPlayTime += Time.deltaTime;
	if (gameTime <= nowPlayTime) {
		Debug.Log("Game End");
		//  プレイ時間を過ぎたら終了,メッセージ送信(Broadcastは子階層全てに通達)
		BroadcastMessage("Timeup");
		// スクリプト停止
		enabled = false;
	}
}