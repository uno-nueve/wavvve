import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Auth } from "./Auth";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { SearchListItem } from "./SearchListItem";
import { AlbumCard } from "./AlbumCard";
import { List } from "./ui/List";
import { Form } from "./ui/Form";

export type TAlbum = {
    id: string;
    name: string;
    artists: TArtist[];
    images: TImage[];
    img_s?: TImage;
    rating?: string;
    date?: string;
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
 * TODO: refactor ui
 */

export const SearchBar = () => {
    const URL = "https://api.spotify.com/v1/search?";
    const type = "album";
    const accessToken = localStorage.getItem("access_token");

    const [searchField, setSearchField] = useState<string>("");
    const [data, setData] = useState<TAlbum[]>([]);
    const [selectedAlbums, setSelectedAlbums] = useState<TAlbum[]>([]);

    const { setItem, getItem } = useLocalStorage("saved_albums");

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
        setItem([...selectedAlbums, data]);
        setSearchField("");
    }

    function handleDelete(album: TAlbum) {
        const ID = album.id;
        const updatedAlbums = selectedAlbums.filter((album) => album.id !== ID);

        setSelectedAlbums(updatedAlbums);
        setItem(updatedAlbums);
    }

    function handleRating(rating: string, id: string) {
        const rated = selectedAlbums.map((album) => {
            if (album.id === id) {
                return {
                    ...album,
                    rating: rating,
                };
            }
            return album;
        });
        setSelectedAlbums(rated);
        setItem(rated);
    }

    async function fetchAlbum(q: string) {
        try {
            if (!accessToken) return;

            if (!q) {
                console.log("Please enter a search query");
                return;
            }

            const res = await fetch(`${URL}q=${q}&type=${type}`, {
                method: "GET",
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (!res.ok) {
                throw new Error(`HTTP Error! Status: ${res.status}`);
            }

            const resData = await res.json();

            if (!resData) {
                throw new Error("Invalid response data");
            }

            setData(
                resData.albums.items.map((album: TAlbum) => ({
                    ...album,
                    img_s: album.images.reduce((prev: TImage, curr: TImage) => {
                        return prev.height < curr.height ? prev : curr;
                    }),
                }))
            );
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const saved_albums = getItem();
        if (saved_albums) {
            setSelectedAlbums(saved_albums);
        }
    }, []);

    return (
        <div className="container h-full min-h-screen px-6 py-4 bg-gray-400">
            <Form
                handleSubmit={handleSubmit}
                handleInput={handleInput}
                searchField={searchField}
            />
            {searchField !== "" && (
                <List variant="col">
                    <SearchListItem data={data} onClick={handleClick} />
                </List>
            )}
            {selectedAlbums.length > 0 && (
                <>
                    <h2 className="my-4 text-4xl text-gray-50">Your albums:</h2>
                    <List variant="grid">
                        <AlbumCard
                            selectedAlbums={selectedAlbums}
                            onClick={handleDelete}
                            onRatingChange={handleRating}
                        />
                    </List>
                </>
            )}
            <Auth />
        </div>
    );
};
