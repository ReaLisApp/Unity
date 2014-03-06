#pragma strict
/**
	  Playerの状態を管理するクラス
*/

 var life : int = 100;				//  HP
 var score : int = 0;				// スコア
 
 // エフェクトのプレハブ
 var starEffectPrehab : GameObject;
 var dieEffectPrehab  : GameObject;
 
 var coinSe : AudioClip;			// コインのSE音
 var damageSe : AudioClip;	// ダメージのSE音
 var dieSe : AudioClip;			// 死亡時のSE音
 var bgmObj : GameObject;	// BGM Object
 
 var skin :GUISkin;					// score life skin

function Start () {

}

function Update () {

}


function  OnGUI () {

	GUI.skin = skin;
 	var sW : float  = Screen.width;
 	var sH : float  = Screen.height;;
	GUI.Label (Rect (0, 0, sW / 2 , sH / 4), " Life  : " + life.ToString(), "life");
	GUI.Label (Rect (sW / 2 ,  0, sW / 2 , sH / 4), " Sucore  : " + score.ToString(), "score");
}



/* 
	To 		:	コインと衝突すると通過
	parrm	:	ポイント	
	実装 		: 	coin.js	
*/
function coinChach (point : int) {

	score += point;
	// Sound
	audio.PlayOneShot(coinSe);
	// スターエフェクト
	Instantiate(starEffectPrehab, transform.position, transform.rotation);
}


/* 
	To 		:	トゲトゲと衝突すると通過
	parrm	:	ダメージ	
	実装 		: 	splike.js
*/
function damage (damage : int) {
	
	life -= damage;
	audio.PlayOneShot(damageSe);
	
	// ライフが0になったら
	if (life <= 0) {
		// キャラクターの削除
		Destroy(transform.parent.gameObject);
		
		// Dieエフェクト
		audio.PlayOneShot(dieSe);
		Instantiate(dieEffectPrehab, transform.position, transform.rotation);
		
		yield WaitForSeconds(2.0);
		bgmObj.audio.Stop();
	}
}

 