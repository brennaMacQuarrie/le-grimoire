import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import '../css/styles.css';

import Background from '../assets/Feb26_BloomGeneration-2322.jpg';
import LogIn from './logIn';
import SignUp from './signUp';


export default function Home(props) {

    // const [viewMenu, setViewMenu] = useState(false);
    // // viewMenu fn toggles boolean

    // const toggleMenu = () => setViewMenu(!viewMenu);

    return (
        <div className="homePage" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), black), url(" + Background + ")" }}>
            <div className="content">

                <h1>le grimoire</h1>

                <div className="actions">
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/logIn" component={LogIn} />

                    {/* <button className="signUp">Sign Up</button>
                    <button>Log In</button>  */}
                    <Link className="link signUp" to='/signUp'>Sign Up</Link>
                    <Link className="link button" to='/logIn'>Log In</Link>
               
                    <button menuClose={props.viewMenu} onClick={props.toggleMenu}>{props.viewMenu ? `Close` : `Enter`}</button>
                </div>

            </div>
        </div>
    )
}

