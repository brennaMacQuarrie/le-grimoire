
export default function Entry({ title, publishedDate, text }) {

    const parseDate = (publishedDate) => {
        let date = new Date(publishedDate);
        let displayDate = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`;
        return displayDate;
    }

    return (
        <div>
            <div className="newEntry">
                <h3>{title}</h3>
                <h4>{parseDate(publishedDate)}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}