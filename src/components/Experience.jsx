import { useState } from 'react';
import ExperienceForm from './ExperienceForm';
import '../styles/dropdown.css'

function Education ({onAdd, onUpdate, onDelete}) {
    const [isOpen, setOpen] = useState(false);
    const [keyCount, setKeyCount] = useState(0)
    const [experienceList, setExperienceList] = useState([])

    function addExperienceForm() {
        setKeyCount(prevKey => prevKey + 1);
        const newItem = {
            id: keyCount,
            values: {
                companyName: '',
                positionTitle: '',
                startDate: '',
                endDate: '',
                location: '',
                description: ''
            }
        }
        setExperienceList([...experienceList, newItem]);
        onAdd([...experienceList, newItem]);
    }

    function updateExperienceItem(values) {
        onUpdate(values);
    }

    function deleteExperience(id) {
        const updatedExperienceList = experienceList.filter(item => item.id !== id);
        setExperienceList(updatedExperienceList);
        onDelete(id);
    }

    return (
        <div className='dropdown-section-wrapper'>
            <div className='dropdown-title'>
                <img src="/briefcase.svg" alt="briefcase icon" />
                <h2>Experience</h2>
                <img className='dropdown-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
            </div>
            <div className={`dropdown-list ${isOpen ? 'active' : 'inactive'}`}>
                {experienceList.map(item => <ExperienceForm key={item.id} id={item.id} onSave={updateExperienceItem} onDelete={deleteExperience}/>)}
            </div>
            <button className={`experience-btn ${isOpen ? 'active' : 'inactive'}`} onClick={addExperienceForm}>Add experience</button>
        </div>
    )
}

export default Education;