import Comic from './Comic'

function ComicList({comics}) {
   
    const renderComics = comics.map(comic => {
        <Comic key={comic.id} comic={comic}/>
    })

    const displayList = comics.map(comic => {
        <li key={comic.id}>comic = {comic.title}</li>
    })

    return (
        <div>
            {/* {renderComics} */}
            {displayList}
        </div>
    )
}

export default ComicList;