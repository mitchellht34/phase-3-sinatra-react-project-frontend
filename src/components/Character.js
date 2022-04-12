function Character({ character, handleDelete }) {


    return (
        <div>
           <h2>Name: {character.name}</h2>
           <h2>Alter Ego: {character.name ? character.name : "NA"}</h2>
           <h2>Powers: {character.powers}</h2>
           <h2>Description:</h2>
           <h3>{character.description}</h3>
           <button onClick={() => handleDelete(character.id)}>Delete</button>
           <br />
        </div>
    )
}

export default Character;