import { useState } from 'react';
import '../styles/form.css'

function ExperienceForm ({onSave, id}) {
    const [experienceData, setExperienceData] = useState({
        companyName: '',
        positionTitle: '',
        startDate: '',
        endDate: '',
        location: '',
        description: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setExperienceData(prevData => ({...prevData, [name]: value}));
    }
    
    function sendData(event) {
        event.preventDefault();
        const experienceDataWithId = {...experienceData, id: id}
        onSave(experienceDataWithId);
    }

    return (
        <form>
                <div>
                    <label htmlFor="companyName">Company name</label>
                    <input type="text" id='companyName' name='companyName' value={experienceData.companyName} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="positionTitle">Postition title</label>
                    <input type="text" id='positionTitle' name='positionTitle' value={experienceData.positionTitle} onChange={handleChange}/>
                </div>
                <div className="date-inputs">
                    <div>
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id='startDate' name='startDate' value={experienceData.startDate} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id='endDate' name='endDate' value={experienceData.endDate} onChange={handleChange}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input type="text" id='location' name='location' value={experienceData.location} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea id='description' name='description' value={experienceData.description} onChange={handleChange}/>
                </div>
                <div className="buttons-wrapper">
                    <button className='save-btn' onClick={sendData}>Save</button>
                    <button className='delete-btn'>Delete</button>
                </div>
            </form>
    )
}

export default ExperienceForm;