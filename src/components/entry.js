
export default function Entry({ title, publishedDate, category, text }) {

    const parseDate = (publishedDate) => {
        let date = new Date(publishedDate);
        let displayDate = `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`;
        return displayDate;
    }

    return (
        <div>
            <div className="newEntry">
                <h3>{title}</h3>
                <div className="catDate">
                    <h4>{parseDate(publishedDate)}</h4>
                    <h4>{category}</h4>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}