import { Link } from 'react-router-dom';

import '../css/styles.css';
import Background from '../assets/Feb26_BloomGeneration-2322.jpg';


export default function Home({viewMenu, toggleMenu, me}) {

    return (
        <div className="homePage" 
             style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), black), url(" + Background + ")" }}>

            <div className="content">
                <h1>le grimoire</h1>
                <div className="actions">
                    {
                        me ? (
                            <button onClick={toggleMenu}>{viewMenu ? `Close` : `Make an Entry`}</button>
                            ) : 
                            (
                            <> 
                                <Link className="link signUp" to='/signUp'>Sign Up</Link>
                                <Link className="link button" to='/logIn'>Log In</Link>
                            </>
                            )
                    }
               
                </div>
            </div>

        </div>
    )
}

