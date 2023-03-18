import { JSXElement } from "solid-js";

export default function App() {
  return (
    <div class="flex flex-col h-full">
      <header class="bg-darkgrey items-center">
        <div class="flex">
          <div class="flex items-center gap-3 px-4 py-3 border-r-[1px] border-x-grey">
            <img src="logo.png" class="h-8" />
            <h1 class="text-xl font-semibold">Studio</h1>
          </div>
          <div class="flex items-center px-4 py-3 border-l-[1px] border-r-2 border-x-grey hover:bg-grey cursor-pointer">
            <p class="text-lightgrey">Profile #1</p>
          </div>
        </div>
      </header>
      <div class="flex flex-col gap-2 p-2 h-full">
        <div class="flex h-full gap-2">
          <Section name="Activity"></Section>
          <div class="flex flex-col h-full w-fit bg-[black] rounded-lg overflow-hidden">
            <video class="h-full w-fit" autoplay muted>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
            </video>
            <div class="bg-darkgrey flex text-lightgrey px-2 py-1">Viewers</div>
          </div>
          <Section name="Chat"></Section>
        </div>
        <div class="flex h-full gap-2">
          <Section name="Scenes"></Section>
          <Section name="Sources"></Section>
          <Section name="Audio Mixer"></Section>
        </div>
      </div>
    </div>
  );
}

function Section(props: { name: string; children?: JSXElement }) {
  return (
    <div class="flex w-full h-full rounded-lg bg-darkgrey">
      <div class="flex px-4 py-2">
        <p class="text-lightgrey text-sm font-medium">{props.name}</p>
      </div>
      {props.children}
    </div>
  );
}
