using UnityEngine;

public class MyRandomMatchmaker : Photon.MonoBehaviour
{
    private PhotonView myPhotonView;
		
    // Use this for initialization
    void Start()
    {
        PhotonNetwork.ConnectUsingSettings("0.1");
		// ここから追加
		if (string.IsNullOrEmpty(PhotonNetwork.playerName)) { 	
			PhotonNetwork.playerName = "Guest" + Random.Range(1, 999);		
		}		
		// ここまで
    }

    void OnJoinedLobby()
    {
        Debug.Log("JoinRandom"); 
        PhotonNetwork.JoinRandomRoom();
    }

    void OnPhotonRandomJoinFailed()
    {
        PhotonNetwork.CreateRoom(null);
    }

    void OnJoinedRoom()
    {
        GameObject monster = PhotonNetwork.Instantiate("monsterprefab", Vector3.zero, Quaternion.identity, 0);
        monster.GetComponent<myThirdPersonController>().isControllable = true;
        myPhotonView = monster.GetComponent<PhotonView>();
    }

    void OnGUI()
    {
        GUILayout.Label(PhotonNetwork.connectionStateDetailed.ToString());

        if (PhotonNetwork.connectionStateDetailed == PeerState.Joined)
        {
            bool shoutMarco = GameLogic.playerWhoIsIt == PhotonNetwork.player.ID;

            if (shoutMarco && GUILayout.Button("Marco!"))
            {
                myPhotonView.RPC("Marco", PhotonTargets.All);
            }
            if (!shoutMarco && GUILayout.Button("Polo!"))
            {
                myPhotonView.RPC("Polo", PhotonTargets.All);
            }
        }
    }
}
