// import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar(props) {
    const location = useLocation();
    console.log(location);
    return (
        <div className={`menu ${(props.view) ? "active" : "inactive"}`}>

            {
                !props.view ? <button className="reOpen" onClick={props.toggleMenu}>open</button> : null
            }

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
            
        </div> 
    )
}