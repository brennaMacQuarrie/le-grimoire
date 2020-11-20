
import Background from '../assets/background_flowers2.jpg';


export default function Entries() {
    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble">
                <h2>Your Entries</h2>
            </div>
        </div>
    )
}