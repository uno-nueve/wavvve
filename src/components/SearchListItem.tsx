import { TAlbum } from "./SearchBar";
// import { AddButton } from "./ui/Button";

type SLIProps = {
    data: TAlbum[];
    onClick: (data: TAlbum) => void;
    searchField: string;
    // setSearchField: React.Dispatch<React.SetStateAction<string>>;
    // updateData: (newData: TAlbum[]) => void;
};

export const SearchListItem = ({
    data,
    onClick,
    searchField,
}: // setSearchField,
// updateData,
SLIProps) => {
    function handleSelection(album: TAlbum) {
        const newDate = new Date();
        const date = newDate.toLocaleDateString();
        onClick({ ...album, date });
    }

    console.log("from search list item: ", searchField);

    return (
        <>
            {data.map((album: TAlbum) => (
                <li
                    key={`${album.name} - ${album.id}`}
                    className="pt-3 cursor-pointer hover:drop-shadow-md"
                    onClick={() => handleSelection(album)}
                >
                    <div className="flex items-center h-20  p-2 rounded-lg bg-[#272727] justify-between">
                        <div className="flex items-center gap-4">
                            <div className="overflow-hidden rounded-md w-fit drop-shadow-lg">
                                {album.img_s && <img src={album.img_s.url} />}
                            </div>
                            <div className="text-left">
                                <p
                                    key={album.id}
                                    className="text-lg line-clamp-1"
                                >
                                    {album.name}
                                </p>
                                <div className="flex flex-row">
                                    {album.artists.map((artist, index) => (
                                        <span
                                            key={artist.id}
                                            className="text-sm text-gray-400 artist-name"
                                        >
                                            {index > 0 && ", "}
                                            {artist.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* <AddButton
                handlerFunction={() => handleSelection(album)}
            /> */}
                    </div>
                </li>
            ))}
        </>
    );
};
