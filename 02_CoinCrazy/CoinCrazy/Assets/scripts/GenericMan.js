#pragma strict

// pulic
var walkSpeed  : float = 3.0;					// 歩く速度
var jumpSpeed : float = 8.0;					// ジャンプスピード
var gravity        : float = 20.0;					// 重力度
private var jumpMaxCount  : int    = 2;	// ジャンプ回数

var jumpSe : AudioClip;							// JUMP SE


// self
private var vector :Vector3 = Vector3.zero;			// 現在の加速度
private var jumpCount  : int    = 2;						// 現在のジャンプ回数

function Start () {
	
	// 読み込み時
	// Walkアニメーションの速度を変更(小走りにする)
	 animation["Walk"].speed = 2.0;
	 
}


function Update () {
	
	// 更新時
	// コントローラーを取得
	var controller : CharacterController = GetComponent(CharacterController);
	
	vector.x = Input.GetAxis("Horizontal") * walkSpeed;
	vector.z = Input.GetAxis("Vertical") * walkSpeed;
	
	// 地面にいる
	if (controller.isGrounded) {
		vector.y = 0;
		jumpCount = 0;
		
		// 移動
		if (vector.magnitude > 0.5){
			// animation
			animation.CrossFade("Walk", 0.1);
		}
		// 待機
		else {
			animation.CrossFade("Idle", 0.1);
		}
	}
	
	// Jump
	if (Input.GetButtonDown("Jump") && jumpCount < jumpMaxCount) {
			vector.y = jumpSpeed;
			audio.PlayOneShot(jumpSe);
			animation.Play("Jump");
			jumpCount++;
	}
	
	// +の方向へ向きを変える
	transform.LookAt(transform.position + Vector3(vector.x, 0, vector.z));
	
	// 常に重力を与える
	 vector.y -= gravity * Time.deltaTime;
	
	// CharactorControllreの移動
	controller.Move(vector * Time.deltaTime);
}