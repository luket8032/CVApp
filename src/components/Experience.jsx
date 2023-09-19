import { useState } from 'react';
import ExperienceForm from './ExperienceForm';
import '../styles/dropdown.css'

function Education () {
    const [isOpen, setOpen] = useState(false);
    const [keyCount, setKeyCount] = useState(0)
    const [experienceList, setExperienceList] = useState([])

    function addExperience() {
        setKeyCount(prevKey => prevKey + 1);
        setExperienceList([...experienceList, {id: keyCount}]);
    }

    return (
        <div className='dropdown-section-wrapper'>
            <div className='dropdown-title'>
                <img src="/briefcase.svg" alt="briefcase icon" />
                <h2>Experience</h2>
                <img className='dropdown-icon' src="/dropdown.svg" alt="dropdown icon" onClick={()=> setOpen(!isOpen)} />
            </div>
            <div className={`dropdown-list ${isOpen ? 'active' : 'inactive'}`}>
                {experienceList.map(item => <ExperienceForm key={item.id}/>)}
            </div>
            <button className={`experience-btn ${isOpen ? 'active' : 'inactive'}`} onClick={addExperience}>Add experience</button>
        </div>
    )
}

export default Education;