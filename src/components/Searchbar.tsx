import { useLocalStorage } from "../hooks/useLocalStorage";
import { SearchListItem } from "./SearchListItem";
import { List } from "./ui/List";
import { useAlbumSearch } from "../hooks/useAlbumSearch";
import { useInput } from "../hooks/useInput";
import { Form } from "./ui/Form";
import { useClear } from "../utils/useClear";

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

export type TImage = {
    height: number;
    url: string;
    width: number;
};

type SearchBarProps = {
    selectedAlbums: TAlbum[];
    setSelectedAlbums: React.Dispatch<React.SetStateAction<TAlbum[]>>;
};

export const SearchBar = ({
    selectedAlbums,
    setSelectedAlbums,
}: SearchBarProps) => {
    const _URL = "https://api.spotify.com/v1/search?";
    const accessToken = localStorage.getItem("access_token");

    const {
        handleInput,
        handleBlur,
        handleFocus,
        searchField,
        setSearchField,
    } = useInput();
    const { setItem } = useLocalStorage("saved_albums");
    const { data, updateData, fetchAlbum } = useAlbumSearch(accessToken, _URL);
    const { handleClear } = useClear(setSearchField, updateData);

    // SearchListItem function
    function handleClick(data: TAlbum) {
        setSelectedAlbums([...selectedAlbums, data]);
        setItem([...selectedAlbums, data]);
        handleClear();
    }

    return (
        <div className="absolute z-50 w-full px-3 md:px-0">
            <Form
                data={data}
                updateData={updateData}
                fetchAlbum={fetchAlbum}
                searchField={searchField}
                setSearchField={setSearchField}
                handleInput={handleInput}
                handleBlur={handleBlur}
                handleFocus={handleFocus}
            />
            {data.length > 0 && (
                <>
                    <List variant="col">
                        <SearchListItem
                            data={data}
                            onClick={handleClick}
                            searchField={searchField}
                            // setSearchField={setSearchField}
                            // updateData={updateData}
                        />
                    </List>
                </>
            )}
        </div>
    );
};
