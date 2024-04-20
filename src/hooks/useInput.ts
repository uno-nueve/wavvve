import { ChangeEvent, useState } from "react";
import { TAlbum } from "src/App";

export const useInput = () => {
    const [searchField, setSearchField] = useState<string>("");
    const [inputData, setInputData] = useState<TAlbum[] | null>(null);

    function handleInput(
        e: ChangeEvent<HTMLInputElement>,
        fetchAlbum: (q: string) => Promise<void>
    ) {
        const inputValue = e.target.value;
        setSearchField(inputValue);
        fetchAlbum(inputValue);
    }

    function handleBlur(
        updateData: (newData: TAlbum[]) => void,
        data: TAlbum[]
    ) {
        setTimeout(() => {
            setInputData(data);
            updateData([]);
        }, 200);
    }

    function handleFocus(
        updateData: (newData: TAlbum[]) => void,
        data: TAlbum[]
    ) {
        if (data.length === 0 && searchField === "") {
            return;
        }
        if (inputData === null) {
            return;
        }
        updateData(inputData);
    }

    return {
        handleInput,
        handleBlur,
        handleFocus,
        searchField,
        setSearchField,
    };
};
