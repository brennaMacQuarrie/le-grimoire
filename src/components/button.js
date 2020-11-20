export default function Button(props) {
    return (
        <div>
            {/* TODO passing props two levels, can be avoided? */}
            <button className="submitButton" onClick={props.addEntry}>send entry</button>
        </div>
    )
}