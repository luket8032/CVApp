

function EducationItem({school, degree, startDate, endDate, location}) {
    return (
        <div className="education-item-wrapper">
            <p>{school}</p>
            <p>{degree}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{location}</p>
        </div>
    )
}

export default EducationItem;