import { ChangeEvent, FormEvent, useState } from "react";
import Auth from "./Auth";

type Album = {
    id: string;
    name: string;
    artists: Artist[];
    images: Image[];
    img_s?: Image;
};

type Artist = {
    id: string;
    name: string;
};

type Image = {
    height: number;
    url: string;
    width: number;
};

/**
 * TODO: create card component for showing search data -- 80% --
 * TODO: implement selection functionality
 * TODO: implement search while typing functionality
 * TODO: create selected albums list component
 */

export default function Searchbar() {
    const URL = "https://api.spotify.com/v1/search?";
    const type = "album";
    const accessToken = localStorage.getItem("access_token");

    const [searchField, setSearchField] = useState("");
    const [data, setData] = useState<Album[]>([]);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setSearchField(e.target.value);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        fetchAlbum(searchField);
        setSearchField("");
    }

    async function fetchAlbum(q: string) {
        const res = await fetch(`${URL}q=${q}&type=${type}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        const resData = await res.json();
        console.log(resData.albums.items[0].images[0]);
        setData(
            resData.albums.items.map((album: Album) => ({
                ...album,
                img_s: album.images.reduce((prev: Image, curr: Image) => {
                    return prev.height < curr.height ? prev : curr;
                }),
            }))
        );
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="searchbar">Search an album</label>
                <input
                    type="text"
                    name="searchbar"
                    id="searchbar"
                    value={searchField}
                    onChange={(e) => handleInput(e)}
                />
                <button type="submit">Search</button>
            </form>
            <div>
                <ul>
                    {data.map((album) => (
                        <li key={`${album.name}-${album.id}`} className="my-2">
                            <div className="flex items-center gap-4 px-2 py-2 rounded-lg bg-yellow-50 ">
                                {album.img_s && <img src={album.img_s.url} />}
                                <div>
                                    <p
                                        key={album.id}
                                        className="text-lg text-left"
                                    >
                                        {album.name}
                                    </p>
                                    {album.artists.map((artist, index) => (
                                        <p
                                            key={artist.id}
                                            className="text-sm text-left text-gray-400"
                                        >
                                            {index > 0 && ", "}
                                            {artist.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Auth />
        </>
    );
}
