import { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export default function useVariables() {
    return useContext(WeatherContext)
}