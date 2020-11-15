import Button from "../components/button";

export default function Symbols(props) {
    return (
        <div className="entry">
            <div className="entryBubble">
                <h2>Leger of Symbols</h2>
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
                            <label htmlFor="astroEntry">Symbol</label>
                            <textarea type="text" id="title"></textarea>
                        </div>

                    </div>
                    
                    <label htmlFor="astroEntry">Entry</label>
                    <textarea type="text" id="entry"></textarea>
                    
                </div>

                <Button addEntry={props.addEntry} />
            </div>
        </div>
    )
}