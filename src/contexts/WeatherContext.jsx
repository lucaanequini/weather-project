'use client'

import { createContext, useState, useEffect } from "react"
import axios from "axios"
import PropTypes from 'prop-types'

export const WeatherContext = createContext()

WeatherContextProvider.propTypes = {
    children: PropTypes.node
}

const apiKey = process.env.OPENWEATHER_API_KEY;


export function WeatherContextProvider({ children }) {
    const [weather, setWeather] = useState(false)
    const [name, setName] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('favorites-stock')
        if (!storedItems) return []
        const items = JSON.parse(storedItems)
        return items
    })

    const getCountryLatLong = async (cityName) => {
        try {
            const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`)
            const cityData = res.data[0]
            const lat = cityData.lat
            const lon = cityData.lon
            getWeather(lat, lon)

        } catch (error) {
            setError(error)
        }
    }

    const getWeather = async (lat, long) => {
        try {
            const res = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${apiKey}&lang=pt_br&units=metric`)
            setWeather(res.data)
            return res.data
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        if (name) {
            getCountryLatLong(name)
        }
    }, [name])

    const addFavorite = (weather) => {
        const updatedWeather = { ...weather }
        if (items.some(item => item.lat === weather.lat && item.lon === weather.lon)) {
            return;
        }
        setItems(currentState => {
            const updatedItems = [updatedWeather, ...currentState]
            localStorage.setItem('favorites-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const updateFavorites = async () => {
        const updatedItems = []
        await items.map(async (item) => {
            const teste = await getWeather(item.lat, item.lon)
            try {
                const updatedItem = { ...teste };
                updatedItems.push(updatedItem)
                localStorage.setItem('favorites-stock', JSON.stringify(updatedItems))
            }
            catch {
                console.error('Failed to update favorites:', error);
            };
        })
        location.reload()
    }


    const removeFavorite = (lat) => {
        setItems(currentState => {
            const updatedItems = currentState.filter(weather => weather.lat !== lat)
            localStorage.setItem('favorites-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const showDetails = (weather) => {
        getWeather(weather.lat, weather.lon)
        setLoading(false)
    }


    const providerItems = {
        weather,
        setWeather,
        name,
        setName,
        loading,
        setLoading,
        items,
        setItems,
        addFavorite,
        removeFavorite,
        showDetails,
        getCountryLatLong,
        updateFavorites
    }

    return (
        <WeatherContext.Provider value={providerItems}>
            {children}
        </WeatherContext.Provider>
    )
}