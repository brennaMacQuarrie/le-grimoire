import React, { useState } from "react"
import Button from "./button";

export default function Field (props) {
    const [title, setTitle] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [category, setCategory] = useState("astrology");
    const [textEntry, setTextEntry] = useState("");
    const [bookmarked, isBookmarked] = useState(false);
   
    const addEntry = async e => {
        e.preventDefault();
        console.log('button clickeddddd');
        try {
            const response = await fetch('http://localhost:3000/users', {
                // headers: { "Content-Type": "application/json" },
                method: 'POST',
                body: JSON.stringify({ title, publishedDate, category, textEntry, bookmarked })
            });
            if (response.ok) {
                // props.onAdd();
                console.log('response ok', response.body);
            } else {
                console.log("error saving entry");
            }
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
                    {/* TODO change date requirements */}
                    <input type="date" id="date" name="entry date" onChange={e => setPublishedDate(e.target.value)} />
                </div>

            </div>

            <label htmlFor="entry">Entry</label>
            <textarea type="text" id="entry"></textarea>
            <Button addEntry={addEntry} onChange={e => setTextEntry(e.target.value)}/>
        </div>
    )
}

