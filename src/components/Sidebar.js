
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar(props) {
    const location = useLocation();

    return (
        <div className="menuContainer">
            { (location.pathname !== '/') ? (
                <button 
                    className={`reOpen ${(props.view) ? "inactive" : "active"}`} 
                    onClick={props.toggleMenu}><i class="fas fa-angle-double-left"></i></button>
                ) : null
            }

            <nav className={`menu ${(props.view) ? "active" : "inactive"}`}>

                <h2>Make an Entry</h2> 
                <Link className="link" to='/astro'>Astro Observations</Link>
                <Link className="link" to='/symbols'>Ledger of Symbols</Link>
                <Link className="link" to='/tarot'>Tarot Spreads</Link>
                <Link className="link" to='/crystals'>Crystals</Link>
                <Link className="link" to='/rituals'>Rituals</Link>
                <Link className="link" to='/spells'>Spells</Link>
                <Link className="link" to='/herbs'>Herbs</Link>
                <Link className="link" to='/entries'>Entries</Link>
                { 
                (location.pathname !== '/') ? (
                <div className="flex link">
                    <Link className="home link" to='/'>Home</Link>

                    <button className="closeMenu link" onClick={props.toggleMenu}>Close Menu</button> 
                </div>
                ) : null
                }
            
        </nav> 
        </div>
    )
}