'use client'

import FavoriteRow from "@/components/FavoriteRow"
import Link from "next/link"


export default function Favorites() {

    return (
        <>
            <div className="flex flex-col gap-10 justify-center items-center my-10">
                <Link className="bg-gray-500 rounded-lg py-2 px-5" href="/">Pesquisar</Link>
                <FavoriteRow></FavoriteRow>

            </div>
        </>
    )
}