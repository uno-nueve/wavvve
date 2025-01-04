import { UserProfile } from "@spotify/web-api-ts-sdk";
import { atom } from "jotai";

export const sessionAtom = atom<UserProfile | null>(null);
