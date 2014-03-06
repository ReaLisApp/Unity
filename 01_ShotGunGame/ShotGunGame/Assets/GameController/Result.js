#pragma strict

@script RequireComponent(ScoreKeeper);		// 同オブジェクト内にScoreKeeper必須
	
var skin : GUISkin;							// skin

private var state : String;						// 現状のステータス
private var scoreKeeper : ScoreKeeper;			// ScoreKeeper参照変数


function Start () {
	// ジェネリックで取得してみよう
	scoreKeeper = GetComponent.<ScoreKeeper>();
}

