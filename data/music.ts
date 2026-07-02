export type Track = {
  title: string;
  artist: string;
  src: string;
  cover?: string;
};

export const currentTrack: Track = {
  title: "SAG HARBOR",
  artist: "Tyler, The Creator",
  src: "/music/song.mp3",
};
