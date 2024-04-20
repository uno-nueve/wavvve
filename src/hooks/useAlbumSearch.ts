import { useCallback, useEffect, useState } from "react";
import { TAlbum, TImage } from "src/App";

export const useAlbumSearch = (accessToken: string | null, _URL: string) => {
    const [data, setData] = useState<TAlbum[]>([]);

    const fetchAlbum = useCallback(
        async (q: string) => {
            try {
                if (!accessToken) return;

                if (!q) {
                    console.log("Please enter a search query");
                    return;
                }

                const res = await fetch(`${_URL}q=${q}&type=album`, {
                    method: "GET",
                    headers: { Authorization: `Bearer ${accessToken}` },
                });

                if (!res.ok) {
                    throw new Error(`HTTP Error! Status: ${res.status}`);
                }

                const resData = await res.json();

                if (!resData) {
                    throw new Error("Invalid response data");
                }

                setData(
                    resData.albums.items.map((album: TAlbum) => ({
                        ...album,
                        img_s: album.images.reduce(
                            (prev: TImage, curr: TImage) => {
                                return prev.height < curr.height ? prev : curr;
                            }
                        ),
                    }))
                );
            } catch (error) {
                console.log(error);
            }
        },
        [_URL, accessToken]
    );

    function updateData(newData: TAlbum[]) {
        setData(newData);
    }

    useEffect(() => {
        fetchAlbum("");
    }, [fetchAlbum]);

    return { data, updateData, fetchAlbum };
};
