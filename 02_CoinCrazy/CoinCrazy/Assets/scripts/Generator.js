#pragma strict

var intervalMin : float = 0.5;			// 生成間隔(最小) 
var intervalMax : float = 1.5;			// 生成間隔(最大)
var coinRate		: float = 0.3;			// コインの出る確率(1 == 100%)
var generationRadius : float = 5.5;	// 生成半径

// 生成オブジェクト
var coinPrehab : GameObject;		// コイン
var spikePrehab : GameObject;		// トゲトゲ


function Start () {

	//  ループ
	while (true) {
	
		// ランダムに間隔を置く
		yield WaitForSeconds(Random.Range(intervalMin,intervalMax));
	
		//  プレハブをコインのRateに合わせ、ランダムに選択
		var prehab :GameObject = ((Random.value < coinRate)? coinPrehab : spikePrehab);
	
		// 生成位置をランダムに決める
		var theta : float = Random.Range(0, Mathf.PI * 2.0);
		var position : Vector3 = Vector3(Mathf.Cos(theta), Random.Range(1.5, 4), Mathf.Sin(theta) * generationRadius);
		
		// 生成
		 Instantiate(prehab, position , Quaternion.identity);
		
	}
}


function Update () {

}