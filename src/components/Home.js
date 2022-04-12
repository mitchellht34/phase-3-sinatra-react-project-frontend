function Home() {

    return (
        <div>
            <h1>Welcome to My Ever Expanding Comic Database</h1>
            <div>
                <img src={window.location.origin + "/dc_infinite_frontier_800.png"} alt="default background for comics" />
                <div>
                    <h3> Welcome to The Infinite Frontier!</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;