import { For, Show, createSignal } from "solid-js";
import Section from "../Section";
import { Message } from "../../types";

export default function Chat() {
  const [messages, setMessages] = createSignal<Message[]>([]);
  const [currentMessage, setCurrentMessage] = createSignal("");

  function send() {
    if (currentMessage()) {
      setMessages([
        {
          body: currentMessage(),
          sender: { color: "salmon", id: "sam", name: "Sam" },
        },
        ...messages(),
      ]);
      setCurrentMessage("");
    }
  }

  return (
    <Section name="Chat">
      <div class="h-full flex flex-col-reverse gap-2">
        <For each={messages()}>
          {(message) => (
            <p class="flex text-sm">
              <Show when={message.sender.id === "sam"}>
                <img src="/icons/crown.svg" class="w-3 mr-2" />
              </Show>
              <span
                style={{ color: message.sender.color }}
                class="mr-2 font-medium"
              >
                {message.sender.name}
              </span>
              {message.body}
            </p>
          )}
        </For>
      </div>
      <div class="flex bg-black p-2 pl-3 rounded-lg">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          onChange={(e) => setCurrentMessage(e.currentTarget.value)}
          value={currentMessage()}
          placeholder="Enter chat here..."
          class="w-full bg-transparent outline-none text-sm text-lightgrey"
        />
        <button
          onClick={send}
          class="bg-darkblue text-sm px-3 py-1 rounded-lg font-medium text-lightgrey"
        >
          Chat
        </button>
      </div>
    </Section>
  );
}
