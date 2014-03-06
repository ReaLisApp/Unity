// ライトをチラチラさせるスクリプト。
// 蛍光灯っぽさを演出する。

// ※ このスクリプトは書籍では解説していません。
// 演出を強化するために追加したものです。

var flickerAmount : float;		// チラツキの量

private var intensity : float;	// ライトの元の輝度。

// 初期化処理。
function Start() {
	// ライトの元の輝度を保存する。
	intensity = light.intensity;
}

// 更新処理。
function Update() {
	// チラツキの量に基づいて、ランダムに輝度を変化させる。
	light.intensity = intensity * (1.0 - Random.Range(0.0, flickerAmount));
}
