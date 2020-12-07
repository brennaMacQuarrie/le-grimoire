
import { useEffect, useState } from 'react';
import Background from '../assets/background_flowers2.jpg';
import Entry from '../components/Entry';


export default function Entries() {

    const [entries, setEntries] = useState([]);

    async function getEntries() {
        try {
            const response = await fetch('http://localhost:3000/entries');

            const json = await response.json();
            setEntries(json.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getEntries();
    }, []);

    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryPage">
                <h2>Your Entries</h2>
                {
                    entries.map(entry => {
                        return <Entry key={entry._id} {...entry} />; 
                    })
                }
            </div>
        </div>
    )
}