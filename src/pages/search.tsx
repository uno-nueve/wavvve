import { filterAtom } from "@/atoms/filters";
import { Button } from "@/components/ui/button/button";
import { sdk } from "@/services/auth/auth";
import { Artist, Image, SimplifiedAlbum, Track } from "@spotify/web-api-ts-sdk";
import { useAtom, useAtomValue } from "jotai";
import { Ellipsis } from "lucide-react";
import { FormEvent, useState } from "react";

type SearchResults = {
    artists: Artist[];
    albums: SimplifiedAlbum[];
    tracks: Track[];
};

export const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState<SearchResults>();
    const filter = useAtomValue(filterAtom);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!query) return;
        try {
            const res = await sdk.search(query, ["artist", "album", "track"]);
            setSearchResults({
                artists: res.artists.items,
                albums: res.albums.items,
                tracks: res.tracks.items,
            });
        } catch (error) {
            console.error("Search failed", error);
        }
    }

    return (
        <div className="w-full max-w-4xl mx-auto overflow-hidden">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search" className="flex w-full">
                    <input
                        id="search"
                        name="search"
                        type="text"
                        onChange={(e) => setQuery(e.currentTarget.value)}
                        className="w-full p-2 border focus-visible:bg-white focus:outline-0 focus-visible:inset-ring-1"
                    />
                    <button type="submit" className="p-2 text-white bg-black border border-black">
                        Search
                    </button>
                </label>
            </form>
            {searchResults && (
                <div>
                    <div className="flex justify-between w-full">
                        <FilterButton value="artists" />
                        <FilterButton value="albums" />
                        <FilterButton value="tracks" />
                    </div>
                    {filter === "albums" && <SearchList results={searchResults.albums} />}
                    {filter === "artists" && <SearchList results={searchResults.artists} />}
                    {filter === "tracks" && <SearchList results={searchResults.tracks} />}
                </div>
            )}
        </div>
    );
};

export const FilterButton = ({ value }: { value: "artists" | "albums" | "tracks" }) => {
    const [filter, setFilter] = useAtom(filterAtom);

    return (
        <button
            onClick={() => setFilter(value)}
            className={`border-b-2 p-4 capitalize w-full ${
                filter === value ? "border-black" : "border-neutral-300"
            }`}
        >
            {value}
        </button>
    );
};

export const SearchList = <T extends Artist | SimplifiedAlbum | Track>({
    results,
}: {
    results: T[];
}) => {
    return (
        <div className="overflow-y-scroll h-[calc(100vh-260px)]">
            <ul className="flex flex-col gap-2 py-4 h-max">
                {results.map((result) => (
                    <SearchListItem key={result.id} item={result} />
                ))}
            </ul>
        </div>
    );
};

export const SearchListItem = ({ item }: { item: Artist | SimplifiedAlbum | Track }) => {
    let images: Image[] = [];

    if ("album" in item) {
        images = item.album.images;
    } else if ("images" in item) {
        images = item.images;
    }

    return (
        <li className="flex items-start gap-4 line-clamp-1">
            <div className="grid grid-cols-[92px_1fr] items-center w-full">
                <div
                    className={`w-16 h-16 overflow-hidden ${
                        item.type === "artist" ? "rounded-full" : ""
                    }`}
                >
                    {images.length ? (
                        <img
                            src={images[2].url}
                            alt={item.name}
                            className={"object-cover w-full h-full"}
                        />
                    ) : (
                        <div className="w-full h-full bg-red-500" />
                    )}
                </div>
                <span className="underline underline-offset-2">{item.name}</span>
            </div>
            <Button variant="ghost" size="sm">
                <Ellipsis />
            </Button>
        </li>
    );
};
