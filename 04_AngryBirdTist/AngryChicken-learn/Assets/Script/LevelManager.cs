using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class LevelManager : MonoBehaviour  {
	
	static LevelManager myInstance;                                 					//Hold a reference to this script

	public static LevelManager Instance { get { return myInstance; } }

	/// <summary>
	/// Called at the start of the level
	/// </summary>
	void Start() {
		myInstance = this;
		
		// Play BGM
		SoundManager.Instance.PlayBGM(0);

	}
}
