import { For, Match, Switch, createSignal } from "solid-js";
import Section from "../Section";
import { Scene } from "../../types";
import { scenes, selectedScene, setScenes, setSelectedScene } from "../../App";
export default function Scenes() {
  const [currentTransition, setCurrentTransition] = createSignal(0);
  const [currentDuration, setCurrentDuration] = createSignal(300);

  return (
    <Section name="Scenes">
      <div class="w-full flex gap-2">
        <div
          onClick={() => {
            setScenes([
              ...scenes(),
              {
                id: `Scene ${scenes().length + 1}`,
                label: `Scene ${scenes().length + 1}`,
                sources: [],
                duration: 300,
              },
            ]);
          }}
          class="bg-darkblue text-lightgrey cursor-pointer select-none flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md"
        >
          New
          <img src="/icons/add.svg" class="cursor-pointer" />
        </div>
        <select class="outline-none bg-grey cursor-pointer text-lightgrey rounded-md p-1 text-sm font-medium">
          <For each={["fade", "cut", "slide"]}>
            {(transition) => (
              <option
                value={transition}
              >{`${transition[0].toUpperCase()}${transition.substring(
                1
              )}`}</option>
            )}
          </For>
        </select>
        <div class="bg-grey text-lightgrey select-none flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md">
          {`${currentDuration()}ms`}
          <img
            onClick={() => setCurrentDuration(currentDuration() + 50)}
            src="/icons/add.svg"
            class="cursor-pointer"
          />
          <img
            onClick={() => setCurrentDuration(currentDuration() - 50)}
            src="/icons/subtract.svg"
            class="cursor-pointer"
          />
        </div>
      </div>
      <ul class="h-full flex flex-col gap-2 text-lightgrey text-sm">
        <For each={scenes()}>
          {(scene, index) => (
            <li
              onClick={() => setSelectedScene(index())}
              style={{
                color: selectedScene() === index() ? "white" : "#9CA3AF",
                "background-color":
                  selectedScene() === index() ? "#1D2135" : "transparent",
              }}
              class="px-2 py-2 rounded-lg hover:bg-darkblue flex gap-3 select-none cursor-pointer"
            >
              {scene.label}
            </li>
          )}
        </For>
      </ul>
    </Section>
  );
}
