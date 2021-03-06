// TODO how to pass alt props???
export default function Entry({ title, publishedDate, category, text, deleteEntry }) {
    
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
                    <h4>Entry Date: {parseDate(publishedDate)}</h4>
                    <h4>Subject: {category}</h4>
                </div>
                <p>{text}</p>
                {/* TODO delete functionality */}
                <button 
                    className="delete" 
                    onClick={deleteEntry}
                >delete</button>
            </div>
        </div>
    )
}