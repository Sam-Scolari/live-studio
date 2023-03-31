import { For, Match, Switch, createSignal } from "solid-js";
import { Source } from "../../types";
import Section from "../Section";
import {
  setSelectedSource,
  selectedSource,
  scenes,
  selectedScene,
} from "../../App";

export default function Sources() {
  return (
    <Section name="Sources">
      <div class="w-full flex gap-2">
        <div
          // onClick={() => {
          //   setScenes([
          //     ...scenes(),
          //     {
          //       id: `Scene ${scenes().length + 1}`,
          //       label: `Scene ${scenes().length + 1}`,
          //       sources: [],
          //       duration: 300,
          //     },
          //   ]);
          // }}
          class="bg-darkblue text-lightgrey cursor-pointer select-none flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md"
        >
          New
          <img onClick={() => {}} src="/icons/add.svg" class="cursor-pointer" />
        </div>
        <div class="bg-grey text-lightgrey flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md">
          Filter
          <img src="/icons/filter.svg" />
        </div>
      </div>
      <ul class="h-full flex flex-col gap-2 text-lightgrey text-sm">
        <For each={scenes()[selectedScene()].sources}>
          {(source, index) => (
            <li
              onClick={() => setSelectedSource(index())}
              style={{
                color: selectedSource() === index() ? "white" : "#9CA3AF",
                "background-color":
                  selectedSource() === index() ? "#1D2135" : "transparent",
              }}
              class="px-2 py-2 rounded-lg hover:bg-darkblue flex gap-3 select-none cursor-pointer"
            >
              <Switch>
                <Match when={source.type === "screen"}>
                  <img src="/icons/screen.svg" draggable={false} class="w-3" />
                </Match>
                <Match when={source.type === "microphone"}>
                  <img src="/icons/microphone.svg" draggable={false} />
                </Match>
                <Match when={source.type === "camera"}>
                  <img src="/icons/camera.svg" draggable={false} class="w-3" />
                </Match>
              </Switch>
              {source.label}
            </li>
          )}
        </For>
      </ul>
    </Section>
  );
}
