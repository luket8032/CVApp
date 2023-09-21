import '../styles/experienceItem.css'

function ExperienceItem({companyName, positionTitle, startDate, endDate, location, description }) {
    return (
        <div className="experience-item-wrapper">
            <div className="item-top">
                <p>{companyName}</p>
                <p>{location}</p>
            </div>
            <div className="item-bottom">
                <p className='title'>{positionTitle}</p>
                <p>{startDate} | {endDate}</p>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ExperienceItem;