import useVariables from "@/hooks/useVariables"

export default function MainCard() {

    const { weather } = useVariables()

    const name = weather.timezone.replace('_', ' ').split('/')

    return (
        <div className="flex flex-col justify-between p-4 bg-gray-500 rounded-lg">
            <div>
                <h2 className="text-2xl font-semibold text-white">Clima em {name[1]}</h2>
                <div className="flex items-center mb-4">
                    <img
                        className="w-24 h-24 mr-4"
                        src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
                        alt="Ícone do clima"
                    />
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold text-white">
                            {Math.round(weather.current.temp)}°C
                        </p>
                        <p className="text-lg text-white">Sensação: {Math.round(weather.current.feels_like)}°C</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className="grid grid-cols-2 gap-1 text-white">
                <p>Nuvens: {weather.current.clouds}%</p>
                <p>Humidade: {weather.current.humidity}%</p>
                <p>Vento: {weather.current.wind_speed} m/s ({Math.round(weather.current.wind_deg)}°)</p>
                <p>Índice UV: {weather.current.uvi}</p>
                <p>Chance de Chuva: {Math.round(weather.daily[0].rain * 10)}%</p>
            </div>
        </div>
    )
}