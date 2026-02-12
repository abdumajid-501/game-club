"use client";

import { getRoom } from "@/firebase/firebaseRoom";
import { FullRoomType } from "@/types/types";
import { useEffect, useState } from "react";

export const useGetRooms = () => {
    const [rooms, setRooms] = useState<FullRoomType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const FullData = getRoom((data) => {
            setRooms(data);
            setLoading(false);
        });

        return () => FullData();
    }, []);

    return { rooms, loading };
};
