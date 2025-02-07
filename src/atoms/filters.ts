import { atom } from "jotai";

export const filterAtom = atom<"artists" | "albums" | "tracks">("artists");
