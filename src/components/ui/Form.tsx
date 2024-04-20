import { MagnifyingGlass } from "@phosphor-icons/react";
import { FormEvent, ReactNode } from "react";
import { useClear } from "src/utils/useClear";
import { ClearButton } from "./Button";
import { TAlbum } from "src/App";

type FormProps = {
    data: TAlbum[];
    updateData: (newData: TAlbum[]) => void;
    fetchAlbum: (q: string) => Promise<void>;
    searchField: string;
    setSearchField: React.Dispatch<React.SetStateAction<string>>;
    handleInput: (
        e: React.ChangeEvent<HTMLInputElement>,
        fetchAlbum: (q: string) => Promise<void>
    ) => void;
    handleBlur: (
        updateData: (newData: TAlbum[]) => void,
        data: TAlbum[]
    ) => void;
    handleFocus: (
        updateData: (newData: TAlbum[]) => void,
        data: TAlbum[]
    ) => void;
};

export const Form = ({
    data,
    updateData,
    fetchAlbum,
    searchField,
    setSearchField,
    handleInput,
    handleBlur,
    handleFocus,
}: FormProps) => {
    const { handleClear } = useClear(setSearchField, updateData);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        fetchAlbum(searchField);
        handleClear();
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex w-full place-content-center"
        >
            <InputWrapper data={data}>
                <label htmlFor="searchbar" className="pl-3">
                    <MagnifyingGlass
                        size={26}
                        className="mr-3 text-[#D9D9D9]"
                    />
                </label>
                <input
                    type="text"
                    name="searchbar"
                    id="searchbar"
                    placeholder="Search an album..."
                    value={searchField}
                    onChange={(e) => handleInput(e, fetchAlbum)}
                    onBlur={() => handleBlur(updateData, data)}
                    onFocus={() => handleFocus(updateData, data)}
                    className="w-full h-full py-3 rounded-xl bg-inherit focus:outline-none text-[#F0F0F0] placeholder:text-[#D9D9D9] "
                />
                <button type="submit" className="hidden"></button>
                {searchField.length > 0 && (
                    <div className="absolute right-2">
                        <ClearButton handlerFunction={handleClear} />
                    </div>
                )}
            </InputWrapper>
        </form>
    );
};

type InputWrapperProps = {
    children: ReactNode;
    data: TAlbum[];
};

const InputWrapper = ({ children, data }: InputWrapperProps) => {
    return (
        <>
            {data.length < 1 ? (
                <div className="flex flex-row w-full relative bg-[#313030] place-items-center rounded-xl border-2 border-[#4B4848]">
                    {children}
                </div>
            ) : (
                <div className="flex flex-row w-full relative bg-[#313030] place-items-center rounded-xl border-2 border-[#4B4848] rounded-b-none">
                    {children}
                </div>
            )}
        </>
    );
};
