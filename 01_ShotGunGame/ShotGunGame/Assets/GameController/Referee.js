#pragma strict

// 同じオブジェクト内にScoreKiperが必須
@script RequireComponent(ScoreKeeper);

var switchInterval : float;	// 色切り替えの感覚
var rewardPoint : float;	// 正しい色に対する加点
var badPoint : float;		// 間違った色に対する減点 
var skin : GUISkin;			// スタイル

private var scoreKeeper : ScoreKeeper;	// ScoreKeeperのコンポーネント参照変数
private var targetIsRed : boolean;		// 現在のターゲットが赤ならTrue
private var switchTimer : float;		// 色の切り替えまでの時間


//  現在ターゲットとなっている色名を得る
private function getTargetOfColorName () :String{

	return ((targetIsRed)? "Red":"Blue");
}

function OnDestroyBox (boxColorName : String) {

	// 現在のターゲットと同じであれば加点、それ以外は減点
	Debug.Log("box color" + boxColorName + "  targetColor" + getTargetOfColorName());
	if (boxColorName == getTargetOfColorName()) 
		scoreKeeper.score += rewardPoint;
	else 
		scoreKeeper.score -= badPoint;
}

//  読み込み時
function Start () {
	
	// ScoreKeeperのコンポーネント参照	         as クラス名でキャスト
	 scoreKeeper = GetComponent(ScoreKeeper) as ScoreKeeper;
	 targetIsRed = true;
	 switchTimer = switchInterval;
}


// 更新
function Update () {

	// フレーム数でタイムを減算
	switchTimer -= Time.deltaTime;
	if (switchTimer <= 0.0) {
		//  色を反転
		targetIsRed = !targetIsRed;
		// 次の切り替えまでの時間を更新 
		switchTimer = switchInterval;
	}
}


function OnGUI() {
	
	// 色色の切り替えが近い時は表示しない
	if (switchTimer < 1.5) return;
	
	// スタイルの読み込み
	GUI.skin = skin;
	// ターゲットの色、名前を表示する 
	var sw : float = Screen.width;
	var sh : float = Screen.height;
	var message : String = "Shot " + getTargetOfColorName() + " Boxes!!";
	GUI.Label(Rect(0, sh / 4, sw,  sw / 2),message, "message");
	GUI.color = ((targetIsRed)? Color.red:Color.blue);
 }
 
 
 //  TimeKeeper.JSからのゲーム終了通知
function Timeup(){

	enabled = false;
}