import { atomWithStorage } from "jotai/utils";

export const searchHistoryAtom = atomWithStorage<string[] | null>("history", null);
