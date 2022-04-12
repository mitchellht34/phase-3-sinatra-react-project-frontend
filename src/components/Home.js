function Home() {

    return (
        <div>
            <h1>Welcome to My Ever Expanding Comic Database</h1>
            <div>
                <img src={window.location.origin + "/logo512.png"} alt="default background for comics" />
            </div>
        </div>
    )
}

export default Home;