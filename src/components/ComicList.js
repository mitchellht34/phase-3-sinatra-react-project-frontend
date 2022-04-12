import Comic from './Comic'

function ComicList({comics, handleDelete}) {
   
    const renderComics = comics.map(comic => {
        return (
            <div>
                <Comic key={comic.id} comic={comic} handleDelete={handleDelete}/>
            </div>
        )
    })

    return (
        <div>

            <h2>ComicList</h2>
            {renderComics}
        </div>
    )
}

export default ComicList;