import {
    Star,
    Fire,
    Heart,
    Snowflake,
    Trash,
    CaretUp,
} from "@phosphor-icons/react";
import { TAlbum } from "./SearchBar";
import { useState } from "react";

export type SelectorProps = {
    album: TAlbum;
    handleRating: (rating: string, id: string) => void;
};

export const Selector = ({ album, handleRating }: SelectorProps) => {
    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    return (
        <div onClick={toggleActive} className="relative flex cursor-pointer">
            <div className="flex flex-row place-items-end">
                <span className="italic text-[#707070] text-sm md:text-base">
                    Rank:
                </span>
                <span className="pl-2">
                    {!album.rating && <CaretUp size={22} weight="bold" />}
                    {album.rating === "bad" && (
                        <Trash size={22} weight="duotone" />
                    )}
                    {album.rating === "meh" && (
                        <Snowflake size={22} weight="duotone" />
                    )}
                    {album.rating === "good" && (
                        <Heart size={22} weight="duotone" />
                    )}
                    {album.rating === "great" && (
                        <Fire size={22} weight="duotone" />
                    )}
                    {album.rating === "fav" && (
                        <Star size={22} weight="duotone" />
                    )}
                </span>
            </div>
            {active && (
                <ul className="absolute flex flex-row bottom-7 bg-[#4B4848] py-1 px-2 rounded-md">
                    <div
                        className="cursor-pointer"
                        onClick={() => handleRating("bad", album.id)}
                    >
                        <Trash size={20} />
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => handleRating("meh", album.id)}
                    >
                        <Snowflake size={20} />
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => handleRating("good", album.id)}
                    >
                        <Heart size={20} />
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => handleRating("great", album.id)}
                    >
                        <Fire size={20} />
                    </div>
                    <div
                        className="cursor-pointer"
                        onClick={() => handleRating("fav", album.id)}
                    >
                        <Star size={20} />
                    </div>
                </ul>
            )}
        </div>
    );
};
