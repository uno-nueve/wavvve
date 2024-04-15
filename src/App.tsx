import { useEffect, useState } from "react";
import "./App.css";
import { SearchBar, TAlbum } from "./components/SearchBar";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Auth } from "./components/Auth";
import { List } from "./components/ui/List";
import { AlbumCard } from "./components/AlbumCard";

function App() {
    const [selectedAlbums, setSelectedAlbums] = useState<TAlbum[]>([]);

    const { setItem, getItem } = useLocalStorage("saved_albums");

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

    useEffect(() => {
        const saved_albums = getItem();
        if (saved_albums) {
            setSelectedAlbums(saved_albums);
        }
    }, []);

    return (
        <div className="flex flex-col w-screen place-items-center">
            <div className="container flex flex-col h-full max-w-[48rem] min-h-screen pt-5 px-3 md:px-3 place-items-center relative">
                <SearchBar
                    selectedAlbums={selectedAlbums}
                    setSelectedAlbums={setSelectedAlbums}
                />
                {selectedAlbums.length > 0 && (
                    <div className="w-full pt-14">
                        <h2 className="self-start my-3 text-4xl font-bold">
                            Your albums:
                        </h2>
                        <List variant="grid">
                            <AlbumCard
                                selectedAlbums={selectedAlbums}
                                handleDelete={handleDelete}
                                handleRating={handleRating}
                            />
                        </List>
                    </div>
                )}
            </div>
            <Auth />
        </div>
    );
}

export default App;
