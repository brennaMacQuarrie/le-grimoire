
import { useEffect, useState } from 'react';
import Background from '../assets/background_flowers2.jpg';
import Entry from '../components/entry';


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



    // TODO build in delete 
    async function deleteEntry(id) {
        console.log(id);
        try {
            const response = await fetch(`http://localhost:3000/entries/delete`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({id})
            });

            const json = await response.json();
            console.log(json);
            setEntries(json.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryPage">
                <h2>Your Entries</h2>
                {
                    entries.map(entry => {
                        return <Entry 
                            key={entry._id} 
                            {...entry}  
                            deleteEntry={() => deleteEntry(entry._id)}
                         />; 
                    })
                }
            </div>
        </div>
    )
}