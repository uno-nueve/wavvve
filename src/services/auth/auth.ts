import { client_id, REDIRECT_URI } from "@/utils";
import { Scopes, SpotifyApi } from "@spotify/web-api-ts-sdk";

export const sdk = SpotifyApi.withUserAuthorization(client_id, REDIRECT_URI, Scopes.userDetails);
