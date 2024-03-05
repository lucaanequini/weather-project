import useVariables from "@/hooks/useVariables"

export default function DaysCard({ day, number }) {
    const { weather } = useVariables()
    return (
        <div className="flex gap-5 items-center justify-between bg-gray-500 text-center p-5 mt-2 rounded duration-200 hover:bg-gray-600 hover:shadow-md active:bg-gray-600 lg:flex-col">
            <p className="text-xl font-bold text-white">{day}</p>
            <img
                className="w-16 h-16"
                src={`https://openweathermap.org/img/wn/${weather.daily[number].weather[0].icon}@2x.png`}
                alt="Ícone do clima"
            />
            <p className="text-xl font-semibold text-white">
                {Math.round(weather.daily[number].temp.max)}°C
            </p>
            <p className="text-xl font-light text-white">
                {Math.round(weather.daily[number].temp.min)}°C
            </p>
        </div>
    )
}

//