import { NavLink } from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "yellow",
    fontWeight: "bold",
    verticalAlign: "center"
}

const activeStyle = {
    fontWeight: "bolder",
    backgroundColor: "black",
    color: "white"
}

function NavBar() {

    function mouseOver(e) {
        if(e.target.className != "active") {
            e.target.style.background = "grey"
            e.target.style.color = "white"
        }
    }

    function mouseLeave(e) {
        if(e.target.className != "active") {
            e.target.style.background = "yellow"
            e.target.style.color = "black"
        }
    }


    return (
        <div>
            <NavLink
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                activeStyle={activeStyle}
                exact
                style={style}
                to="/">
                    Home
            </NavLink>
            <NavLink 
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                activeStyle={activeStyle}
                exact
                style={style}
                to="/comics">
                    Comics
            </NavLink>
            <NavLink 
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                activeStyle={activeStyle}
                exact
                style={style}
                to="/characters">
                    Characters
            </NavLink>
            <NavLink 
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                activeStyle={activeStyle}
                style={style}
                to="/new">
                    New
            </NavLink>
        </div>
    )
}

export default NavBar;