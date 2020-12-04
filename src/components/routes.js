import { Route, Switch } from 'react-router';
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
            <Route path="/signUp" component={SignUp} getUser={props.getUser} updateUser={props.setUserId} />

            <Route path="/logIn" component={LogIn} getUser={props.getUser} />

            {/* HOMEPAGE */}
            <Route path="/"
                render={() => <Home viewMenu={props.viewMenu}
                    toggleMenu={props.toggleMenu} />}
            />
        </Switch>
    )
}