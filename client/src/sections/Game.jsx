import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Game() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/build/Build.loader.js",
    dataUrl: "/build/Build.data",
    frameworkUrl: "/build/Build.framework.js",
    codeUrl: "/build/Build.wasm",
  });

  const keys = [
    {
      key: "W A S D",
      inst: "Movement",
    },
    {
      key: "U",
      inst: "Basic attack",
    },
    {
      key: "4",
      inst: "Remove slot 1 spell",
    },
    {
      key: "5",
      inst: "Remove slot 2 spell",
    },
    {
      key: "8",
      inst: "Use slot 1 spell",
    },
    {
      key: "9",
      inst: "Use slot 2 spell",
    },
    {
      key: "J",
      inst: "Dash",
    },
  ];

  const KeyShow = ({ kkey, inst }) => (
    <div className="flex flex-row items-center justify-left m-3">
      <div className="text-white subtitle-text text-center text-xl border-white rounded-md border-2 mx-8 p-4">
        {kkey}
      </div>
      <p className="subtitle-text text-left text-md">{inst}</p>
    </div>
  );

  return (
    <div
      id="game"
      className="flex flex-col justify-start items-center min-h-screen"
    >
      <h1 className="title-text text-4xl">Game user manual</h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-start items-left p-8">
          <h1 className="title-text text-xl font-bold text-center">
            Build mode:
          </h1>
          <KeyShow
            kkey="B"
            inst="Toggle build modes (put tiles, gameobjects, players, enemies, etc.)"
          />
          <h2 className="title-text text-xl text-center font-bold">
            Tileset mode
          </h2>
          <KeyShow
            kkey="Left mouse"
            inst="Click and drag to put tilesets in trajectory"
          />
          <KeyShow kkey="1" inst="Change to tile 1" />
          <KeyShow kkey="2" inst="Change to tile 2" />
          <h2 className="title-text text-xl text-center font-bold">
            Game Object mode
          </h2>
          <KeyShow kkey="Left mouse" inst="Put selected element" />
        </div>
        <div className="col-span-1 flex flex-col justify-center items-left p-8">
          <h1 className="title-text text-xl font-bold text-center">
            Play mode:
          </h1>
          {keys.map((key) => (
            <KeyShow kkey={key.key} inst={key.inst} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-black">
        <Unity
          style={{
            width: "50%",
            justifySelf: "center",
            alignSelf: "center",
          }}
          unityProvider={unityProvider}
        />
      </div>
    </div>
  );
}
