import Comic from './Comic'

function ComicList({comics}) {
   
    const renderComics = comics.map(comic => <Comic key={comic.id} comic={comic}/>)

    return (
        <div>
            {renderComics}
        </div>
    )
}

export default ComicList;