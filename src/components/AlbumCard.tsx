import { TAlbum } from "./SearchBar";
import { XCircle } from "@phosphor-icons/react";
import { Selector } from "./Selector";

type AlbumCardProps = {
    selectedAlbums: TAlbum[];
    onClick: (album: TAlbum) => void;
    onRatingChange: (rating: string, id: string) => void;
};

export const AlbumCard = ({
    selectedAlbums,
    onClick,
    onRatingChange,
}: AlbumCardProps) => {
    return (
        <>
            {selectedAlbums.map((album: TAlbum) => (
                <li key={album.id}>
                    <div className="flex flex-col w-full h-full p-2 bg-orange-100 rounded-lg">
                        <div className="flex justify-between place-items-center">
                            <Selector
                                album={album}
                                onRatingChange={onRatingChange}
                            />
                            <button onClick={() => onClick(album)}>
                                <XCircle size={32} />
                            </button>
                        </div>
                        <p>{album.date}</p>
                        <div className="flex w-full overflow-hidden rounded-lg aspect-square place-items-center">
                            {album.images.length >= 3 && (
                                <img
                                    src={
                                        album.images[
                                            Math.floor(album.images.length / 2)
                                        ].url
                                    }
                                />
                            )}
                        </div>
                        <div>
                            <p key={album.id}>{album.name}</p>
                            {album.artists.map((artist) => (
                                <span key={artist.id}>{artist.name}</span>
                            ))}
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};
