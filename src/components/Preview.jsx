import EducationItem from './EducationItem.jsx';
import '../styles/preview.css'

function Preview({generalVals, educationItems}) {
    return (
        <div className="preview-wrapper">
            <div className="general-section">
                <h1 id='previewName'>{generalVals.name}</h1>
                <div className="general-info">
                    <p>{generalVals.email}</p>
                    <p>{generalVals.phoneNumber}</p>
                    <p>{generalVals.address}</p>
                </div>
                <hr />
            </div>

            <div className="education-section">
                {educationItems.map(item => <EducationItem key={item.id}/>)}
            </div>

            <div className="experience-section">

            </div>
        </div>
    )
}

export default Preview;