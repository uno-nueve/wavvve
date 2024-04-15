import { TAlbum } from "../components/SearchBar";

export const useClear = (
    setSearchField: (value: React.SetStateAction<string>) => void,
    updateData: (newData: TAlbum[]) => void
) => {
    function handleClear() {
        setSearchField("");
        updateData([]);
        console.log("clearing states...");
    }

    return { handleClear };
};
