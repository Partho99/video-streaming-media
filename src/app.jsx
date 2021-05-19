import {BrowserRouter as Router, Route} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import {
    Home,
    SignIn,
    SignUp,
    Browse
} from "./pages";
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';
import {useAuthListener} from "./hooks";

function App() {
    const {user} = useAuthListener();
    // console.log(window)
    return (
        <Router>
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_IN}
            >
                <SignIn/>
            </IsUserRedirect>
            <IsUserRedirect
                user={user}
                loggedInPath={ROUTES.BROWSE}
                path={ROUTES.SIGN_UP}
            >
                <SignUp/>
            </IsUserRedirect>
            <ProtectedRoute
                user={user}
                path={ROUTES.BROWSE}
                exact
            >
                <Browse/>
            </ProtectedRoute>
            <Route exact path={ROUTES.HOME}>
                <Home/>
            </Route>
        </Router>
    );
}

export default App;
