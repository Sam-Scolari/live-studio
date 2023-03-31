import { For, Show, createSignal, onMount } from "solid-js";
import Section from "../Section";
import { Message } from "../../types";
const random = {
  sender: [
    "aventme",
    "Capscho",
    "cozync",
    "myallet",
    "reallySolid",
    "Blacket",
    "YuiDr",
    "Cannonis",
    "redst",
    "wearepa",
    "Sensepest",
    "Cymarbu",
    "ludwig",
    "cyr",
    "nmplol",
    "hasanabi",
    "sodapoppin",
    "xqcow",
  ],
  color: ["#32a852", "#4099bd", "#763ead", "#cf6b32", "#d62735"],
  message: [
    "AHH I SEE",
    "AYOO",
    "FeelsLagMan",
    "OMEGALUL",
    "thats such a banger",
    "THIS DUDE IS A REAL PIECE OF SHIT",
    "This actually looks promising. Very exciting",
    "is missed the stream. is the game good ?",
    "that voice though",
    "No thats about right",
    "BUILT DIFFERENT LIKE A DEFECTIVE TOY",
    "hard stuck in plat allready KEKW",
    "you win this stfu and focus up",
    "nopenopenopenopenope",
    "I tuned in. THis was my first clip. I lost",
    " im cringing so hard",
    "sweat home alabama",
    "No more pausing",
    "LETHIMCOOK",
    "yea",
  ],
};

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

  onMount(() => {
    for (let i = 0; i < 10; i++) {
      setInterval(
        () =>
          setMessages([
            {
              body: random.message[
                Math.floor(Math.random() * random.message.length)
              ],
              sender: {
                id: random.sender[
                  Math.floor(Math.random() * random.sender.length)
                ],
                color:
                  random.color[Math.floor(Math.random() * random.color.length)],
                name: random.sender[
                  Math.floor(Math.random() * random.sender.length)
                ],
              },
            },
            ...messages(),
          ]),
        Math.floor(Math.random() * 10000)
      );
    }
  });

  return (
    <Section name="Chat">
      <div class="overflow-hidden h-[400px] flex flex-col-reverse gap-2">
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
