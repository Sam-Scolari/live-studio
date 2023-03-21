import { JSXElement, onMount } from "solid-js";
import useMedia from "./hooks/useMedia";
import Sources from "./components/windows/Sources";
import AudioMixer from "./components/windows/AudioMixer";
import Activity from "./components/windows/Activity";
import Chat from "./components/windows/Chat";
import Scenes from "./components/windows/Scenes";

export default function App() {
  return (
    <div class="flex flex-col h-full">
      <header class="bg-darkgrey flex justify-between items-center px-4 py-3">
        <div class="flex gap-8">
          <div class="flex items-center gap-3">
            <img src="logo.png" class="h-8" />
            <h1 class="text-xl font-semibold">Studio</h1>
          </div>
          <div class="flex items-center gap-4  ">
            <select class="text-lightgrey font-medium text-sm bg-grey px-1 py-1 rounded-lg pr-2 outline-none">
              <option>Main</option>
            </select>
          </div>
        </div>
        <div class="flex">
          <div class="flex items-center">
            <button class="px-3 py-1.5 bg-red font-medium rounded-lg">
              Go Live
            </button>
          </div>
        </div>
      </header>
      <div class="flex flex-col gap-2 p-2 h-full">
        <div class="flex h-full max-h-[50%] gap-2">
          <Activity />
          <Video />
          <Chat />
        </div>
        <div class="flex h-full max-h-[50%] gap-2">
          <Scenes
            scenes={[
              { id: "scene-1", label: "Main", sources: [] },
              { id: "scene-2", label: "Secondary", sources: [] },
              { id: "scene-3", label: "Scene 3", sources: [] },
            ]}
          />
          <Sources
            sources={[
              { id: "desktop", label: "Desktop", type: "screen" },
              { id: "microphone", label: "Microphone", type: "microphone" },
              { id: "camera", label: "Camera", type: "camera" },
            ]}
          />
          <AudioMixer />
        </div>
      </div>
    </div>
  );
}

function Video() {
  let video: HTMLVideoElement;

  // const media = useMedia();

  // onMount(() => {
  //   video.srcObject = media.all;
  // });

  return (
    <div class="flex flex-col h-full w-full bg-[black] rounded-lg overflow-hidden">
      <div class="h-full w-full flex items-center">
        <video ref={video} class="aspect-video" autoplay muted>
          {/* <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          /> */}
        </video>
      </div>
      <div class="bg-darkgrey flex text-lightgrey px-2 py-1 gap-6">
        <VideoStat icon="/icons/person.svg" value={"208"} />
        <VideoStat icon="/icons/heart.svg" value={"1.2k"} />
        <VideoStat icon="/icons/stopwatch.svg" value={"00:34:29"} />
        <VideoStat icon="/icons/dash.svg" value={"128 kbit/s"} />
      </div>
    </div>
  );
}

function VideoStat(props: { icon: string; value: string }) {
  return (
    <div class="flex items-center gap-2 select-none">
      <img
        src={props.icon}
        alt="Video stat icon"
        class="h-4"
        draggable={false}
      />
      {props.value}
    </div>
  );
}
