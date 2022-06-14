import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/Build.loader.js",
    dataUrl: "/Build/Build.data.json",
    frameworkUrl: "/Build/Build.framework.js",
    codeUrl: "/Build/Build.wasm",
  });

  return (
    <div>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
