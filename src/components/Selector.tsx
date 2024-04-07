import { Star, Fire, Heart, Snowflake, Trash } from "@phosphor-icons/react";
import { TAlbum } from "./SearchBar";
import { Option } from "./ui/Option";

export type SelectorProps = {
    album: TAlbum;
    onRatingChange: (rating: string, id: string) => void;
};

export const Selector = ({ album, onRatingChange }: SelectorProps) => {
    return (
        <div className="flex">
            <Option onClick={() => onRatingChange("bad", album.id)}>
                {album.rating === "bad" ? (
                    <Trash size={26} color="#75a99c" />
                ) : (
                    <Trash size={26} />
                )}
            </Option>
            <Option onClick={() => onRatingChange("meh", album.id)}>
                {album.rating === "meh" ? (
                    <Snowflake size={26} color="#5ab0e3" />
                ) : (
                    <Snowflake size={26} />
                )}
            </Option>
            <Option onClick={() => onRatingChange("good", album.id)}>
                {album.rating === "good" ? (
                    <Heart size={26} color="#f22780" />
                ) : (
                    <Heart size={26} />
                )}
            </Option>
            <Option onClick={() => onRatingChange("great", album.id)}>
                {album.rating === "great" ? (
                    <Fire size={26} color="#ff463c" />
                ) : (
                    <Fire size={26} />
                )}
            </Option>
            <Option onClick={() => onRatingChange("fav", album.id)}>
                {album.rating === "fav" ? (
                    <Star size={26} color="#ffe444" />
                ) : (
                    <Star size={26} />
                )}
            </Option>
        </div>
    );
};
