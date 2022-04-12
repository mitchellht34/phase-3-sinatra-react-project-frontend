import { useState } from "react";
import {useHistory} from "react-router-dom"

function ComicForm(){
    const [comic, setComic] = useState({
        title: "",
        publisher: "",
        issues: "",
        releaseDate: "",
        synopsis: "",
        writer: "",
        artist: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        setComic({
            ...comic,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newComic = {
            title: comic.title,
            publisher: comic.publisher,
            issues: comic.issues,
            release_date: comic.releaseDate,
            synopsis: comic.synopsis,
            writer: comic.writer,
            artist: comic.artist,
        }

        fetch("http://localhost:9292/comics", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComic)
        })
        .then(() => history.push("/comics"))

    }


    return (
        <div>
           <h3>Create a New Comic</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input onChange={handleChange} type="text" name="title" value={comic.title} required/>
                <br />
                <label htmlFor="publisher">Publisher: </label>
                <input onChange={handleChange} type="text" name="publisher" value={comic.publisher} />
                <br />
                <label htmlFor="issues">Number of Issues: </label>
                <input onChange={handleChange} type="number" name="issues" value={comic.issues} />
                <br />
                <label htmlFor="releaseDate">Release Date (Year): </label>
                <input onChange={handleChange} type="number" name="releaseDate" value={comic.releaseDate} />
                <br />
                <label htmlFor="synopsis">Synopsis: </label>
                <input onChange={handleChange} type="text" name="synopsis" value={comic.synopsis} required/>
                <br />
                <label htmlFor="writer">Writer: </label>
                <input onChange={handleChange} type="text" name="writer" value={comic.writer} />
                <br />
                <label htmlFor="artist">Artist: </label>
                <input onChange={handleChange} type="text" name="artist" value={comic.artist} />
                <br />
                <input type="submit" value="Create Comic" />
            </form>
        </div>
    )

}

export default ComicForm;