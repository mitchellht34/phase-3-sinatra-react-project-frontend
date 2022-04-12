import Character from './Character'

function CharacterList({characters, handleDelete}) {
   
    const renderCharacters = characters.map(character => {
        return (
            <div>
                <Character key={character.id} character={character} handleDelete={handleDelete}/>
            </div>
        )
    })

    return (
        <div>

            <h2>CharacterList</h2>
            {renderCharacters}
        </div>
    )
}

export default CharacterList;