import '../styles/educationItem.css';

function EducationItem({school, degree, startDate, endDate, location}) {
    return (
        <div className="education-item-wrapper">
            <div className="item-top">
                <p>{school}</p>
                <p>{location}</p>
            </div>
            <div className="item-bottom">
                <p>{degree}</p>
                <div className="dates">
                    <p>{startDate} | {endDate}</p>
                </div>
            </div>
        </div>
    )
}

export default EducationItem;