import { For, Match, Switch, createSignal } from "solid-js";
import { Source } from "../../types";
import Section from "../Section";

export default function Sources(props: { sources: Source[] }) {
  const [selectedSource, setSelectedSource] = createSignal(0);

  return (
    <Section name="Sources">
      <div class="w-full flex gap-2">
        <div class="bg-grey text-lightgrey flex items-center gap-2 text-sm font-medium px-2 py-1 rounded-md">
          Filter
          <img src="/icons/filter.svg" />
        </div>
      </div>
      <ul class="h-full flex flex-col gap-2 text-lightgrey text-sm">
        <For each={props.sources}>
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
