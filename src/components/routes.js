import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Astro from '../pages/Astro';
import Symbols from '../pages/Symbols';
import Tarot from '../pages/Tarot';
import Crystals from '../pages/Crystals';
import Rituals from '../pages/Rituals';
import Spells from '../pages/Spells';
import Herbs from '../pages/Herbs';
import Entries from '../pages/Entries';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

export default function Routes(props) {
    const { getUser, updateUser, me } = props;
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
            <Route path="/signUp" render={props => {
                if (me) {
                    return <Redirect to="/entries" />;
                }
                return <SignUp getUser={getUser} updateUser={updateUser} {...props} />;
            }}/>

            <Route path="/logIn" render={props => {
                if (me) {
                    return <Redirect to="/entries" />;
                }

                return <LogIn getUser={props.getUser} {...props} />;
            }}
            />

            {/* HOMEPAGE */}
            <Route path="/"
                render={() => <Home viewMenu={props.viewMenu} me={me}
                    toggleMenu={props.toggleMenu} />}
            />
        </Switch>
    )
}