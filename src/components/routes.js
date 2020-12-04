import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/home';
import Astro from '../pages/astro';
import Symbols from '../pages/symbols';
import Tarot from '../pages/tarot';
import Crystals from '../pages/crystals';
import Rituals from '../pages/rituals';
import Spells from '../pages/spells';
import Herbs from '../pages/herbs';
import Entries from '../pages/entries';
import LogIn from '../pages/logIn';
import SignUp from '../pages/signUp';

export default function Routes(props) {
    return (
        <Switch>
            <Route path="/astro"
                render={() => <Astro />}
            />
            <Route path="/symbols"
                render={() => <Symbols />}
            />
            <Route path="/tarot"
                render={() => <Tarot />}
            />
            <Route path="/crystals"
                render={() => <Crystals />}
            />
            <Route path="/rituals"
                render={() => <Rituals />}
            />
            <Route path="/spells"
                render={() => <Spells />}
            />
            <Route path="/herbs"
                render={() => <Herbs />}
            />
            <Route path="/entries"
                render={() => <Entries />}
            />
{/* >>>>>>>>>>>>>.NEW CODE >>>>>>>>>>>>>>>> */}
            <Route path="/signUp" getUser={props.getUser} updateUser={props.setUserId} render={props => {
                if (props.user) {
                    return <Redirect to="/" />;
                }
                return <SignUp getUser={props.getUser} updateUser={props.updateUser} {...props} />;
            }}/>

            <Route path="/logIn" getUser={props.getUser} render={props => {
                if (props.user) {
                    return <Redirect to="/" />;
                }

                return <LogIn getUser={props.getUser} {...props} />;
            }}
            />

            {/* HOMEPAGE */}
            <Route path="/"
                render={() => <Home viewMenu={props.viewMenu}
                    toggleMenu={props.toggleMenu} />}
            />
        </Switch>
    )
}