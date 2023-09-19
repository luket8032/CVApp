import '../styles/preview.css'

function Preview({generalVals}) {
    return (
        <div className="preview-wrapper">
            <div className="general-section">
                <h1 id='previewName'>{generalVals.name}</h1>
                <div className="general-info">
                    <p>{generalVals.email}</p>
                    <p>{generalVals.phoneNumber}</p>
                    <p>{generalVals.address}</p>
                </div>
            </div>
        </div>
    )
}

export default Preview;