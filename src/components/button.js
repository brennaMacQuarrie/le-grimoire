export default function Button(props) {
    return (
        <div className="submitDiv">
            <button className="submitButton" onClick={props.addEntry} type="button" >send entry</button>
        </div>
    )
}