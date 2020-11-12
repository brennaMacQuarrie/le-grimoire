
export default function Tarot() {
    return (
        <div className="entry">
            <div className="entryBubble">
                <h2>Tarot</h2>
                <div className="inputField">

                    <label htmlFor="astroDate">Date</label>
                    {/* TODO change date requirements */}
                    <input type="date" id="start" name="entry date"
                        value="2020-11-17"
                        min="1900-01-01" max="2021-01-01" />
                    <label htmlFor="astroEntry">Entry</label>
                    <textarea type="text" id="entry"></textarea>
                    {/* <form action="/action_page.php"> */}
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" />
                    <input type="submit" />
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}