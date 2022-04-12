import { NavLink } from 'react-router-dom'

const style = {
    width: "30%",
    margin: "5% 0 1%",
    padding: "0.5em",
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

function NavBar2() {

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
                to="/new/comic">
                    Comic
            </NavLink>
            <NavLink 
                onMouseOver={mouseOver}
                onMouseLeave={mouseLeave}
                activeStyle={activeStyle}
                exact
                style={style}
                to="/new/character">
                    Character
            </NavLink>
        </div>
    )
}

export default NavBar2;