import { TAlbum } from "./SearchBar";

type AlbumCardProps = {
    selectedAlbums: TAlbum[];
};

export default function AlbumCard({ selectedAlbums }: AlbumCardProps) {
    return (
        <>
            {selectedAlbums.map((album: TAlbum) => (
                <li key={album.id}>
                    <div className="flex flex-col w-full h-full p-2 bg-orange-100 rounded-lg">
                        <div className="w-full overflow-hidden rounded-lg">
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
                            <p>{album.name}</p>
                            {album.artists.map((artist) => (
                                <span>{artist.name}</span>
                            ))}
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
}
