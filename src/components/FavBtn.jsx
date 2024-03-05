import useVariables from "@/hooks/useVariables"
import { useState } from "react"
import SuccessToast from "./SucessToast"

export default function FavBtn() {
    const { weather, addFavorite } = useVariables()
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const [toastText, setToastText] = useState('')

    const handleClick = () => {
        addFavorite(weather)
        setToastText('Adicionado a aba Favoritos com sucesso!')
        setToastIsOpen(true)
        setTimeout(() => setToastIsOpen(false), 3000)
    }
    return (
        <>
            <a className="bg-gray-700 rounded-lg px-5 max-w-fit py-2 hover:cursor-pointer" onClick={() => handleClick()}>Favoritar</a>
            <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} text={toastText}></SuccessToast>
        </>
    )
}
