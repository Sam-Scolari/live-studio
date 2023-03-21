import { createSignal, onMount } from "solid-js";
import { createStore } from "solid-js/store";



export default function useMedia() {
  const [sources, setSources] = createStore<{
    video: VideoSource[];
    audio: AudioSource[];
  }>({
    video: [],
    audio: [],
  });

  //   function

  onMount(async () => {
    // const userMedia = await navigator.mediaDevices.getUserMedia({
    //   video: {
    //     aspectRatio: 16 / 9,
    //   },
    //   audio: true,
    // });
    // for (const audioTrack of userMedia.getAudioTracks()) {
    //   setMedia("audio", audioTrack.id, audioTrack);
    // }
    // for (const videoTrack of userMedia.getVideoTracks()) {
    //   setMedia("video", videoTrack.id, videoTrack);
    // }
    // const displayMedia = await navigator.mediaDevices.getDisplayMedia({
    //   video: true,
    //   audio: true,
    // });
    // for (const audioTrack of displayMedia.getAudioTracks()) {
    //   setMedia("audio", audioTrack.id, audioTrack);
    // }
    // for (const videoTrack of displayMedia.getVideoTracks()) {
    //   setMedia("video", videoTrack.id, videoTrack);
    // }
  });

  return { sources };
}
