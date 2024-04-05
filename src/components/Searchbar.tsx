import { ChangeEvent, FormEvent, useState } from "react";
import Auth from "./Auth";
import SearchListItem from "./SearchListItem";
import AlbumCard from "./AlbumCard";

export type TAlbum = {
    id: string;
    name: string;
    artists: TArtist[];
    images: TImage[];
    img_s?: TImage;
};

type TArtist = {
    id: string;
    name: string;
};

type TImage = {
    height: number;
    url: string;
    width: number;
};

/**
 * TODO: create selected albums list component -- 80% --
 * TODO: implement rating functionality
 * TODO: implement date picking functionality
 * TODO: type for selected albums with new props
 */

export default function SearchBar() {
    const URL = "https://api.spotify.com/v1/search?";
    const type = "album";
    const accessToken = localStorage.getItem("access_token");

    const [searchField, setSearchField] = useState<string>("");
    const [data, setData] = useState<TAlbum[]>([]);
    const [selectedAlbums, setSelectedAlbums] = useState<TAlbum[]>([]);

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        setSearchField(inputValue);
        fetchAlbum(inputValue);
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        fetchAlbum(searchField);
        setSearchField("");
    }

    function handleClick(data: TAlbum) {
        setSelectedAlbums([...selectedAlbums, data]);
        setSearchField("");
    }

    async function fetchAlbum(q: string) {
        if (q === "") {
            return;
        }
        const res = await fetch(`${URL}q=${q}&type=${type}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        const resData = await res.json();
        setData(
            resData.albums.items.map((album: TAlbum) => ({
                ...album,
                img_s: album.images.reduce((prev: TImage, curr: TImage) => {
                    return prev.height < curr.height ? prev : curr;
                }),
            }))
        );
    }

    return (
        <div className="container h-screen px-6 py-4 bg-gray-400">
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
            {searchField !== "" && (
                <div className="w-full md:w-[37rem]">
                    <ul className="list-none">
                        <SearchListItem data={data} onClick={handleClick} />
                    </ul>
                </div>
            )}
            {selectedAlbums.length > 0 && (
                <div className="w-full md:w-[37rem]">
                    <ul className="grid grid-cols-2 gap-2 list-none">
                        <AlbumCard selectedAlbums={selectedAlbums} />
                    </ul>
                </div>
            )}
            <Auth />
        </div>
    );
}
