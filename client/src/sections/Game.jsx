import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/Build.loader.js",
    dataUrl: "/build/Build.data",
    frameworkUrl: "/build/Build.framework.js",
    codeUrl: "/build/Build.wasm",
  });

  return (
    <div id="game" className="flex flex-col justify-center items-center min-h-screen">
      <div>
        Reload when finished playing, instructions coming soon...
      </div>
      <Unity
        style={{
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
        }}
        unityProvider={unityProvider}
      />
    </div>
  );
}
