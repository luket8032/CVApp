import EducationItem from './EducationItem.jsx';
import ExperienceItem from './ExperienceItem.jsx';
import '../styles/preview.css'

function Preview({generalVals, educationItems, experienceItems}) {
    return (
        <div className="preview-wrapper">
            <div className="general-section">
                <h1 id='previewName'>{generalVals.name}</h1>
                <div className="general-info">
                    <p><img src="/email.svg" alt="email icon" />{generalVals.email}</p>
                    <p><img src="/phone.svg" alt="phone icon" />{generalVals.phoneNumber}</p>
                    <p><img src="/address.svg" alt="address icon" />{generalVals.address}</p>
                </div>
            </div>

            <div className="summary-section">
                <h2>Summary</h2>
                <hr />
                <p>{generalVals.summary}</p>
            </div>

            <div className="education-section">
                <h2>Education</h2>
                <hr />
                {educationItems.map(item => <EducationItem 
                key={item.id}
                school={item.values.school}
                degree={item.values.degree}
                startDate={item.values.startDate}
                endDate={item.values.endDate}
                location={item.values.location}
                />)}
            </div>

            <div className="experience-section">
                <h2>Experience</h2>
                <hr />
                {experienceItems.map(item => <ExperienceItem
                key={item.id}
                companyName={item.values.companyName}
                positionTitle={item.values.positionTitle}
                startDate={item.values.startDate}
                endDate={item.values.endDate}
                location={item.values.location}
                description={item.values.description}
                />)}
            </div>
        </div>
    )
}

export default Preview;