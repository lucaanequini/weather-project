import useVariables from "@/hooks/useVariables"
import Link from "next/link"

export default function Input() {
    const { setName, setLoading } = useVariables()

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () => {
        setLoading(false)
    }

    return (
        <div className="flex flex-col gap-5 mb-5 sm:flex-row">
            <input className="text-black px-10 py-2 rounded-lg" type="text" placeholder="Digite o nome da cidade" onChange={handleChange} />
            <button className="bg-gray-500 rounded-lg py-2 px-5" type="button" onClick={handleClick}>Pesquisar</button>
            <Link className="bg-gray-500 rounded-lg py-2 px-5 text-center" href={'/favorites'}>Favoritos</Link>
        </div>
    )

}