import { ChangeEvent, FormEvent } from "react";

type FormProps = {
    handleSubmit: (e: FormEvent) => void;
    handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
    searchField: string;
};

export const Form = ({ handleSubmit, handleInput, searchField }: FormProps) => {
    return (
        <>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="w-full md:w-[37rem] flex place-content-center"
            >
                <label htmlFor="searchbar">Search an album</label>
                <input
                    type="text"
                    name="searchbar"
                    id="searchbar"
                    value={searchField}
                    onChange={(e) => handleInput(e)}
                />
                <button type="submit">Search</button>
            </form>
        </>
    );
};
