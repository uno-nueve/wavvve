import { TAlbum } from "./SearchBar";

type SearchListItemProps = {
    data: TAlbum[];
    onClick: (data: TAlbum) => void;
};

export default function SearchListItem({ data, onClick }: SearchListItemProps) {
    function handleSelection(album: TAlbum) {
        onClick(album);
    }

    return (
        <>
            {data.map((album: TAlbum) => (
                <li
                    key={`${album.name} - ${album.id}`}
                    className="my-2"
                    onClick={() => handleSelection(album)}
                >
                    <div className="flex items-center h-20 gap-4 p-2 rounded-lg bg-yellow-50">
                        {album.img_s && <img src={album.img_s.url} />}
                        <div className="text-left">
                            <p key={album.id} className="text-lg line-clamp-1">
                                {album.name}
                            </p>
                            <div className="flex flex-row">
                                {album.artists.map((artist, index) => (
                                    <span
                                        key={artist.id}
                                        className="text-sm text-gray-400"
                                    >
                                        {index > 0 && ", "}
                                        {artist.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
}
