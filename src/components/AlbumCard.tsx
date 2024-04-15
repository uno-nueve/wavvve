import { TAlbum } from "./SearchBar";
import { Selector } from "./Selector";
import { ClearButton } from "./ui/Button";

type AlbumCardProps = {
    selectedAlbums: TAlbum[];
    handleDelete: (album: TAlbum) => void;
    handleRating: (rating: string, id: string) => void;
};

export const AlbumCard = ({
    selectedAlbums,
    handleDelete,
    handleRating,
}: AlbumCardProps) => {
    return (
        <>
            {selectedAlbums.map((album: TAlbum) => (
                <li key={album.id}>
                    <div className="flex flex-row md:flex-col w-full h-full p-2 bg-[#272727] rounded-lg drop-shadow-lg mb-3">
                        <div className="flex w-[140px] md:w-full relative overflow-hidden rounded-lg aspect-square drop-shadow-lg place-items-center">
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
                        <div className="flex flex-col justify-between w-1/2 pl-2 md:mt-3 md:w-full md:gap-12">
                            <div>
                                <p
                                    key={album.id}
                                    className="font-semibold md:text-lg"
                                >
                                    {album.name}
                                </p>
                                {album.artists.map((artist) => (
                                    <span
                                        key={artist.id}
                                        className="text-[#707070] text-sm md:text-base"
                                    >
                                        {artist.name}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <Selector
                                    album={album}
                                    handleRating={handleRating}
                                />
                                <p className="text-[#707070] text-xs italic md:text-base">
                                    {album.date}
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-2 right-2 md:top-4 md:right-4">
                            <ClearButton
                                handlerFunction={() => handleDelete(album)}
                            />
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};
