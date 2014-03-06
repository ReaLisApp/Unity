using UnityEngine;
using System.Collections;

public class CrashBox : MonoBehaviour {
		

	public float m_Strength = 1;	// 耐久率
	public float m_hp = 1;			// HP

	public GameObject m_Effect;	// Crush Effect

	/// <summary>
	/// Objectと接触した際に通過Event
	/// </summary>
	/// <param name="col">Col.</param>
	void OnCollisionEnter2D(Collision2D col) {

		// 接触物のmagnitudeでベクトルの大きさを取得してダメージを計算
		float damage = col.relativeVelocity.magnitude - m_Strength;
		if (damage > 0){
			m_hp -= damage;
		}
		
		if (m_hp < 0){
			SoundManager.Instance.PlaySE(0);			// Play Sound

			// Effect
			Object effect = GameObject.Instantiate(
				m_Effect, 
				transform.position, 
				Quaternion.identity);
			DestroyObject(effect, 1.5f);

			Destroy(gameObject);							// Remove
		}
	}
}
