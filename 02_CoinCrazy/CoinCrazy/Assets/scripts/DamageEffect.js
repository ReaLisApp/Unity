#pragma strict

private var effectFlg : boolean;		// 演出フラグ
private var defColor : Color;			// デフォルトのカラー保持


function Start () {

	// false
	effectFlg = false;
	// デフォルトのカラー保持
	defColor = renderer.material.color;
}


function Update () {

	if (effectFlg == true) {
		// 赤く点滅させる
		renderer.material.color = Color.red * Mathf.Abs(Mathf.Sin(Time.deltaTime * 1000));
	}
}


/*
	To 		:	トゲトゲと衝突すると通過
	parrm	:	ダメージ
	実装 		: 	splike.js
*/
function damage (amount : int) {
	
	effectFlg = true;
	
	// 0.3秒間エフェクトを実行
	yield WaitForSeconds(0.5);
	
	// 元に戻す
	effectFlg = false;
	renderer.material.color = defColor;
}