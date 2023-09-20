import EducationItem from './EducationItem.jsx';
import '../styles/preview.css'

function Preview({generalVals, educationItems}) {
    return (
        <div className="preview-wrapper">
            <div className="general-section">
                <h1 id='previewName'>{generalVals.name}</h1>
                <div className="general-info">
                    <p><img src="/email.svg" alt="email icon" />{generalVals.email}</p>
                    <p><img src="/phone.svg" alt="phone icon" />{generalVals.phoneNumber}</p>
                    <p><img src="/address.svg" alt="address icon" />{generalVals.address}</p>
                </div>
                <hr />
            </div>

            <div className="education-section">
                <h2>Education</h2>
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
            </div>
        </div>
    )
}

export default Preview;