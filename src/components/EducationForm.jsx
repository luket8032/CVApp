import { useState } from 'react';
import '../styles/form.css'

function EducationForm ({onSave, id}) {
    const [educationData, setEducationData] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        location: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setEducationData(prevData => ({...prevData, [name]: value}));
    }
    
    function sendData(event) {
        event.preventDefault();
        const educationDataWithId = {...educationData, id: id}
        onSave(educationDataWithId);
    }

    return (
        <form>
            <div>
                <label htmlFor="school">School</label>
                <input type="text" id='school' name='school' value={educationData.school} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="degree">Degree</label>
                <input type="text" id='degree' name='degree' value={educationData.degree} onChange={handleChange}/>
            </div>
            <div className="date-inputs">
                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id='startDate' name='startDate' value={educationData.startDate} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id='endDate' name='endDate' value={educationData.endDate} onChange={handleChange}/>
                </div>
            </div>
            <div>
                <label htmlFor="location">Location</label>
                <input type="text" id='location' name='location' value={educationData.location} onChange={handleChange}/>
            </div>
            <div className="buttons-wrapper">
                <button className='save-btn' onClick={sendData}>Save</button>
                <button className='delete-btn'>Delete</button>
            </div>
        </form>
    )
}

export default EducationForm;