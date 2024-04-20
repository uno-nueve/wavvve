import { TAlbum } from "src/App";

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
