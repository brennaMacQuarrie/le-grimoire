import React, { useState } from "react"
import Button from "./Button";

export default function Field (props) {
    const [title, setTitle] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [text, setText] = useState('');
    
    const [bookmarked, isBookmarked] = useState(false);
   

    const addEntry = async e => {
        e.preventDefault();
        let payload = { title, publishedDate, text, bookmarked }
        payload['category'] = props.category;
        try {
            const response = await fetch('http://localhost:3000/entries', {
                headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify(payload)
            }).then((res) => {
                return res.json();
            }).then((res) => {
                console.log("res", res);
            });
            // TODO reset all fields on submit
            setTitle('');
            setText('');
            setPublishedDate('');
        } catch (e) {
            console.log(e);
        }
    }

 
    return (
        <div className="inputField">
            <div className="flex">

                <div className="col">
                    <label htmlFor="title">Title</label>
                    <textarea type="text" id="title" onChange={e => setTitle(e.target.value)} ></textarea>
                </div>

                <div className="col">
                    <label htmlFor="date">Date</label>
                    <input type="date" id="date" name="entry date" onChange={e => setPublishedDate(e.target.value)} />
                </div>

            </div>

            <label htmlFor="entry">Entry</label>
            <textarea type="text" id="entry" onChange={e => setText(e.target.value)} ></textarea>

            <Button addEntry={addEntry} />
        </div>
    )
}

