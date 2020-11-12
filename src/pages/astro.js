
export default function Astro() {
    return (
        <div className="entry">
            <div className="entryBubble">
                <h2>Astrological Observations</h2>
                <div className="inputField">

                    <label htmlFor="astroDate">Date</label>
                    {/* TODO change date requirements */}
                    <input type="date" id="start" name="entry date"
                        value="2020-11-17"
                        min="1900-01-01" max="2021-01-01" />
                    <label htmlFor="astroEntry">Entry</label>
                    <textarea type="text" id="entry"></textarea>

                </div>
            </div>
        </div>
    )
}