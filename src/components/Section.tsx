import { JSXElement } from "solid-js";

export default function Section(props: {
  name: string;
  children?: JSXElement;
}) {
  return (
    <div class="flex flex-col w-full h-full rounded-lg bg-darkgrey gap-4 p-2">
      <div class="flex justify-between items-center">
        <p class="text-lightgrey text-sm font-medium select-none leading-none">
          {props.name}
        </p>
        <div class="flex gap-4">
          <img src="/icons/menu.svg" alt="Open menu" class="w-4" />
          <img src="/icons/popout.svg" alt="Popout window" class="w-4" />
        </div>
      </div>
      {props.children}
    </div>
  );
}
