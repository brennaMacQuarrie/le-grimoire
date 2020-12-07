
import { useCallback, useEffect, useState } from 'react';
import Background from '../assets/background_flowers2.jpg';
import Entry from '../components/entry';


export default function Entries() {

    const [entries, setEntries] = useState([]);

    const refreshEntries = useCallback(async () => {
        try {
            const response = await fetch('http://localhost:3000/entries');
            const entries = await response.json();
            if (!response) {
                throw new Error('couldnt get entries');
            }
            setEntries(entries);
        } catch (e) {
            console.log(e);
        }
    }, []);

    // useEffect(() => {
    //     refreshEntries();
    // }, [refreshEntries]);


    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryPage">
                <h2>Your Entries</h2>
                {
                entries.map(entry => {
                return <Entry key={entry._id} {...entry} />; })}
            </div>
        </div>
    )
}