import useVariables from "@/hooks/useVariables"

export default function DelBtn({ lat }) {
    const { removeFavorite } = useVariables()

    const handleDelete = () => {
        removeFavorite(lat)
    }

    console.log(lat)

    return (
        <button onClick={handleDelete} className="text-gray-600 hover:text-red-500"><i className="bi bi-x-lg"></i></button>
    )
}