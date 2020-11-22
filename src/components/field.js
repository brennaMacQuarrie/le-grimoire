import React, { useState } from "react"
import Button from "./button";

export default function Field (props) {
    const [title, setTitle] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [category, setCategory] = useState("");
    const [textEntry, setTextEntry] = useState("");
    const [bookmarked, isBookmarked] = useState(false);
    // const body = {
    //     title: "this title",
    //     publishedDate: "11.20.2020",
    //     category: "dogs",
    //     text: "lots of them",
    //     bookmarked: true
    // }
    const addEntry = async e => {
        e.preventDefault();
        console.log('clickeddddd');
        try {
            const response = await fetch('http://localhost:3000/users', {
                headers: { "Content-Type": "application/json" },
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
                    <label htmlFor="astroDate">Date</label>
                    {/* TODO change date requirements */}
                    <input type="date" id="start" name="entry date"
                        value="2020-11-17"
                        min="1900-01-01" max="2021-01-01" />
                </div>

                <div className="col">
                    <label htmlFor="astroEntry">Title</label>
                    <textarea type="text" id="title"></textarea>
                </div>

            </div>

            <label htmlFor="astroEntry">Entry</label>
            <textarea type="text" id="entry"></textarea>
            <Button addEntry={addEntry} />
        </div>
    )
}

