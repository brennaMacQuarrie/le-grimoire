import Background from '../assets/background_flowers2.jpg';
import Field from './field';
// import Button from '../components/button';

export default function Page(props) {
    return (
        <div className="entry" style={{ backgroundImage: "linear-gradient(black, rgba(0,0,0,0.3)), url(" + Background + ")" }}>
            <div className="entryBubble">
                <h2>{props.title}</h2>
                <Field />
            </div>
        </div>
    )
}