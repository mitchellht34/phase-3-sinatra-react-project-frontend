import { useState } from "react";
import { useHistory } from "react-router-dom"

function CharacterForm() {
    const [character, setCharacter] = useState({
        name: "",
        alterEgo: "",
        description: "",
        powers: ""
    });

    const history = useHistory();

    const handleChange = (e) => {
        setCharacter({
            ...character,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newCharacter = {
            name: character.name,
            alterEgo: character.alterEgo,
            description: character.description,
            powers: character.powers
        }

        fetch("http://localhost:9292/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCharacter)
        })
            .then(() => setCharacter({
                name: "",
                alterEgo: "",
                description: "",
                powers: ""
            })
            )
    }


    return (
        <div>
            <h3>Create a New Character</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} type="text" name="name" value={character.name} required />
                <br />
                <label htmlFor="alterEgo">Alter Ego: </label>
                <input onChange={handleChange} type="text" name="alterEgo" value={character.alterEgo} />
                <br />
                <label htmlFor="description">Description: </label>
                <input onChange={handleChange} type="text" name="description" value={character.description} />
                <br />
                <label htmlFor="powers">Powers (if any): </label>
                <input onChange={handleChange} type="text" name="powers" value={character.powers} />
                <br />
                <input type="submit" value="Create Character" />
            </form>
        </div>
    )

}

export default CharacterForm;