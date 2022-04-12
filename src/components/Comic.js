function Comic({ comic, handleDelete }) {


    return (
        <div>
           <h2>Title: {comic.title}</h2>
           <h2>Publisher: {comic.publisher}</h2>
           <h2>Number of Issues: {comic.issues}</h2>
           <h2>Published: {comic.release_date}</h2>
           <h2>Writer: {comic.writer}</h2>
           <h2>Artist: {comic.artist}</h2>
           <h2>Synopsis:</h2>
           <h3>{comic.synopsis}</h3>
           <button onClick={() => handleDelete(comic.id)}>Delete</button>
           <br />
        </div>
    )
}

export default Comic;