import { Scopes, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { client_id, REDIRECT_URI } from "../../utils/secrets";

export const sdk = SpotifyApi.withUserAuthorization(client_id, REDIRECT_URI, Scopes.userDetails);
