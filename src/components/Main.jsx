'use client'

import MainCard from "@/components/MainCard"
import DaysCard from "@/components/DaysCard"
import Input from "@/components/Input"
import FavBtn from "@/components/FavBtn"
import useVariables from "@/hooks/useVariables"

export default function Main() {
    const { weather } = useVariables()

    const dayName = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    const now = new Date
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-gray-700 p-3">
            <Input></Input>
            {weather ? (
                <div className="bg-gray-500 rounded-lg p-5">
                    <MainCard />
                    <div className="flex flex-col items-center gap-5 border-t-2">
                        <div className="flex flex-col lg:flex-row">
                            <DaysCard number={0} day={'Hoje'} />
                            <DaysCard number={1} day={dayName[now.getDay() + 1]} />
                            <DaysCard number={2} day={dayName[now.getDay() + 2]} />
                            <DaysCard number={3} day={dayName[now.getDay() + 3]} />
                            <DaysCard number={4} day={dayName[now.getDay() + 4]} />
                            <DaysCard number={5} day={dayName[now.getDay() + 5]} />
                            <DaysCard number={6} day={dayName[now.getDay() + 6]} />
                            <DaysCard number={7} day={dayName[now.getDay()]} />
                        </div>
                        <FavBtn></FavBtn>
                    </div>
                </div>
            ) : (
                <p className="text-gray-600 text-lg font-medium">Carregando dados do clima...</p>
            )}
        </div>
    )
}