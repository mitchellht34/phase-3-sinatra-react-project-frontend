import {useState, useEffect} from "react"
import CharacterList from '../components/CharacterList'

function CharacterContainer() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://localhost:9292/characters")
                const data = await resp.json()
                setCharacters(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()

    }, []);

    if(loading) return <h1>Loading...</h1>
    

    function handleDelete(id){
        console.log(id)
        fetch(`http://localhost:9292/characters/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(deleted => setCharacters(characters.filter(character => character.id !== deleted.id)))
    }

    return (
        <div>
            <CharacterList characters={characters} handleDelete={handleDelete}/>
        </div>
        )
}

export default CharacterContainer;