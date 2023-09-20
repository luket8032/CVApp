function ExperienceItem({companyName, positionTitle, startDate, endDate, location, description }) {
    return (
        <div className="experience-item-wrapper">
            <p>{companyName}</p>
            <p>{positionTitle}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{location}</p>
            <p>{description}</p>
        </div>
    )
}

export default ExperienceItem;