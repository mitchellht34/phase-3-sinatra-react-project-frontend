import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar2 from '../components/NavBar2'
import ComicForm from '../components/ComicForm'
import CharacterForm from '../components/CharacterForm'

function FormContainer() {



    return (
        <div>
            <Router>
                <h2>Let's Make Something New</h2>
                <br />
                <NavBar2 />
                <Switch>
                    <Route path='/new/comic'>
                        <ComicForm />
                    </Route>
                    <Route path='/new/character'>
                        <CharacterForm />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default FormContainer;