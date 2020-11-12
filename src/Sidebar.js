import { Link } from 'react-router-dom';

export default function Sidebar(props) {
    
    return (
        <div className={`menu ${props.view ? "active" : "inactive"}`}>
            
            <h2>Make an Entry</h2>
            <Link to='/astro'>Astro Observations</Link>
            <Link to='/symbols'>Ledger of Symbols</Link>
            <Link to='/tarot'>Tarot Spreads</Link>
            <Link to='/crystals'>Crystals</Link>
            <Link to='/rituals'>Rituals</Link>
            <Link to='/spells'>Spells</Link>
            <Link to='/herbs'>Herbs</Link>
            <Link to='/'>Home</Link>
        </div> 
    )
}