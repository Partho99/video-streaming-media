import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {
    Home,
    SignIn,
    SignUp,
    Browse
} from "./pages";

function App() {
    return (
        <Router>
            <Route exact path={ROUTES.HOME}>
                <Home/>
            </Route>
            <Route exact path='/sign-up'>
                <SignUp/>
            </Route>
            <Route exact path='/sign-in'>
                <SignIn/>
            </Route>
            <Route exact path='/browse'>
                <Browse/>
            </Route>
        </Router>
    );
}

export default App;
