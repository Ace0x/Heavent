using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class LoginMananger : MonoBehaviour {
 
    public InputField levelName;
    public InputField levelData; // Aqui es en donde se manda el json del nivel creado
    public int ownerId;
 
    public void Login()
    {
        StartCoroutine(Post());
    }
 
    IEnumerator Post()
    {
        var user = new User
        {
            name = levelName.text,
            levelData = levelData.text,
            userId = ownerId
        };
 
        var body = JsonUtility.ToJson(user);
 
        UnityWebRequest request = UnityWebRequest.Post("https://api-heavent.herokuapp.com/levels", body);
        request.SetRequestHeader("content-Type", "application/json");
        request.SetRequestHeader("Accept", "application/json");
 
        yield return request.SendWebRequest();
 
        if (request.isNetworkError || request.isHttpError) Debug.Log(request.error);
 
        Debug.Log($"Response as byte: {request.downloadHandler.data}");
        Debug.Log($"Response as string: {request.downloadHandler.text}");
    }
}