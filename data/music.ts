export type Track = {
  title: string;
  artist: string;
  src: string;
  cover?: string;
};

export const currentTrack: Track = {
  title: "CERBERUS",
  artist: "Biking With Francis",
  src: "/music/song.mp3",
};
