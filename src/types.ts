export type Source = {
  id: string;
  label: string;
  type: "camera" | "microphone" | "screen";
};

export interface VideoSource extends Source {
  track: MediaStreamTrack;
}

export interface AudioSource extends Source {
  track: MediaStreamTrack;
}

export type Scene = {
  id: string;
  label: string;
  sources: Source[];
};

export type User = {
  id: string;
  name: string;
  color: string;
};

export type Message = {
  body: string;
  sender: User;
};
