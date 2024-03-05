'use client'

import useVariables from "@/hooks/useVariables"
import DelBtn from "./DelBtn";
import Link from "next/link";

export default function FavoriteRow() {
    const { items, showDetails, updateFavorites } = useVariables()

    function capitalizeFirstLetter(string) {
        return string.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    const handleClickReload = (item) => {
        updateFavorites(item)
    }


    return (
        <div className="flex flex-col gap-5 items-center">
            <a className="bg-gray-500 rounded-lg px-5 py-2 hover:cursor-pointer" onClick={handleClickReload}>Atualizar</a>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {items.map((item, key) => (
                    <div key={key} className="p-3 flex gap-3">
                        <button onClick={() => showDetails(item)}>
                            <Link href={'/'}>
                                <div className="flex flex-col bg-gray-500 w-72 p-2 gap-5 rounded-lg shadow-gray-500 shadow-lg border-2 border-gray-400 lg:w-96">
                                    <div className="flex justify-between rounded-lg">
                                        <p className="font-semibold text-2xl">{item.timezone.replace('_', ' ').split('/')[1]}</p>
                                        <div className="flex gap-5">
                                            <p className="font-medium text-3xl">{Math.round(item.current.temp)}°C</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between gap-16">
                                        <p className="text-sm text-white">{capitalizeFirstLetter(item.current.weather[0].description)}</p>
                                        <div className="flex gap-10">
                                            <p className="text-sm text-white">
                                                Máx.: {Math.round(item.daily[0].temp.max)}°C
                                            </p>
                                            <p className="text-sm text-white">
                                                Mín.: {Math.round(item.daily[0].temp.min)}°C
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </button>
                        <div className="flex items-center">
                            <DelBtn lat={item.lat}></DelBtn>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}